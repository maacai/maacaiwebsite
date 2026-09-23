import React from 'react';

/**
 * Reusable Button / Link component.
 * Renders an <a> when href is provided, otherwise a <button>.
 * variant: 'dark' | 'light' | 'accent'
 */
export default function Button({ href, className, variant = 'dark', onClick, children, showArrow = false, icon }) {
  const classes = `pill ${variant}${className ? ' ' + className : ''}`;

  const inner = (
    <>
      {icon && <span aria-hidden="true">{icon}&nbsp;&nbsp;</span>}
      {children}
      {showArrow && <span className="btn-arrow" aria-hidden="true">&nbsp;→</span>}
    </>
  );

  if (href) {
    return <a href={href} className={classes} onClick={onClick}>{inner}</a>;
  }
  return (
    <button type="button" className={classes} onClick={onClick}>{inner}</button>
  );
}
