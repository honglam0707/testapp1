import React,{Component} from 'react';
import {Button} from 'antd';
import {connect} from 'react-redux';
import {actOpenModal} from '../store/action'
class HeaderComponent extends Component{
	onOpenModal=(visible,type)=>{
		this.props.onDispatch(visible,type);
	}
	render(){
		return (
			<div className="header">
			  <div className='header--content'>
				<div className='header--left'>
					<h1>TVPS--01</h1>
				</div>
				<div className='header--right'>
					<Button type='primary' ghost onClick={()=>this.onOpenModal(true,1)}>Going</Button>
					<Button type='danger' ghost onClick={()=>this.onOpenModal(true,2)}>Goout</Button>
				</div>
				<div className='clear'></div>
			  </div>
			</div>
		  );
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		onDispatch:(visible,type)=>{
			dispatch(actOpenModal(visible,type))
		}
	
	}
}
export default connect(null,mapDispatchToProps)(HeaderComponent);