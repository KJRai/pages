import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  beforeLoad: ({ context, location }) => {
  console.log(context)
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: '/Auth',
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-2">
      <h3>Hello World!</h3>
    </div>
  )
}
