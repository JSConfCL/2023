import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";

import { DefaultPageLayout } from "../src/Components/Layouts/DefaultPagelayout";
import { UserInformationForm } from "../src/Components/UserInformationForm";
import { Alert } from "../src/Components/common/app";

import { me } from "../src/helpers/API";
import { jsconfTheme, ViewportSizes } from "../styles/theme";

const StyledContainer = styled.div`
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

const SytledImageContainer = styled.div`
  text-align: center;
`;

const IMAGE_SIZE = "200px";

const StyledLoadingImage = styled.div`
  width: ${IMAGE_SIZE};
  height: ${IMAGE_SIZE};
  background: ${jsconfTheme.colors.jsconfBlack};
  border-radius: 50%;
  border: 8px solid ${jsconfTheme.colors.jsconfYellow};
  margin: 0 auto;
`;

const Settings = () => {
  const { isLoading, data: user } = useQuery(["me"], me);
  return (
    <StyledContainer>
      {user?.id && !user.email ? (
        <Alert title="Informacion Importante:">
          Pudimos crear tu cuenta. Pero no conseguimos correo electrónico
          asociado. Por lo tanto, no podremos comunicarnos contigo. (Y tampoco
          podrás comprar entradas). Te pedimos registres un correo electrónico
          para poder informarte los próximos pasos.
        </Alert>
      ) : null}
      {isLoading ? (
        <SytledImageContainer>
          <StyledLoadingImage />
        </SytledImageContainer>
      ) : (
        <UserInformationForm />
      )}
    </StyledContainer>
  );
};

Settings.getLayout = DefaultPageLayout;

export default Settings;
