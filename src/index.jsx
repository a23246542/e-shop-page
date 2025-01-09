import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const isMobile = window.innerWidth <= 768;
const App = React.lazy(() =>
  isMobile
    ? import('@/components/mobile/App')
    : import('@/components/desktop/App')
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>
);
