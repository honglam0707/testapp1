import React, { Component } from 'react'
import { Modal, Input, Button, Row, Col, Form, Icon, Checkbox } from 'antd'
import { connect } from 'react-redux'
import { actOpenModal } from '../store/action'
import CollectionCreateFormLogin from './form/createForm'
import CollectionCreateFormSignin from './form/createForm'
class ModalComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			type: false
		}

	}
	onCloseModal = (visible, set) => {
		this.props.onDispatch(visible, set);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.visibled) {
			this.setState({
				visible: true,
				type: nextProps.set
			})
		}


	}

	handleCancel = () => {
		this.onCloseModal(false, false);
		this.setState({
			visible: false
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
		let { visible, type } = this.state;
		return (
			<div>
				{type ?
					(<CollectionCreateFormLogin
						wrappedComponentRef={this.saveFormRef}
						visible={visible}
						onCancel={this.handleCancel}
						onCreate={this.handleCreate}
					/>)
					: (
						<CollectionCreateFormSignin
							wrappedComponentRef={this.saveFormRef}
							visible={visible}
							onCancel={this.handleCancel}
							onCreate={this.handleCreate}
						/>

		  )}
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
const mapStateToProps = (state) => {
	return {
		visibled: state.stateModal.visible,
		set: state.stateModal.set
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);