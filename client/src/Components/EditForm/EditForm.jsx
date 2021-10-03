import React from 'react'
import Form from '../Form/Form';
import {  Grid } from '@material-ui/core';
import useStyles from './style'

export default function EditForm({currentId , setCurrentId}) {
    const classes = useStyles()
    return (
        
        <Grid className={classes.content} item xs={12} sm={12}>

            <Form currentId={currentId}  setCurrentId={setCurrentId} />

        </Grid>
    )
}
