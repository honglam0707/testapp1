import React,{Component} from 'react';
import {Button} from 'antd';
import {connect} from 'react-redux';
import {actOpenModal} from '../store/action'
class HeaderComponent extends Component{
	onOpenModal=(visible,set)=>{
		this.props.onDispatch(visible,set);
	}
	render(){
		return (
			<div className="header">
			  <div className='header--content'>
				<div className='header--left'>
					<h1>TVPS--01</h1>
				</div>
				<div className='header--right'>
					<Button type='primary' ghost onClick={()=>this.onOpenModal(true,true)}>Going</Button>
					<Button type='danger' ghost onClick={()=>this.onOpenModal(true,false)}>Goout</Button>
				</div>
				<div className='clear'></div>
			  </div>
			</div>
		  );
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		onDispatch:(visible,set)=>{
			dispatch(actOpenModal(visible,set))
		}
	
	}
}
export default connect(null,mapDispatchToProps)(HeaderComponent);