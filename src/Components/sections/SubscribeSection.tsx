import React, { useRef, useState, Suspense } from "react";
import styled from "@emotion/styled";
import { FieldValues, useForm } from "react-hook-form";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Get } from "type-fest";
import { H2, H3 } from "../core/Typography";
import { FooterQueryQuery } from "../../graphql/footer.generated";
import { ViewportSizes } from "../../../styles/theme";

type Props = {
  page: Get<FooterQueryQuery, "page.subscribeBlock">;
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;

  > h2 {
    padding: 48px 0px;
    font-size: 32px;
    line-height: 58px;
  }

  @media (min-width: ${ViewportSizes.Phone}px) {
    width: 50%;
    justify-content: flex-start;
  }
`;

const Form = styled.form`
  height: 80px;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-style: solid;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: transparent;
  border-bottom-color: ${({ theme }) => theme.colors.jsconfYellow};
`;

const Fieldset = styled.fieldset(
  ({ theme }) => `
  height: 90%;
  position: relative;
`
);

const ErrorMessage = styled.p(
  ({ theme }) => `
  margin: 12px 0;
  min-height: 20px;
  color: ${theme.colors.jsconfRed}
`
);

const buttonWidth = 150;
const SubmitButton = styled(motion.input)(
  ({ theme }) => `
  position: absolute;
  background: ${theme.colors.jsconfYellow};
  color: ${theme.colors.jsconfBlack};
  top: 0;
  right: 0;
  height: 100%;
  width: ${buttonWidth}px;
  text-align:center;
  vertical-align: middle;	
  cursor: pointer;
  font-weight: bold;
  border-radius: 0 24px 0 0;

  @media (min-width: ${ViewportSizes.Phone}px) {
    min-width: ${buttonWidth}px;
  }
`
);
const EmailInput = styled.input(
  ({ theme }) => `
  background: transparent;
  height: 100%;
  width: calc(100% - ${buttonWidth}px);
  padding-left: 10px;
  text-align: left;
  line-height: 50px;
  vertical-align: middle;
  background: ${theme.colors.black};
  color: ${theme.colors.white}
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
  const controls = useAnimation();
  const messages = {
    loading: "Enviando ⌛️",
    success: "Estás suscrito! 😊",
    error: "Algo salió mal 😢",
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
      await controls.start({
        width: "100%",
        transition: { duration: 0.5, ease: "backInOut" },
      });
      await wait(0.1);
      setIsSubmiting(true);

      await wait(1.5);
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
      setSubscribeResponse(messages.success);
      await wait(2);
      formElement.current?.reset();
      setIsSubmiting(false);
    } catch (e) {
      console.error(e);
      setSubscribeResponse(messages.error);
      await wait(1);
      setIsSubmiting(false);
    } finally {
      await controls.start({
        width: buttonWidth,
        transition: { duration: 0.5, ease: "backInOut" },
      });
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

  return (
    <Container>
      <H2 whileHover={titleAnimation}>{props?.page?.title}</H2>
      <Suspense fallback={null}>
        <AnimatePresence mode="wait">
          <Form onSubmit={handleSubmit(onSubmit)} ref={formElement}>
            <Fieldset>
              <EmailInput
                placeholder="Tu Email"
                {...register("email", emailValidation)}
              />

              <SubmitButton
                id="qqqqq"
                animate={controls}
                type="submit"
                value={isSubmiting ? subscribeResponse : props?.page?.title!}
              />
            </Fieldset>
          </Form>
        </AnimatePresence>
      </Suspense>

      <ErrorMessage>{errors.email?.message}</ErrorMessage>
    </Container>
  );
};

export default SubscribeSection;
