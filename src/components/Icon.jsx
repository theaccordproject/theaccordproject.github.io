const paths = {
  check: 'm5 12 4 4L19 6',
  globe: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM3 12h18M12 3c4 5 4 13 0 18-4-5-4-13 0-18Z',
  grid: 'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z',
  lock: 'M7 10V7a5 5 0 0 1 10 0v3M5 10h14v11H5zM12 14v3',
  people: 'M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM5 21v-3a7 7 0 0 1 14 0v3M18 4a3 3 0 0 1 0 6M21 14a5 5 0 0 1 2 4',
  calendar: 'M4 5h16v16H4zM4 10h16M8 3v4M16 3v4M8 14h2M14 14h2M8 18h2',
  card: 'M3 5h18v14H3zM3 10h18M6 15h4',
  bag: 'M4 8h16l1 13H3L4 8ZM8 8V6a4 4 0 0 1 8 0v2',
  message: 'M3 4h18v13H9l-6 4V4ZM7 8h10M7 12h6',
  pen: 'm15 4 5 5M4 15 16 3l5 5L9 20l-6 1 1-6ZM13 21h8',
  spark: 'm12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z',
  arrow: 'M4 12h16m-6-6 6 6-6 6',
}

export default function Icon({ name, className = 'w-6 h-6' }) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d={paths[name] || paths.grid} />
    </svg>
  )
}
