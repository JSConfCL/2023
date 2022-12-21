import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

import { FormPageContainer } from "../../src/Components/Form/components";

import {
  DefaultPageLayout,
  InternalPageTitle,
} from "../../src/Components/Layouts/DefaultPagelayout";
import { UserPreferencesForm } from "../../src/Components/UserPreferencesForm";

import { oneTicket, updateOneTicket } from "../../src/helpers/API";
import { PreferencesType } from "../../src/helpers/API/types";

export const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const Image = styled.img<{ loaded: boolean }>`
  height: 100%;
  opacity: 0;
  animation: ${({ loaded }) =>
    loaded
      ? css`
          ${fadeIn} 1000ms ease-in forwards
        `
      : "none"};
`;
const ImageWrapper = styled.div`
  height: 200px;
  justify-content: center;
  display: flex;
`;

const ticketApiUrl = process.env.NEXT_PUBLIC_WORKER_IMAGE_API!;

const Settings = () => {
  const { query, isReady } = useRouter();
  const [isImageLoaded, setImageIsLoaded] = useState(false);
  const ticketId = query.id as string;
  const updateTicket = useCallback(
    async (preferences: Partial<PreferencesType>) => {
      const responses = await updateOneTicket(ticketId, preferences);
      return responses.preferences;
    },
    [ticketId]
  );
  const getOneTicket = useCallback(async () => {
    const responses = await oneTicket(ticketId);
    return responses.preferences;
  }, [ticketId]);

  return (
    <FormPageContainer>
      <InternalPageTitle>Preferencias de Ticket</InternalPageTitle>
      <ImageWrapper>
        <Image
          onLoad={() => setImageIsLoaded(true)}
          loaded={isImageLoaded}
          src={ticketId && `${ticketApiUrl}/ticket/image/${ticketId}`}
          alt="Un ticket de la JSConf asociado al usuario registrado"
        />
      </ImageWrapper>
      {isReady && (
        <UserPreferencesForm
          getterKey={["oneTicket"]}
          getterFunction={getOneTicket}
          mutationFunction={updateTicket}
        />
      )}
    </FormPageContainer>
  );
};

Settings.getLayout = DefaultPageLayout;

export default Settings;
