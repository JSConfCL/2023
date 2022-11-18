import styled from "@emotion/styled";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import esLocale from "i18n-iso-countries/langs/es.json";
import { useEffect, Fragment, useId, useMemo, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { Controller, useForm } from "react-hook-form";

import { StylesConfig } from "react-select";
import Select from "react-select/creatable";
import { GenericBtn } from "../TicketSection/shared";
import { ErrorResponse, me, updateMe } from "../../helpers/API";
import { colors, jsconfTheme } from "../../../styles/theme";

import {
  emailValidation,
  nameValidation,
  notNegativeNumberValidation,
  optionalStringValidation,
} from "../Form/schema";
import { useQuery } from "@tanstack/react-query";
import { transparentize } from "polished";

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
  text-transform: capitalize;
  color: ${({ theme, color }) => color ?? theme.colors.jsconfRed};
  padding-bottom: 32px;
`;

const Error = (props: { message?: any; color?: string }) => {
  const { message, color } = props;
  return <ErrorMessage color={color}>{message}</ErrorMessage>;
};

const customStyles: StylesConfig = {
  input: ({ ...provided }) => ({
    ...provided,
    color: "#ddd",
  }),
  option: ({ ...provided }, state) => ({
    ...provided,
    color: "white",
    background: state.isSelected
      ? jsconfTheme.colors.jsconfRed
      : state.isFocused
      ? transparentize(0.5, colors.jsconfRed)
      : "#333",
    ":active": {
      background: transparentize(0.8, colors.jsconfRed),
    },
    cursor: state.isDisabled ? "not-allowed" : "pointer",
  }),
  menu: ({ ...provided }) => ({
    ...provided,
    background: "black",
    color: "white",
    borderColor: jsconfTheme.colors.jsconfYellow,
  }),
  menuList: ({ ...provided }) => ({
    ...provided,
    background: "#333",
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

countries.registerLocale(enLocale);
countries.registerLocale(esLocale);
const countryObj = countries.getNames(LANGUAGE, { select: "official" });
const countryOptions = Object.entries(countryObj).map(
  ([key, value]: [string, string]) => {
    return {
      label: (
        <>
          <ReactCountryFlag key={key} countryCode={key} />
          {` ${value}`}
        </>
      ),
      code: key,
      value,
    };
  }
);

export const UserInformationForm = () => {
  const { data: user, refetch } = useQuery(["me"], me);
  const countrySelectId = useId();
  const genderSelectId = useId();
  const [submitMessage, setSubmitMessage] = useState("");
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const genderOptions = useMemo(() => {
    const defaultGenderValues = [
      { value: "male", label: "Masculino" },
      { value: "female", label: "Femenino" },
      { value: "other", label: "Otro" },
    ];
    if (!user?.gender) {
      return defaultGenderValues;
    }
    const alreadyExists = defaultGenderValues.some(
      ({ value }) => value === user?.gender
    );
    if (!alreadyExists) {
      defaultGenderValues.push({
        value: user?.gender,
        label: user?.gender,
      });
    }
    return defaultGenderValues;
  }, [user?.gender]);
  const defaultValues = useMemo(
    () => ({
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
    }),
    [
      genderOptions,
      user?.company,
      user?.country,
      user?.gender,
      user?.name,
      user?.position,
      user?.seniority,
      user?.username,
      user?.yearsOfExperience,
    ]
  );
  const {
    control,
    reset,
    formState: { errors, touchedFields, isDirty },
    handleSubmit,
    register,
  } = useForm<FormData>({
    mode: "onSubmit",
    defaultValues,
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const onSubmit = handleSubmit(async (data) => {
    const submit = {
      ...(touchedFields?.name && data?.name !== user?.name
        ? { name: data?.name }
        : {}),
      ...(touchedFields?.username && data?.username !== user?.username
        ? { username: data?.username }
        : {}),
      ...(touchedFields?.email && !user?.email && data?.email !== user?.email
        ? { email: data?.email }
        : {}),
      ...(touchedFields?.company && data?.company !== user?.company
        ? { company: data?.company }
        : {}),
      ...(touchedFields?.position && data?.position !== user?.position
        ? { position: data?.position }
        : {}),
      ...(touchedFields?.seniority && data?.seniority !== user?.seniority
        ? { seniority: data?.seniority }
        : {}),
      ...(touchedFields?.country && data?.country !== user?.country
        ? { country: data?.country?.code }
        : {}),
      ...(touchedFields?.gender && data?.gender !== user?.gender
        ? { gender: data?.gender?.value }
        : {}),
      ...(touchedFields?.yearsOfExperience &&
      data?.yearsOfExperience !== user?.yearsOfExperience
        ? {
            yearsOfExperience: data?.yearsOfExperience,
          }
        : {}),
    };

    setSubmitMessage("");
    try {
      const response = await updateMe(submit);
      if ((response as unknown as ErrorResponse).error) {
        const { message } = response as unknown as ErrorResponse;
        setSubmitMessage("Problemas en la actualización.");
        setFormErrors(message);
      } else {
        setSubmitMessage("Actualización completada.");
        await refetch();
        reset(defaultValues);
        setTimeout(() => {
          setSubmitMessage("");
        }, 3000);
      }
    } catch (e) {
      setSubmitMessage("Error en la actualización.");
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

      {!user?.email ? (
        <>
          <InputC
            {...register("email", emailValidation)}
            placeholder="Correo Electrónico"
            error={Boolean(errors.email?.type)}
          />
          <Error {...errors.email} />
        </>
      ) : null}

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
            isClearable
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
      {formErrors.map((error) => {
        return <Error key={error} message={error} color={"red"} />;
      })}
    </form>
  );
};
