import React, { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import TodoTemplate from './components/TodoTemplate/TodoTemplate';



ReactDOM.render(
  <StrictMode>
      <RecoilRoot> 
        <Router>
          <TodoTemplate />
        </Router>
      </RecoilRoot>
    </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();