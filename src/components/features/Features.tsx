import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Features = ({ setSelectedPage }: Props) => {
  return (
    <section id="features">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Features)}
      >
        <p className="text-red-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ad
          fugiat culpa quaerat iure sit nemo. Aut, voluptate tenetur praesentium
          officiis animi fugit perferendis optio neque saepe alias obcaecati
          iusto at provident accusantium repellat consectetur iure, harum soluta
          mollitia assumenda architecto, nobis delectus nisi esse. Aut neque
          voluptatem ea quaerat fugit vero soluta dolores ducimus. Culpa fugit
          nihil beatae doloremque rerum tempore at autem, iure sit sed vel
          quasi, earum eveniet, suscipit velit accusantium est reprehenderit?
          Dolores quibusdam quisquam nostrum dolore, cumque amet ad accusamus
          nesciunt. Amet exercitationem magni possimus ducimus accusantium. At
          delectus, quaerat autem quas dignissimos nisi, suscipit iste tempora
          voluptatem voluptas totam officiis possimus odio molestiae illo, ullam
          assumenda accusantium corporis sequi? Veritatis veniam rem, quibusdam
          vitae consectetur quos laudantium numquam error sed amet quisquam
          delectus maiores dolorem sapiente soluta autem aspernatur, incidunt
          excepturi inventore. Quisquam voluptas nisi iste tenetur facilis
          delectus, blanditiis perferendis incidunt ducimus dolore, eum itaque
          aliquid eligendi eveniet animi in? Amet nemo similique maxime
          blanditiis ab explicabo illo repudiandae, voluptatum quo error
          reprehenderit ratione perferendis? Voluptates, quidem odio? Iusto
          mollitia dolorum neque esse eveniet quae consequuntur, quos et culpa
          deleniti. Quam hic quis aut quisquam eos placeat, qui ipsum obcaecati.
          Nulla officiis pariatur debitis deserunt beatae omnis eveniet rerum
          voluptate modi vero sint eaque doloremque qui ab vitae, eum
          exercitationem aliquid quam expedita nam minus iusto. Et explicabo
          enim eius labore repellat magnam doloremque, laboriosam eligendi
          delectus quam amet impedit corporis! Temporibus accusamus nisi impedit
          iure reprehenderit delectus consequuntur modi at molestiae excepturi
          aut, repellendus numquam nobis tempore labore beatae perferendis optio
          tenetur eveniet dolor quos blanditiis consectetur illo quae.
          Laudantium consequuntur at impedit omnis vitae? Nobis perferendis
          perspiciatis soluta. Possimus numquam animi enim in laborum quisquam
          itaque veniam odio tenetur architecto nobis ab provident corporis
          quod, deleniti repudiandae excepturi nesciunt vero dignissimos!
        </p>
      </motion.div>
    </section>
  );
};

export default Features;
