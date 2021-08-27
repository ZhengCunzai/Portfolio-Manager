import axios from "axios";
const baseUrl = '/api'

export function getTransaction(beginDate, endDate) {
    return axios({
        url: baseUrl + `/account/showTransaction/${beginDate}/${endDate}`,
        method: 'get',
    })
 }
export function getTrade(beginDate, endDate) {
    return axios({
        url: baseUrl + `/account/showTrade/${beginDate}/${endDate}`,
        method: 'get',
    })
}

export function getAccount(beginDate, endDate) {
    return axios({
        url: baseUrl + `/account/showAccount/${beginDate}/${endDate}`,
        method: 'get',
    })
}
