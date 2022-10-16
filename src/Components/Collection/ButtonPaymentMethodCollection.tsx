import { Key } from "react";
import styled from "@emotion/styled";
import PaymentButton from "../Button/Payment";
import { ViewportSizes } from "../../../styles/theme";

const ButtonData: { id: number; icon: string }[] = [
  {
    id: 1,
    icon: "/images/stripo.svg",
  },
  {
    id: 2,
    icon: "/images/mercado-pago.svg",
  },
];

const ButtonWrapper = styled.section`
  display: flex;
  width: 100%;

  @media (max-width: ${ViewportSizes.Phone}px) {
    gap: 50px;
    margin: 1rem 0;
  }

  @media (min-width: ${ViewportSizes.Desktop}px) {
    gap: 50px;
    padding: 0 4rem 0 0;
    margin: 1.5rem 0 0 4rem;
  }
`;

const ButtonPaymentMethodCollection = () => {
  return (
    <>
      <ButtonWrapper>
        {ButtonData.map(
          (data: { id: Key | null | undefined; icon: string }) => {
            return <PaymentButton key={data.id} icon={data.icon} id={""} />;
          }
        )}
      </ButtonWrapper>
    </>
  );
};

export default ButtonPaymentMethodCollection;
