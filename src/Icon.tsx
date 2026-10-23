import './Icon.css';

function Icon(props) {
  return <i className={`icon icon-${props.variant}`}>{props.children}</i>;
}

export default Icon;
