export default function Header({ balance }) {
  return (
    <>
      <div className="navbar bg-base-100 container mx-auto">
        <div className="flex-1">
          <img src="../../public/logo.png" alt="" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-xl">
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
            <button className="btn bg-base-100 border text-black hover:bg-base-100">
              {balance.toLocaleString()} Coin
              <img src="../../public/currency.png" alt="" />
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}
