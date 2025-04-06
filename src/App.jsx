import './App.css';
import { useContext, useRef, useState } from 'react';
import Home from '../src/Components/Home';
import { AuthContext } from './Context/AuthContext';

function App() {
  const emailRef = useRef();
  const passwordRef = useRef('');

  const [error, setError] = useState('');

  const {user, setUser} = useContext(AuthContext)

  const login = (email, password) => {
    if( email === 'admin' && password === '1234') {
      return true;
    }
    return false;
  };

  const handleLogin = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const isSuccess = login(email, password);

    if (!isSuccess) {
      setError('Credenciales incorrectas');
    } else {
      setUser({ email });
    }
  };

  return (
    <>
      <h2>Login</h2>
      {
      
      !user ? (
        <div>

          <input 
          type="email" 
          placeholder="Correo" 
          ref={emailRef} />

          <br />

          <input 
          type="password"
          placeholder="Contraseña" 
          ref={passwordRef} />

          <br />

          <button onClick={handleLogin}>Ingresar</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>) : 
      (
        <Home  />
      )}
    </>
  );
}

export default App;