export default function PlayerCard({ player, onChoose }) {
  const { name, picture, country, price, position, handed } = player;
  return (
    <>
      <div className="p-4 border rounded-xl mx-auto">
        <div className="flex justify-center w-3/4 h-2/4 w-fit">
          <img className="rounded-md w-full" src={picture} alt="" />
        </div>
        <div className="flex flex-col gap-3 mt-2">
          <div className="flex gap-2">
            <img className="w-5" src="./dp.png" alt="" />
            <h1 className="font-bold">{name}</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="flex gap-2">
              <img className="w-5" src="./flag.png" alt="" />
              {country}
            </h1>
            <div>{position}</div>
          </div>
          <hr />
          <h1>Rating</h1>
          <div className="flex justify-between">
            <h1>{handed}</h1>
            <h1>{handed}</h1>
          </div>
          <div className="flex justify-between">
            <h1>${price}</h1>
            <button
              className="btn bg-white hover:bg-yellow-200"
              onClick={onChoose}
            >
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
