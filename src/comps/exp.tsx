import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPokemons = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");
  return res.json();
};

function PokemonCard() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemons"],
    queryFn: fetchPokemons,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  if (isLoading) return <p className="text-white text-center">Loading...</p>;
  if (isError) return <p className="text-red-500 text-center">Error loading Pokémon.</p>;

  const pokemons = data?.results || [];

  const nextPokemon = () => setCurrentIndex((prev) => (prev < pokemons.length - 1 ? prev + 1 : 0));
  const prevPokemon = () => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : pokemons.length - 1));

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      {pokemons.length > 0 && (
        <div className="bg-blue-800 p-8 rounded-2xl shadow-lg flex flex-col items-center">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentIndex + 1}.png`}
            alt={pokemons[currentIndex].name}
            className="w-32 h-32"
          />
          <h2 className="text-2xl font-bold capitalize">{pokemons[currentIndex].name}</h2>
          <p className="text-lg">No. {currentIndex + 1}</p>
        </div>
      )}

      <div className="flex mt-4 space-x-4">
        <button onClick={prevPokemon} className="bg-white text-black p-2 rounded-full shadow-lg">
          ←
        </button>
        <button onClick={nextPokemon} className="bg-black text-white p-2 rounded-full shadow-lg">
          →
        </button>
      </div>
    </div>
  );
}

export default PokemonCard;
