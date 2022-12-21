import './App.css';
import CardsApi from './componentes/CardsApi';
import Card from './componentes/Card';

import Axios from "axios";
import { useState } from 'react';

function App() {
    return (
        <div>
            <CardsApi />
        </div>
  );
}

export default App;
