import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Welcome from './WelcomeWidget';

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>Bienvenido, {user?.email}!</h2> {}
      <Welcome userName={user?.email} />
    </div>
  );
}