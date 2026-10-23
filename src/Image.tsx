import './Image.css';

function Image(props) {
  const ratio = props.ratio || 'auto';
  const tabletRatio = props.tabletRatio || 'auto';
  const desktopRatio = props.desktopRatio || 'auto';
  const objectFit = props.objectFit || 'cover';
  const width = props.width || 'full';

  return (
    <img
      className={`img img-${ratio} img-${objectFit} img-${width} img-t-${tabletRatio} img-d-${desktopRatio}`}
      src={props.src}
      alt={props.alt}
    />
  );
}

export default Image;
