import { SelectedPage } from "@/shared/types";
import { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Features from "@/components/features/Features";
import MyUrls from "@/MyURLs/MyUrls";
import Pricing from "@/components/pricing/Pricing";
import Analytics from "@/components/analytics/Analytics";
import Faqs from "@/components/faqs/Faqs";
// type Props = {};

const Home = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.MyURLs
  );
  return (
    <div className="">
      <section className="app bg-primary-100 w-screen h-screen">
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

        <MyUrls selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        {/* <create my url component for the main home component> */}
        <Features
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Pricing
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Analytics
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Faqs selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </section>
    </div>
  );
};

export default Home;
