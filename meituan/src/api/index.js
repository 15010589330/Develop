import axios from 'axios';

export let getIndexShop = ()=>{
    return axios.get('/mock/index')
}