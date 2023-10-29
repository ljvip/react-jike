import { request } from "@/utils";

function loginAPI(fromData) {
    return request({
        url: '/authorizations',
        method: 'POST',
        data: fromData
    })
}

function getProfileAPI(fromData) {
    return request({
        url: '/user/profile',
        method: 'GET',
    })
}


export {
    loginAPI,
    getProfileAPI
}