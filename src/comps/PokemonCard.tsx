import { useQuery } from "@tanstack/react-query";
import { Loader } from '@mantine/core';
import { MantineProvider } from "@mantine/core";

// @ts-ignore
export default function PokemonCard({ pokemon, error, isLoading }) {
  const { data: pokemonDetails, isLoading: isFetchingDetails } = useQuery({
    queryKey: ["pokemon-details", pokemon?.url],
    queryFn: () =>
      fetch(pokemon.url)
        .then((res) => res.json()),
    enabled: !!pokemon,
  });
  
  if (isLoading || isFetchingDetails) {
    return (
      <MantineProvider >
        <div className="w-80 h-96 bg-[#03446a] text-white flex flex-col items-center justify-center rounded-2xl shadow-lg p-6" >
          <Loader color="red" type="bars" />
        </div>
      </MantineProvider>
    );
  }

  if (error) {
    return (
      <MantineProvider>
        <div className="w-80 h-96 bg-[#03446a] text-white flex flex-col items-center justify-center rounded-2xl shadow-lg p-6" >
          <figure className="flex flex-col items-center">
            <img
              width="100px"
              height="100px"
              src="https://ui.dev/images/courses/pokemon-unknown.png"
              alt="Unknown Pokemon Image"
            />
            <figcaption className="text-center mt-4">
              <h4 className="text-xl font-bold">Oops.</h4>
              <h6 className="text-sm opacity-75">{error}</h6>
            </figcaption>
          </figure>
        </div>
      </MantineProvider>
    )
  }

  return (
    <MantineProvider>
      <div className="w-80 h-96 bg-[#03446a] text-white flex flex-col items-center justify-center rounded-2xl shadow-lg p-6">
        <figure className="flex flex-col items-center">
          <img
            width="475px"
            height="475px"
            src={pokemonDetails?.sprites?.front_default}
            alt={pokemonDetails?.name}
          />
          <figcaption className="text-center mt-4">
            <h4 className="text-xl font-bold capitalize">{pokemonDetails?.name}</h4>
            <h6 className="text-sm opacity-75">No. {pokemonDetails?.id}</h6>
          </figcaption>
        </figure>
      </div>
    </MantineProvider>
  );
}
