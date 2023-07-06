import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import PlanCard from "./PlanCard";
type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Pricing = ({ setSelectedPage }: Props) => {
  return (
    <section id="pricing">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Pricing)}>
        <div className="pricing-text ">
          <h2 className="text-green-900">A prefect price for all your needs</h2>
          <h3>
            From catering for your personal, business, event, social needs, you
            can be rest assured we have you in mind in our pricing.
          </h3>
        </div>
        <div className="h-full px-6 py-12 lg:flex lg:justify-center lg:items-center">
          <div className="pricing-card-container grid lg:grid-cols-3 gap-12 lg:gap-0 ">
            <div className="w-full max-w-md mx-auto">
              <PlanCard
                color="#78e3fc"
                name="Basic"
                description="Free plan for all users"
                features={[
                  "Unlimited URL Shortening",
                  "Basic Link Analytics",
                  "Customizable Short Links",
                  "Standard Support",
                  "Ad-supported",
                ]}
              />
            </div>
            <div className="w-full max-w-md mx-auto">
              <PlanCard
                color="#fcd638"
                name="Professional"
                description="Ideal for business creators"
                price="15"
                features={[
                  "Enhanced Link Analytics",
                  "Custom Branded Domains",
                  "Advanced Link Customization",
                  "Priority Support",
                  "Ad-free Experience",
                ]}
                featured={true}
              />
            </div>
            <div className="w-full max-w-md mx-auto">
              <PlanCard
                color="#ffb5ba"
                name="Teams"
                description="Share with up to 10 users"
                price="25"
                features={[
                  "Team Collaboration",
                  "User Roles and Permissions",
                  "Enhanced Security",
                  "API Access",
                  "Dedicated Account Manager",
                ]}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Pricing;
