import * as Types from '../store/actionType';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

let initinalState={};

const RegisterUser =(state=initinalState,action)=>{
	switch(action.type){
		case Types.GET_ERRORS:
			state=action.err;
			return state;
		default:
			return state;
	}
}
export default RegisterUser;