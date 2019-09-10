import *as Types from '../store/actionType'
const initinalize={visible:false,type:0}

const openModal = (state=initinalize,action)=>{
	switch(action.type){
		case Types.OPEN_MODAL:
			state.visible=action.visible;
			state.type=action.type;
			return {...state};
		default: return {...state}
	}
}
export default openModal