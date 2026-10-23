import { useState } from 'react';
import './Accordion.css';
import Icon from './Icon';

function AccordionItem(props) {
  const [isOpen, setIsOpen] = useState(false);
  const plusIcon = <Icon variant="plus" />;
  const minusIcon = <Icon variant="minus" />;
  const labelSize = props.labelSize || 'default';

  return (
    <div className={`accordion-item ${isOpen ? 'is-open' : ''}`}>
      <button
        className={`accordion-header accordion-label-${labelSize}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{props.title}</span>
        <span className="accordion-icon">{isOpen ? minusIcon : plusIcon}</span>
      </button>

      {isOpen && (
        <div className="accordion-panel">
          <div className="accordion-panel-inner">{props.children}</div>
        </div>
      )}
    </div>
  );
}

export default AccordionItem;
