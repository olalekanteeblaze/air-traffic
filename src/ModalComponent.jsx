import React from 'react';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade'

function ModalComponent(props){
    return(
            <Modal 
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={false}
                // onClose={handleClose}
                closeAfterTransition
                // BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={true}>
                    <div>
                        <h2 id="transition-modal-title">Transition modal</h2>
                        <p id="transition-modal-description">react-transition-group animates me.</p>
                    </div>
                </Fade>
            </Modal>
    )
}
export default ModalComponent;