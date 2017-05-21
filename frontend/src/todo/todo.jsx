import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    render() {
        return (
            <div className="">
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm />
                <TodoList />
            </div>
        )
    }
}