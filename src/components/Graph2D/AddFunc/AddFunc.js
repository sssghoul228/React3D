import React from 'react';
import "./AddFunc.css"

const AddFunc = ({active, setActive, children}) => {
  return (
    <div className={active ? "AddFunc active" : "AddFunc"} onClick={() => setActive(false)}>
      <div className={active ? "add_content active" : "add_content"} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default AddFunc;
