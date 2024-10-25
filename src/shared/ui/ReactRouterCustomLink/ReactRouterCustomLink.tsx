import React from 'react';
import {LinkProps, useNavigate} from 'react-router-dom';
import LinkDS, {LinkProps as TLinkDSProperties} from 'antd/lib/typography/Link';

function isModifiedEvent(event: React.MouseEvent<HTMLAnchorElement>) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

interface IReactRouterCustomLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
  disableAntColor?: boolean;
}

export const ReactRouterCustomLink = ({
  target,
  to,
  onClick,
  disableAntColor = false,
  ...props
}: IReactRouterCustomLinkProps & Partial<TLinkDSProperties>) => {
  const navigate = useNavigate();

  return (
    <LinkDS
      {...(props as TLinkDSProperties)}
      style={
        disableAntColor ? {color: 'inherit', textDecoration: 'none'} : undefined
      }
      onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
        try {
          if (onClick) onClick(event);
        } catch (ex) {
          event.preventDefault();
          throw ex;
        }

        if (
          !event.defaultPrevented &&
          event.button === 0 &&
          (!target || target === '_self') &&
          !isModifiedEvent(event)
        ) {
          event.preventDefault();
          navigate(to);
        }
      }}
    />
  );
};
