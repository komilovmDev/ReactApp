/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import './mainCard.css';
import { MdAdminPanelSettings } from "react-icons/md";
import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { MdDeleteOutline, MdOutlineAdminPanelSettings } from 'react-icons/md';
import axios from 'axios';


export default function MainCard({ item, className, setClassName }) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const tokenw = localStorage.getItem('accessToken');
    const putAdmin = async () => {
        try {
            const response = await axios.put(
                `https://manager.zafarr.uz/user-to-admin/${item.username}/`,
                {
                    "username": item.username,
                    "oddiy_admin": true,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Token ${tokenw}`,
                    }
                }
            );

            // Handle the response as needed, e.g., logging or updating state.
            console.log('Request successful:', response.data);
        } catch (error) {
            // Handle errors, e.g., logging or showing an error message.
            console.error('Error making PUT request:', error);
            console.log(item.username);
        }
    };
    const DeleteAdmin = async () => {
        try {
            const response = await axios.put(
                `https://manager.zafarr.uz/user-to-admin/${item.username}/`,
                {
                    "username": item.username,
                    "oddiy_admin": false,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Token ${tokenw}`,
                    }
                }
            );

            // Handle the response as needed, e.g., logging or updating state.
            console.log('Request successful:', response.data);
        } catch (error) {
            // Handle errors, e.g., logging or showing an error message.
            console.error('Error making PUT request:', error);
            console.log(item.username);
        }
    };
    function refreshPage() {
        window.location.reload(false);
    }
    return (
        <>
            <Button className='openModal buttonModalCard' onClick={handleOpen}>
                <div onClick={() => setClassName('profilInfos')} className="mainCard" key={item.id}>
                    <div className="adminStatus">
                        {
                            item.oddiy_admin == true ? <MdAdminPanelSettings color='green' /> : null
                        }

                    </div>
                    <div className="mainCardImg">
                        <img src={item.profile_image} alt="" />
                    </div>
                    <div className="MainCardNLP">
                        <div className="MainCardsText">
                            <p>Ismi:</p>
                            <h4>{item.username}</h4>
                            <p>Familiyasi:</p>
                            <h3>{item.last_name}</h3>
                        </div>
                        <div className="MainCardsProffession">
                            <p>Kasbi:</p>
                            <h3>{item.kasbi}</h3>
                        </div>
                    </div>
                </div>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className='css-1wnsr1i'>
                    <div id="modal-modal-description">
                        <div className="mainProfilINfo">
                            <div className="ProfilModalImg">
                                <img className='profilImg' src={item.profile_image} alt="" />
                            </div>
                            <div className="mainProfilINfo__btns">
                                <div className="TextenButtonModal">
                                    <div className="mainProfilINfo__texts">
                                        <div className="ModalName">
                                            <p>Ismi:</p>
                                            <h2>{item.username}</h2>
                                        </div>
                                        <div className="ModalLast">
                                            <p>Familiya:</p>
                                            <h2> {item.last_name}</h2>
                                        </div>
                                        <div className="ModalKasb">
                                            <p>Kasbi:</p>
                                            <h4>{item.kasbi}</h4>
                                        </div>
                                    </div>
                                    <div className="mainProfilINfo__btns">
                                        <a className='red' href="#popup1">Delete User<MdDeleteOutline size={'18px'} /></a>
                                        <div id="popup1" class="overlay">
                                            <div className="popup">
                                                <h2>Here i am</h2>
                                                <a className="closes" href="#">x</a>
                                                <div className="ModalContent">
                                                    <div className="TextModalDelete">
                                                        <h1>Delete ?</h1>
                                                    </div>
                                                    <div className="ButtonModalDelete">
                                                        <button>Delete</button>
                                                        <a className="NoneButton" href="#" >No</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            item.oddiy_admin = true ? <button className='red' onClick={() => { DeleteAdmin(); refreshPage(); }}>Delete Admin<MdOutlineAdminPanelSettings size={'18px'} /></button> : <button className='orange' onClick={() => { putAdmin(); refreshPage(); }}>Admin User<MdOutlineAdminPanelSettings size={'18px'} /></button>

                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}