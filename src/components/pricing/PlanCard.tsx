// import {checkIcon} from "@heroicons/react/solid"
import { CheckIcon } from "@heroicons/react/20/solid";
interface Props {
  name: string;
  description: string;
  price?: string;
  features: string[];
  color?: string;
  featured?: boolean;
}

const PlanCard = ({ name, description, price, features, featured }: Props) => {
  return (
    <>
      {featured ? (
        <div className="flex  flex-col py-8 px-10 bg-gray-700 border border-secondary-300 border-opacity-20 rounded-md shadow-xl cursor-pointer order-first lg:order-none lg:scale-110 lg:transform lg:z-10">
          <h1 className="mb-5 text-xl font-medium"> {name}</h1>

          <div className="mb-5 flex items-end text-4xl font-black">
            {price ? (
              <>
                <div>${price}/month</div>
              </>
            ) : (
              "Free"
            )}
          </div>
          <p className="mb-5"> {description}</p>
          <ul className="mb-10 flex flex-col gap-y-2">
            {features.map((feature, index) => (
              <li className="flex items-center" key={index}>
                {" "}
                <CheckIcon className="text-primary-text w-6 h-6 flex-shrink-0" />{" "}
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex  flex-col py-8 px-10 bg-white border border-secondary-300 border-opacity-20 rounded-md shadow-xl cursor-pointer">
          <h1 className="mb-5 text-xl font-medium"> {name}</h1>

          <div className="mb-5 flex items-end text-4xl font-black">
            {price ? (
              <>
                <div>${price}/month</div>
              </>
            ) : (
              "Free"
            )}
          </div>
          <p className="mb-5"> {description}</p>
          <ul className="mb-10 flex flex-col gap-y-2">
            {features.map((feature, index) => (
              <li className="flex items-center" key={index}>
                {" "}
                <CheckIcon className="text-primary-text w-6 h-6 flex-shrink-0" />{" "}
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default PlanCard;
