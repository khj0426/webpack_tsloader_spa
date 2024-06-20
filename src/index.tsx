import { StrictMode } from 'react';
// React 18 기준
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <StrictMode>
    <div></div>
  </StrictMode>
);
