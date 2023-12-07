import { useState } from 'react'
import '../../pages/profil/profil.css'
import './otdel.css'
import { FaPlus } from "react-icons/fa6";

export default function OtdelUser({className , setClassName}) {

    return (
        <div className={className}>
            <div className="profilInfosBox rel">
                <h2 className='OtedelName'>IT BO'LIMI</h2>
                <div className="userS">
                    <div className="useR">
                        <img src="https://manager.zafarr.uz/media/profile/2023/11/30/IMG_0558.JPG" alt="" />
                        <h3>Muhammad Komilov</h3>
                        <p>Frontend Devloper</p>
                    </div>
                    <div className="useR">
                        <img src="https://manager.zafarr.uz/media/profile/2023/10/18/IMG_1774.jpeg" alt="" />
                        <h3>Akbar Satipoff</h3>
                        <p>Beckend Devloper</p>
                    </div>
                    <div className="useR">
                        <img src="https://manager.zafarr.uz/media/profile/2023/11/30/IMG_1260.JPG" alt="" />
                        <h3>Yusupov Muhammad Ali</h3>
                        <p>Frontend Devloper</p>
                    </div>
                    <button className='plusOtdel'><FaPlus /></button>
                </div>
                <div className="profilInfosBox__userInfos">
                    <div className="btns">
                        <button className='closeBtn' onClick={() => setClassName('close')}>Close</button>
                    </div>
                </div>
            </div>                           
        </div>
    )
}