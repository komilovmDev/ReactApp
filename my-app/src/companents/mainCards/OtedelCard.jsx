/* eslint-disable react/prop-types */
import Profil from '../../pages/profil/Profil'
import './mainCard.css'


export default function OtdelCard({ item , className , setClassName }) {
    return (
        <>
            <div onClick={() => setClassName('profilInfos')} className="mainCard" key={item.id}>
                <div className="mainCardImg">
                    <img src={item.image} alt="" />
                </div>
                <h4>{item.title}</h4>
            </div>
        </>
    )
}