import styled from "@emotion/styled";
import { Key } from "react";

import { ViewportSizes } from "../../../styles/theme";
import LoginButton from "../Button/Login";

const ButtonData: Array<{ id: number; text: string; icon: string }> = [
  {
    id: 1,
    text: "Ingresa con Github",
    icon: "/images/github-icon.svg",
  },
  {
    id: 2,
    text: "Ingresa con Google",
    icon: "/images/gmail-icon.svg",
  },
];

const ButtonWrapper = styled.section`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${ViewportSizes.Desktop}px) {
    margin: 1rem 0 5rem 0;
  }
`;

const ButtonLoginCollection = () => {
  return (
    <>
      <ButtonWrapper>
        {ButtonData.map(
          (data: {
            id: Key | null | undefined;
            icon: string;
            text: string | undefined;
          }) => {
            return (
              <LoginButton
                key={data.id}
                icon={data.icon}
                text={data.text}
                id={""}
              />
            );
          }
        )}
      </ButtonWrapper>
    </>
  );
};

export default ButtonLoginCollection;
