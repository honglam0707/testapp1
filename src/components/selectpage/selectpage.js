import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Button} from 'antd'
import {actChangeList} from '../../store/action'
class SelectPage extends Component{
	onChangeList=(status)=>{
		this.props.onDispatch(status)
	}
	render(){
		return{
			<Button type='primary' ghost onClick={()=>this.onChangeList(false)}>List All</Button>
			<Button type='danger' ghost onClick={()=>this.onChangeList(true)}>List KH</Button>
		}
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		onDispatch:(status)=>{
			dispatch(actChangeList(status))
		}
	}
}
export default connect(null,null)(SelectPage);