import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Analytics = ({ setSelectedPage }: Props) => {
  return (
    <section id="analytics">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Analytics)}
        className="bg-slate-600 p-20"
      >
        <h1 className="text-5xl">Analytics</h1>
        <h2 className="text-9xl">coming soon</h2>
      </motion.div>
    </section>
  );
};

export default Analytics;
