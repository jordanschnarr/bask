import './Text.css';

// maps each variant to its default HTML tag
const defaultTags = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body: 'p',
  caption: 'span',
  orderedList: 'ol',
  unorderedList: 'ul',
  generic: 'span',
  eyebrow: 'span',
};

function Text(props) {
  const variant = props.variant || 'body';
  const Tag = props.as || defaultTags[variant] || 'p';
  const className = `text text-${variant}`;

  // If the text is a string with line breaks, render one tag per line.
  if (typeof props.children === 'string' && props.children.includes('\n')) {
    return (
      <>
        {props.children.split('\n').map((line, i) => (
          <Tag key={i} className={className}>
            {line}
          </Tag>
        ))}
      </>
    );
  }

  return <Tag className={className}>{props.children}</Tag>;
}

export default Text;
