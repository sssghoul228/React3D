import { useState, useCallback } from 'react';
import CheckBox from '../../CheckBox';

const UI3D = ({ showHidePoints, showHideEdges, showHidePolygons }) => {
  const [showPanel, setShowPanel] = useState(false);

  const showHidePanel = useCallback(() => {
    setShowPanel(!showPanel);
  }, [setShowPanel, showPanel]);

  return (
    <div className="flex">
      <button onClick={showHidePanel}>{showPanel ? '🔙' : '🔜'}</button>
      <div id="Checkbox3D">
        {showPanel && (
          <div>
            <CheckBox text={'Точки'} checked={true} onClick={showHidePoints} />
            <CheckBox text={'Грани'} checked={true} onClick={showHideEdges} />
            <CheckBox text={'Полингоны'} checked={true} onClick={showHidePolygons} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UI3D;
