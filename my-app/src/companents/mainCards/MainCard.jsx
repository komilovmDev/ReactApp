/* eslint-disable react/prop-types */
import { useState } from 'react'
import Profil from '../../pages/profil/Profil'
import './mainCard.css'


export default function MainCard({ item, className, setClassName }) {
    const [id, setId] = useState();

    return (
        <>
            {item && (
                <div onClick={() => { setClassName('profilInfos'); setId(item); }} className="mainCard" key={item.id}>
                    <Profil className={className} setClassName={setClassName} item={id} />
                    <div className="mainCardImg">
                        <img src={item.profile_image} alt="" />
                    </div>
                    <h4>{item.username}</h4>
                </div>
            )}
        </>
    );
}
