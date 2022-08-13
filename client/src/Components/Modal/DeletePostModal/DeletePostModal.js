import React from 'react'
import {  Button, Typography, Modal, Box } from '@material-ui/core'
import useStyles from './styles'

export default function DeletePostModal({openModal , handleDeleteClick , setOpenModal}) {
  const classes = useStyles();
  return (
    <Modal
      open={openModal}
      onClose={() => { }}
      BackdropProps={{ style: { backgroundColor: "rgba(0,0,0,0.5)", opacity: "0.5" } }}
    >
        <Box className={classes.modalBox}>
            <div className={classes.deleteModalContainer}>
                <Typography>
                    Do you want to delete the post ?
                </Typography>
                <div className={classes.deleteActionButtons}>
                    <Button className={classes.deleteNoButton} color="primary" variant="contained" onClick={() => setOpenModal(false)}> No </Button>
                    <Button className={classes.deleteYesButton} color="secondary" variant="contained" onClick={handleDeleteClick}> Yes</Button>
                </div>
            </div>
        </Box>
    </Modal>
  )
}
