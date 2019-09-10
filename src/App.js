import React,{Component} from 'react';
import 'antd/dist/antd.css';
import './App.css';
import HeaderComponent from './components/header';
import ModalComponent from './components/modal';
class App extends Component{
	render(){
		return (
			<div className="App">
			  <HeaderComponent/>
			  
			  <ModalComponent/>
			</div>
		  );
	}
}

export default App;
