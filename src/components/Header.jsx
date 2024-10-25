export default function Header({ balance }) {
  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 bg-opacity-70 backdrop-blur-lg z-50 px-40">
        <div className="flex-1 container mx-auto">
          <img className="w-20 h-20" src="./logo.png" alt="" />
        </div>
        <div className="flex justify-evenly ">
          <ul className="menu menu-horizontal px-1 text-xl md:flex hidden">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
          <button className="btn bg-base-100 border text-black hover:bg-base-100">
            {balance.toLocaleString()} Coin
            <img src="./currency.png" alt="" />
          </button>
        </div>
      </div>
    </>
  );
}
