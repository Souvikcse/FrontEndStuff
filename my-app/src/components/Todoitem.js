import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    getStyle(){
        return {
            textDecoration: this.props.todo.completed===true? 'line-through': 'none',
            background: this.props.todo.id%2===0? '#f7faf9':'#e6ebea'
        }
    }
    render() {
        return (
            <div style={this.getStyle()}>
                <p>{ this.props.todo.title }</p>
            </div>
        )
    }
}

Todoitem.proptTypes = {
    todo: PropTypes.object.isRequired
}

export default Todoitem
