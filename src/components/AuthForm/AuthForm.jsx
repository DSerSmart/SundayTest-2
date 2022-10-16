import { AuthContext } from 'components/AuthContext/AuthContext';
import { useReducer, useContext, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const initialState = { email: '', password: '' };
export const AuthForm = () => {
  const { setUser } = useContext(AuthContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function reducer(state, action) {
    const { type, payload } = action;
    switch (type) {
      case 'reset':
        return inputRef.current;
      case 'email':
        return { ...state, email: payload };
      case 'password':
        return { ...state, password: payload };
      default:
        return state;
    }
  }

  const handleInput = ({ target: { value, name } }) => {
    dispatch({ type: name, payload: value });
  };

  const formSubmit = e => {
    e.preventDefault();
    setUser(state);
    e.target.reset();
    dispatch({ type: 'reset' });
  };

  return (
    <Form onSubmit={formSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          ref={inputRef}
          name="email"
          type="email"
          placeholder="Enter email"
          onChange={handleInput}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleInput}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
