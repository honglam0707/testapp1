import React, { Component } from 'react'
import moment from 'moment'
import { Button, Modal, Form, Input, Icon, Checkbox, Radio, DatePicker, Row, Col } from 'antd';
import {connect} from 'react-redux';
const dateFormat = 'MM/DD/YYYY'

export  const CollectionCreateFormSignin = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
		constructor(props){
			super(props);
			this.state={
				fullName:'',
				email:'',
				password:'',
				birthOfDate:'',
				phone:'',
				sex:'male',
				address:'',
				userType:'HV'
			}
		}
		// componentWillReceiveProps(nextProps){
        // let {editedTask} = nextProps;
        // if(editedTask){
        //     let {fullName,email,password,birthOfDate,phone,address,userType} = editedTask;
        //     this.setState({
        //         fullName,email,password,birthOfDate,phone,address,userType
        //     })
        // }
        // if(!nextProps.rp){
        //     this.setState({
        //         fullName:'',
		// 		email:'',
		// 		password:'',
		// 		birthOfDate:'',
		// 		phone:'',
		// 		sex:'male',
		// 		address:'',
		// 		userType:'HV'
        //     });
        // }
    //}
		handleOnSubmit=(e)=>{
			e.preventDefault();
			if(this.props.rp)
			{
				this.props.onRegis(this.state);
			}
			else
			{
				this.props.onRegis(this.state);
			}
			
			this.props.onCancel();
		}
		handleOnChange=(e)=>{
			this.setState({
			
				[e.target.name]: e.target.value,
			})
		}
        render() {
            const { visible, onCancel, onCreate, onChangeLogin, form , rp} = this.props;
            const { getFieldDecorator } = form;
			const {fullName,email,password,birthOfDate,phone,userType,sex,address} = this.state;
            return (
                <Modal
                    visible={visible}
                    closable={false}
                    footer={false}
                    okText="Create"
                    onCancel={onCancel}
                    onOk={onCreate}
					width={400}
                >
                    <Form className="signin-form" onSubmit={this.handleOnSubmit}>
						<Form.Item >
							{getFieldDecorator('Username', {
							rules: [{ required: true, message: 'Please input the username of collection!' }],
						    })(
								<Input
									prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
									placeholder="Username"
									size='large'
									id='fullName'
									name='fullName'
									setFieldsValue={fullName}
									onChange={this.handleOnChange}
								/>
							)}
                        </Form.Item>
                        <Form.Item>
							{getFieldDecorator('Password', {
							rules: [{ required: true, message: 'Please input the password of collection!' }],
						    })(
								<Input
									prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
									type="password"
									placeholder="Password"
									size='large'
									id='password'
									name='password'
									setFieldsValue={password}
									onChange={this.handleOnChange}
								/>
							)}
                        </Form.Item>
                        <Form.Item>
							{getFieldDecorator('Email', {
							rules: [{ required: true, message: 'Please input the email of collection!' }],
						    })(
								<Input
									prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
									placeholder="email"
									size='large'
									id='email'
									name='email'
									setFieldsValue={email}
									onChange={this.handleOnChange}
								/>
							)}
                            
                        </Form.Item>
                        <Form.Item>
                            <Row>
                                <Col span={10}>
									<DatePicker  format={dateFormat}  />
                                </Col>
                                <Col span={2}></Col>
                                <Col span={12}>
									{getFieldDecorator('Phone', {
									rules: [{ required: true, message: 'Please input the phone of collection!' }],
									})(
										<Input
											prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
											placeholder="phone"
											size='large'
											id='phone'
											name='phone'
											setFieldsValue={phone}
											onChange={this.handleOnChange}
										/>
									)}
                                    
                                </Col>
                            </Row>


                        </Form.Item>
                        <Form.Item>
							{getFieldDecorator('Address', {
							rules: [{ required: true, message: 'Please input the phone of collection!' }],
							})(
								<Input
									prefix={<Icon type="environment" style={{ color: 'rgba(0,0,0,.25)' }} />}
									placeholder="address"
									size='large'
									id='address'
									name='address'
									setFieldsValue={address}
									onChange={this.handleOnChange}
								/>
							)}
                        </Form.Item>
                        <Form.Item>
							<Row>
                                <Col span={10}>
									<Radio.Group value={sex} name='sex' id='sex'
									onChange={this.handleOnChange}>
										<Radio value={'male'}><Icon type='man'></Icon></Radio>
										<Radio value={'female'}><Icon type='woman'></Icon></Radio>
									</Radio.Group>
                                </Col>
                                <Col span={4}></Col>
                                <Col span={10}>
									<Radio.Group value={userType} name='userType' id='userType'
									onChange={this.handleOnChange}>
										<Radio value={'GV'}>GV</Radio>
										<Radio value={'HV'}>HV</Radio>
									</Radio.Group>
                                    
                                </Col>
                            </Row>
                            
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" block>
							{rp? 'Repair' : 'Register'}
							</Button>
                            <br />
                            Or <a onClick={onChangeLogin}>login now!</a>
                        </Form.Item>
                    </Form>
                </Modal>
            );
        }
    },
);