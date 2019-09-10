import React,{Component} from 'react'
import {Modal,Input,Button} from 'antd'
import {connect} from 'react-redux'

class ModalComponent extends Component{
	constructor(props){
		super(props);
		this.state={
			visible:false,
			type:0
		}
	}
	componentWillReceiveProps(nextprops){
		if(nextprops.visibleProps)
		{
			this.setState({
				visible:true,
				type:nextprops.type
			})
		}
		else{
			this.setState({
				visible:false,
				type:0
			})
		}
	}
	onHandleOk=(e)=>{
		this.setState({
			visible:false,type:0
		})
	}
	onHandleCancle=(e)=>{
		this.setState({
			visible:false,type:0
		})
	}
	render(){
		let {visible,type} = this.state;
		return(
			<Modal	
				visible={visible}
				onOk={this.onHandleOk}
				onCancle={this.onHandleCancle}
			>
			{type===1?(
				<Input size='large' placeholder='id'/>
				<Input size='large' placeholder='pw'/>
				<Button type='primary'>Going</Button>
			):(
				<Input size='large' placeholder='id'/>
				<Input size='large' placeholder='pw'/>
				<Button type='primary'>Goout</Button>
			)}
			</Modal>
		);
	}
}
const mapStateToProps=(state)=>{
	return{
		visibleProps:state.visible,
		type:state.type
	}
}
export default connect(mapStateToProps,null)(ModalComponent);