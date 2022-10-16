import styled from "@emotion/styled";
import { ViewportSizes } from "../../../styles/theme";

type ButtonInfo = {
  id: number | string;
  text?: string;
  icon?: string;
};

const IconLogin = styled.img`
  width: 30% !important;
  height: 19.51px;

  @media (max-width: ${ViewportSizes.Phone}px) {
    width: 40% !important;
  }
`;

const TertiaryButton = styled.button`
  display: flex;
  flex-direction: row;
  height: 43px;
  background-color: #fff !important;
  border: 1px solid #000;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  width: 100%;

  p {
    font-size: 1rem;
    font-weight: 700;
    color: #000;
    width: 70%;
  }
  @media (max-width: ${ViewportSizes.Phone}px) {
    justify-content: center;

    p {
      width: 60%;
    }
  }

  @media (min-width: ${ViewportSizes.TabletLandscape}) {
    p {
      width: 50%;
    }
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
  }
`;

const LoginButton = (props: ButtonInfo) => {
  return (
    <TertiaryButton key={props?.id!}>
      <IconLogin src={props?.icon!} className="loginIcon" />
      <p>{props?.text!} </p>
    </TertiaryButton>
  );
};

export default LoginButton;
