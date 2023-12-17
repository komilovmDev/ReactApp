import { useState } from 'react'
import '../../pages/profil/profil.css'
import './otdel.css'
import { FaPlus } from "react-icons/fa6";

export default function OtdelUser({ className, setClassName, item }) {

    return (
        <div className={className}>
            <div className="profilInfosBox rel">
                <h2 className='OtedelName'>IT bo'limi</h2>
                <div className="userS">
                    {
                        item.users.map(data => (
                            <div className="useR">
                                <div className="Userimg">
                                    <img src={data.profile_image} alt="" />
                                </div>
                                <div className="UserP">
                                    <h3>{data.username}</h3>
                                    <p>{data.kasbi}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="profilInfosBox__userInfos">
                    <div className="btns">
                        <button className='plusOtdel'><FaPlus /></button>
                        <button className='closeBtn' onClick={() => setClassName('close')}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}