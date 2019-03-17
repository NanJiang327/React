import React from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List, Typography } from 'antd';

const TodoListUI = (props) => {
  return (
    <div style={{margin: '10px'}}>
        <Input value={props.inputValue} placeholder="todo item" style={{width: '300px', marginRight: '10px'}} onChange={props.handleInput} />
        <Button onClick={props.handleSubmit} type="primary">Add Todo</Button>
        <List
          style={{marginTop: '10px', width: '300px'}}
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (<List.Item onClick={() => { props.handleItemDelete(index) }}><Typography.Text mark>[ITEM]</Typography.Text> {item}</List.Item>)}
        />
      </div>
  )
}

// class TodoListUI extends Component {
//   render () {
//     return (
//       <div style={{margin: '10px'}}>
//         <Input value={this.props.inputValue} placeholder="todo item" style={{width: '300px', marginRight: '10px'}} onChange={this.props.handleInput} />
//         <Button onClick={this.props.handleSubmit} type="primary">Add Todo</Button>
//         <List
//           style={{marginTop: '10px', width: '300px'}}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (<List.Item onClick={(index) => { this.props.handleItemDelete(index) }}><Typography.Text mark>[ITEM]</Typography.Text> {item}</List.Item>)}
//         />
//       </div>
//     )
//   }
// }

export default TodoListUI;