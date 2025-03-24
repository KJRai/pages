import * as React from 'react';
import { Link, Outlet, useLocation } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { createRouter, createRootRouteWithContext } from '@tanstack/react-router';


type RouterContext = {
  products: { id: number; name: string; price: string }[];
};
export const rootRoute = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});


function RootComponent() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/Auth";

  return (
    <>
      <div className="flex" style={{ height: '100vh' }}>
        {!isAuthPage && (
          <nav className="w-48 bg-gray-800 text-white p-4 flex flex-col h-full ">
            <ul className="space-y-4 flex-1">
              <li>
                <Link
                  to="/"
                  activeProps={{
                    className: 'font-bold',
                  }}
                  activeOptions={{ exact: true }}
                  
                >
                  DashBoard
                </Link>
              </li>
              <li>
              <Link
                  to="/products"
                  activeProps={{
                    className: 'font-bold',
                  }}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/Auth"
                  activeProps={{
                    className: 'font-bold',
                  }}
                >
                </Link>
              </li>
            </ul>
            <Link 
              to="/Auth"
              className="font-bold mt-auto"
            >
              Logout
            </Link>

          </nav>)}
        <hr />
        <div className="flex-1 flex justify-center items-center">
          <Outlet />
        </div>
        <TanStackRouterDevtools position="bottom-right" />
      </div>
    </>
  )
}
