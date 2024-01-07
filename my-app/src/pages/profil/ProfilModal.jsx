/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { MdDeleteOutline, MdOutlineAdminPanelSettings } from 'react-icons/md';
import axios from 'axios';

export default function ProfilModal({ item }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const tokenw = localStorage.getItem('accessToken');

  const putAdmin = async () => {
    try {
      const response = await axios.put(
        `https://manager.zafarr.uz/user-to-admin/${item.username}/`,
        {
          username: item.username,
          oddiy_admin: true,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${tokenw}`,
          },
        }
      );

      console.log('Request successful:', response.data);
    } catch (error) {
      console.error('Error making PUT request:', error);
      console.log(item.username);
    }
  };

  const deleteAdmin = async () => {
    try {
      const response = await axios.put(
        `https://manager.zafarr.uz/user-to-admin/${item.username}/`,
        {
          username: item.username,
          oddiy_admin: false,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${tokenw}`,
          },
        }
      );

      console.log('Request successful:', response.data);
    } catch (error) {
      console.error('Error making PUT request:', error);
      console.log(item.username);
    }
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

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
                  </div>
                  <div className="ModalKasb">
                    <p>Kasbi:</p>
                    <h4>{item.kasbi}</h4>
                  </div>
                  <div className="mainProfilINfo__btns">
                    <a className='red' href="#popup1">
                      Delete User<MdDeleteOutline size={'18px'} />
                    </a>
                    <div id="popup1" className="overlay">
                      <div className="popup">
                        <a className="closes" href="#" onClick={handleClose}>
                          x
                        </a>
                        <div className="ModalContent">
                          <div className="TextModalDelete">
                            <h1>Delete ?</h1>
                          </div>
                          <div className="ButtonModalDelete">
                            <button onClick={refreshPage}>Ochirish</button>
                            <a className="NoneButton" href="#" onClick={handleClose}>
                              No
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {item.oddiy_admin ? (
                      <button className='red' onClick={() => { deleteAdmin(); refreshPage(); }}>
                        Delete Admin<MdOutlineAdminPanelSettings size={'18px'} />
                      </button>
                    ) : (
                      <button className='orange' onClick={() => { putAdmin(); refreshPage(); }}>
                        Admin User<MdOutlineAdminPanelSettings size={'18px'} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
