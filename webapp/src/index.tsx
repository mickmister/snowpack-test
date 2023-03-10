import React from 'react';
import ReactDOM from 'react-dom';

import SharedFunction from '@shared/validations/some_validation';

const MyComponent = () => {
  return (
    <div>
      <h1>{SharedFunction()}</h1>

    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <MyComponent/>
  </React.StrictMode>,
  document.querySelector('main'),
);
