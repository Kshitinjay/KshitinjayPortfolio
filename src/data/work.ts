export interface WorkEntry {
  num: string;
  title: string;
  meta: string;
  desc: string;
  tags: string[];
  impact: string;
  impactLabel: string;
  impactSmall?: boolean;
  /** Real destination. Omit for entries with no public link (renders as a
   *  non-navigating block instead of jumping to top). */
  href?: string;
}

export const work: WorkEntry[] = [
  {
    num: '01',
    title: 'TryEva & Agent Foundry',
    meta: 'SR. SOFTWARE ENGINEER · BLACKNGREEN · 2024 — NOW',
    desc:
      'Owned the frontend for multi-tenant AI agent-builder platforms on React 19. Architected a real-time build pipeline over Server-Sent Events with progress, conflict resolution and retry; a conversation-flow editor (@xyflow/react + dagre) handling 20+ nodes with live updates during WebRTC voice calls; and a Socket.IO-powered chat/voice testing UI with live waveforms.',
    tags: ['React 19', 'SSE', 'Socket.IO', '@xyflow/react', 'dagre', 'WebRTC voice', 'TypeScript'],
    impact: '+30%',
    impactLabel: 'perf & engagement',
  },
  {
    num: '02',
    title: 'AkiroLabs platform',
    meta: 'SOFTWARE ENGINEER · SIRIONLABS · 2021 — 2024',
    desc:
      'Owned frontend architecture and shipped ChatGPT-powered features that lifted engagement 40%. Led the AngularJS-to-React migration and built analytics dashboards with a PDF export system that cut report generation by 40%.',
    tags: ['React.js', 'Redux Toolkit', 'LLM features', 'Chart.js'],
    impact: '+20%',
    impactLabel: 'customer adoption',
  },
  {
    num: '03',
    title: 'Kanban — team task tracker',
    meta: 'FULL-STACK PROJECT · REACT 19 · REDUX · NODE · MONGODB',
    desc:
      'A team task-tracker in the spirit of Trello and Linear — JWT auth with role-based permissions (admin vs member), a drag-and-drop board over @dnd-kit, a KPI dashboard, and full ticket CRUD with comment threads. React 19 + a typed Redux data layer, talking to a separate Node/Express/MongoDB API.',
    tags: ['React 19', 'TypeScript', 'Redux Toolkit', '@dnd-kit', 'JWT auth', 'Node.js', 'MongoDB'],
    impact: 'Live ↗',
    impactLabel: 'demo',
    impactSmall: true,
    href: 'https://kanban-weld-seven.vercel.app',
  },
  {
    num: '04',
    title: 'Naukri Board',
    meta: 'FULL-STACK PROJECT · REACT · NODE · MONGODB',
    desc:
      'A full-stack job-application tracker with CRUD across 5+ interview stages, search and filtering — frontend on Vercel, API on Render. Built to round out a React-heavy portfolio with end-to-end ownership.',
    tags: ['React.js', 'Material UI', 'Node.js', 'Express.js', 'MongoDB'],
    impact: 'Live ↗',
    impactLabel: 'demo',
    impactSmall: true,
    href: 'https://frontend-flame-beta-25.vercel.app/',
  },
  {
    num: '05',
    title: 'Blood Finder Web App',
    meta: 'FRONTEND PROJECT · REACT · REST APIs · BOOTSTRAP',
    desc:
      'A responsive donor-search platform with real-time search by blood group and location, built mobile-first for fast access in the field.',
    tags: ['React.js', 'REST APIs', 'Bootstrap'],
    impact: 'Live ↗',
    impactLabel: 'demo',
    impactSmall: true,
    href: 'https://online-blood-finder-major-project.vercel.app/',
  },
  {
    num: '06',
    title: 'Meeting Room Booking',
    meta: 'FRONTEND PROJECT · REACT · CONTEXT API',
    desc:
      'A room-scheduling app with availability management, conflict detection and dynamic state handling across overlapping bookings.',
    tags: ['React.js', 'Context API'],
    impact: 'Live ↗',
    impactLabel: 'demo',
    impactSmall: true,
    href: 'https://company-assignment-meeting-room-booking.vercel.app/',
  },
];
