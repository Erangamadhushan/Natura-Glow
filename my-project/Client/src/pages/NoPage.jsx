import useScrollReveal from '../hooks/scrollReveal.js';
const NoPage = () => {
  useScrollReveal();
  // useScrollReveal is a custom hook that applies scroll reveal animations to the component
  return (
    <h1>404</h1>
  )
};

export default NoPage;