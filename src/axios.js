import axios from 'axios'


const instance =axios.create(
    {
        baseURL:'https://tinder-backend-rohan.herokuapp.com/'
    }
)
export default instance