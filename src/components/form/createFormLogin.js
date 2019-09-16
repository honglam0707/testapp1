import React, { Component } from 'react'
import moment from 'moment'
import { Button, Modal, Form, Input, Icon, Checkbox, Radio } from 'antd';
export const CollectionCreateFormLogin = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
        render() {
            const { visible, onCancel, onCreate, onChangeSign, onChangeForget,form } = this.props;
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
                    <Form className="login-form">
						<Form.Item>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                                size='large'
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                                size='large'
                            />
                        </Form.Item>
                        <Form.Item>
                            <Checkbox>Remember me</Checkbox>
                            <a className="login-form-forgot" onClick={onChangeForget}>
                                Forgot password
					  </a>
                            <br />
                            <Button type="primary" htmlType="submit" className="login-form-button" block>
                                Log in
					  </Button>
                            <br />
                            Or <a onClick={onChangeSign}>register now!</a>
                        </Form.Item>
                    </Form>
                </Modal>
            );
        }
    },
);