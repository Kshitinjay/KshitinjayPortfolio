/**
 * Mock responses for the `agent · runtime` panel. This is the seam for the
 * future live assistant (roadmap F2/F3): swap `getMockAnswer` for a streamed
 * fetch to the backend without touching the panel's layout.
 */
export interface AssistantChip {
  label: string;
  q: keyof typeof answers;
}

export const answers = {
  bng:
    'At BlackNGreen he owns the frontend for TryEva and Agent Foundry — multi-tenant AI agent builders on React 19. He architected the real-time build pipeline over SSE and the conversation-flow editor with @xyflow/react and dagre.',
  real:
    'His real-time layer: SSE streaming with retry and conflict resolution, WebRTC voice with live waveform visualization, and node-graph conversation flows. Core is React 19 + TypeScript.',
  impact:
    '+30% load performance and engagement on the agent platform, +45% faster feature delivery, and a 40% cut in report-generation time at SirionLabs.',
} as const;

export const chips: AssistantChip[] = [
  { label: 'agent work?', q: 'bng' },
  { label: 'real-time stack?', q: 'real' },
  { label: 'impact?', q: 'impact' },
];

export const RUN_FALLBACK =
  'Preview answer. The live assistant — answering anything about Kshitinjay from his real experience — is the phase-2 build.';

export const PREVIEW_CAP = 'Preview · the live assistant ships in phase 2';
