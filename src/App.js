import React from 'react';
import './App.css';
import Descripcion from './components/Descripcion';
import LogrosVirtudes from './components/LogrosVirtudes';
import Metas from './components/Metas';
import Filosofia from './components/Filosofia';
import Despedida from './components/Despedida';

function App() {
  return (
    <div className="App">
      <Descripcion />
      <LogrosVirtudes />
      <Metas />
      <Filosofia />
      <Despedida />
    </div>
  );
}

export default App;
