import { createFileRoute } from '@tanstack/react-router'
import data from "../../../data.json"
import NotFound from "../../../comps/notFound"
import FeaturedProducts from '../../../comps/Products'

export const Route = createFileRoute('/podcas/$id/')({
    loader: ({ params }) => {
        const podcasId = parseInt(params.id, 10);
        const pod = data.find((p) => p.id === podcasId);
        return pod || null;
      },
  component: RouteComponent,
})

function RouteComponent() {
     const params = Route.useParams()
      const podcast = Route.useLoaderData();
  if(!podcast) return <NotFound />;

  return <div> 
     <div><FeaturedProducts /></div>
  </div>
}
