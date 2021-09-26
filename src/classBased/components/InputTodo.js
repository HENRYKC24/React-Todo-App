import React, { Component } from 'react';
import propTypes from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      error: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: '',
    });
  };

  handleSubmit = (e) => {
    const { title } = this.state;
    const { addTodoProps } = this.props;
    e.preventDefault();
    if (title.trim()) {
      addTodoProps(title);
      this.setState({
        title: '',
        error: '',
      });
    } else {
      this.setState({
        title: '',
        error: 'Please write item',
      });
    }
  };

  render() {
    const { title, error } = this.state;
    return (
      <>
        <p>{error}</p>
        <form onSubmit={this.handleSubmit} className="form-container">
          <input
            className="input-text"
            type="text"
            placeholder="Add todo..."
            value={title}
            name="title"
            onChange={this.onChange}
          />
          <button className="input-submit" type="submit">
            Submit
          </button>
        </form>
      </>
    );
  }
}

InputTodo.propTypes = {
  addTodoProps: propTypes.func.isRequired,
};

export default InputTodo;
