import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { faqs } from "@/assets/dataset";
import SingleFaq from "./SingleFaq";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Faqs = ({ setSelectedPage }: Props) => {
  return (
    <section id="faqs">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.FAQs)}>
        <h1 className="text-blue-900">FAQS</h1>
        <div className="max-w-[700px] w-full mx-auto mt-20 flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const { question, answer } = faq;
            return (
              <div key={i}>
                <SingleFaq question={question} answer={answer} />
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Faqs;
