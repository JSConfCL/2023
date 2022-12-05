import styled from "@emotion/styled";
import {
  AnimatePresence,
  motion,
  MotionProps,
  Transition,
} from "framer-motion";
import { useAtomValue } from "jotai";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

import { Agreements } from "./Agreements";
import { subNavigationAtom } from "./CartAtom";
import PaymentMethod from "./PaymentMethod";
import { TicketSelection } from "./TicketSelection";
import { SectionTile } from "../TicketSection/Title";
import { Alert } from "../common/app";

import { me } from "../../helpers/API";

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const A = styled.a`
  font-weight: bold;
`;

const useAnimation = (transition: Transition = {}): MotionProps => {
  return {
    layout: "position" as "position",
    initial: { opacity: 0, translateX: -100 },
    animate: { opacity: 1, translateX: 0 },
    exit: { opacity: 0, translateX: 100 },
    transition: {
      ...transition,
      type: "spring",
      damping: 15,
    },
  };
};

const Header = () => {
  const subNavigationAtomValue = useAtomValue(subNavigationAtom);
  const animation = useAnimation();

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      {subNavigationAtomValue === "ticket_selection" && (
        <Wrapper key={subNavigationAtomValue} {...animation}>
          <SectionTile
            status="active"
            number="01."
            text="Selecciona tus tickets."
          />
        </Wrapper>
      )}
      {subNavigationAtomValue === "agreements" && (
        <Wrapper key={subNavigationAtomValue} {...animation}>
          <SectionTile
            status="active"
            number="02."
            text="Revisa nuestras politicas de compra."
          />
        </Wrapper>
      )}
      {subNavigationAtomValue === "payment_selection" && (
        <Wrapper key={subNavigationAtomValue} {...animation}>
          <SectionTile
            status="active"
            number="03."
            text="Selecciona tu metodo de pago."
          />
        </Wrapper>
      )}
    </AnimatePresence>
  );
};

export const CartContainer = () => {
  const { isLoading: isLoadingUser, data: user } = useQuery(["me"], me);
  const subNavigationAtomValue = useAtomValue(subNavigationAtom);
  const animation = useAnimation({ delay: 0.025 });

  if (isLoadingUser) {
    return <div />;
  }

  const hasEmailError = Boolean(user?.id && !user.email);

  return (
    <>
      <Header />
      {hasEmailError ? (
        <Alert title="Informacion Importante:">
          Pudimos crear tu cuenta. Pero no conseguimos correo electrónico
          asociado. Por lo tanto, no podremos comunicarnos contigo o procesar tu
          compra. Te pedimos registres un correo electrónico para poder
          continuar con la compra de tickets y además poder informarte los
          próximos pasos. <br />
          <br />
          Puedes configurar tu correo electrónico en{" "}
          <Link href={"/settings"} passHref>
            <A>tu página de configuración de cuenta</A>
          </Link>{" "}
        </Alert>
      ) : null}
      <AnimatePresence mode="popLayout" initial={false}>
        {subNavigationAtomValue === "ticket_selection" && (
          <Wrapper key={subNavigationAtomValue} {...animation}>
            <TicketSelection isDisabled={hasEmailError} />
          </Wrapper>
        )}
        {subNavigationAtomValue === "agreements" && (
          <Wrapper key={subNavigationAtomValue} {...animation}>
            <Agreements />
          </Wrapper>
        )}
        {subNavigationAtomValue === "payment_selection" && (
          <Wrapper key={subNavigationAtomValue} {...animation}>
            <PaymentMethod />
          </Wrapper>
        )}
      </AnimatePresence>
    </>
  );
};
