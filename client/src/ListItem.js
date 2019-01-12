import React, { Component } from 'react';
import './ListItem.css';

export default class ListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      completed: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      completed: value
    });
  }

  render() {
    const labelClass = this.state.completed ? 'item done' : 'item';

    return (
      <li>
        <label className={labelClass}>{this.props.text}
          <input
            style={{ marginLeft: '14px' }}
            name="completed"
            type="checkbox"
            checked={this.state.completed}
            onChange={this.handleInputChange} />
        </label>
      </li>
      )
    }
}
