import *as Types from '../store/actionType'
let initinalize=false;

const changPage = (state=initinalize,action)=>{
	switch(action.type){
		case Types.SELECT_PAGE:
			state=action.status;
			return state;
		default: return state
	}
}
export default changPage;