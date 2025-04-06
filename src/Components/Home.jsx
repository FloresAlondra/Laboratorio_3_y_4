import WelcomeWidget from './WelcomeWidget';

export default function Home({ email }) {
  return (
    <>
      <h1>You are at Home</h1>
      <WelcomeWidget email={email} />
    </>
  );
}