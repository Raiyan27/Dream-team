export default function Header({ balance }) {
  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 bg-opacity-70 backdrop-blur-lg z-50 px-40">
        <div className="flex-1">
          <img className="w-20 h-20" src="./logo.png" alt="" />
        </div>
        <div className="flex justify-evenly ">
          <ul className="menu menu-horizontal px-1 text-xl lg:flex hidden">
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
          <div className="dropdown dropdown-bottom dropdown-end md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-white border-none"
            >
              <img className="h-6" src="./menu.png" alt="" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixtures</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <button className="btn bg-base-100 border text-black hover:bg-base-100">
            {balance.toLocaleString()} Coin
            <img src="./currency.png" alt="" />
          </button>
        </div>
      </div>
    </>
  );
}
