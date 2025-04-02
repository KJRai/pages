import { createFileRoute } from '@tanstack/react-router'
import Pokemons from '../comps/pokemonlist'

export const Route = createFileRoute('/pokemon')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <>
  <Pokemons />
  </>)
}
