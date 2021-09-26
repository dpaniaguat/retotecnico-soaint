import React from 'react';
import ReactDOM from 'react-dom';
import CartState from './context/cart/CartState';

import { SoaintApp } from './SoaintApp';
import './styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <CartState>
      <SoaintApp />
    </CartState>
  </React.StrictMode>,
  document.getElementById('root')
);


