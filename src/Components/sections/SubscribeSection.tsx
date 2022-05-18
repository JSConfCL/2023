import React, { Suspense, useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { H2, H3 } from "../core/Typography";
import { PageProps } from "../../../pages";

const Container = styled.section`
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  gap: 0px 32px;
  padding: 48px;
  justify-content: space-between;

  > h2 {
    padding: 48px 0px;
  }

  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;

const Form = styled.form`
  width: 400px;
  height: 50px;
  background: white;
  border-radius: 10px;
  top: 50%;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

const EmailInput = styled.input`
  background: transparent;
  position: absolute;
  height: 100%;
  width: 280px;
  padding-left: 10px;
  text-align: left;
  line-height: 50px;
  vertical-align: middle;
  z-index: 10;
  color: black;
  -webkit-transition: transform 0.2s ease-in-out 0s;
`;

const SubmitButton = styled.input(
  ({ theme }) => `
  background: ${theme.colors.jsconfYellow};
  color: ${theme.colors.jsconfBlack};
  position: absolute;
  top: -50px;
  left: 300px;
  height: 150px;
  width: 100px;
  text-align: center;
  vertical-align: middle;	
  transition: transform 0.5s ease 0s;
  cursor: pointer;
`
);

const SubmitLoader = styled.span(
  ({ theme }) => `
background: ${theme.colors.jsconfYellow};
  height: 100%;
  width: 500px;
  z-index: 5;
  position: absolute;
  left:-500px;
  display: inline-block;
  transition: transform 1s ease 0s;
`
);

const ThanksMessage = styled.span(
  ({ theme }) => `
  background: transparent;
  color: ${theme.colors.jsconfBlack};
  height: 100%;
  width: 300px;
  z-index: 5;
  padding: 20px;
  position: absolute;
  top:50px;
  display: inline-block;
  -webkit-transition: transform 0.5s ease 0s;
`
);

const titleAnimation = {
  scale: 1.01,
  transition: {
    duration: 0.1,
    type: "tween",
  },
};

interface SubscribeSectionPage {
  page: PageProps["subscribeData"];
}
const SubscribeSection = (props: SubscribeSectionPage) => {
  const [submiting, setSubmiting] = useState(false);
  const [subscribeResponse, setSubscribeResponse] = useState<any | null>(null);

  const wait = (seconds: number) =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(null);
      }, seconds)
    );

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setSubmiting(true);

    //Se envia la peticion y llega la respuesta
    await wait(3000);
    setSubscribeResponse({ message: "OK" });

    //Se le dan 2 segundos al usuario para que lea el mensaje (Podría cambiarse por un botón cerrar)
    await wait(2000);
    setSubmiting(false);
    setSubscribeResponse(null);
  };

  return (
    <Container>
      <Suspense fallback={<h2>Loading Follow Us...</h2>}>
        <H2 whileHover={titleAnimation}>{props.page.title}</H2>

        <Form onSubmit={handleSubmit}>
          <EmailInput
            style={{ transform: submiting ? "translateX(400px)" : "none" }}
          />
          <SubmitButton
            type="submit"
            style={{ transform: submiting ? "translateY(50px)" : "none" }}
          />
          <SubmitLoader
            style={{ transform: submiting ? "translateX(300px)" : "none" }}
          />
          <ThanksMessage
            style={{
              transform:
                submiting && subscribeResponse !== null
                  ? "translateY(-50px)"
                  : "none",
            }}
          >
            Thank you. You have been subscribed
          </ThanksMessage>
        </Form>
      </Suspense>
    </Container>
  );
};

export default SubscribeSection;
