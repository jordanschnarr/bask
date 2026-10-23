import './Button.css';

function Button(props) {
  const type = props.type || 'primary';
  const colorScheme = props.colorScheme || 'cover';

  return (
    <a
      className={`btn btn-${type} btn-${colorScheme}`}
      href={props.href}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </a>
  );
}

export default Button;
