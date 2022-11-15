import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";

import { UserInformationForm } from "../src/Components/UserInformationForm";
import WithAuth from "../src/Components/WithAuth";

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

const Settings = () => {
  const { isLoading } = useQuery(["me"], me);

  return (
    <StyledContainer>
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

const AuthSettings = WithAuth(Settings);

export default AuthSettings;
