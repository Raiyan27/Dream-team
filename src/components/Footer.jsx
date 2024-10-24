import Newsletter from "./NewsLetter";

export default function Footer() {
  return (
    <>
      <div className="relative">
        <Newsletter />
        <footer className="pt-52 mt-64 bg-base-200 text-base-content p-10 flex flex-col justify-center items-center">
          <div>
            <img src="./logo-footer.png" alt="" />
          </div>
          <div className="flex justify-evenly w-3/4 mt-8">
            <div className="flex flex-col">
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </div>
            <div className="flex flex-col">
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </div>
            <form>
              <h6 className="footer-title">Newsletter</h6>
              <fieldset className="form-control w-80">
                <label className="label">
                  <span className="label-text">Enter your email address</span>
                </label>
                <div className="join">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered join-item"
                  />
                  <button className="btn bg-yellow-400 join-item text-black">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </footer>
      </div>
    </>
  );
}
