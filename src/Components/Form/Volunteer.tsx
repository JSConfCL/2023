import React from "react";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

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
  margin-left: -35%;
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

const ErrorMessage = styled.section`
  height: 20px;
  font-size: 16px;
  color: #f45b69;
  padding-bottom: 32px;
`;

const Error = (props: { type?: any; message?: any }) => {
  const { message } = props;
  return <ErrorMessage>{message}</ErrorMessage>;
};

const VolunteerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    getValues,
  } = useForm<FormData>({ mode: "onChange" });
  const onSubmit = handleSubmit((data) => {});

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
          Enviar
        </SubmitButton>
      </form>
    </Container>
  );
};

export default VolunteerForm;
