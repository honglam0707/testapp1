import React,{Component} from 'react';
import 'antd/dist/antd.css';
import './App.css';
import HeaderComponent from './components/header';
import ModalComponent from './components/modal';
import ListComponent from './components/list';
import ListKHComponent from './components/listKh'
import { connect } from 'react-redux';

class App extends Component{
	
	render(){
		const {status}=this.props;
		return (
			<div className="App">
			  <HeaderComponent/>
			  {status?(
				<ListKHComponent/>
			  ):(
				<ListComponent/>
			  )}
			  
			  <ModalComponent/>
			</div>
		  );
	}
}

const mapStateToProps=(state)=>{
	return{
		status:state.changeList,
	}
}
export default connect(null,null)(App);
