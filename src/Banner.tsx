import './Banner.css';
import Text from './Text';
import Button from './Button';
import Image from './Image';

// for each banner colorScheme → which button colorScheme to use
const buttonSchemeFor = {
  default: 'default',
  accent: 'default',
  accent2: 'default',
  accent3: 'inverted',
  accent4: 'default',
  accent5: 'inverted',
};

function Banner(props) {
  const container = props.container || 'fill';
  const sectionColorScheme = props.sectionColorScheme || 'default';
  const colorScheme = props.colorScheme || 'primary';
  const titleVariant = props.titleVariant || 'h2';
  const subtitleVariant = props.subtitleVariant || 'h3';
  const mediaPosition = props.mediaPosition || 'Right';
  const mediaContainer = props.mediaContainer || 'fill';
  const overlay = props.overlay || 'none';
  const backgroundBlur = props.backgroundBlur || 'none';
  const slot = props.slot || 'generic';

  // look up the right button scheme for this banner's colorScheme
  const buttonScheme = buttonSchemeFor[colorScheme] || 'default';

  return (
    <div
      className={`banner banner-${container} banner-${sectionColorScheme} banner-media-${mediaPosition} banner-${slot}`}
      id={props.id}
    >
      <div className={`banner-container banner-container-${colorScheme}`}>
        <div className="content-container">
          {props.eyebrow && <Text variant="eyebrow">{props.eyebrow}</Text>}

          <Text variant={titleVariant}>{props.title}</Text>

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
        {props.overlay && (
          <div
            className={`banner-overlay overlay-${overlay} blur-${backgroundBlur}`}
          ></div>
        )}
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

export default Banner;
