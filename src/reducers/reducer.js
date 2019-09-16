import {combineReducers} from 'redux';
import openModal from './openModal';
import changePage from './changePage'
import RegisterUser from './get_errors'
const Myreducer = combineReducers({
	stateModal:openModal,
	changeList:changePage,
	err:RegisterUser
})
export default Myreducer