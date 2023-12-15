import { useEffect, useState } from 'react'
import './profil.css'
import axios from 'axios'

export default function Profil({ item, className, setClassName }) {

    const [data, setData] = useState([])
    const getUserInfo = async (item) => {
        try {
            const response = await axios.get(`https://manager.zafarr.uz/users/${item.id}/`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                },
            });
            setData(response.data);
        } catch (error) {
            console.error('Error occurred:', error);
        }
    }
    
    useEffect(() => {
        if (item.id) {
            getUserInfo(userID);
        }
    }, [item]);
    
    

    return (
        <div className={className}>
            {
                data.map(prod => (
                    <div className="profilInfosBox">
                        <img src={prod.profile_image} alt="" />
                        <div className="profilInfosBox__userInfos">
                            <div className='ProfilTextModal'>
                                <h3 className="username">{prod.first_name}</h3>
                                <p className="kaspInfo">Frontend Devloper in Ranch</p>
                            </div>
                            <div className="btns">
                                <button>Admin</button>
                                <button>Delete User</button>
                                <button onClick={() => setClassName('close')}>Close</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}