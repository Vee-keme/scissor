import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Pricing = ({ setSelectedPage }: Props) => {
  return (
    <section id="pricing">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Pricing)}>
        <h1 className="text-green-900">PRICING</h1>

        <p className="text-green-900">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A soluta
          tempora veniam cumque repellat hic ipsa inventore numquam aut vel,
          molestiae voluptate ab facilis? Ad, maxime suscipit dolore fuga
          accusantium officiis reiciendis ab et similique hic, consequatur
          ducimus eius, temporibus ea illum consectetur dolores quam aliquam.
          Magnam explicabo voluptates laborum ipsum vero cum dolorum nobis ea
          ullam id nesciunt, molestias vel laboriosam at. Aut, mollitia. Aut,
          quam sed explicabo quo ullam eveniet sunt? Quis ex nesciunt dolor
          quasi in dolorum magnam tempore commodi odit labore sed delectus illo,
          reprehenderit voluptate possimus a incidunt deleniti ducimus
          consectetur aliquam, magni quod perspiciatis. Fugit eos tenetur sequi?
          Expedita nam nihil dicta quos quam velit? Est ab, repellat amet vitae
          quidem unde autem dolorem libero sed veritatis. Culpa repellendus
          earum, consectetur expedita esse labore velit sed. Voluptatem ratione
          numquam odit laborum ipsum suscipit tempore, non fugiat quisquam autem
          nostrum optio tempora dolor et repudiandae.
        </p>
      </motion.div>
    </section>
  );
};

export default Pricing;
