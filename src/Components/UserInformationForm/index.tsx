import styled from "@emotion/styled";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import esLocale from "i18n-iso-countries/langs/es.json";
import { useId, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { Controller, useForm } from "react-hook-form";

import Select, { StylesConfig } from "react-select";
import { GenericBtn } from "../TicketSection/shared";
import { me, updateMe } from "../../helpers/API";
import { jsconfTheme } from "../../../styles/theme";

import {
  nameValidation,
  notNegativeNumberValidation,
  optionalStringValidation,
} from "../Form/schema";
import { useQuery } from "@tanstack/react-query";

interface SelectOption {
  label: any;
  value: string;
}

interface SelectCountryOption extends SelectOption {
  code: string;
}

interface FormData {
  name?: string;
  username?: string;
  email?: string;
  country?: SelectCountryOption;
  company?: string;
  position?: string;
  seniority?: string;
  yearsOfExperience?: number;
  gender?: SelectOption;
}

const LANGUAGE = "es";

const InputC = styled.input<{ error: boolean }>`
  padding: 8px 0px;
  display: flex;
  flex-direction: row;
  width: 100%;
  border: ${({ error }) => `0px solid ${error ? "#F45B69;" : "#F0E040"}`};
  border-bottom-width: 1px;
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
type Props = {};

countries.registerLocale(enLocale);
countries.registerLocale(esLocale);
const countryObj = countries.getNames(LANGUAGE, { select: "official" });
const countryOptions = Object.entries(countryObj).map(
  ([key, value]: [string, string]) => {
    return {
      label: (
        <>
          <ReactCountryFlag countryCode={key} />
          {` ${value}`}
        </>
      ),
      code: key,
      value,
    };
  }
);

export const UserInformationForm = (props: Props) => {
  const { data: user } = useQuery(["me"], me);
  const countrySelectId = useId();
  const genderSelectId = useId();
  const [submitMessage, setSubmitMessage] = useState("");
  const {
    control,
    formState: { errors, touchedFields, isDirty },
    handleSubmit,
    register,
  } = useForm<FormData>({
    mode: "onSubmit",
    defaultValues: {
      name: user?.name ?? "",
      username: user?.username ?? "",
      country: user?.country
        ? countryOptions.find(
            (country: SelectCountryOption) => country.code === user.country
          )
        : undefined,
      company: user?.company ?? "",
      position: user?.position ?? "",
      seniority: user?.seniority ?? "",
      yearsOfExperience: user?.yearsOfExperience ?? undefined,
      gender: user?.gender
        ? genderOptions.find(
            (gender: SelectOption) => gender.value === user.gender
          )
        : undefined,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    const submit = {
      ...(touchedFields?.name ? { name: data?.name } : {}),
      ...(touchedFields?.username ? { username: data?.username } : {}),
      ...(touchedFields?.company ? { company: data?.company } : {}),
      ...(touchedFields?.position ? { position: data?.position } : {}),
      ...(touchedFields?.seniority ? { seniority: data?.seniority } : {}),
      ...(touchedFields?.country ? { country: data?.country?.code } : {}),
      ...(touchedFields?.gender ? { gender: data?.gender?.value } : {}),
      ...(touchedFields?.yearsOfExperience
        ? {
            yearsOfExperience: data?.yearsOfExperience,
          }
        : {}),
    };

    setSubmitMessage("");
    try {
      await updateMe(submit);
      setSubmitMessage("Actualización completada.");
      setTimeout(() => {
        setSubmitMessage("");
      }, 2000);
    } catch (e) {
      setSubmitMessage(
        "Error en la actualización, vuelve a intentar más tarde."
      );
    }
  });

  return (
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
        error={Boolean(errors.name?.type)}
      />
      <Error {...errors.name} />

      <InputC
        {...register("username", nameValidation)}
        placeholder="Nombre de Usuario"
        error={Boolean(errors.username?.type)}
      />
      <Error {...errors.username} />

      <Controller
        name="country"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            isClearable
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
        error={Boolean(errors.company?.type)}
      />
      <Error {...errors.company} />

      <InputC
        {...register("position", optionalStringValidation)}
        placeholder="Posición"
        error={Boolean(errors.position?.type)}
      />
      <Error {...errors.position} />

      <InputC
        {...register("seniority", optionalStringValidation)}
        placeholder="Seniority"
        error={Boolean(errors.seniority?.type)}
      />
      <Error {...errors.seniority} />

      <InputC
        {...register("yearsOfExperience", notNegativeNumberValidation)}
        placeholder="Años de Experiencia "
        type="number"
        min={0}
        max={100}
        error={Boolean(errors.yearsOfExperience?.type)}
      />
      <Error {...errors.yearsOfExperience} />

      <Controller
        name="gender"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            styles={customStyles}
            options={genderOptions}
            instanceId={genderSelectId}
          />
        )}
      />
      <Error {...errors.gender} />

      <UpdateButton
        type="submit"
        disabled={Object.entries(errors).length > 0 || !isDirty}
      >
        Actualizar
      </UpdateButton>
      <Error
        message={submitMessage}
        color={submitMessage.includes("Error") ? "red" : "white"}
      />
    </form>
  );
};
