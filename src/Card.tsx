import './Card.css';
import Text from './Text';
import Button from './Button';
import Image from './Image';
import useReveal from './useReveal';

// for each banner colorScheme → which button colorScheme to use
const buttonSchemeFor = {
  default: 'default',
  accent: 'default',
  accent2: 'default',
  accent3: 'inverted',
  accent4: 'default',
  accent5: 'inverted',
};

function Card(props) {
  const colorScheme = props.colorScheme || 'primary';
  const titleVariant = props.titleVariant || 'h3';
  const subtitleVariant = props.subtitleVariant || 'h4';
  const mobileMediaPosition = props.mobileMediaPosition || 'top';
  const tabletMediaPosition = props.tabletMediaPosition || 'top';
  const desktopMediaPosition = props.desktopMediaPosition || 'top';
  const mediaContainer = props.mediaContainer || 'fill';
  const borderColor = props.borderColor || 'none';
  const backgroundOn = props.backgroundOn || 'true';
  const imageSize = props.imageSize || 'full';
  const imageRadius = props.imageRadius || 'true';
  const textAlignment = props.textAlignment || 'left';
  const { ref, visible } = useReveal();

  // look up the right button scheme for this banner's colorScheme
  const buttonScheme = buttonSchemeFor[colorScheme] || 'default';

  return (
    <div
      ref={ref}
      className={`card ${
        visible ? 'is-visible' : ''
      } card-media-m-${mobileMediaPosition} card-media-t-${tabletMediaPosition} card-media-d-${desktopMediaPosition} card-background-${backgroundOn} card-image-size-${imageSize} card-image-radius-${imageRadius} card-text-alignment-${textAlignment}`}
    >
      <div
        className={`card-container card-container-${colorScheme} card-border-${borderColor}`}
      >
        <div className="content-container">
          {props.title && <Text variant={titleVariant}>{props.title}</Text>}

          {props.subtitle && (
            <Text variant={subtitleVariant}>{props.subtitle}</Text>
          )}

          {props.description && <Text variant="body">{props.description}</Text>}

          {props.buttonLabel && (
            <Button
              variant={props.buttonVariant || 'primary'}
              colorScheme={buttonScheme}
              href={props.buttonHref}
            >
              {props.buttonLabel}
            </Button>
          )}
        </div>
        {props.image && (
          <div className={`image-container image-container-${mediaContainer}`}>
            <Image
              src={props.image}
              alt={props.imageAlt}
              ratio={props.imageRatio}
              tabletRatio={props.imageTabletRatio}
              desktopRatio={props.imageDesktopRatio}
              objectFit={props.imageObjectFit}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
