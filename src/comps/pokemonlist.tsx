import PokemonCard from "./PokemonCard"
import ButtonGroup from "./ButtonGroup"
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { useState } from "react";

const queryClient = new QueryClient()

function App() {
  const { data: pokemon, isLoading, error } = useQuery({
    queryKey: ['pokemon'],
    queryFn: () => fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
      .then(res => res.json())
  })
  const pokemons = pokemon?.results || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? pokemons.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === pokemons.length - 1 ? 0 : prev + 1));
  }; 
  
  return (
    <>
      <div className="flex flex-col items-center static">
        <PokemonCard
          isLoading={isLoading}
          pokemon={pokemons[currentIndex]}
          error={error}
        />
        <ButtonGroup handleSetId={{ handlePrevious, handleNext }} />
      </div>
    </>
  )
}

export default function Pokemons() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )
}
