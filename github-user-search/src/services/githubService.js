import axios from "axios";

export default  function fetchUserData(username) {
    const res =  axios.get(`https://api.github.com/users/${username}`);
    return res;
}
