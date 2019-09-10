import {combineReducers} from 'redux';
import openModal from './openModal'
const Myreducer = combineReducers({
	visible:openModal
})
export default Myreducer