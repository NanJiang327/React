import React from 'react';
import PropTypes from 'prop-types'

const TodoItem = ({onToggle, onRemove, completed, text }) => {
  const checkedProp = completed ? {checked: true} : {};
  return (
    <li
      className="todo-item"
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    > 
      <span className="toggle" onClick={onToggle}>{ completed ? '完成' : '未完成' }</span>
      <label className="text">{text}</label>
      <button className="remove" onClick={onRemove}>×</button>
    </li>
  );
}


TodoItem.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default TodoItem;
