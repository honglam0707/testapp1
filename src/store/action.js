import *as Types from './actionType'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import setAuthToken from '../until/setAuthToken'
import history from '../history';
export const actOpenModal=(visible,set,rp)=>{
	return{
		type:Types.OPEN_MODAL,
		visible,
		set,
		rp
	}
}
export const actChangeList=(status)=>{
	return{
		type:Types.SELECT_PAGE,
		status
	}
}
export const actRegisterUser=(newUser)=>{
	return(dispatch)=>{
		axios
			.post('http://localhost:1234/user/register',newUser)
			.then(()=>{
					history.push('/')
					
			})
			.catch(err=>{
				dispatch({
					type:Types.GET_ERRORS,
					err
				})
			})
	}
}

export const setCurrentUs=(decode)=>{
	return{
		type:Types.SET_CURRENT_US,
		decode
	}
}