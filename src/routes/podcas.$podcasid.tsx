import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/podcas/$podcasid')({
  loader: ({ params})=> fetch(params.podcasid),

  component: ProductComponent,
})
 
function ProductComponent() {
  const {podcasid} = Route.useParams()
  console.log(podcasid)
  return <div>Products : {podcasid}</div>
}
