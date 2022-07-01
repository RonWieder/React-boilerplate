import { StrictMode } from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1>Hello World!</h1>
      </div>
    </StrictMode>
  );
};
render(<App />, document.getElementById('root'));
