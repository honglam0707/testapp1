import React,{Component} from 'react'
import {Table,Tag,Divider,Button,Modal} from 'antd'
import {actOpenModal} from '../store/action'
import {connect} from 'react-redux';
import axios from 'axios';
const { confirm } = Modal;

class ListKHComponent extends Component{
	constructor(props){
		super(props);
		this.state={
			course:[]
		}
	}
	componentDidMount(){
		axios({
			method:'GET',
			url:'http://localhost:1234/kh'
		}).then(res=>{
			this.setState({
				course:res.data
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
		const {course}=this.state;
		const columns=[
		{
			title:'STT',
			dataIndex:'stt',
			key:'stt'
		},
		{
			title:'Name',
			dataIndex:'name',
			key:'name',
			render: name => (
				<span>
					{name.map(tag => {
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
			title:'timeStart',
			dataIndex:'timeStart',
			key:'timeStart'
		},
		{
			title:'timeEnd',
			dataIndex:'timeEnd',
			key:'timeEnd'
		},
		{
			title:'GV',
			dataIndex:'GV',
			key:'GV'
		},
		{
			title:'Status',
			dataIndex:'Status',
			key:'Status'
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
				<Table columns={columns} dataSource={course}  rowKey={record => record.uid}  />
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
export default connect(null,mapDispatchToProps)(ListKHComponent);