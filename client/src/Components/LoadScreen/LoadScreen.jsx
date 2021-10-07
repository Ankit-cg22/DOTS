import React from 'react'
import { Paper  , CircularProgress } from '@material-ui/core'
import useStyles from './style'

export default function LoadScreen() {

    const classes = useStyles();

    return (
        <div>
            <Paper elevation={0}   className={classes.loaderHolder}>
                <CircularProgress/>
            </Paper>
        </div>
    )
}
