import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { useState, useId } from "react";
import { Controller, useForm } from "react-hook-form";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import esLocale from "i18n-iso-countries/langs/es.json";
import ReactCountryFlag from "react-country-flag";

import Select, { StylesConfig } from "react-select";
import { TicketsLayout } from "../src/Components/Layouts/TicketsLayout";
import { GenericBtn } from "../src/Components/TicketSection/shared";
import { jsconfTheme, ViewportSizes } from "../styles/theme";
import { me, updateMe } from "../src/helpers/API";

import {
  emailValidation,
  nameValidation,
  notNegativeNumberValidation,
  optionalStringValidation,
} from "../src/Components/Form/schema";

interface SelectOption {
  label: any;
  value: string;
}

interface SelectCountryOption extends SelectOption {
  code: string;
}

interface FormData {
  name?: string | undefined;
  username?: string | undefined;
  email?: string | undefined;
  country?: SelectCountryOption | undefined;
  company?: string | undefined;
  position?: string | undefined;
  seniority?: string | undefined;
  year?: string | undefined;
  gender?: SelectOption | undefined;
}

const LANGUAGE = "es";

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

const InputC = styled.input<{ error: boolean }>`
  padding: 8px 0px;
  display: flex;
  flex-direction: row;
  width: 100%;
  border: ${({ error }) => `0px solid ${error ? "#F45B69;" : "#F0E040"}`};
  border-bottom-width: 1px;
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
const StyledImage = styled.img`
  border-radius: 50%;
  border: 8px solid ${jsconfTheme.colors.jsconfYellow}; ;
`;

const StyledLoadingImage = styled.div`
  width: ${IMAGE_SIZE};
  height: ${IMAGE_SIZE};
  background: ${jsconfTheme.colors.jsconfBlack};
  border-radius: 50%;
  border: 8px solid ${jsconfTheme.colors.jsconfYellow};
  margin: 0 auto;
`;

const UpdateButton = styled(GenericBtn)`
  display: block;
  margin-left: auto;
`;

const ErrorMessage = styled.section<{ color?: string }>`
  height: 20px;
  font-size: 16px;
  color: ${({ color }) => color ?? "#f45b69"};
  padding-bottom: 32px;
`;

const Error = (props: { message?: any; color?: string }) => {
  const { message, color } = props;
  return <ErrorMessage color={color}>{message}</ErrorMessage>;
};

const genderOptions = [
  { value: "male", label: "Masculino" },
  { value: "female", label: "Femenino" },
  { value: "other", label: "Otro" },
];

const customStyles: StylesConfig = {
  option: ({ ...provided }, state) => ({
    ...provided,
    color: "white",
    background: state.isSelected
      ? jsconfTheme.colors.jsconfRed
      : state.isFocused
      ? "rgba(244, 91, 105,0.5)"
      : "black",
    ":active": {
      background: "rgba(244, 91, 105,0.8)",
    },
    cursor: state.isDisabled ? "not-allowed" : "pointer",
  }),
  menu: ({ ...provided }, state) => ({
    ...provided,
    background: "black",
    color: "white",
    borderColor: jsconfTheme.colors.jsconfYellow,
  }),
  menuList: ({ ...provided }) => ({
    ...provided,
    background: "black",
    color: "white",
  }),
  control: ({ ...provided }) => ({
    ...provided,
    background: "black",
    color: "white",
    boxShadow: "none",
    borderColor: jsconfTheme.colors.jsconfYellow,
    "&:hover": {
      borderColor: jsconfTheme.colors.jsconfYellow,
    },
  }),
  singleValue: ({ ...provided }) => ({
    ...provided,
    background: "black",
    color: "white",
  }),
};

export default function Settings() {
  countries.registerLocale(enLocale);
  countries.registerLocale(esLocale);
  const countrySelectId = useId();
  const genderSelectId = useId();
  const { data: user } = useQuery(["me"], me);
  const [submitMessage, setSubmitMessage] = useState("");
  const {
    control,
    formState: { errors, touchedFields },
    handleSubmit,
    register,
  } = useForm<FormData>({ mode: "onChange" });

  const onSubmit = handleSubmit(async (data) => {
    const submit = {
      photo: user?.photo ?? "",
      name: data?.name ?? "",
      username: data?.username ?? "",
      email: data?.email ?? "",
      company: data?.company ?? "",
      position: data?.position ?? "",
      seniority: data?.seniority ?? "",
      year: data?.year ?? "",
      country:
        (touchedFields?.country ? data?.country?.code : user?.country) ?? "",
      gender:
        (touchedFields?.gender ? data?.gender?.value : user?.gender) ??
        "" ??
        "",
    };

    setSubmitMessage("");
    try {
      await updateMe(submit);
      setSubmitMessage("Actualización completada.");
      setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
    } catch (e) {
      setSubmitMessage(
        "Error en la actualización, vuelve a intentar más tarde."
      );
    }
  });

  const countryObj = countries.getNames(LANGUAGE, { select: "official" });
  const countryOptions = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: (
        <>
          <ReactCountryFlag countryCode={key} />
          {" " + value}
        </>
      ),
      code: key,
      value,
    };
  });

  if (!user?.name) {
    return (
      <StyledContainer>
        <Title>Configuracion</Title>
        <SytledImageContainer>
          <StyledLoadingImage />
        </SytledImageContainer>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <Title>Configuracion</Title>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={onSubmit}
      >
        <SytledImageContainer>
          {user?.photo ? (
            <StyledImage
              src={user?.photo ?? ""}
              width={IMAGE_SIZE}
              height={IMAGE_SIZE}
            />
          ) : (
            <StyledLoadingImage />
          )}
        </SytledImageContainer>
        <InputC
          {...register("name", nameValidation)}
          placeholder="Nombre"
          defaultValue={user?.name ?? ""}
          error={Boolean(errors.name?.type)}
        />
        <Error {...errors.name} />

        <InputC
          {...register("username", nameValidation)}
          placeholder="Nombre de Usuario"
          defaultValue={user?.username ?? ""}
          error={Boolean(errors.username?.type)}
        />
        <Error {...errors.username} />

        <InputC
          {...register("email", emailValidation)}
          placeholder="Correo Electrónico"
          defaultValue={user?.email ?? ""}
          error={Boolean(errors.email?.type)}
        />
        <Error {...errors.email} />

        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              isClearable
              defaultValue={
                user?.country
                  ? countryOptions.find(
                      (country: SelectCountryOption) =>
                        country.code === user.country
                    )
                  : null
              }
              styles={customStyles}
              options={countryOptions}
              instanceId={countrySelectId}
            />
          )}
        />
        <Error {...errors.country} />

        <InputC
          {...register("company", optionalStringValidation)}
          placeholder="Compañía"
          defaultValue={user?.company ?? ""}
          error={Boolean(errors.company?.type)}
        />
        <Error {...errors.company} />

        <InputC
          {...register("position", optionalStringValidation)}
          placeholder="Posición"
          defaultValue={user?.position ?? ""}
          error={Boolean(errors.position?.type)}
        />
        <Error {...errors.position} />

        <InputC
          {...register("seniority", optionalStringValidation)}
          placeholder="Seniority"
          defaultValue={user?.seniority ?? ""}
          error={Boolean(errors.seniority?.type)}
        />
        <Error {...errors.seniority} />

        <InputC
          {...register("year", notNegativeNumberValidation)}
          placeholder="Años de Experiencia "
          defaultValue={user?.year ?? ""}
          error={Boolean(errors.year?.type)}
        />
        <Error {...errors.year} />

        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              defaultValue={
                user?.gender
                  ? genderOptions.find(
                      (gender: SelectOption) => gender.value === user.gender
                    )
                  : null
              }
              styles={customStyles}
              options={genderOptions}
              instanceId={genderSelectId}
            />
          )}
        />
        <Error {...errors.gender} />

        <UpdateButton
          type="submit"
          disabled={Object.entries(errors).length > 0}
        >
          Actualizar
        </UpdateButton>
        <Error
          message={submitMessage}
          color={submitMessage.includes("Error") ? "red" : "white"}
        />
      </form>
    </StyledContainer>
  );
}

Settings.getLayout = TicketsLayout;
