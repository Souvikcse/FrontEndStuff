import React from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends React.Component {

    render(){
        return this.props.todos.map((val) => <Todoitem key={val.id} todo={val}/>);
    }
}

Todos.propTypes = {
    todo: PropTypes.array.isRequired
}

export default Todos;
