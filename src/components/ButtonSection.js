import React from 'react'
import {useDispatch} from 'react-redux';
import { Button, Container} from '@material-ui/core';

import fetchCatURL from '../api/fetchCatURL';
import fetchDogURL from '../api/fetchDogURL';

export default function ButtonSection() {
    const dispatch = useDispatch();
    return (
        <Container maxWidth="sm" className="sidebar">
            <Button 
            className="center"  
            variant="contained" 
            color="primary" 
            onClick={() => dispatch(fetchCatURL())}>
                Gimme a Cat
            </Button>
            <Button 
            className="center"  
            variant="contained" 
            color="danger" 
            onClick={() => dispatch(fetchDogURL())}>
                Gimme a Dog
            </Button>
        </Container>
    )
}
