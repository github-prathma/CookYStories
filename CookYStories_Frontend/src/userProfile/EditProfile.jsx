//import { Modal } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import React from 'react'
import '../css/userprofile-css/EditProfile.css'

export const EditProfile = ({ handleClose, show, children }) => {
  const showHideClassName = show ? " modal d-block" : 'modal d-none';
  return (
    <div className={showHideClassName}>
      <div className="modal-container">
        {children}
        <div className="button">
        <Button
          variant="contained"
          color="secondary"
          className='modal-close'
          onClick={handleClose}
          startIcon={<DeleteIcon />}>
            Cancel
      </Button>
      </div>
      </div>
      
    </div>
  )
}
export default EditProfile;