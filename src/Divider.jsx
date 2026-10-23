import './Divider.css';

function Button(props) {
  const sectionColorScheme = props.sectionColorScheme || 'default';
  const type = props.type || 'default';

  return (

    <div className={`divider divider-${type} divider-section-${sectionColorScheme}`}>
      <div className="container">
        <hr/>
      </div>
    </div>
  );
}

export default Button;
