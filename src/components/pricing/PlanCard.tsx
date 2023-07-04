interface Props {
  name: string;
  description: string;

  price?: string;
  features: string[];
  color: string;
}

const PlanCard = ({ name, description, price, features, color }: Props) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="flex min-h-[428px] w-[320px] flex-col rounded-3xl p-8 "
    >
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
        {features.map((feature) => (
          <li className="flex items-center"> {feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlanCard;
