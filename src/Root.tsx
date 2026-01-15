import { Link } from "react-router";

export const Root = () => {
  return (
    <div className="space-x-2 space-y-2 flex flex-wrap text-lg">
      <Card
        title="pikatchu - 0"
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
      />
      <Card title="02" image="" />
    </div>
  );
};

const Card = ({ title, image }: { title: string; image: string }) => {
  return (
    <div className="bg-white w-40 h-40">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  );
};


