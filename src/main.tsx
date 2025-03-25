
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { AuthProvider, useAuth } from './context/AuthContext'
import React from 'react'

export const router = createRouter({
  routeTree,
  context: {
    auth: undefined!

  },
});
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
function InnerApp() {
  const auth = useAuth()
  return <RouterProvider router={router} context={{ auth }} />
}

function App() {
  return (
    <AuthProvider>
      <InnerApp />
    </AuthProvider>
  )
}

const rootElement = document.getElementById('app')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render( <React.StrictMode>
    <App />
  </React.StrictMode>,)
}
