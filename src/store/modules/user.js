
import { createSlice } from '@reduxjs/toolkit'
import { request, setToken as _setToken, getToken, removeToken } from '@/utils'

const userStore = createSlice({
    name: 'user',
    initialState:{
        token: getToken() || "",
        userInfo: {}
    },

    reducers: {
        setToken( state, action) {
            state.token = action.payload
            _setToken(action.payload)
        },
        setUserInfo( state, action ) {
            state.userInfo = action.payload
        },
        clearUserInfo(state) {
            state.token = ''
            state.userInfo = {}
            removeToken()
        }
    }
})

const { setToken, setUserInfo, clearUserInfo } = userStore.actions

const userReducer = userStore.reducer

const fetchLogin =(loginForm)=>{
    return async (dispatch)=>{
        const res = await request.post('/authorizations', loginForm)
        dispatch(setToken(res.data.token))
    }
}

const fetchUesrInfo =()=>{
    return async (dispatch)=>{
        const res = await request.get('/user/profile')
        dispatch(setUserInfo(res.data))
    }
}


export { setToken, fetchLogin, fetchUesrInfo, clearUserInfo }
export default userReducer