import React, { useState } from "react";
import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";

import { ViewportSizes } from "../../../styles/theme";
import { H2 } from "../core/Typography";
import {
  nameValidation,
  lastNameValidation,
  emailValidation,
  descriptionValidation,
} from "./schema";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  description: string;
};

const StyledH2 = styled(H2)`
  font-weight: 400;
  font-size: 80px;
  line-height: 80px;
  color: #f45b69;
  padding: 32px 0px;
  margin-left: -25%;

  @media (min-width: ${ViewportSizes.Phone}px) {
    margin-left: -35%;
  }
`;

const Container = styled.section`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${ViewportSizes.Phone}px) {
    padding: 48px;
  }

  form {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 450px;
  }
`;

const SubmitButton = styled.button<{ disabled: boolean }>`
  background: #f0e040;
  font-family: "Barlow";
  border-radius: 0px 24px 0px 0px;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #1e2019;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
`;

const InputC = styled.input<{ error: boolean }>`
  padding: 8px 0px;
  display: flex;
  flex-direction: row;
  width: 100%;
  border: ${({ error }) => `0px solid ${error ? "#F45B69;" : "#F0E040"}`};
  border-bottom-width: 1px;
`;

const Textarea = styled.textarea<{ error: boolean }>`
  padding: 8px 0px;
  display: flex;
  flex-direction: row;
  width: 100%;
  border: ${({ error }) => `0px solid ${error ? "#F45B69;" : "#F0E040"}`};
  border-bottom-width: 1px;
`;

const ErrorMessage = styled.section<{ color?: string }>`
  height: 20px;
  font-size: 16px;
  color: ${({ color }) => (color ? color : "#f45b69")};
  padding-bottom: 32px;
`;

const Error = (props: { message?: any; color?: string }) => {
  const { message, color } = props;
  return <ErrorMessage color={color}>{message}</ErrorMessage>;
};

const VolunteerForm = () => {
  const textControls = useAnimation();
  const loadingControls = useAnimation();
  const [submitMessage, setSubmitMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<FormData>({ mode: "onChange" });
  const onSubmit = handleSubmit(async (data) => {
    setSubmitMessage("");
    textControls.start({
      opacity: 0,
      y: -2,
      transition: { duration: 0.2 },
    });
    await loadingControls.start({
      y: 0,
      x: 20,
      opacity: 1,
      transition: { duration: 0.3, delay: 0.2 },
    });

    textControls.start({
      x: "100vw",
      transition: { duration: 1 },
    });
    try {
      setSubmitMessage("Inscripción Completada.");
    } catch (e) {
      setSubmitMessage("Error en la inscripción, vuelve a intentar más tarde.");
    } finally {
      await loadingControls.start({
        y: 0,
        x: "-100vw",
        opacity: 0,
        transition: { duration: 0.4, delay: 0.4 },
      });

      await textControls.start({
        zIndex: 1,
        y: 0,
        opacity: 1,
        transition: { duration: 0.3, delay: 0.0 },
      });

      await textControls.start({
        y: 0,
        x: -20,
        transition: { duration: 0.25 },
      });
    }
  });

  return (
    <Container>
      <StyledH2>Registro</StyledH2>
      <form onSubmit={onSubmit}>
        <InputC
          {...register("firstName", nameValidation)}
          placeholder="Nombre"
          error={Boolean(errors.firstName?.type)}
        />
        <Error {...errors.firstName} />

        <InputC
          {...register("lastName", lastNameValidation)}
          placeholder="Apellido"
          error={Boolean(errors.lastName?.type)}
        />
        <Error {...errors.lastName} />

        <InputC
          {...register("email", emailValidation)}
          placeholder="Email"
          error={Boolean(errors.email?.type)}
        />
        <Error {...errors.email} />
        <Textarea
          {...register("description", descriptionValidation)}
          placeholder="Por qué quieres ser parte?"
          error={Boolean(errors.description?.type)}
        ></Textarea>
        <Error {...errors.description} />

        <SubmitButton
          type="submit"
          disabled={
            Object.entries(errors).length > 0 ||
            Object.entries(touchedFields).length !== 4
          }
        >
          <motion.div
            initial={{ opacity: 0, x: "-100vw", y: 0 }}
            animate={loadingControls}
            className="loader-wrapper"
          >
            <BeatLoader color="black" size={6} />
          </motion.div>
          <motion.span initial={{ opacity: 1, x: -20 }} animate={textControls}>
            {" "}
            Enviar
          </motion.span>
        </SubmitButton>
        <Error
          message={submitMessage}
          color={submitMessage.includes("Error") ? "red" : "white"}
        />
      </form>
    </Container>
  );
};

export default VolunteerForm;
