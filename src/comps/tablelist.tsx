import {
    QueryClientProvider,
    QueryClient,
    useInfiniteQuery
} from "@tanstack/react-query";

const queryClient = new QueryClient()

const List = () => {

    const { data,
        isLoading,
        isError,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery
            ({
                queryKey: ["pokemon-list"],
                queryFn: ({ pageParam }) =>
                    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${pageParam}&limit=10`)
                        .then((res) => res.json()),
                initialPageParam: 10,
                getNextPageParam: (lastPage) => {
                    if (lastPage.next) {
                        const url = new URL(lastPage.next);
                        return parseInt(url.searchParams.get("offset") || "0");
                    }
                    return undefined;
                },
            });
    
    if (isLoading) return <p>Loading Pokémon...</p>;
    if (isError) return <p>Something went wrong.</p>;
  

    // @ts-ignore
    const allPokemon = data.pages.flatMap((page) => page.results);

    return (
        <div className="p-4 h-screen overflow-y-auto">
            <h1 className="text-2xl font-bold mb-2 flex justify-center mt-6">Pokémon List</h1>
            <table className=" w-full border border-gray-300">
                <thead>
                    <tr className="bg-[#03446a]">
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">URL</th>
                    </tr>
                </thead>
                <tbody key={allPokemon.length} className="text-sm">

                    {allPokemon.map((poke) => (
                        <tr key={poke.name}>
                            <td className="border px-4 py-2 capitalize">{poke.name}</td>
                            <td className="border px-4 py-2 text-blue-500">
                                <a href={poke.url} target="_blank" rel="noopener noreferrer">
                                    {poke.url}
                                </a>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

            {hasNextPage && (<div className="flex justify-center mt-6">
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                    onClick={() => fetchNextPage()}
                    disabled={isFetchingNextPage}
                >
                    {isFetchingNextPage ? "Loading more..." : "More Pokemons"}
                </button>
            </div>
            )}
        </div>
    );
};

export default function PokemonList() {
    return (
        <QueryClientProvider client={queryClient}>
            <List />
        </QueryClientProvider>
    );
}