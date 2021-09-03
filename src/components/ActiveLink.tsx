import { cloneElement, ReactElement } from 'react';
import { Link, LinkProps, useLocation } from 'react-router-dom';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  path: string;
  shouldMatchExactPath?: string;
}

export function ActiveLink({
  children,
  path,
  shouldMatchExactPath,
  ...rest
}: ActiveLinkProps) {

  console.log(path);
  const location = useLocation();

  let isActive = false;

  if (shouldMatchExactPath && location.pathname === path) {
    isActive = true;
  }

  if (!shouldMatchExactPath && location.pathname.includes(path)) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400': 'gray.50'
      })}
    </Link>
  );
}