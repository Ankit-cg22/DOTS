import { React, useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper, Modal, Box, CircularProgress } from '@material-ui/core';
import useStyles from './styles'
import FileBase from 'react-file-base64'; // to take input of images
import CloseIcon from '@material-ui/icons/Close';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import { useDispatch } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts';
import axios from 'axios'
import { useSelector } from 'react-redux'; // to select particular items from the reduc store
import { useHistory , useLocation } from 'react-router-dom'

import { useJsApiLoader, GoogleMap, Marker, Autocomplete } from '@react-google-maps/api'
require('dotenv').config()

export default function Form({ currentId, setCurrentId }) {

    // const {isLoaded} = false
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })
    const locationRedux = useLocation()
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory()
    const [openModal, setOpenModal] = useState(false);
    const handleClose = () => {

    }
    const [location, setLocation] = useState()
    const [postData, setPostData] = useState({
        title: '', message: '', tags: [], selectedFile: '',
    });

    const currentUser = JSON.parse(localStorage.getItem('profile'))
 
    const postUpdate = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : null));
    const posts = useSelector((state) => state.posts)
    const [latitude, setLatitude] = useState(20.2961);
    const [longitude, setLongitude] = useState(85.8245);
    const [setOnce, setSetOnce] = useState(false)
    const [isSearching, setIsSearching] = useState(false)


    useEffect(() => {
        if (postUpdate) {
            setPostData(postUpdate);
            setLatitude(postUpdate.latitude)
            setLongitude(postUpdate.longitude)
            setSetOnce(true)
        }
    }, [postUpdate])

    const handleSubmit = (e) => {
        e.preventDefault();

        postData.latitude = latitude
        postData.longitude = longitude

        if(!postData.title || postData.title==="")return ;

        postData.title = postData.title.trim()
        postData.tags=(postData.tags.map((t) => t.trim()))
        
        if (currentId) {
            // if a currentId is present , it means we are updating a pre-existing post 
            // so dispatch updatePost , pass the currentId in it.
            dispatch(updatePost(currentId, postData))
        }
        else {
            dispatch(createPost({ ...postData, name: currentUser?.result?.name }))
        }
        clear()
        history.push(`${locationRedux.state.prevPath}`) // to redirect to home 

    }

    const hanldeMarkerDragEnd = (e) => {
        setLatitude(e.latLng.lat())
        setLongitude(e.latLng.lng())
    }

    const clear = () => {
        setCurrentId(null)
        setPostData({ title: '', message: '', tags: [], selectedFile: '' })
        setSetOnce(false)
    }

    const handleSearchClick = () => {
        if (!location || location === "") return;
        const queryString = `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${process.env.REACT_APP_GEOCODING_API_KEY}`
        
        setIsSearching(true)
        axios.get(queryString)
        .then(function (res) {
            
            const locInfo = res?.data.results[0].geometry;
            
            setLatitude(locInfo.lat)
            setLongitude(locInfo.lng)
            setIsSearching(false)
            setLocation("")

        })
        .catch(function (err) {
            setIsSearching(false)
            console.log(err.message)
            setLocation("")
        })

    }

    const handleAddLocationClick = () => {
        setOpenModal(false)
        setSetOnce(true)
    }

    const myLocationClickHandler = () => {
        navigator.geolocation.getCurrentPosition(function (position){
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        });
       
    }

    return (

        <div>
            <Paper className={classes.paper}>
                <form autoComplete='off' noValidate className={`${classes.root} ${classes.form} `} onSubmit={handleSubmit}>
                    <Typography variant="h6"> {currentId ? "Edit the " : "Place a"} DOT</Typography>
                    <TextField
                        name='title'
                        variant="outlined"
                        label="Title"
                        fullWidth
                        value={postData.title}
                        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                    />
                    <TextField
                        name='message'
                        variant="outlined"
                        label="Message"
                        fullWidth
                        value={postData.message}
                        onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                        multiline
                        rows={4}
                        maxRows={4}
                    />
                    <TextField
                        name='tags'
                        variant="outlined"
                        label="Tags"
                        fullWidth
                        value={postData.tags}
                        onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                    />


                    <div className={classes.fileInput}>
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                        />
                    </div>
                    <Button color="primary" variant="contained" className={classes.locationButton} onClick={() => setOpenModal(true)}>
                        {setOnce ? "Edit Location" : "Add Location"}
                    </Button>

                    <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
                    <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>


                </form>

            </Paper>

            <Modal
                open={openModal}
                onClose={handleClose}
            >
                <Box className={classes.modalBox}>
                    <div className={classes.infoArea}>
                        <div className={classes.infoAreaSub}>
                            <Typography>Choose Location</Typography>
                            <CloseIcon className={classes.closeIcon} onClick={() => setOpenModal(false)} />
                        </div>
                    </div>
                    <div className={classes.mapContainer}>
                        {!isLoaded ?
                            <div className={classes.loaderWrapper}>
                                <CircularProgress className={classes.loader} />
                            </div>
                            :
                            <GoogleMap
                                center={{
                                    lat: latitude,
                                    lng: longitude,
                                }}
                                zoom={15}
                                mapContainerStyle={{ width: "100%", height: "100%" }}
                            >
                                <Marker
                                    position={{
                                        lat: latitude,
                                        lng: longitude,
                                    }}
                                    draggable={true}
                                    onDragEnd={(e) => hanldeMarkerDragEnd(e)}
                                />
                            </GoogleMap>
                        }
                    </div>
                    <div className={classes.modalAction}>
                        <div className={classes.locSearchBox}>
                            <div className={classes.locSearchBoxSub}>
                                <TextField
                                    name='location'
                                    variant="outlined"
                                    label="Location"
                                    fullWidth
                                    disabled={isSearching}
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                                <Button  onClick={myLocationClickHandler} variant="contained" color="primary" className={classes.myLocationButton}>
                                    <MyLocationIcon/>
                                </Button>
                            </div>
                        </div>
                        <div className={classes.ActionButtons}>
                            <Button variant="contained" disabled={isSearching} color="primary" onClick={handleSearchClick}>
                                {isSearching ?
                                    <div className={classes.searchLoaderWrapper}>
                                        <CircularProgress color="secondary" size={25} />
                                    </div>
                                    :
                                    "Search"
                                }
                            </Button>
                            <Button variant="contained" color="secondary" onClick={handleAddLocationClick}>Add Location</Button>
                        </div>
                    </div>
                </Box>
            </Modal>

        </div>
    )
}

