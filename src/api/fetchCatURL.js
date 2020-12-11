import axios from 'axios';
import {fetchCat} from '../actions';

const fetchCatURL = () => {
    return function(dispatch){
        axios.get("https://aws.random.cat/meow")
        .then(response => {
            dispatch(fetchCat(response.data.file))
        })
        .catch(
            error => console.log(error.message)
        )
    }
}

export default fetchCatURL;;