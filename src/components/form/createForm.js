import React, { Component } from 'react'
import { Button, Modal, Form, Input, Icon, Checkbox, Radio, DatePicker, Row, Col } from 'antd';
import {connect} from 'react-redux'
import { actOpenModal } from '../../store/action'
export const CollectionCreateFormLogin = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
        render() {
            const { visible, onCancel, onCreate, form } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    visible={visible}
                    closable={false}
                    footer={false}
                    okText="Create"
                    onCancel={onCancel}
                    onOk={onCreate}
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
                            <a className="login-form-forgot" href="">
                                Forgot password
					  </a>
                            <br />
                            <Button type="primary" htmlType="submit" className="login-form-button" block>
                                Log in
					  </Button>
                            <br />
                            Or <a onClick={onCancel}>register now!</a>
                        </Form.Item>
                    </Form>
                </Modal>
            );
        }
    },
);
 const CollectionCreateFormSignin = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
        render() {
            const { visible, onCancel, onCreate, form } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    visible={visible}
                    closable={false}
                    footer={false}
                    okText="Create"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form className="signin-form">
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
                            <Input
                                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="email"
                                size='large'
                            />
                        </Form.Item>
                        <Form.Item>
                            <Row>
                                <Col span={10}>

                                    <DatePicker
                                        placeholder='Birth Of Date'
                                        size='large'
                                    />
                                </Col>
                                <Col span={2}></Col>
                                <Col span={12}>
                                    <Input
                                        prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="phone"
                                        size='large'
                                    />
                                </Col>
                            </Row>


                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="environment" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="address"
                                size='large'
                            />
                        </Form.Item>
                        <Form.Item>
                            <Radio.Group>
                                <Radio value="male"><Icon type='man'></Icon></Radio>
                                <Radio value="female"><Icon type='woman'></Icon></Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" block>
                                Register
					  </Button>
                            <br />
                            Or <a href="">login now!</a>
                        </Form.Item>
                    </Form>
                </Modal>
            );
        }
    },
);
const mapDispatchToProps = (dispatch) => {
	return {
		onDispatch: (visible, set) => {
			dispatch(actOpenModal(visible, set))
		}

	}
}

export default connect(null, mapDispatchToProps) (CollectionCreateFormSignin,CollectionCreateFormLogin);