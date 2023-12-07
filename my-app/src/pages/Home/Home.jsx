/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";
import MainCard from "../../companents/mainCards/MainCard";
import MainNav from "../../companents/mainNav/MainNav";
import Navbar from "../../companents/navbar/Navbar";
import TaskCard from "../../companents/taskCard/TaskCard";
import UserNav from "../../companents/userNav/UserNav";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AppContext from "../../context/AppContext";
import Profil from "../profil/Profil";


export default function Home() {

    const { boardChange, setBoardChange } = useContext(AppContext)

    const getUser = async () => {
        try {
            const response = await axios.get(`https://manager.zafarr.uz/users/`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                },
            });
            setUserData(response.data)
        } catch (error) {
            console.error('Xatolik yuz berdi:', error);
        }
    }

    useEffect(() => {
        getUser()
    }, [])


    const [userData, setUserData] = useState([])

    const [taskData, setTaskData] = useState([]);
    const token = localStorage.getItem('accessToken');
    const userID = localStorage.getItem('userID')

    const getBoard = async () => {
        try {
            const response = await axios.get(`https://manager.zafarr.uz/routers/all/boards/`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                },
            });
            setTaskData(response.data);
        } catch (error) {
            console.error('Xatolik yuz berdi:', error);
        }
    }

    const getRedBoard = async () => {
        try {
            const response = await axios.get(`https://manager.zafarr.uz/routers/all/tugatilmagan/`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                },
            });
            setTaskData(response.data);
        } catch (error) {
            console.error('Xatolik yuz berdi:', error);
        }
    }

    const getGreenBoard = async () => {
        try {
            const response = await axios.get(`https://manager.zafarr.uz/routers/all/bajarilgan/`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                },
            });
            setTaskData(response.data);
        } catch (error) {
            console.error('Xatolik yuz berdi:', error);
        }
    }

    const getChekBoard = async () => {
        try {
            const response = await axios.get(`https://manager.zafarr.uz/routers/all/chek/`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                },
            });
            setTaskData(response.data)
        } catch (error) {
            console.error('Xatolik yuz berdi:', error)
        }
    }

    useEffect(() => {
        if (boardChange === 'active') {
            getBoard();
        }
        if (boardChange === 'green') {
            getGreenBoard()
        }
        if (boardChange === 'red') {
            getRedBoard();
        }
        if (boardChange === 'check') {
            getChekBoard()
        }
    }, [boardChange]);

    const [className, setClassName] = useState("close")


    return (
        <>
            <Navbar />
            <MainNav taskData={taskData} setTaskData={setTaskData} />
            <div className="MainttaskCard">
                {
                    taskData.map(item => (
                        <Link>
                            <TaskCard item={item} />
                        </Link>
                    ))
                }
            </div>
            <UserNav text={'All User'}/>
            <div className="mainCards">
                <Profil className={className} setClassName={setClassName}/>
                {
                    userData.map(item => (
                        <MainCard className={className} setClassName={setClassName} item={item} />
                    ))
                }
            </div>
            <UserNav text={'All Otdel'}/>
            <div className="mainCards">
                <Profil className={className} setClassName={setClassName}/>
                {
                    userData.map(item => (
                        <MainCard className={className} setClassName={setClassName} item={item} />
                    ))
                }
            </div>
        </>
    )
}