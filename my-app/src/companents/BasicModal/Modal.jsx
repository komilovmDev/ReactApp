import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './modal.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30vw',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius:'1vw',
};

export default function BasicModal({btn , text , main , element}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='ModalYON'>
      <Button style={{minWidth: 'auto'}} onClick={handleOpen}>{btn}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {text}
          </Typography>
          <Typography>
            {element}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {main}
            <button className='canelModal' onClick={handleClose}>Canel</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}