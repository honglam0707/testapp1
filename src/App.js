import React,{Component} from 'react';
import 'antd/dist/antd.css';
import './App.css';
import HeaderComponent from './components/header';
import ModalComponent from './components/modal';
import { connect } from 'react-redux';
import {actOpenModal} from './store/action';
class App extends Component{
	render(){
		return (
			<div className="App">
			  <HeaderComponent/>
			  
			  <ModalComponent domRef={this.childRef}/>
			</div>
		  );
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onDispatch: (visible, set) => {
			dispatch(actOpenModal(visible, set))
		}

	}
}
export default connect(null,mapDispatchToProps)(App);
