import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/podcas')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/product"!</div>
}
