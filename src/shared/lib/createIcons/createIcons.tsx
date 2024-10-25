import React from 'react';

// Adjust the path to point to `shared/ui/icons`
const icons: Record<
  string,
  {default: React.FC<React.SVGProps<SVGSVGElement>>}
> = import.meta.glob('../../assets/icons/*.svg', {
  eager: true,
  query: '?svgr',
});

// Wrapper component to apply default dimensions
const IconWrapper: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} width={props.width || 24} height={props.height || 24} />
);

// Define `IconComponents` as an object with string keys and wrapped React component values
const IconComponents: Record<
  string,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {};

Object.keys(icons).forEach((filePath) => {
  // Extract the component name, removing path and file extension
  const componentName = `Icon${filePath.replace('/src/shared/ui/icons/', '').replace('.svg', '')}`;

  // Wrap the SVG component with `IconWrapper` and assign to `IconComponents`
  IconComponents[componentName] = (props) => (
    <IconWrapper {...props}>
      {React.createElement(icons[filePath].default, props)}
    </IconWrapper>
  );

  console.log(IconComponents);
});

export {IconComponents};
