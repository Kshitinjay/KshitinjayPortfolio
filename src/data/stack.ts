export interface StackItem {
  /** Bold (ink-coloured) leading portion, e.g. "SSE". */
  bold?: string;
  /** Remaining soft-coloured text, e.g. "streaming". */
  text?: string;
}

export interface StackColumn {
  title: string;
  /** Lead column gets the coral header. */
  lead?: boolean;
  items: StackItem[];
}

export const stack: StackColumn[] = [
  {
    title: 'AI & real-time',
    lead: true,
    items: [
      { bold: 'SSE', text: 'streaming' },
      { bold: 'WebRTC', text: 'voice' },
      { bold: 'Socket.IO' },
      { bold: '@xyflow/react' },
      { text: 'Waveform viz' },
      { text: 'LLM integration' },
    ],
  },
  {
    title: 'Core',
    items: [
      { bold: 'React 19' },
      { text: 'TypeScript' },
      { text: 'Next.js' },
      { text: 'Redux Toolkit' },
      { text: 'Tailwind · MUI' },
    ],
  },
  {
    title: 'Quality',
    items: [
      { text: 'Jest · RTL' },
      { text: 'Core Web Vitals' },
      { text: 'Performance' },
      { text: 'Accessibility' },
      { text: 'Code review' },
    ],
  },
  {
    title: 'Workflow',
    items: [
      { text: 'Agile / Scrum' },
      { text: 'REST APIs' },
      { text: 'Git' },
      { text: 'Cursor · Claude' },
      { text: 'Prompt eng.' },
    ],
  },
];
