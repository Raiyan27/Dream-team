import Newsletter from "./NewsLetter";

export default function Footer() {
  return (
    <>
      <div className="relative">
        <Newsletter />
        <footer className="pt-64 mt-64 bg-base-200 text-base-content p-10 flex flex-col justify-center items-center">
          <div>
            <img src="./logo-footer.png" alt="" />
          </div>
          <div className="flex justify-evenly w-3/4 md:mt-8 flex-col md:flex-row gap-10">
            <div className="flex flex-col">
              <h6 className="footer-title">About Us</h6>
              <a className="link link-hover">
                We are a passionate team <br />
                dedicated to providing the best <br />
                services to our customers.
              </a>
            </div>
            <div className="flex flex-col">
              <h6 className="footer-title">Quick Links</h6>
              <a className="link link-hover">Home</a>
              <a className="link link-hover">Fixture</a>
              <a className="link link-hover">Teams</a>
              <a className="link link-hover">Schedule</a>
            </div>
            <form>
              <h6 className="footer-title">Subscribe Newsletter</h6>
              <p className="form-control w-80 mb-2">
                Subscribe to our newsletter for the latest updates.
              </p>
              <fieldset className="form-control w-80">
                <div className="join">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered join-item"
                  />
                  <button className="rounded-r-lg bg-gradient-to-r from-pink-400 to-yellow-400 text-white px-6  border-none">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </footer>
        <footer className="footer footer-center bg-base-300 text-base-content p-4">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              BPL Dream 6
            </p>
          </aside>
        </footer>
      </div>
    </>
  );
}
