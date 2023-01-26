import styled from "@emotion/styled";

import { ViewportSizes } from "../../styles/theme";

import Icon from "./Icon";

export interface Message {
  icon?: string;
  message: string;
}

const FlagMessageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: ${ViewportSizes.Phone}px) {
    justify-content: center;
  }
`;

export default function FlagMessage({ message }: { message: Message }) {
  return (
    <FlagMessageContainer>
      {message.icon ? <Icon name={message.icon} size={20} /> : null}
      <span
        key={message.message}
        dangerouslySetInnerHTML={{ __html: message.message }}
      />
    </FlagMessageContainer>
  );
}
