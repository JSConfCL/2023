import { Key } from "react";
import styled from "@emotion/styled";
import PaymentButton from "../Button/Payment";
import { ViewportSizes } from "../../../styles/theme";

const buttonData = [
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
  justify-content: space-between;
  width: 100%;
  gap: 50px;
`;

const ButtonPaymentMethodCollection = () => {
  return (
    <>
      <ButtonWrapper>
        {buttonData.map((data) => (
          <PaymentButton key={data.id} icon={data.icon} id={""} />
        ))}
      </ButtonWrapper>
    </>
  );
};

export default ButtonPaymentMethodCollection;
