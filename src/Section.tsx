import './Section.css';
import Text from './Text';
import Button from './Button';

const buttonSchemeFor = {
  default: 'default',
  accent: 'default',
  accent2: 'default',
  accent3: 'inverted',
  accent4: 'default',
  accent5: 'inverted',
};

function Section(props) {
  const colorScheme = props.colorScheme || 'default';
  const titleVariant = props.titleVariant || 'h2';
  const showIntro = props.showIntro || 'false';
  const layout = props.layout || 'top';
  const buttonScheme = buttonSchemeFor[colorScheme] || 'default';

  return (
    <div
      className={`section section-${colorScheme} section-intro-${showIntro} section-${layout}`}
      id={props.id}
    >
      <div className="container">
        <div className="intro">
          <div className="text">
            {props.eyebrow && <Text variant="eyebrow">{props.eyebrow}</Text>}
            <Text variant={titleVariant}>{props.title}</Text>
            {props.description && (
              <Text variant="body">{props.description}</Text>
            )}
          </div>
          {props.buttonLabel && (
            <Button
              href={props.buttonHref}
              aria-label={props.buttonAriaLabel}
              type={props.buttonType}
              colorScheme={buttonScheme}
            >
              {props.buttonLabel}
            </Button>
          )}
        </div>
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
}

export default Section;
