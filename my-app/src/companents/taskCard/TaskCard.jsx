import axios from 'axios'
import './taskCard.css'
import { Link } from 'react-router-dom'
import { BiPencil } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import BasicModal from '../BasicModal/Modal'
import { BsCheckLg } from 'react-icons/bs'
import { BiCheckboxMinus } from 'react-icons/bi'
import Button from '@mui/material/Button';
import { useRef } from 'react' 
import { GoKebabHorizontal } from 'react-icons/go' 
import { useState, useEffect } from 'react'


export default function TaskCard({ item }) {

    const token = localStorage.getItem('accessToken')

    const deleteBoard = async () => {
        const response = await axios.delete(`https://manager.zafarr.uz/routers/boards/${item.id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                },
            }
        )
        window.location.reload()
    }
    
    const userID = localStorage.getItem('userID')
    const renameBoard = async (Id, Title) => {
        const response = await axios.put(`https://manager.zafarr.uz/routers/all/boards/${item.id}/`,
            {
                title: Title,
                user: userID
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                },
            }
        )
        window.location.reload()
    }

    const redCardAdd = async (id) => {
        const response = await axios.post(`https://manager.zafarr.uz/to/${id}/tugatilmagan/`, null,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                },
            }
        )
        window.location.reload()
    }

    const GreenCardAdd = async (id) => {
        const response = await axios.post(`https://manager.zafarr.uz/to/${id}/bajarilganga/`, null,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                },
            }
        )
        window.location.reload()
    }
    const [inputDate, setInputDate] = useState("");
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    let interval;

    useEffect(() => {
        if (isRunning) {
            interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [seconds, isRunning]);


    const formatTime = (time) => {
        const days = Math.floor(time / (24 * 60 * 60));
        const hours = Math.floor(time % (24 * 60 * 60));

        return `${days} д  `;
    };



    const boardValue = useRef()

    return (
        <div className="UserCardBox" key={item.id}>
            <div className="UserCard">
                <div className="boximgtype">
                    <div className="modal">
                        <div className="dropdown">
                            <button className="dropbtn"><GoKebabHorizontal /></button>
                            <div className="dropdown-content" >
                                <Button onClick={() => redCardAdd(item.id)} style={{ minWidth: 'auto' }} variant="text"><BiCheckboxMinus color='red' size={'30px'} /></Button>

                                <Button onClick={() => GreenCardAdd(item.id)} style={{ minWidth: 'auto' }} variant="text"><BsCheckLg color='green' size={'30px'} /></Button>

                                <BasicModal main={<button className='saveModal' onClick={deleteBoard}>Delete</button>} text={'Delete Board ?'} btn={<AiOutlineDelete color='red' size={'25px'} />} />

                                <BasicModal
                                    element={<input onKeyPress={(e) => {
                                        if (e.key === "Enter") {
                                            renameBoard(item.id, e.target.value)
                                        }
                                    }} className='modalIn' ref={boardValue} placeholder='Board Name' />}
                                    main={<button className='saveModal' onClick={(e) => {
                                        renameBoard(item.id, boardValue.current.value)
                                    }}>ok</button>} text={'Board rename'}
                                    btn={<BiPencil color='black' size={'25px'} />}
                                />
                            </div>
                        </div>
                        <div className="TaskTimer">
                            <div className="Den">
                                <p>{formatTime(seconds)}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to={`/TaskInfo/${item.id}`}>
                    <div className="Teaxt">
                        <p>{item.title}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}