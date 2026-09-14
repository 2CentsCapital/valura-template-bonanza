import type { SVGProps } from 'react';

// Outlined line icons only: the Bonanza brand book does not allow filled icons,
// and Poppins has no tick, cross or arrow glyphs, so these replace text symbols.
type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function svgProps({ size = 24, strokeWidth = 1.8, ...rest }: IconProps): SVGProps<SVGSVGElement> {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    focusable: 'false',
    ...rest,
  };
}

export const IconArrowRight = (p: IconProps) => (
  <svg {...svgProps(p)}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const IconCheck = (p: IconProps) => (
  <svg {...svgProps(p)}>
    <path d="m5 12.5 4.2 4.2L19 7" />
  </svg>
);

export const IconMenu = (p: IconProps) => (
  <svg {...svgProps(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconClose = (p: IconProps) => (
  <svg {...svgProps(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const IconChevronDown = (p: IconProps) => (
  <svg {...svgProps(p)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const IconGlobe = (p: IconProps) => (
  <svg {...svgProps(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14 14 0 0 1 0 18" />
    <path d="M12 3a14 14 0 0 0 0 18" />
  </svg>
);

export const IconChart = (p: IconProps) => (
  <svg {...svgProps(p)}>
    <path d="M4 4v16h16" />
    <path d="M8.5 16v-4" />
    <path d="M12.5 16V8" />
    <path d="M16.5 16v-6" />
  </svg>
);

export const IconCoin = (p: IconProps) => (
  <svg {...svgProps(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M14.8 9.3c-.5-.9-1.6-1.5-2.8-1.5-1.7 0-2.9.9-2.9 2.1 0 2.9 5.8 1.5 5.8 4.3 0 1.2-1.2 2.1-2.9 2.1-1.3 0-2.4-.6-2.9-1.5" />
    <path d="M12 6.3v1.5M12 16.3v1.4" />
  </svg>
);

export const IconTicket = (p: IconProps) => (
  <svg {...svgProps(p)}>
    <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1.5a1.5 1.5 0 0 0 0 3V15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1.5a1.5 1.5 0 0 0 0-3Z" />
    <path d="M9.5 7v10" strokeDasharray="1.5 2" />
  </svg>
);

export const IconLandmark = (p: IconProps) => (
  <svg {...svgProps(p)}>
    <path d="m3 9.5 9-5.5 9 5.5" />
    <path d="M5.5 10v7.5M10 10v7.5M14 10v7.5M18.5 10v7.5" />
    <path d="M3 20h18" />
  </svg>
);

export const IconRocket = (p: IconProps) => (
  <svg {...svgProps(p)}>
    <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1Z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-4A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2Z" />
    <path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0" />
    <path d="M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5" />
  </svg>
);

export const IconLayers = (p: IconProps) => (
  <svg {...svgProps(p)}>
    <path d="m12 3.5 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
  </svg>
);

export const IconDocument = (p: IconProps) => (
  <svg {...svgProps(p)}>
    <path d="M7 3h7l5 5v13H7Z" />
    <path d="M14 3v5h5" />
    <path d="M10 13h6M10 17h4" />
  </svg>
);

export const IconFileCheck = (p: IconProps) => (
  <svg {...svgProps(p)}>
    <path d="M6 3h8l5 5v13H6Z" />
    <path d="M14 3v5h5" />
    <path d="m9.5 14.5 2 2 4-4" />
  </svg>
);

export const IconSmartphone = (p: IconProps) => (
  <svg {...svgProps(p)}>
    <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
    <path d="M11 18.5h2" />
  </svg>
);

export const IconDiamond = (p: IconProps) => (
  <svg {...svgProps(p)}>
    <path d="M12 4 20 12 12 20 4 12Z" />
  </svg>
);
