import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import analyticsLeft from "@/assets/analyticsLeft.png";
import analyticsRight from "@/assets/analyticsRight.png";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Analytics = ({ setSelectedPage }: Props) => {
  return (
    <section id="analytics" className="w-full h-fit relative">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Analytics)}
        className="bg-background-blue p-20 relative"
      >
        {/* find solution to the positioning */}
        <div className=" absolute top-0 left-0 h-fit">
          <img src={analyticsLeft} alt="waves" />
        </div>
        <div className=" absolute bottom-0 right-0 w-1/4 h-1/4">
          <img src={analyticsRight} alt="waves" />
        </div>
        <div className="form ">
          <input type="text" placeholder="Paste URL here..." />
          <div className="flex justify-between ">
            <input type="text " placeholder="Type Alias here" />
          </div>
          <button>Trim Url</button>
          <div>
            <p>
              By clicking TrimURL, I agree to the{" "}
              <span>Terms of Service, Privacy Policy </span>and Use of Cookies
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Analytics;
