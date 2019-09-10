import axios from 'axios'

const setAuthToken =(token)=>{
	if(token)
		axios.defaults.headers.comom['Authorization'] = token;
	else
		delete axios.defaults.headers.comom['Authorization']
}
export default setAuthToken;