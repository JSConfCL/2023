import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { transparentize } from "polished";
import { Loader } from "react-feather";
import type { StylesConfig } from "react-select";

import { colors, jsconfTheme, ViewportSizes } from "../../../styles/theme";
import { GenericBtn } from "../TicketSection/shared";

export const FormPageContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: ${ViewportSizes.Phone}px) {
    padding-left: 0rem;
    padding-right: 0rem;
  }
`;

export const customStyles: StylesConfig = {
  input: ({ ...provided }) => ({
    ...provided,
    color: "#ddd",
  }),
  option: ({ ...provided }, state) => ({
    ...provided,
    color: "white",
    background: state.isSelected
      ? jsconfTheme.colors.jsconfRed
      : state.isFocused
      ? transparentize(0.5, colors.jsconfRed)
      : "#333",
    ":active": {
      background: transparentize(0.8, colors.jsconfRed),
    },
    cursor: state.isDisabled ? "not-allowed" : "pointer",
  }),
  menu: ({ ...provided }) => ({
    ...provided,
    background: "black",
    color: "white",
    borderColor: jsconfTheme.colors.jsconfYellow,
  }),
  menuList: ({ ...provided }) => ({
    ...provided,
    background: "#333",
    color: "white",
  }),
  control: ({ ...provided }) => ({
    ...provided,
    background: "black",
    color: "white",
    boxShadow: "none",
    borderColor: jsconfTheme.colors.jsconfYellow,
    "&:hover": {
      borderColor: jsconfTheme.colors.jsconfYellow,
    },
  }),
  placeholder: ({ ...provided }) => ({
    ...provided,
    color: transparentize(0.5, jsconfTheme.colors.white),
  }),
  singleValue: ({ ...provided }) => ({
    ...provided,
    background: "black",
    color: "white",
  }),
};

const StyledButtonContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const BackgroundPositioning = styled.div`
  position: absolute;
  background-color: white;
  filter: blur(2.5rem);
  z-index: -1;
  top: -1rem;
  bottom: -1rem;
  left: -1rem;
  right: -1rem;
  pointer-events: none;
  transition: all 250ms ease-in-out;
`;

const StyledButton = styled(GenericBtn)`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  margin-left: auto;
  &:hover ${BackgroundPositioning} {
    filter: blur(0.75rem);
  }
`;
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  svg {
    animation: spin 2s cubic-bezier(0.74, 0.2, 0.29, 0.54) infinite;
  }
`;

export const UpdateButton = ({
  children,
  loading,
  ...props
}: React.ComponentProps<typeof StyledButton> & { loading?: boolean }) => {
  return (
    <StyledButton {...props}>
      <BackgroundPositioning />
      <StyledButtonContainer>
        {children}
        <LoaderWrapper>
          {loading ? (
            <Loader size={16} />
          ) : (
            <Loader size={16} style={{ opacity: 0 }} />
          )}
        </LoaderWrapper>
      </StyledButtonContainer>
    </StyledButton>
  );
};

const ErrorMessage = styled(motion.section)<{ color?: string }>`
  height: 20px;
  font-size: 16px;
  text-transform: capitalize;
  color: ${({ theme, color }) => color ?? theme.colors.jsconfRed};
  padding-bottom: 32px;
`;

const animation = {
  layout: "position" as "position",
  initial: { opacity: 0, translateX: -50 },
  animate: { opacity: 1, translateX: 0 },
  exit: { opacity: 0, translateX: 50 },
  transition: {
    type: "spring",
    damping: 25,
  },
};

export const Error = (props: { message?: any; color?: string }) => {
  const { message, color } = props;
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      {message && (
        <ErrorMessage color={color} {...animation}>
          {message}
        </ErrorMessage>
      )}
    </AnimatePresence>
  );
};

export const TextInput = styled.input<{ error: boolean }>`
  padding-bottom: 8px;
  display: flex;
  flex-direction: row;
  width: 100%;
  border: ${({ error }) => `0px solid ${error ? "#F45B69;" : "#F0E040"}`};
  border-bottom-width: 1px;
  ::placeholder {
    color: ${({ theme }) => transparentize(0.5, theme.colors.white)};
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 2rem;
  flex-direction: column;
`;

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormFieldsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FormFieldSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FormLabel = styled.label`
  cursor: pointer;
`;
