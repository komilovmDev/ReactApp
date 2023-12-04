/* eslint-disable react/prop-types */
import Profil from '../../pages/profil/Profil'
import './mainCard.css'


export default function MainCard({ item , className , setClassName }) {
    return (
        <>
            <div onClick={() => setClassName('profilInfos')} className="mainCard" key={item.id}>
                <div className="mainCardImg">
                    <img src={item.profile_image} alt="" />
                </div>
                <h4>{item.username}</h4>
            </div>
        </>
    )
}