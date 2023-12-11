import { useState } from 'react'
import '../../pages/profil/profil.css'
import './otdel.css'
import { FaPlus } from "react-icons/fa6";

export default function OtdelUser({ className, setClassName, item }) {

    return (
        <div className={className}>
            <div className="profilInfosBox rel">
                <h2 className='OtedelName'>IT BO'LIMI</h2>
                <div className="userS">
                    {
                        item.users.map(data => (
                            <div className="useR">
                                <img src={data.profile_image} alt="" />
                                <h3>{data.username}</h3>
                                <p>{data.kasbi}</p>
                            </div>
                        ))
                    }
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