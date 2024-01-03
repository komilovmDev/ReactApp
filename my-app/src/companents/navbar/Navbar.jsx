import './nav.scss'
import rmIcon from '../../assets/rm.svg'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';



export default function Navbar() {




    // Theme
    const [theme, setTheme] = useState(false);

    const handleClick = () => {
        // Toggle the theme value
        const newTheme = !theme;
        setTheme(newTheme);

        // Save the theme value to local storage
        localStorage.setItem("theme", JSON.stringify(newTheme));
    }

    useEffect(() => {
        // Retrieve the theme value from local storage
        const storedTheme = JSON.parse(localStorage.getItem("theme"));

        // Check if there's a stored theme value and apply it
        if (storedTheme != null) {
            setTheme(storedTheme);
        }

        // Apply the theme class to the body
        if (theme) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [theme]); // Add theme as a dependency to useEffect to prevent unnecessary executions


    // getUsername 
    const userID = localStorage.getItem('userID')
    const [userInfos, setUserInfos] = useState([])
    const getUserInfo = async () => {
        const response = await axios.get(`https://manager.zafarr.uz/routers/userprofile/${userID}/`)
        setUserInfos(response.data)
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    return (
        <div className="navbar">
            <div className="navBirga">
                <div className="navleft">
                    <Link to={'/'}><img src={rmIcon} alt="" /></Link>
                    <h3>Ranch Meneger</h3>
                </div>
                <div className="Theme">
                    <div class="toggleWrapper">
                        <input type="checkbox" class="dn" id="dn" />
                        <label onClick={handleClick} for="dn" class="toggle">
                            <span class="toggle__handler">
                            </span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="navRight">
                <Link to={'/Profil'}>
                    {
                        userInfos.map(item => (
                            <button className="userInfo" key={item.id}>
                                <img src={item.profile_image} alt="" />
                                <h5>{item.first_name == "" ? item.username : item.first_name} {item.last_name == "" ? item.username : item.last_name}</h5>
                            </button>
                        ))
                    }
                </Link>
            </div>
        </div>
    )
}