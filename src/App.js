import React, {useState} from 'react';
import {Calculator, Graph2D, Graph3D, Menu} from './components';
import './App.css';

const App = () => {
  const [showMenuItem, setShowMenuItem] = useState('graph2D');
  const [menuActive, setMenuActive] = useState(false);
  //const items = [{value: "Калькулятор", href: "/Calculator", icon: "Calculate", id: 'calc'}, {value: "Graph2D", href: "/Graph2D", icon: "Insights", id: 'graph2D'}, {value: "Graph3DD", href: "/Graph3D", icon: "deployed_code", id: 'graph3D'}]
  return (
    <div className="App">
      <nav>
          <div className='burger-btn' onClick={() => setMenuActive(!menuActive)}>
              <span/>
          </div>
      </nav>
      <div className="App">
      {showMenuItem === 'calc' ?
        <Calculator /> :
        showMenuItem === 'graph2D' ?
          <Graph2D /> :
          showMenuItem === 'graph3D' ?
            <Graph3D /> : <></>}
      </div>
      <Menu showMenuItem={setShowMenuItem} active={menuActive} setActive={setMenuActive} header={"Выберите вкладочку"}/>
    </div>
  );
}

export default App;
