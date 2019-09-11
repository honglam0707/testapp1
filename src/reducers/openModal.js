import *as Types from '../store/actionType'
let initinalize={visible:false,set:false}

const openModal = (state=initinalize,action)=>{
	switch(action.type){
		case Types.OPEN_MODAL:
			state={
				...state,
				visible:action.visible,
				set:action.set
			}
			return {...state};
		default: return {...state}
	}
}
export default openModal