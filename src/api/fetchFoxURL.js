import axios from 'axios';
import {fetchFox} from '../actions';

const fetchFoxURL = () => {
    return function(dispatch){
        axios.get("https://randomfox.ca/floof/")
        .then(response => {
            dispatch(fetchFox(response.data.image))
        })
        .catch(
            error => console.log(error.message)
        )
    }
}

export default fetchFoxURL;