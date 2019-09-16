import React, { Component } from 'react'
import moment from 'moment'
import { Button, Modal, Form, Input, Icon } from 'antd';
export const CollectionCreateFormForget = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
        render() {
            const { visible, onCancel, onCreate,form } = this.props;
            const { getFieldDecorator } = form;
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
                    <Form className="foget-form">
                        <Form.Item >
							{getFieldDecorator('Username', {
							rules: [{ required: true, message: 'Please input the username of collection!' }],
						    })(
								<Input
									prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
									placeholder="Username"
									size='large'
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
								/>
							)}
                            
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" block>
                                Get Password From Email
							</Button>

                        </Form.Item>
                    </Form>
                </Modal>
            );
        }
    },
);