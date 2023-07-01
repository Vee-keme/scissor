import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import linkIcon from "@/assets/link_icon.png";
// import { whyChose } from "@/assets/whychose";

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
          <div className="whychosebox flex justify-between items-center gap-5 w-full h-full px-[10%]">
            <div className="leftbox w-[40%] flex items-start justify-start">
              <div className="pt-0">
                <h3>
                  Why chose <span>Scissors</span>
                </h3>
                <p>
                  Scissors is the hub of everything that has to do with link
                  your management.We shorten your URLs, allow you creating
                  custom ones for your personal, business, event usage. Our
                  swift QR code creation, management and usage tracking with
                  advanced analytics for all of these is second to none.{" "}
                </p>
              </div>
            </div>

            <div className="rightbox w-[60%] flex items-center justify-center">
              <div className="centecarditems flex justify-between items-center flex-wrap">
                {/* {console.log(`&{whyChose: ReactNode}`)} */}
                <div className="card w-[50%] p-4 ">
                  <img
                    src={linkIcon}
                    alt="link icon"
                    className="relative  top-0 left-0 pb-5"
                  />
                  <h3 className="font-extrabold text-2xl pb-2">
                    URL Shortening
                  </h3>
                  <p>
                    Scissor allows you to shorten URLs of your business, events.
                    Shorten your URL at scale, URL redirects.
                  </p>
                </div>
                <div className="card w-[50%] p-4 ">
                  <img
                    src={linkIcon}
                    alt="link icon"
                    className="relative  top-0 left-0 pb-5"
                  />
                  <h3 className="font-extrabold text-2xl pb-2">
                    URL Shortening
                  </h3>
                  <p>
                    Scissor allows you to shorten URLs of your business, events.
                    Shorten your URL at scale, URL redirects.
                  </p>
                </div>
                <div className="card w-[50%] p-4 ">
                  <img
                    src={linkIcon}
                    alt="link icon"
                    className="relative  top-0 left-0 pb-5"
                  />
                  <h3 className="font-extrabold text-2xl pb-2">
                    URL Shortening
                  </h3>
                  <p>
                    Scissor allows you to shorten URLs of your business, events.
                    Shorten your URL at scale, URL redirects.
                  </p>
                </div>
                <div className="card w-[50%] p-4 ">
                  <img
                    src={linkIcon}
                    alt="link icon"
                    className="relative  top-0 left-0 pb-5"
                  />
                  <h3 className="font-extrabold text-2xl pb-2">
                    URL Shortening
                  </h3>
                  <p>
                    Scissor allows you to shorten URLs of your business, events.
                    Shorten your URL at scale, URL redirects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
