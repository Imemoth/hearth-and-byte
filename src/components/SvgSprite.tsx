export default function SvgSprite() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: 'absolute' }}
      aria-hidden="true"
      focusable={false}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <g id="i-access" className="lucide">
          <circle cx="12" cy="4.5" r="1.6"/>
          <path d="M5 8h14M12 8v6m0 0l-3 6m3-6l3 6"/>
        </g>
        <g id="i-chat" className="lucide">
          <path d="M4 5h16v11H9l-4 4V5z"/>
        </g>
        <g id="i-monitor" className="lucide">
          <rect x="3" y="4" width="18" height="12" rx="1.6"/>
          <path d="M8 20h8M12 16v4"/>
        </g>
        <g id="i-arrow" className="lucide">
          <path d="M5 12h13m-6-6l6 6-6 6"/>
        </g>
        <g id="i-check" className="lucide">
          <path d="M5 12.5l4.5 4.5L19 7"/>
        </g>
        <g id="i-shield" className="lucide">
          <path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z"/>
          <path d="M9 12l2 2 4-4"/>
        </g>
        <g id="i-sun" className="lucide">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>
        </g>
        <g id="i-moon" className="lucide">
          <path d="M20 14a8 8 0 11-9-10 6 6 0 009 10z"/>
        </g>
        <g id="i-menu" className="lucide">
          <path d="M4 7h16M4 12h16M4 17h16"/>
        </g>
        <g id="i-x" className="lucide">
          <path d="M6 6l12 12M18 6L6 18"/>
        </g>
        <g id="i-file" className="lucide">
          <path d="M6 3h8l4 4v14H6z"/>
          <path d="M14 3v4h4"/>
        </g>
        <g id="i-mail" className="lucide">
          <rect x="3" y="5" width="18" height="14" rx="1.6"/>
          <path d="M3 7l9 6 9-6"/>
        </g>
        <g id="i-phone" className="lucide">
          <path d="M5 4h4l1.5 5-2 1.5a11 11 0 005 5l1.5-2 5 1.5v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>
        </g>
        <g id="i-clock" className="lucide">
          <circle cx="12" cy="12" r="8.5"/>
          <path d="M12 7v5l3.5 2"/>
        </g>
        <g id="i-pin" className="lucide">
          <path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z"/>
          <circle cx="12" cy="10" r="2.4"/>
        </g>
        <g id="i-eye" className="lucide">
          <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/>
          <circle cx="12" cy="12" r="2.5"/>
        </g>
        <g id="i-keyboard" className="lucide">
          <rect x="3" y="7" width="18" height="10" rx="1.6"/>
          <path d="M7 10h.01M11 10h.01M15 10h.01M8 13h8"/>
        </g>
        <g id="i-bulb" className="lucide">
          <path d="M9 18h6M10 21h4"/>
          <path d="M12 3a6 6 0 00-3 11v2h6v-2a6 6 0 00-3-11z"/>
        </g>
        <g id="i-wrench" className="lucide">
          <path d="M15 4a4 4 0 01-5 5l-5 5 3 3 5-5a4 4 0 005-5l-2.5 2.5-2-2L15.5 4z"/>
        </g>
        <g id="i-doc" className="lucide">
          <rect x="5" y="3" width="14" height="18" rx="1.6"/>
          <path d="M8 8h8M8 12h8M8 16h5"/>
        </g>
        <g id="i-plus" className="lucide">
          <path d="M12 5v14M5 12h14"/>
        </g>
      </defs>
    </svg>
  )
}
