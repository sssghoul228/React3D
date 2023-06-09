import CheckBox from '../../CheckBox';

const UI3D = ({ showHidePoints, showHideEdges, showHidePolygons }) => {


  return (
    <div className="panel">
      <div id="Checkbox3D">
          <div>
            <CheckBox text={'Точки'} checked={true} onClick={showHidePoints} />
            <CheckBox text={'Грани'} checked={true} onClick={showHideEdges} />
            <CheckBox text={'Полингоны'} checked={true} onClick={showHidePolygons} />
          </div>
      </div>
    </div>
  );
};

export default UI3D;
