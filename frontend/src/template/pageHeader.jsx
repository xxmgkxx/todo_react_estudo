import React from 'react'

const header = (props) => (
    <header className='page-header'>
        <h2>{props.name} <small>{props.small}</small></h2>
    </header>
)

export default header