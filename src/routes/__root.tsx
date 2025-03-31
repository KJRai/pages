import { Link, Outlet, useRouter, useNavigate,createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { AuthContext } from '../context/AuthContext';
import { useAuth } from '../context/AuthContext';

interface RouterContext {
  auth: AuthContext
 }

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});


function RootComponent() {
  const location = useRouter().state.location;
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth(); 

  const handleLogout = async ()=> {
    await logout();
    navigate({to:"/Auth"})
  }
  if (!isAuthenticated) {
    return (
      <div className="flex justify-center items-center h-full">
        <Outlet /> {}
      </div>
    );
  }
  return (
    <>
      <div className="flex" style={{ height: '100vh' }}>
      <nav className="w-48 bg-gray-800 text-white p-4 flex flex-col h-full justify-center">
      <ul className="space-y-4 flex-1 flex flex-col items-center">
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
                  to="/product"
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
            <button onClick={handleLogout} className="mt-4 bg-500 text-white px-4 py-2 rounded">
            Logout
          </button>

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
