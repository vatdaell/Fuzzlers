import React from 'react'
import {useDispatch} from 'react-redux';
import { Button, Container, Grid} from '@material-ui/core';

import fetchCatURL from '../api/fetchCatURL';
import fetchDogURL from '../api/fetchDogURL';
import fetchFoxURL from '../api/fetchFoxURL';


export default function ButtonSection() {
    const dispatch = useDispatch();
    return (
            <Grid
            container
            direction="column"
            justify="space-evenly"
            alignItems="center"
            >
                <Grid item xs>
                <Button 
                className="button"  
                variant="contained" 
                color="primary" 
                onClick={() => dispatch(fetchCatURL())}>
                    Gimme a Cat
                </Button>
                </Grid>
                <Grid item xs>
                <Button 
                className="button"  
                variant="contained" 
                color="danger" 
                onClick={() => dispatch(fetchDogURL())}>
                    Gimme a Dog
                </Button>
                </Grid>
                <Grid item xs>
                <Button 
                className="button"  
                variant="contained" 
                color="secondary" 
                onClick={() => dispatch(fetchFoxURL())}>
                    Gimme a Fox
                </Button>
                </Grid>
            </Grid>

    )
}
