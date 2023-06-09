import React, { useState, useCallback } from 'react';
import { Calculator, Graph2D, Graph3D, Menu } from './components';
import './App.css';

const App = () => {
  const [showMenuItem, setShowMenuItem] = useState('calc');
  const [menuActive, setMenuActive] = useState(false);

  const handleShowMenuItem = useCallback((value) => {
    setShowMenuItem(value);
  }, []);

  const handleMenuActive = useCallback((value) => {
    setMenuActive(value);
  }, []);

  return (
    <div className="App">
      <nav>
        <div className='burger-btn' onClick={() => handleMenuActive(!menuActive)}>
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
      <Menu 
        showMenuItem={handleShowMenuItem} 
        active={menuActive} 
        setActive={handleMenuActive} 
        header={"Выберите вкладочку"}
      />
    </div>
  );
}

export default App;
