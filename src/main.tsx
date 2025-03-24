import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { rootRoute } from './routes/__root'

const router = createRouter({
  routeTree: rootRoute,
  context: {
    products: [
      { id: 1, name: 'DatGoodShiii', price: '50$' },
      { id: 2, name: 'NotGudShiii', price: '25$' },
    ],
  },
});
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}


const rootElement = document.getElementById('app')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<RouterProvider router={route} />)
}
