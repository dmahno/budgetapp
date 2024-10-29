import React from 'react';

const SVGRMock = ({title}: {title?: string}) => (
  <svg data-testid={title || 'svg-mock'} />
);

export default SVGRMock;
