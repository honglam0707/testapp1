import {combineReducers} from 'redux';
import openModal from './openModal'
const Myreducer = combineReducers({
	stateModal:openModal
})
export default Myreducer