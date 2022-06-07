import React, { useRef, useState, useCallback } from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";

import { H2, H3 } from "../core/Typography";
import { PageProps } from "../../../pages";

const Container = styled.section`
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  gap: 0px 32px;
  padding: 12px;
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

const ThanksMessage = styled.div(
  ({ theme }) => `
  background: ${theme.colors.jsconfYellow};
  color: ${theme.colors.jsconfBlack};
  height: 100%;
  width: 100%;
  position: absolute;
  padding: 15px;
  display: block;
  min-height: 50px;
  font-weight: bold;
  text-align: center;
  border-top-right-radius: 25px;
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
  const messages = {
    loading: "Enviando ...",
    success: "Enviado",
    error: "Error =(",
  };
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [subscribeResponse, setSubscribeResponse] = useState("");
  const formElement = useRef<HTMLFormElement>(null);

  const wait = (seconds: number) =>
    new Promise((resolve) => setTimeout(resolve, seconds * 1000));

  const handleSubmit = useCallback(async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const formData = Array.from(
        new FormData(formElement.current || undefined)
      );
      const formDataObj: Record<string, FormDataEntryValue> = {};

      for (const [key, value] of formData) {
        formDataObj[key] = value;
      }
      const body = JSON.stringify({
        ...formDataObj,
      });

      setSubscribeResponse(messages.loading);
      setIsSubmiting(true);

      const response = await fetch(
        "https://jsconf-chile-email-worker-1.jsconfcl.workers.dev",
        {
          method: "POST",
          body,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 200) {
        throw new Error();
      }
      await wait(2);
      setSubscribeResponse(messages.success);

      // waiting 3 seconds for give time to user to read
      await wait(3);

      formElement.current?.reset();
      setIsSubmiting(false);
    } catch (e) {
      console.error(e);
      setSubscribeResponse(messages.error);
      await wait(5);
      setIsSubmiting(false);
    }
  }, []);

  return (
    <Container>
      <H2 whileHover={titleAnimation}>{props.page.title}</H2>

      <Form onSubmit={handleSubmit} ref={formElement}>
        <EmailInput name="email" />
        <SubmitButton type="submit" />

        <AnimatePresence>
          {isSubmiting && (
            <motion.div
              style={{ x: -100 }}
              animate={{ x: 0 }}
              exit={{ x: -400 }}
            >
              <ThanksMessage>{subscribeResponse}</ThanksMessage>
            </motion.div>
          )}
        </AnimatePresence>
      </Form>
    </Container>
  );
};

export default SubscribeSection;
