import axios from 'axios'
import { Link } from 'react-router-dom'
import { BiPencil } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import BasicModal from '../../companents/BasicModal/Modal'
import { BsCheckLg } from 'react-icons/bs'
import { BiCheckboxMinus } from 'react-icons/bi'
import {GoKebabHorizontal} from 'react-icons/go'
import Button from '@mui/material/Button';
import { useRef } from 'react'

export default function UserCards({ item }) {

    const token = localStorage.getItem('accessToken')

    const deleteBoard = async () => {
        const response = await axios.delete(`https://manager.zafarr.uz/routers/boards/${item.id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                },
            }
        )
        window.location.reload()
    }


    const renameBoard = async (Id, Title) => {
        const response = await axios.put(`https://manager.zafarr.uz/routers/boards/${item.id}/`,
            {
                title: Title,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                },
            }
        )
        window.location.reload()
    }

    // 

    const redCardAdd = async (id) => {
        const response = await axios.post(`https://manager.zafarr.uz/to/${id}/tugatilmagan/`, null,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                },
            }
        )
        window.location.reload()
    }

    const GreenCardAdd = async (id) => {
        const response = await axios.post(`https://manager.zafarr.uz/to/${id}/bajarilganga/`, null,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                },
            }
        )
        window.location.reload()
    }



    const boardValue = useRef()

    return (
        <div className="UserCardBox" key={item.id}>
            <div className="UserCard">
                <div className="boximgtype">
                    <div className="dropdown">
                        <button className="dropbtn"><GoKebabHorizontal /></button>
                        <div className="dropdown-content" >
                            <Button onClick={() => redCardAdd(item.id)} style={{ minWidth: 'auto' }} variant="text"><BiCheckboxMinus color='red' size={'30px'} /></Button>

                            <Button onClick={() => GreenCardAdd(item.id)} style={{ minWidth: 'auto' }} variant="text"><BsCheckLg color='green' size={'30px'} /></Button>
                        </div>
                    </div>
                </div>
                <Link to={`/UserTaskInfo/${item.id}`}>
                    <div className="Teaxt">
                        <p>{item.title}</p>
                    </div>
                </Link>
                <div className="UserImg">
                    {/* {
                        item.users.map(data => (
                            <img src={data.image} alt="" />
                        ))
                    } */}
                </div>
            </div>
        </div>
    )
}