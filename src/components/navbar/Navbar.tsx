import { useState } from "react";
import logo from "@/assets/logo.png";
import Links from "./Links";

type Props = {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={logo} alt="logo" />

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
                <button>Log in</button>
                <button>Try for free</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
