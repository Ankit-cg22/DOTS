import React from 'react'
import Form from '../Form/Form';
import {  Grid } from '@material-ui/core';


export default function EditForm({currentId , setCurrentId}) {
    return (
        
        <Grid item xs={12} sm={4}>

        <Form currentId={currentId}  setCurrentId={setCurrentId} />

        </Grid>
    )
}
