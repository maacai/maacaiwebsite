import React from 'react';

export default function Button({ href, className, variant = 'dark', onClick, children, showArrow = false }) {
  const isLink = Boolean(href);
  const classes = `pill ${variant} ${className || ''}`.trim();

  const content = (
    <>
      {children}
      {showArrow && <span className="btn-arrow" aria-hidden="true">&nbsp;→</span>}
    </>
  );

  if (isLink) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
