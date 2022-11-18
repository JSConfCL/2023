import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { transparentize } from "polished";

import { TicketsLayout } from "../src/Components/Layouts/TicketsLayout";
import { UserInformationForm } from "../src/Components/UserInformationForm";
import { me } from "../src/helpers/API";
import { jsconfTheme, ViewportSizes } from "../styles/theme";

const Title = styled.h2`
  font-family: "Koulen";
  font-style: normal;
  font-weight: 400;
  display: inline-block;
  line-height: 1;
  transition-duration: 250ms;
  transition-property: font-size;
  font-size: 2.5rem;
  margin-bottom: 16px;

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    font-size: 2.2rem;
    margin-bottom: 32px;
  }
`;

const StyledContainer = styled.div`
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
`;

const SytledImageContainer = styled.div`
  text-align: center;
  margin-bottom: 32px;
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

const StyledBanner = styled.div`
  border-radius: 8px;
  background: ${transparentize(0.5, jsconfTheme.colors.jsconfRed)};
  padding: 16px 24px 24px 24px;
  margin-bottom: 16px;

  > h2 {
    text-align: center;
    margin-bottom: 8px;
    font-size: 1.2em;
  }
`;

const Settings = () => {
  const { isLoading, data: user } = useQuery(["me"], me);
  return (
    <StyledContainer>
      {user?.id && !user.email ? (
        <StyledBanner>
          <h2>Informacion Importante:</h2>
          Pudimos crear tu cuenta. Pero no conseguimos correo electrónico
          asociado. Por lo tanto, no podremos comunicarnos contigo. Te pedimos
          registres un correo electrónico para poder informarte los próximos
          pasos.
        </StyledBanner>
      ) : null}
      <Title>Configuracion</Title>
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

Settings.getLayout = TicketsLayout;

export default Settings;
