import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdDeleteOutline, MdOutlineAdminPanelSettings } from 'react-icons/md'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ProfilModal({ item }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='modalll' key={item.id}>
            <Button className='openModal' onClick={handleOpen}></Button>
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
                            <div className="TextenButtonModal">
                                <div className="mainProfilINfo__texts">
                                    <h2>{item.username}</h2>
                                    <h4>{item.kasbi}</h4>
                                </div>
                                <div className="mainProfilINfo__btns">
                                    <button className='red'>Delete User<MdDeleteOutline size={'18px'} /></button>
                                    <button className='orange'>Admin User<MdOutlineAdminPanelSettings size={'18px'} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}