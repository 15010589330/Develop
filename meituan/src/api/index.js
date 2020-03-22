import axios from 'axios';

export let getIndexShop = ()=>{
    return axios.get('/mock/index')
}
export let order = (page,curr)=>{
  return axios.get('../../static/mock/order.json',{
    params:{
      page,curr
    }
  })
}
export let payment = ()=>{
  return axios.get('../../static/mock/payment.json')
}
export let use = ()=>{
  return axios.get('../../static/mock/use.json')
}
export let evaluation = ()=>{
  return axios.get('../../static/mock/evaluation.json')
}
export let  refund = ()=>{
  return axios.get('../../static/mock/refund.json')
}
