import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actOpenModal,actRegisterUser } from '../store/action'
import {CollectionCreateFormLogin} from './form/createFormLogin'
import {CollectionCreateFormSignin} from './form/createFormSignin'
import {CollectionCreateFormForget} from './form/createFormForget'

class ModalComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			type: false,
			visibleF:false,
			rp:false,
			
		}

	}
	onCloseModal = (visible, set,rp) => {
		this.props.onDispatch(visible, set,rp);
	}
	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.visibled) {
			this.setState({
				visible: true,
				type: nextProps.set,
				rp:nextProps.rp
			})
		}
	}
	changeModalForget = () =>{
		this.setState({
			visible:false,
			type:false,
			visibleF:true,
			rp:false
		})
	}
	changeModalSign = () =>{
		this.setState({
			visible:true,
			type:false,
			rp:false
		})
	}
	changeModalLogin = () =>{
		this.setState({
			visible:true,
			type:true,
			rp:false
		})
	}
	
	handleCancel = () => {
		this.onCloseModal(false, false,false);
		this.setState({
			visible: false,
			type:false,
			visibleF:false,
			rp:false
		})
	};

	handleCreate = () => {
		const { form } = this.formRef.props;
		form.validateFields((err, values) => {
			if (err) {
				return;
			}

			console.log('Received values of form: ', values);
			form.resetFields();
			this.setState({ visible: false });
		});
	};

	saveFormRef = formRef => {
		this.formRef = formRef;
	};
	render() {
		let { visible, type, visibleF, rp } = this.state;
		return (
			<div>
				{type ?
					(<CollectionCreateFormLogin
						wrappedComponentRef={this.saveFormRef}
						visible={visible}
						onCancel={this.handleCancel}
						onCreate={this.handleCreate}
						onChangeSign={this.changeModalSign}
						onChangeForget={this.changeModalForget}
						
					/>)
					: (
						<CollectionCreateFormSignin
							wrappedComponentRef={this.saveFormRef}
							visible={visible}
							onCancel={this.handleCancel}
							onCreate={this.handleCreate}
							onChangeLogin={this.changeModalLogin}
							onRegis={this.props.onDispatchRegis}
							rp={rp}
						/>

				)}

				<CollectionCreateFormForget
					wrappedComponentRef={this.saveFormRef}
					visible={visibleF}
					onCancel={this.handleCancel}
					onCreate={this.handleCreate}
				/>

			</div>

		);
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onDispatch: (visible, set,rp) => {
			dispatch(actOpenModal(visible, set,rp))
		},
		onDispatchRegis:(newuser)=>{
			dispatch(actRegisterUser(newuser))
		}

	}
}
const mapStateToProps = (state) => {
	return {
		visibled: state.stateModal.visible,
		set: state.stateModal.set,
		rp: state.stateModal.rp
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);