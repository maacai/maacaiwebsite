const paths = {
  sparkles: <><path d="m12 3-1.2 3.4L7.5 7.6 10.8 8.8 12 12l1.2-3.2 3.3-1.2-3.3-1.2L12 3Z"/><path d="m19 14-.7 2-2 .7 2 .7.7 2 .7-2 2-.7-2-.7-.7-2Z"/><path d="m5 14-.6 1.7-1.7.6 1.7.6L5 19l.6-2.1 1.7-.6-1.7-.6L5 14Z"/></>,
  brain: <><path d="M9 4.5A3.5 3.5 0 0 0 5.5 8c0 .5.1 1 .3 1.4A3.5 3.5 0 0 0 7 16a3.5 3.5 0 0 0 2-6.4V4.5Z"/><path d="M15 4.5A3.5 3.5 0 0 1 18.5 8c0 .5-.1 1-.3 1.4A3.5 3.5 0 0 1 17 16a3.5 3.5 0 0 1-2-6.4V4.5Z"/><path d="M12 3v18M8.5 8.5h1M14.5 8.5h-1M8.5 13.5h1M14.5 13.5h-1"/></>,
  cloud: <><path d="M7 18h9a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 5.7 8.3 4.5 4.5 0 0 0 7 18Z"/></>,
  smartphone: <><rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M10 5h4M11.5 18.5h1"/></>,
  code: <><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></>,
  palette: <><path d="M12 3a9 9 0 1 0 0 18h1.2a1.8 1.8 0 0 0 0-3.6h-.7a2 2 0 0 1 0-4h1.9A6.6 6.6 0 0 0 12 3Z"/><circle cx="7.5" cy="10" r=".8"/><circle cx="10" cy="7" r=".8"/><circle cx="14" cy="7" r=".8"/></>,
  settings: <><path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/><path d="m19 13 .1-2-2-.7a7 7 0 0 0-.8-1.9l.9-1.9-1.5-1.4-1.9.9A7 7 0 0 0 12 5l-.7-2h-2l-.7 2a7 7 0 0 0-1.8.8l-1.9-.9-1.4 1.4.9 1.9A7 7 0 0 0 3.6 11l-2 .7v2l2 .7c.2.7.5 1.3.8 1.9l-.9 1.9 1.4 1.4 1.9-.9c.6.4 1.2.6 1.8.8l.7 2h2l.7-2c.7-.2 1.3-.4 1.9-.8l1.9.9 1.5-1.4-.9-1.9c.4-.6.7-1.2.8-1.9l2-.7Z"/></>,
  megaphone: <><path d="m4 13 12-5v8L4 12v1Z"/><path d="M16 10.5 20 9v6l-4-1.5M7 13l1.5 5H6l-1-5"/></>,
  chart: <><path d="M4 19V9M10 19V5M16 19V2M22 19H2"/></>,
  heart: <><path d="M20.8 8.7c0 5.2-8.8 10-8.8 10s-8.8-4.8-8.8-10A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 8.8 2.7Z"/><path d="M3 12h4l1.2-2.5L10 15l1.5-4 1.2 2H17"/></>,
  graduation: <><path d="m3 9 9-4 9 4-9 4-9-4Z"/><path d="M7 11v5c2.8 2 7.2 2 10 0v-5M21 9v6"/></>,
  finance: <><path d="M3 21h18M5 18V9h3v9M10.5 18V6h3v12M16 18v-6h3v6M3 9l9-6 9 6"/></>,
  cart: <><path d="M3 4h2l2.2 11h10.9L20 8H6"/><circle cx="9" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/></>,
  home: <><path d="m3 10 9-7 9 7"/><path d="M5 9v11h14V9M9 20v-6h6v6"/></>,
  factory: <><path d="M3 20V9l6 3V8l6 3V5h6v15H3Z"/><path d="M6 16h2M11 16h2M16 16h2M6 19h2M11 19h2M16 19h2"/></>,
  truck: <><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></>,
  landmark: <><path d="M3 21h18M5 18V9h3v9M10.5 18V6h3v12M16 18v-9h3v9M3 9l9-6 9 6"/></>,
  building: <><path d="M4 21V4h10v17M14 9h6v12M8 8h2M8 12h2M8 16h2M17 13h1M17 17h1"/></>,
  utensils: <><path d="M7 3v7M4 3v4a3 3 0 0 0 6 0V3M7 10v11M16 3v18M16 3c3 2 3 6 0 8"/></>,
  car: <><path d="m5 16 1.5-6h11L20 16M4 16h17v4H4zM7 20v2M18 20v2"/><circle cx="8" cy="17.5" r="1"/><circle cx="17" cy="17.5" r="1"/></>,
  hardhat: <><path d="M4 15a8 8 0 0 1 16 0v2H4v-2Z"/><path d="M2 17h20M12 7v8"/></>,
  scale: <><path d="M12 3v18M5 6h14M4 21h16"/><path d="m5 6-3 6h6L5 6ZM19 6l-3 6h6l-3-6Z"/></>,
  plane: <><path d="m3 11 18-8-6 18-3-7-6-3Z"/><path d="m12 14 4-4"/></>,
  sprout: <><path d="M12 21V10"/><path d="M12 12C7 12 4 9 4 4c5 0 8 3 8 8ZM12 15c5 0 8-3 8-8-5 0-8 3-8 8Z"/></>,
  lightbulb: <><path d="M9 18h6M10 21h4M8 14a7 7 0 1 1 8 0c-1 .7-1.5 1.6-1.7 3H9.7c-.2-1.4-.7-2.3-1.7-3Z"/></>,
  shield: <><path d="M12 3 20 6v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z"/><path d="m8 12 2.5 2.5L16 9"/></>,
  users: <><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0M16 5a3 3 0 0 1 0 6M18 13a5 5 0 0 1 4 5"/></>,
  award: <><circle cx="12" cy="8" r="5"/><path d="m9 12-1 9 4-2 4 2-1-9"/></>,
  zap: <><path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></>,
  arrowRight: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
  arrowUp: <><path d="M12 19V5M6 11l6-6 6 6"/></>,
  chevronDown: <path d="m6 9 6 6 6-6"/>,
  check: <path d="m5 12 4 4L19 6"/>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  x: <><path d="m6 6 12 12M18 6 6 18"/></>,
  linkedin: <><path d="M5 8v11M5 5.2v.1M9 19v-6a4 4 0 0 1 8 0v6M9 8v11"/><circle cx="5" cy="5" r="1"/></>,
  twitter: <path d="M19 5.5c-.7.3-1.4.5-2.2.6a3.8 3.8 0 0 0 1.7-2.1 7.5 7.5 0 0 1-2.4.9A3.8 3.8 0 0 0 9.5 7.5c0 .3 0 .6.1.9A10.8 10.8 0 0 1 3 4.5a3.8 3.8 0 0 0 1.2 5.1c-.6 0-1.2-.2-1.7-.5 0 1.9 1.3 3.5 3.1 3.8-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.6 2 2.7 3.8 2.7A7.6 7.6 0 0 1 2.9 17c-.3 0-.7 0-1-.1A10.7 10.7 0 0 0 7.7 19c7.1 0 11-5.9 11-11v-.5c.8-.6 1.5-1.2 2-2Z"/>,
  youtube: <><rect x="3" y="6" width="18" height="12" rx="3"/><path d="m10 10 5 2-5 2v-4Z"/></>,
  headphones: <><path d="M4 13a8 8 0 0 1 16 0"/><path d="M4 13v4a2 2 0 0 0 2 2h1v-7H6a2 2 0 0 0-2 2ZM20 13v4a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2Z"/></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
  phone: <path d="M7 3h3l1.2 4-2 1.5a14 14 0 0 0 6.3 6.3L17 13l4 1.2v3c0 1.1-.9 2-2 2C10.7 19.2 4.8 13.3 4.8 5A2 2 0 0 1 7 3Z"/>,
  mapPin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/></>,
  external: <><path d="M14 5h5v5M19 5l-8 8"/><path d="M19 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"/></>,
  cursor: <><path d="m5 3 6 17 2-7 7-2L5 3Z"/></>,
};

export default function Icon({ name, size = 20, strokeWidth = 1.8, className = '' }) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.sparkles}
    </svg>
  );
}
