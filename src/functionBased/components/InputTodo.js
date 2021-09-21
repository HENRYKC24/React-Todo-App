import React, { useState } from 'react';
import propTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
    error: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
      error: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title);
      setInputText({
        title: '',
        error: '',
      });
    } else {
      setInputText({
        title: '',
        error: 'Please, specify a task to add below.',
      });
    }
  };

  // useEffect(() => () => console.log('Cleaning up...'), []);

  return (
    <>
      <p className="error">{inputText.error}</p>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={inputText.title}
          name="title"
          onChange={onChange}
        />
        <button onClick={handleSubmit} type="button" className="input-submit">
          <FaPlusCircle
            style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}
          />
        </button>
      </form>
    </>
  );
};

InputTodo.propTypes = {
  addTodoProps: propTypes.func.isRequired,
};

export default InputTodo;
