import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Anchor } from "react-feather";

import { FormPageContainer } from "../src/Components/Form/components";
import { DefaultPageLayout } from "../src/Components/Layouts/DefaultPagelayout";
import { UserInformationForm } from "../src/Components/UserInformationForm";
import { UserPreferencesForm } from "../src/Components/UserPreferencesForm";
import { Alert } from "../src/Components/common/app";

import { me, updateMe } from "../src/helpers/API";
import { jsconfTheme } from "../styles/theme";

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
    <FormPageContainer>
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
        <>
          <UserInformationForm />
          <UserPreferencesForm
            getterKey={["me"]}
            getterFunction={me as any}
            mutationFunction={updateMe as any}
            subtitle={
              <>
                Estas preferencias se asignarán por defecto a todos tus tickets,
                puedes asignar preferencias específicas a cada ticket entrando a{" "}
                <Link href="/mytickets" legacyBehavior>
                  <Anchor>/mytickets</Anchor>
                </Link>
              </>
            }
          />
        </>
      )}
    </FormPageContainer>
  );
};

Settings.getLayout = DefaultPageLayout;

export default Settings;
