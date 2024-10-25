import { useEffect, useState, useRef } from "react";
import PlayerCard from "./PlayerCard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PropTypes from "prop-types";

export default function PlayerContainer({ balance, setBalance }) {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [selected, setSelected] = useState(false);

  const availableButtonRef = useRef(null);

  const showSelected = () => {
    setSelected(true);
  };

  const showAvailable = () => {
    setSelected(false);
    availableButtonRef.current.focus();
  };

  useEffect(() => {
    fetch("./players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const handleSelectPlayer = (player) => {
    if (selectedPlayers.length >= 6) {
      toast.error("You can only select up to 6 players!");
      return;
    }

    if (balance >= player.price) {
      if (!selectedPlayers.some((p) => p.id === player.id)) {
        setSelectedPlayers([...selectedPlayers, player]);
        setBalance(balance - player.price);
        toast.success(`${player.name} has been selected!`);
      } else {
        toast.error(`${player.name} is already selected.`);
      }
    } else {
      toast.error("Not enough balance to add this player.");
    }
  };

  const handleRemovePlayer = (playerId) => {
    const updatedPlayers = selectedPlayers.filter(
      (player) => player.id !== playerId
    );
    setSelectedPlayers(updatedPlayers);

    const removedPlayer = selectedPlayers.find(
      (player) => player.id === playerId
    );
    if (removedPlayer) {
      setBalance(balance + removedPlayer.price);
      toast.info(`${removedPlayer.name} has been removed.`);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex justify-between container mx-auto items-center my-4">
        {!selected ? (
          <h1 className="text-3xl font-bold text-black">Available Players</h1>
        ) : (
          <h1 className="text-3xl font-bold text-black">
            Selected Players ({selectedPlayers.length}/6)
          </h1>
        )}

        <div>
          <button
            ref={availableButtonRef}
            className="p-3 bg-white rounded-l-lg text-black hover:bg-yellow-500 focus:bg-yellow-400"
            onClick={showAvailable}
          >
            Available
          </button>
          <button
            className="p-3 bg-white rounded-r-lg text-black hover:bg-yellow-500 focus:bg-yellow-400"
            onClick={showSelected}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {!selected ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto">
          {players.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              onChoose={() => handleSelectPlayer(player)}
            />
          ))}
        </div>
      ) : (
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
            {selectedPlayers.map((player) => (
              <div
                key={player.id}
                className="flex justify-between items-center p-4 border border-gray-300 rounded-lg bg-white shadow-md"
              >
                <div className="flex items-center gap-4">
                  <img
                    className="rounded-full w-12 h-12"
                    src={player.picture || "./default-avatar.png"}
                    alt={player.name}
                  />
                  <div>
                    <h2 className="font-bold text-lg">{player.name}</h2>
                    <p className="text-sm text-gray-500">{player.position}</p>
                  </div>
                </div>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => handleRemovePlayer(player.id)}
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
          {selectedPlayers.length < 6 && (
            <button
              className="btn bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-3 rounded-lg mt-4"
              onClick={showAvailable}
            >
              Add More Players
            </button>
          )}
        </div>
      )}
    </>
  );
}

PlayerContainer.propTypes = {
  balance: PropTypes.string.isRequired,
  setBalance: PropTypes.string.isRequired,
};
