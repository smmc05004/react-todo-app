import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircle,
} from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = () => {
  return (
    <div className="TodoListItem">
      <div className="checkbox">
        <MdCheckBoxOutlineBlank />
        <div className="text">할 일</div>
      </div>
      <div className="remove">
        <MdRemoveCircle />
      </div>
    </div>
  );
};

export default TodoListItem;
