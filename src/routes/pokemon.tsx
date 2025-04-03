import { createFileRoute } from '@tanstack/react-router'
import Pokemons from '../comps/pokemonlist'
import { MantineProvider } from '@mantine/core'

export const Route = createFileRoute('/pokemon')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <>
  <MantineProvider>
  <Pokemons />
  </MantineProvider>
  </>)
}
