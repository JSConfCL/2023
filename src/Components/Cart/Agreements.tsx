import styled from "@emotion/styled";
import { useAtom, useSetAtom } from "jotai";
import { ArrowLeft, ArrowRight } from "react-feather";

import { ViewportSizes } from "../../../styles/theme";
import { ButtonWrapper, GenericBtn } from "../TicketSection/shared";

import {
  codeOfConductAgreedAtom,
  policyAgreedAtom,
  subNavigationAtom,
} from "./CartAtom";

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;
`;

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.label`
  display: inline-flex;
  cursor: pointer;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  align-items: center;
  gap: 0.5rem;
`;

const Input = styled.input`
  appearance: none;
  background-color: transparent;
  margin: 0;
  font: inherit;
  color: ${({ theme }) => theme.colors.white};
  width: 1.25em;
  height: 1.25em;
  border: 0.15em solid ${({ theme }) => theme.colors.white};
  border-radius: 0.15em;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 200ms transform ease-in-out;
    background-color: ${({ theme }) => theme.colors.jsconfYellow};
  }

  &:checked::before {
    transform: scale(1);
  }

  &:focus {
    outline: max(2px, 0.15em) solid currentColor;
    outline-offset: max(2px, 0.15em);
  }
`;
const InputText = styled.span`
  color: #fff;
  transition: font-size 250ms ease-in-out;
  font-size: 22px;
  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 24px;
  }
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    font-size: 26px;
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    font-size: 28px;
  }
`;

const Anchor = styled.a`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.jsconfYellow};
`;

export const Agreements = () => {
  const [codeOfConduct, setCodeOfConduct] = useAtom(codeOfConductAgreedAtom);
  const [policy, setPolicy] = useAtom(policyAgreedAtom);
  const continuarAtomValue = useSetAtom(subNavigationAtom);
  return (
    <TotalWrapper>
      <OptionsWrapper>
        <InputWrapper role="checkbox">
          <Input
            type="checkbox"
            id="codeOfConduct"
            name="codeOfConduct"
            checked={codeOfConduct}
            onChange={() => setCodeOfConduct((prevValue) => !prevValue)}
          />
          <InputText>
            Estoy de acuerdo con el{" "}
            <Anchor
              href="https://github.com/JSConfCL/code_of_conduct"
              target="_blank"
              rel="noreferrer"
            >
              Código de Conducta
            </Anchor>
          </InputText>
        </InputWrapper>
        <InputWrapper role="checkbox">
          <Input
            type="checkbox"
            id="policy"
            name="policy"
            checked={policy}
            onChange={() => setPolicy((prevValue) => !prevValue)}
          />
          <InputText>
            Estoy de acuerdo con las{" "}
            <Anchor
              href="https://github.com/JSConfCL/code_of_conduct/blob/master/terminos_de_compra_e_imagen/README.md"
              target="_blank"
              rel="noreferrer"
            >
              Políticas de compra e imágen
            </Anchor>
          </InputText>
        </InputWrapper>
      </OptionsWrapper>
      <ButtonWrapper>
        <GenericBtn onClick={() => continuarAtomValue("ticket_selection")}>
          <ArrowLeft size={16} /> Volver
        </GenericBtn>

        <GenericBtn
          disabled={!codeOfConduct || !policy}
          onClick={() => continuarAtomValue("payment_selection")}
        >
          Continuar
          <ArrowRight size={16} />
        </GenericBtn>
      </ButtonWrapper>
    </TotalWrapper>
  );
};
