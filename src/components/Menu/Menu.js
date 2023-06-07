import './Menu.css';

const Menu = ({ header, active, setActive, showMenuItem }) => {
    return (
      <div className={active ? "menu active" : "menu"} onClick={() => setActive(false)}>
        <div className="blur"/>
        <div className="menu_content" onClick={e => e.stopPropagation()}>
            <div className="menu_header">{header}</div>
            <ul>
                    <li>
                        <span class="material-symbols-outlined">Calculate</span>
                        <button className='showMenuItem' onClick={() => showMenuItem('calc')}>Калькулятор</button>
                    </li>
                    <li>
                        <span class="material-symbols-outlined">Insights</span>
                        <button className='showMenuItem' onClick={() => showMenuItem('graph2D')}>Graph2D</button>
                    </li>
                    <li>
                        <span class="material-symbols-outlined">deployed_code</span>
                        <button className='showMenuItem' onClick={() => showMenuItem('graph3D')}>Graph3DD</button>
                    </li>
            </ul>
        </div>
      </div>
    );
  };
  
  export default Menu;
  