import *as Types from './actionType'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import setAuthToken from '../until/setAuthToken'
export const actOpenModal=(visible,type)=>{
	return{
		type:Types.OPEN_MODAL,
		visible,
		type
	}
}

export const actGoing=(us)=>{
	return(dispatch){
		axios
			.post('http://localhost:1234/user/login',us)
			.then(res=>{
				const {token} = res.data;
				
				const Decode = jwtDecode(token)
				setAuthToken(token)
				dispatch(setCurrentUs(Decode))
			})
			.catch(err=>{
				
			})
	}
}

export const setCurrentUs=(decode)=>{
	return{
		type:Types.SET_CURRENT_US,
		decode
	}
}