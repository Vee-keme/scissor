import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Faqs = ({ setSelectedPage }: Props) => {
  return (
    <section id="faqs">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.FAQs)}>
        <h1 className="text-blue-900">FAQS</h1>
        <p className="text-blue-900">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          reprehenderit praesentium voluptatem illo cupiditate! Ipsa et
          doloremque dolorem ducimus expedita! Molestiae, asperiores? Nobis
          nulla, odit facilis maiores voluptate eum reprehenderit quaerat, ut
          corporis rem explicabo, dicta natus omnis? Odit maiores dolores autem
          error, excepturi ea rem vero a commodi, eius cumque voluptatum
          perspiciatis voluptate? Maiores consectetur illum vitae minus
          doloribus recusandae provident id corporis vero quas! Dolorem dolore
          vitae animi velit vero culpa nulla optio eaque autem maxime quam
          delectus exercitationem quas nostrum nisi sint similique, voluptate
          libero suscipit numquam recusandae dolorum quos eveniet cupiditate.
          Quis est nobis quibusdam, incidunt et libero corrupti. Quibusdam cum
          commodi eum odio eveniet facilis nam veniam fuga molestias dolore
          consectetur aut, delectus inventore rem voluptatum nisi voluptatem id
          natus. Quis unde soluta tempore pariatur vero incidunt alias cum
          provident. Eius est maiores odit libero? Fugit, adipisci! Sit labore
          aliquid sequi quasi eius tempora ducimus aperiam officiis blanditiis.
          Sunt dolorum ab repellat ipsum laborum adipisci pariatur expedita est,
          possimus vel culpa velit quidem aperiam beatae asperiores ipsa vero
          quia cumque deserunt maiores voluptates illum? Nihil necessitatibus
          excepturi neque cumque. Neque magni quae adipisci ratione? Velit
          sapiente in accusamus quod iure tempore non, reiciendis nostrum cumque
          omnis itaque nulla porro nesciunt. Perspiciatis pariatur ea modi odit
          molestiae voluptatum quasi inventore cupiditate suscipit placeat
          voluptatem, odio numquam. Iusto incidunt ipsa consequatur iure commodi
          odio unde maxime, illo alias aliquam magnam culpa eum modi quas iste
          necessitatibus veritatis porro, fugiat impedit molestias similique a
          vel. Ipsa ratione laudantium animi deserunt tempora! Quibusdam
          veritatis minima a eligendi! Veritatis non voluptates nihil facilis
          qui incidunt libero voluptate temporibus officiis et, molestiae odit
          consequuntur voluptas esse nemo aperiam consequatur dolores quidem
          tempore saepe aut blanditiis numquam quisquam earum. Nisi enim
          voluptate incidunt dolor iure ipsum delectus molestias harum facere,
          architecto distinctio?
        </p>
      </motion.div>
    </section>
  );
};

export default Faqs;
