import React from 'react';

export function Card({ children, ...props }: React.ComponentProps<'div'>) {
  return <div {...props} className={'p-4 bg-gray-800 rounded-md ' + (props.className || '')}>{children}</div>;
}
