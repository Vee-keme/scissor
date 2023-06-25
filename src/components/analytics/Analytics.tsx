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
      >
        <h1>Analytics</h1>
        <p className="text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tempore
          enim autem consequuntur quidem impedit laborum voluptas architecto
          aperiam maiores, rerum temporibus sed ducimus vel earum quisquam.
          Ullam deserunt minus numquam dolorem? Esse nam, nesciunt, temporibus
          in quaerat optio asperiores est sunt consequatur doloremque rem totam
          dolor facilis magnam sequi corrupti. Aliquid soluta nisi quos
          voluptates pariatur minus animi doloribus ex placeat facilis itaque
          saepe, quae molestias hic aut perferendis accusamus assumenda sunt
          libero aperiam error! Ad suscipit totam aut explicabo optio. Iure quae
          labore quis vitae aliquam voluptas id reprehenderit. Tempora beatae
          maiores fugit neque veniam. Pariatur earum nobis cumque rerum
          voluptates quam cum vel nihil enim, soluta possimus, perspiciatis sunt
          rem temporibus tempora quasi quis commodi. Rerum obcaecati blanditiis
          itaque rem quis voluptatem fugit, quia culpa magni, tenetur pariatur,
          ex ipsam nulla! Consequatur asperiores inventore assumenda
          voluptatibus aliquid vitae vero. Nam rerum molestias minima quos ea
          necessitatibus eveniet! Minima numquam voluptas nisi ipsum incidunt
          nemo ex, aliquam repellendus architecto saepe vel eum doloribus natus
          tempore quo odit magnam odio quis itaque distinctio iure hic.
          Molestias enim natus nesciunt eveniet excepturi, hic quia suscipit
          reprehenderit vero et magnam perferendis porro. Beatae veritatis, est
          aliquam aperiam corrupti labore quos non?
        </p>
      </motion.div>
    </section>
  );
};

export default Analytics;
