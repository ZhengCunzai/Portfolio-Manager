import axios from "axios";
const baseUrl = '127.0.0.1:8090'

export function getAllInvestment() {
    return axios({
        url: baseUrl + 'inv/showAllInvestment',
        method: 'get',
    })
}

export function getInvestmentDetail(symbol) {
    return axios({
        url: baseUrl + `inv/showAllInvestment/${symbol}`,
        method: 'get',
    })
}

export function buyInvestment(data) {
    return axios({
        url: baseUrl + `inv/buyInvestment`,
        method: 'post',
        data
    })
}

export function sellInvestment(data) {
    return axios({
        url: baseUrl + `inv/buyInvestment`,
        method: 'post',
        data
    })
}


export function getPersonalInvestment() {
    return axios({
        url: baseUrl + 'inv/showPersonalInvestment',
        method: 'get',
    })
}
