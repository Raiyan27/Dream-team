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
      <div className="flex justify-between container mx-auto items-center my-4">
        {!selected ? (
          <h1 className="text-3xl font-bold text-black">Available Players</h1>
        ) : (
          <h1 className="text-3xl font-bold text-black">Selected Players</h1>
        )}

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

      {!selected ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto">
          {players.map((player) => (
            <PlayerCard player={player} />
          ))}
        </div>
      ) : (
        <div className="container mx-auto">
          <h1>hello</h1>
          <button
            className="btn bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-3 rounded-lg"
            onClick={showAvailable}
          >
            Add More Players
          </button>
        </div>
      )}
    </>
  );
}
