import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

const Links = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, " ");
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-secondary-300" : ""
      } transition duration-500 hover:text-green-300`}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
      }}
    >
      {page}
    </AnchorLink>
  );
};
export default Links;
