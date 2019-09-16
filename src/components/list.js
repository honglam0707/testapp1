import React,{Component} from 'react'
import {Table,Tag,Divider,Button,Modal} from 'antd'
import {actOpenModal} from '../store/action'
import {connect} from 'react-redux';
import axios from 'axios'
const { confirm } = Modal;



class ListComponent extends Component{
	constructor(props){
		super(props);
		this.state={
			member:[]
		}
	}
	componentDidMount(){
		axios({
			method:'GET',
			url:'http://localhost:1234/user/dsmember'
		}).then(res=>{
			this.setState({
				member:res.data
			})
		}).catch(err=>{
			console.log(err)
		})
	}
	showConfirm() {
		confirm({
		title: 'Do you want to delete these items?',
		content: 'When clicked the OK button, this dialog will be closed after 1 second',
		onOk() {
		return new Promise((resolve, reject) => {
				setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
			}).catch(() => console.log('Oops errors!'));
		},
		onCancel() {},
	  });
	}
	onOpenModal=(visible,set,rp)=>{
		this.props.onDispatch(visible,set,rp);
	}
	
	render(){
		const {member} = this.state;
		const columns=[
		{
			title:'STT',
			dataIndex:'stt',
			key:'stt'
		},
		{
			title:'fullName',
			dataIndex:'fullName',
			key:'fullName',
		},
		{
			title:'email',
			dataIndex:'email',
			key:'email',
			render:text => <a>{text}</a>
		},
		{
			title:'BirthOfDate',
			dataIndex:'birthOfDate',
			key:'birthOfDate'
		},
		{
			title:'KH_List',
			dataIndex:'kh_list',
			key:'kh_list',
			render: kh_list => (
				<span>
					{kh_list.map(tag => {
					  let color = 'grey';
					  if(tag==='API') color = 'geekblue';
					  else if(tag==='FrontEnd') color = 'green';
					  else if(tag==='BackEnd') color='blue';
					  else color = 'pink'; 
						  
									  
					  return (
						<Tag color={color} key={tag}>
						  {tag.toUpperCase()}
						</Tag>
					  );
					})}
				</span>
			)
		},
		{
			title:'UserType',
			dataIndex:'userType',
			key:'userType'
		},
		{
			title:'Phone',
			dataIndex:'phone',
			key:'phone'
		},
		{
			title: 'Action',
			key: 'Action',
			render: (text, record) => (
			  <span>
				<Button type='primary' onClick={()=>this.onOpenModal(true,false,true)}>Repair {record.name}</Button>
				<Divider type="vertical" />
				<Button type='danger' onClick={this.showConfirm}>Delete</Button>
			  </span>
			),
		},
		];
		
		return(
			<div className='list'>
				<Table columns={columns} dataSource={member}  rowKey={record => record.uid} />
			</div>
		);
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		onDispatch:(visible,set,rp)=>{
			dispatch(actOpenModal(visible,set,rp))
		}
	
	}
}
export default connect(null,mapDispatchToProps)(ListComponent);