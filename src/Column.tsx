import './Column.css';

function Column(props) {
  const columnAlignment = props.columnAlignment || 'top';

  return (
    <div className={`column column-align-${columnAlignment}`}>
      {props.children}
    </div>
  );
}

export default Column;
