import { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";

export default function PlayerContainer() {
  const [players, setPlayers] = useState([]);
  const [selected, setSelected] = useState(false);

  const showSelected = () => {
    setSelected(true);
  };
  const showAvailable = () => {
    setSelected(false);
  };

  useEffect(() => {
    fetch("./players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <>
      <div className="flex justify-between container mx-auto">
        <h1 className="text-3xl font-bold text-black">Available Players</h1>
        <div>
          <button
            className="p-3 bg-black rounded-l-lg  bg-white text-black hover:bg-yellow-500 focus:bg-yellow-400"
            onClick={showAvailable}
          >
            Available
          </button>
          <button
            className="p-3 bg-white rounded-r-lg  bg-white text-black hover:bg-yellow-500 focus:bg-yellow-400"
            onClick={showSelected}
          >
            Selected
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto">
        {!selected ? (
          players.map((player) => <PlayerCard player={player} />)
        ) : (
          <h1>Hello</h1>
        )}
      </div>
    </>
  );
}
