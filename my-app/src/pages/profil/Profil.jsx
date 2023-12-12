import { useState } from 'react'
import './profil.css'

export default function Profil({ className, setClassName }) {

    return (
        <div className={className}>
            <div className="profilInfosBox">
                <img src="https://manager.zafarr.uz/media/profile/2023/11/30/IMG_1260.JPG" alt="" />
                <div className="profilInfosBox__userInfos">
                    <div className='ProfilTextModal'>
                        <h3 className="username">Muhammad Yusupov</h3>
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