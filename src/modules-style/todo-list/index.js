if (process && process.env && process.env.CONSOLE_LOG) {
  console.info('log from file: src/modules/font-test/index.js'); // eslint-disable-line no-console
}

import React, {Component} from 'react';

import style from './style';

const Layout = (props) => (
  <div className="layout">
    <div className="container-addTodo" >
      {props.AddTodo}
    </div>
    <div className="container-todoList" >
      {props.TodoList}
    </div>
    <div className="container-filterControl" >
      {props.FilterControl}
    </div>
  </div>
);

const AddTodo = () => (
  <div className="addTodo" >
    AddTodo
  </div>
);

const TodoList = () => (
  <div className="todoList" >
    AddTodo
  </div>
);

const FilterControl = () => (
  <div className="todoList" >
    FilterControl
  </div>
);

const TodoListApp = () =>  (
  <div className={`todoListApp ${style['module-style']}`} >
    <Layout
      AddTodo = {AddTodo}
      TodoList = {TodoList}
      FilterControl = {FilterControl}
    />
  </div>
)

export default TodoListApp;



