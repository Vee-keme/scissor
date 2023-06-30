import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Features = ({ setSelectedPage }: Props) => {
  return (
    <section id="features" className="w-full h-full bg-gray-100  ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Features)}
        className="w-5/6 flex justify-between items-center "
      >
        <div className=" flex items-center justify-between">
          <div>left</div>
          <div>right</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
