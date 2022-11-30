import styled from "@emotion/styled";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { ViewportSizes } from "../../../styles/theme";
import {
  GenericBtn,
  Paragraph,
  SubTitle,
  ButtonWrapper,
  Small,
  PaymentButtonWrapper,
} from "../TicketSection/shared";
import {
  paymentSelectedAtom,
  subNavigationAtom,
  ticketSummaryAtom,
  totalPriceAtom,
} from "./CartAtom";
import { ArrowLeft, CreditCard, Loader } from "react-feather";
import { useMutation } from "@tanstack/react-query";
import { createPayment } from "../../helpers/API";
import { ErrorBanner } from "../Banner/ErrorBanner";
import { Anchor } from "../CustomMarkdown";

const CartPaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const buttonData = [
  {
    id: "stripe",
    icon: "/images/stripo.svg",
  },
  {
    id: "mercadopago",
    icon: "/images/mercado-pago.svg",
  },
] as const;

const TertiaryButton = styled.button<{ selected: boolean }>`
  display: flex;
  flex-direction: row;
  background-color: #fff !important;
  padding: 1rem;
  width: 300px;
  justify-content: center;
  cursor: pointer;
  opacity: ${({ selected }) => (selected ? 1 : 0.8)};
  filter: ${({ selected }) => (selected ? "none" : "grayscale(1)")};
  transition-duration: 250ms;
  transition-property: all;

  img {
    width: 50% !important;
    margin: 0.5rem 0;
    height: 30px !important;
  }
`;

const IconLogin = styled.img`
  width: 30% !important;
  height: 19.51px;

  @media (max-width: ${ViewportSizes.Phone}px) {
    width: 40% !important;
  }
`;

const Resume = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const StyledAnchor = styled(Anchor)`
  color: ${({ theme }) => theme.colors.white};
  &:active,
  &:focus,
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const PaymentMethod = () => {
  const continuarAtomValue = useSetAtom(subNavigationAtom);
  const ticketSummaryAtomValue = useAtomValue(ticketSummaryAtom);
  const totalPriceAtomValue = useAtomValue(totalPriceAtom);
  const [paymentSelectorValue, setPaymentSelectorValue] =
    useAtom(paymentSelectedAtom);
  const noPaymentSelector = paymentSelectorValue === null;
  const mutation = useMutation({
    mutationFn: createPayment,
    onSuccess: (data) => {
      window.location.href = data.paymentUrl;
    },
  });
  return (
    <CartPaymentMethodContainer>
      <Resume>
        <SubTitle>Total (CLP)</SubTitle>
        <SubTitle>
          {Intl.NumberFormat("es-CL", {
            currency: "CLP",
            style: "currency",
          }).format(totalPriceAtomValue)}
        </SubTitle>
      </Resume>
      {Object.values(ticketSummaryAtomValue).map((ticketSummary) => (
        <Resume key={ticketSummary.id}>
          <Paragraph>
            <Small>
              {ticketSummary.quantity} x {ticketSummary.name}
            </Small>
          </Paragraph>
          <Paragraph>
            <Small>
              {Intl.NumberFormat("es-CL", {
                currency: "CLP",
                style: "currency",
              }).format(ticketSummary.subTotal)}
            </Small>
          </Paragraph>
        </Resume>
      ))}
      <br />
      <SubTitle>Elige tu metodo de pago:</SubTitle>
      <ErrorBanner title="Error al procesar tu pago">
        Ocurrió un error en el procesamiento de tu pago. Por favor intenta
        nuevamente. Si aun no funciona, envíanos un correo a{" "}
        <StyledAnchor href="mailto:contacto@jsconf.cl">
          contacto@jsconf.cl
        </StyledAnchor>
        .
      </ErrorBanner>
      <PaymentButtonWrapper>
        {buttonData.map((data) => (
          <TertiaryButton
            selected={data.id === paymentSelectorValue}
            onClick={() => setPaymentSelectorValue(data.id)}
            key={data.id}
          >
            <IconLogin src={data.icon} className="loginIcon" />
          </TertiaryButton>
        ))}
      </PaymentButtonWrapper>
      <Paragraph>
        <Small>
          Selecciona Stripe para pagar en dólares (USD), o MercadoPago para
          pagar en pesos Chilenos (CLP).
        </Small>
      </Paragraph>
      {/* TODO: Mostrar mensaje de error */}
      <ButtonWrapper>
        <GenericBtn onClick={() => continuarAtomValue("agreements")}>
          <ArrowLeft size={16} /> Volver
        </GenericBtn>
        <GenericBtn
          disabled={noPaymentSelector || mutation.isLoading}
          onClick={() => {
            if (noPaymentSelector) {
              return;
            }
            mutation.mutate({
              gateway: paymentSelectorValue,
              tickets: ticketSummaryAtomValue.map((ticket) => ({
                id: ticket.id,
                quantity: ticket.quantity,
                email: "hi+jsconftest@fforr.es",
                name: ticket.name,
              })),
            });
          }}
        >
          {mutation.isLoading ? <Loader size={16} /> : <CreditCard size={16} />}{" "}
          Pagar
        </GenericBtn>
      </ButtonWrapper>
    </CartPaymentMethodContainer>
  );
};

export default PaymentMethod;
