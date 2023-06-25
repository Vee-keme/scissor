import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const MyUrls = ({ setSelectedPage }: Props) => {
  //try and delete this
  // const [selectedPage, setSelectedPage] = useState<SelectedPage>(
  //   SelectedPage.MyURLs
  // );
  //

  const flexBetween = "flex items-center justify-between";
  const flexCenter = "flex items-center justify-center";
  return (
    <section
      id="my urls"
      className={`w-full flex flex-col items-center self-center py-[5%] md:h-full md:pb-0`}
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.MyURLs)}
        className={`h-full w-full ${flexCenter} flex-col `}
      >
        {/* <p>
          Optimize Your Online Experience with Our Advanced URL Shortening
          Solution{" "}
        </p> */}
        <div className={`Optimize w-[948px] h-[200px]`}>
          <span className="text-neutral-900 text-[48px] font-normal leading-10 ">
            {" "}
            Optimize Your Online Experience with Our Advanced
          </span>
          <span className="text-blue-700 text-[48px] font-normal leading-10">
            {" "}
            URL Shortening
          </span>
          <span className="text-neutral-900 text-[48px] font-normal leading-10">
            {" "}
            Solution
          </span>
        </div>
        <p className="my-6 text-neutral-900 font-semibold text-xl w-4/6">
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, branded links, and domain customization options
          to reinforce your brand presence and enhance user engagement.
        </p>
        <div>
          <Link to="/signup">
            <button className="rounded-full  border border-blue-700 py-2.5 px-8  text-white focus:outline-none focus:z-10 bg-blue-700 mr-4 text-sm font-medium hover:text-blue-500 hover:bg-white">
              sign up{" "}
            </button>
          </Link>

          <button className="text-blue-700">Learn more</button>
          {/* <Link to="/login">Learn more</Link> */}
        </div>
      </motion.div>
    </section>
  );
};

export default MyUrls;
