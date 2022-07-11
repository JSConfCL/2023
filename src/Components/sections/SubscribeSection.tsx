import React, { useRef, useState, Suspense } from "react";
import styled from "@emotion/styled";
import { FieldValues, useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import useMediaQuery from "../../helpers/useMediaQuery";
import { Get } from "type-fest";
import { H2, H3 } from "../core/Typography";
import { FooterQueryQuery } from "../../graphql/footer.generated";

type Props = {
  page: Get<FooterQueryQuery, "page.subscribeBlock">;
};

const Container = styled.section`
  align-self: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1440px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;

  > h2 {
    padding: 48px 0px;
    font-size: 32px;
    line-height: 58px;
  }

  @media (min-width: 769px) {
    width: 50%;
    justify-content: flex-start;
  }
`;

const Form = styled.form(
  ({ theme }) => `
  width: 90vw;
  height: 80px;
  background: ${theme.colors.black};
  color: ${theme.colors.white};
  top: 50%;
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-style: solid;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: transparent;
  border-bottom-color: ${theme.colors.jsconfYellow};

  @media (min-width: 1024px) {
    max-width: 40vw;
  }
`
);

const Fieldset = styled.fieldset(
  ({ theme }) => `
  display: flex;
  height: 60px;
  margin: 10px 0;
  border-width: 2px;
`
);

const EmailInput = styled.input(
  ({ theme }) => `
  background: transparent;
  height: 100%;
  width: 80vw;
  padding-left: 10px;
  text-align: left;
  line-height: 50px;
  vertical-align: middle;
  background: ${theme.colors.black};
  color: ${theme.colors.white}
  -webkit-transition: transform 0.2s ease-in-out 0s;
`
);

const ErrorMessage = styled.p(
  ({ theme }) => `
  margin: 12px 0;
  min-height: 20px;
  color: ${theme.colors.jsconfRed}
`
);

const SubmitButton = styled.input(
  ({ theme }) => `
  background: ${theme.colors.jsconfYellow};
  color: ${theme.colors.jsconfBlack};
  top: 0;
  right: 0;
  height: 100%;
  width: 150px;
  padding: 12px;
  vertical-align: middle;	
  transition: transform 0.5s ease 0s;
  cursor: pointer;
  font-weight: bold;
  border-radius: 0 24px 0 0;

  @media (min-width: 769px) {
    min-width: 150px;
  }
`
);

const ThanksMessage = styled.div(
  ({ theme }) => `
  background: ${theme.colors.jsconfYellow};
  color: ${theme.colors.jsconfBlack};
  height: 100%;
  min-height: 80px;
  width: 620px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  border-radius: 0 24px 0 0;

   @media (max-width: 768px) {
    width: 100vw;
   }
`
);

const titleAnimation = {
  scale: 1.01,
  transition: {
    duration: 0.1,
    type: "tween",
  },
};

const SubscribeSection = (props: Props) => {
  const messages = {
    loading: "Enviando ...",
    success: "Enviado",
    error: "Error =(",
  };
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [subscribeResponse, setSubscribeResponse] = useState("");
  const formElement = useRef<HTMLFormElement>(null);
  const { register, handleSubmit, formState } = useForm<{ email: "string" }>();

  const wait = (seconds: number) =>
    new Promise((resolve) => setTimeout(resolve, seconds * 1000));

  const onSubmit = async (data: FieldValues) => {
    try {
      const body = JSON.stringify({
        ...data,
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
  };
  const emailValidation = {
    required: true,
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Escribe un email válido",
    },
  };
  const { errors } = formState;

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Container>
      <H2 whileHover={titleAnimation}>{props?.page?.title}</H2>
      <Suspense fallback={<div>Loading...</div>}>
        <Form onSubmit={handleSubmit(onSubmit)} ref={formElement}>
          <Fieldset>
            <EmailInput
              placeholder="Tu Email"
              {...register("email", emailValidation)}
            />
            <SubmitButton type="submit" value={props?.page?.title!} />

            <AnimatePresence>
              {isSubmiting && (
                <motion.div
                  style={{ x: 0 }}
                  animate={{ x: isMobile ? "-100vw" : "-620px", opacity: 1 }}
                  transition={{ ease: "backInOut", duration: 0.7 }}
                  exit={{ x: 100 }}
                >
                  <ThanksMessage>{subscribeResponse}</ThanksMessage>
                </motion.div>
              )}
            </AnimatePresence>
          </Fieldset>
        </Form>
      </Suspense>

      <ErrorMessage>{errors.email?.message}</ErrorMessage>
    </Container>
  );
};

export default SubscribeSection;
