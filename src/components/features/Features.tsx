import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Features = ({ setSelectedPage }: Props) => {
  return (
    <section id="features" className="w-full h-full bg-blue-50  ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Features)}
        className=" w-full flex items-center justify-center "
      >
        <div className="itemsContainer flex flex-col w-full ">
          {/* TOP ITEMS */}
          <div className="top-items bg-red-300 w-full px-[10%] py-10 flex justify-between  gap-10">
            <div>
              <h3>One Stop.</h3>
              <h3>
                Four <span>Possibilities.</span>
              </h3>
            </div>
            <div>
              {/* <table className="w-full">
                <tr>
                  <th>3M</th>
                  <th>60M</th>
                  <th>1B</th>
                  <th>300K</th>
                </tr>
                <tr>
                  <td className="text-center">Active users</td>
                  <td className="text-center">Links & QR code created</td>
                  <td className="text-center">
                    Clicked and Scanned connections
                  </td>
                  <td className="text-center">App integrations</td>
                </tr>
              </table> */}
              <div className="flex justify-between items-center">
                <div>
                  <h3>3M</h3>
                  <p>Active users</p>
                </div>

                <div>
                  <h3>60M</h3> <p>Links & QR code created</p>
                </div>
                <div>
                  {" "}
                  <h3>1B</h3> <p>Clicked and Scanned connections</p>
                </div>
                <div>
                  <h3>300K</h3> <p>App integrations</p>
                </div>
              </div>
            </div>
          </div>

          {/* WHY CHOSE SCISSOR */}
          <div className="whychose">
            <div>why chose scissor</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
