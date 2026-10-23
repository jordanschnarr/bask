import './Accordion.css';

function Accordion(props) {
  return (
    <div className="accordion">
      {props.children}
    </div>
  );
}

export default Accordion;
