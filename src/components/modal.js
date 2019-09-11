import React,{Component} from 'react'
import {Modal,Input,Button,Row,Col} from 'antd'
import {connect} from 'react-redux'
import {actOpenModal} from '../store/action'
class ModalComponent extends Component{
	constructor(props){
		super(props);
		this.state={
			visible:false,
			type:0
		}
	}
	onCloseModal=(visible,set)=>{
		this.props.onDispatch(visible,set);
	}
	componentWillReceiveProps(nextprops){
		
	}
	render(){
		let {visible,set} = this.props;
		return(
			<Modal	
				className='mymodal'
			    title= {set?"Going":"Goout"}
				visible={visible}
				onOk={this.onHandleOk}
				onCancle={this.onHandleCancle}
				closable={false}
				maskClosable={true}
				destroyOnClose={true}
				onClose={this.onHandleCancle}
				width={450}
				footer={[
					<Button key="back" onClick={()=>this.onCloseModal(false)}>
					  Cancle
					</Button>,
					<Button key="submit" type="primary"  onClick={()=>this.onCloseModal(false,false)}>
					  Submit
					</Button>
				]}
			>
				{set?(
					<div>
						<Input  placeholder='email'/>
						<Input  placeholder='pwd'/>
					</div>
				):(
					<div>
						<Input  placeholder='email'/>
						<Input  placeholder='pwd'/>
						<Row>
							<Col span={8}><Input  placeholder='name'/></Col>
							<Col span={4}></Col>
							<Col span={12}><Input  placeholder='last name'/></Col>
						</Row>
						<Row>
							<Col span={6}><Input  placeholder='phone'/></Col>
							<Col span={6}><Input  placeholder='sex'/></Col>
							<Col span={6}><Input placeholder='birth of date'/></Col>
						</Row>
						<Input  placeholder='address'/>
						<Input  placeholder='address'/>
					</div>
				)}
				
			</Modal>
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
const mapStateToProps=(state)=>{
	return{
		visible:state.stateModal.visible,
		set:state.stateModal.set
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(ModalComponent);