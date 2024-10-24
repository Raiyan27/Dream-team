export default function Banner({ creditHandle }) {
  return (
    <>
      <div
        className="hero my-3 py-10 bg-cover bg-center flex items-center justify-center bg-black container mx-auto rounded-3xl"
        style={{ backgroundImage: "url('../../public/bg-shadow.png')" }}
      >
        <div className="hero-content text-center">
          <div className="">
            <img
              src="../../public/banner-main.png"
              alt="Cricket Banner"
              className="mx-auto mb-6"
            />
            <h1 className="text-5xl font-bold text-white mb-4">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="text-white mb-6">Beyond Boundaries Beyond Limits</p>
            <button
              onClick={creditHandle}
              className="btn bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-3 rounded-lg"
            >
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
