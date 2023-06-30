import logo from "@/assets/logo.png";
import Links from "./Links";
import { SelectedPage } from "@/shared/types";
import { Link } from "react-router-dom";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  return (
    <nav className="">
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-6 bg-slate-00 shadow-lg backdrop-blur-md shadow-gray-500/40`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <div className="flex gap-1">
              <img src={logo} alt="logo" />
              <h1 className="text-xl font-bold text-secondary-300">SCISSOR</h1>
            </div>

            {/* RIGHT SIDE DIV */}
            <div className={`${flexBetween} w-full `}>
              <div className={`${flexBetween} text-sm`}></div>

              <Links
                page="My URLs"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Links
                page="Features"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Links
                page="Pricing"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Links
                page="Analytics"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Links
                page="FAQs"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              {/* <p> my urls</p>
              <p> features</p>
              <p> Pricing</p>
              <p> Analytics</p>
              <p> FAQS</p> */}

              <div className={`${flexBetween} gap-8`}>
                <Link to="/login">
                  <button className="text-secondary-300 ">Log in</button>
                </Link>
                <button className="text-white bg-secondary-300 py-2 px-4 rounded-full">
                  Try for free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;