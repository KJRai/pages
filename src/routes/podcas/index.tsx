import { createFileRoute } from '@tanstack/react-router'
import FeaturedProducts from '../../comps/Products'

export const Route = createFileRoute('/podcas/')({
  
  component: RouteComponent,
})

function RouteComponent() {
  return <div><FeaturedProducts /></div>
}
