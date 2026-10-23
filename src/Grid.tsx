import './Grid.css';

function Grid(props) {
  const mobileColumns = props.mobileColumns || '1';
  const tabletColumns = props.tabletColumns || '1';
  const desktopColumns = props.desktopColumns || '1';
  const gridLayout = props.gridLayout || 'default';

  return (
    <div
      className={`grid grid-m${mobileColumns} grid-t-${tabletColumns} grid-d-${desktopColumns} grid-layout-${gridLayout}`}
    >
      {props.children}
    </div>
  );
}

export default Grid;
