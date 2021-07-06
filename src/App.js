import React from 'react';
// import { Switch, Route, Link } from 'react-router-dom';
import Counter from './Counter/Counter';

const App = () => (
  <>
    <ul>
      <li>
        {/* <Link to="/counter">Счётчик</Link> */} Счетчик
      </li>
      <li>
        {/* <Link to="/todos">Заметки</Link> */} Заметки
      </li>
    </ul>

  
           <Counter />
     
     
     


  </>
);

export default App;
