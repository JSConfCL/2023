import styled from "@emotion/styled";
import {
  AnimatePresence,
  motion,
  MotionProps,
  Transition,
} from "framer-motion";
import { useAtomValue } from "jotai";
import { SectionTile } from "../TicketSection/Title";
import { Agreements } from "./Agreements";
import { subNavigationAtom } from "./CartAtom";
import PaymentMethod from "./PaymentMethod";
import { TicketSelection } from "./TicketSelection";

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const Spacer = styled.div`
  height: 90px;
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
  const subNavigationAtomValue = useAtomValue(subNavigationAtom);
  const animation = useAnimation({ delay: 0.025 });
  return (
    <>
      <Spacer />
      <Header />
      <AnimatePresence mode="popLayout" initial={false}>
        {subNavigationAtomValue === "ticket_selection" && (
          <Wrapper key={subNavigationAtomValue} {...animation}>
            <TicketSelection />
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
