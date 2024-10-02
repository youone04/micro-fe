import React, { Suspense } from 'react';

const RemoteApp = React.lazy(() => import('remoteApp/App')); // Lazy load the App from the remote

function App() {
  return (
    <div>
      <h1>Host Application</h1>
      <Suspense fallback={<div>Loading remote App...</div>}>
        <RemoteApp />
      </Suspense>
    </div>
  );
}

export default App;
