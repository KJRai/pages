import { createFileRoute } from '@tanstack/react-router'
import PokemonList from '../comps/tablelist'

export const Route = createFileRoute('/poklist')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PokemonList />
}
