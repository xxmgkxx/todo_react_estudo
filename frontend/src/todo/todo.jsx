import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'

export default class Todo extends Component {
    render() {
        return (
            <div className="">
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
            </div>
        )
    }
}