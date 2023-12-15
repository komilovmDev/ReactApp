import { useEffect, useState } from 'react'
import './profil.css'
import axios from 'axios'

export default function Profil({ item, className, setClassName }) {

    const [data , setData] = useState([])
    const getUserInfo = async () => {
        const response = await axios.get(`https://manager.zafarr.uz/routers/userprofile/${item.id}/`)
        setData(response.data)
        console.log(response.data);
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    return (
        <div className={className}>
            <div className="profilInfosBox">
                <img src="https://manager.zafarr.uz/media/profile/2023/11/30/IMG_1260.JPG" alt="" />
                <div className="profilInfosBox__userInfos">
                    <div className='ProfilTextModal'>
                        <h3 className="username">{item.first_name}</h3>
                        <p className="kaspInfo">Frontend Devloper in Ranch</p>
                    </div>
                    <div className="btns">
                        <button>Admin</button>
                        <button>Delete User</button>
                        <button onClick={() => setClassName('close')}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}