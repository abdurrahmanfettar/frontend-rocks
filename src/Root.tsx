import React from "react";

type CardProps = {
  title: string;
  image: string;
};

export const Root = () => {
  return (
    <div className="flex flex-wrap gap-2 text-lg">
      <Card
        title="Pikachu - 0"
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
      />
      <Card
        title="02"
        image=""
      />
    </div>
  );
};

const Card = ({ title, image }: CardProps) => {
  const placeholder =
    "https://via.placeholder.com/160x160?text=No+Image";

  return (
    <div className="bg-white w-40 h-40 rounded-md shadow-md overflow-hidden">
      <img
        src={image || placeholder}
        alt={title}
        className="w-full h-28 object-cover"
      />
      <div className="p-2 text-center font-semibold">
        {title}
      </div>
    </div>
  );
};


