import { useEffect, useState } from "react";
import { PokeAPI } from "./api";
import pokemonImg from "./Pokemon-Malamar.png"; 

type Pokemon = {
  id: number;
  image: string;
  name: string;
  types: string[];
};

export function Root() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    PokeAPI.listPokemons().then(async (response) => {
      const data = await Promise.all(
        response.results.map(async (item: any) => {
          const detail = await PokeAPI.getPokemonByName(item.name);

          return {
            id: detail.id,
            name: detail.name,
            image:
              detail.sprites.other["official-artwork"].front_default,
            types: detail.types.map((t: any) => t.type.name),
          };
        })
      );

      setPokemons(data);
    });
  }, []);

  return (
    <div className="flex flex-wrap gap-6 p-10">
      {pokemons.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          types={item.types}
        />
      ))}
    </div>
  );
}

type CardProps = {
  id: number;
  image: string;
  name: string;
  types: string[];
};

const Card = ({ id, image, name, types }: CardProps) => {
  return (
    <div className="relative bg-green-500 w-64 h-80 text-center flex flex-col items-center justify-center rounded-xl shadow-lg p-4">
      <div className="absolute top-4 left-6 font-bold text-gray-800 text-2xl">
        {id}
      </div>

      <img
        src={image || pokemonImg}
        alt={name}
        className="w-40 h-40 object-contain mb-4"
      />

      <span className="font-bold uppercase tracking-widest text-2xl">
        {name}
      </span>

      <div className="absolute bottom-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-lg text-sm font-bold uppercase shadow-sm">
        {types[0]}
      </div>
    </div>
  );
};
