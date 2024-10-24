export default function PlayerCard({ player }) {
  return (
    <>
      <div className="p-4 border rounded-xl">
        <div>
          <img src="{player.picture}" alt="" />
        </div>
        <div>
          <img src="./dp.png" alt="" />
          <h1>{player.name}</h1>
          <div className="flex justify-between">
            <h1>
              <img src="./flag.png" alt="" />
              {player.country}
            </h1>
            <div>{player.position}</div>
          </div>
          <hr />
          <h1>Rating</h1>
          <div className="flex justify-between">
            <h1>{player.handed}</h1>
            <h1>{player.handed}</h1>
          </div>
          <div className="flex justify-between">
            <h1>${player.price}</h1>
            <button className="btn bg-white hover:bg-slate-400">
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
