export default function Newsletter() {
  return (
    <>
      <div className="absolute inset-x-0 -top-52 flex justify-center bg-opacity-70">
        <div className="container border mx-auto rounded-xl flex justify-center p-8 backdrop-blur-lg">
          <div
            className="flex flex-col items-center gap-4 border w-full bg-cover p-20 rounded-xl bg-white"
            style={{ backgroundImage: "url('../../public/bg-shadow.png')" }}
          >
            <h1 className="text-3xl font-bold text-black">
              Subscribe to Our News Letter
            </h1>
            <h2 className="text-xl">
              Get the latest updates and news right in your inbox!
            </h2>
            <div className="w-2/4 gap-2  flex ">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full bg-white"
              />
              <button className="btn bg-gradient-to-r from-pink-400 to-yellow-400 text-white px-6 rounded-md border-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
