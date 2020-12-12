import axios from 'axios';
import {fetchDog} from '../actions';

const fetchCatURL = () => {
    return function(dispatch){
        axios.get("https://random.dog/woof.json")
        .then(response => {
            dispatch(fetchDog(response.data.url))
        })
        .catch(
            error => console.log(error.message)
        )
    }
}

export default fetchCatURL;