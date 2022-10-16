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
  background-color: #fff !important;
  border: 1px solid #000;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  width: 100%;
  justify-content: center;

  img {
    width: 30% !important;
    margin: 0.5rem 0;
    height: unset !important;
  }
  @media (max-width: ${ViewportSizes.Phone}px) {
  }

  @media (min-width: ${ViewportSizes.TabletLandscape}) {
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
  }
`;

const PaymentButton = (props: ButtonInfo) => {
  return (
    <TertiaryButton key={props?.id!}>
      <IconLogin src={props?.icon!} className="loginIcon" />
    </TertiaryButton>
  );
};

export default PaymentButton;
