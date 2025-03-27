import { Link, Outlet, useRouter } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { createRootRouteWithContext } from '@tanstack/react-router';
import { AuthContext } from '../context/AuthContext';

interface RouterContext {
  auth: AuthContext
 }

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});


function RootComponent() {
  const location = useRouter().state.location;
  const isAuthPage = location.pathname === "/Auth";

  return (
    <>
      <div className="flex" style={{ height: '100vh' }}>
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
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/podcas"
                  activeProps={{
                    className: 'font-bold',
                  }}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link to="/Auth"
              activeProps={{
                className: 'font-bold',
              }}
              activeOptions={{ exact: false }}  >
                </Link>
               
              </li>
            </ul>
            <Link to="/Auth" >
              Logout
            </Link>

          </nav>
        <hr />
        <div className="flex-1 flex justify-center items-center">
          <Outlet />
        </div>
      </div>
      <TanStackRouterDevtools position="bottom-right" initialIsOpen={false} />
    </>
  )
}
