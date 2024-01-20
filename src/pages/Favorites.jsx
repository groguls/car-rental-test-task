import { LinkButton } from "../components/buttons/LinkButton";
import { MainButton } from "../components/buttons/MainButton";
import { TextButton } from "../components/buttons/TextButton";
import { MainInput } from "../components/inputs/MainInput";
import { mainButtonStyle } from "../styles/styles";

export const Favorites = () => {
  return (
    <div>
      <MainButton>Rental car</MainButton>
      <MainButton sx={{ ...mainButtonStyle, padding: "12px 99px" }}>
        Learn more
      </MainButton>
      <TextButton>Load more</TextButton>

      <LinkButton to={"/"}>Catalog</LinkButton>
      <br />
      <MainInput />
      <MainButton sx={{ ...mainButtonStyle, padding: "14px 44px" }}>
        Search
      </MainButton>
    </div>
  );
};
