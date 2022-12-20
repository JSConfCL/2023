import styled from "@emotion/styled";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import esLocale from "i18n-iso-countries/langs/es.json";
import { useEffect, useId, useMemo, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { Controller, useForm } from "react-hook-form";

import Select from "react-select/creatable";
import { ErrorResponse, me, updateMe } from "../../helpers/API";
import { jsconfTheme } from "../../../styles/theme";

import {
  emailValidation,
  nameValidation,
  notNegativeNumberValidation,
  optionalStringValidation,
} from "../Form/schema";
import { useQuery } from "@tanstack/react-query";
import { H3 } from "../core/Typography";
import {
  customStyles,
  Error,
  TextInput,
  UpdateButton,
  Form,
  FormSection,
  FormFieldsSection,
  FormFieldSection,
  FormLabel,
} from "../Form/components";

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

const uppercaseFirstLetter = (string: string) => {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
};

const useGetGenderOptions = (gender?: string | null) => {
  return useMemo(() => {
    const defaultGenderValues = [
      { value: "male", label: "Masculino" },
      { value: "female", label: "Femenino" },
      { value: "other", label: "Otro" },
    ];
    if (!gender) {
      return defaultGenderValues;
    }
    const alreadyExists = defaultGenderValues.some(
      ({ value }) => value === gender
    );
    if (!alreadyExists) {
      defaultGenderValues.push({
        value: gender.toLowerCase(),
        label: uppercaseFirstLetter(gender),
      });
    }
    return defaultGenderValues;
  }, [gender]);
};

const useGetFoodPreferenceOptions = (foodPreference?: string | null) => {
  return useMemo(() => {
    const defaultFoodPreferenceOptions = [
      {
        value: "vegetariana",
        label: "Vegetariana",
      },
      {
        value: "vegana",
        label: "Vegana",
      },
      {
        value: "ninguna",
        label: "Ninguna",
      },
    ];
    if (!foodPreference) {
      return defaultFoodPreferenceOptions;
    }
    const alreadyExists = defaultFoodPreferenceOptions.some(
      ({ value }) => value === foodPreference
    );
    if (!alreadyExists) {
      defaultFoodPreferenceOptions.push({
        value: foodPreference.toLowerCase(),
        label: uppercaseFirstLetter(foodPreference),
      });
    }
    return defaultFoodPreferenceOptions;
  }, [foodPreference]);
};

const useGetFoodAllergyOptions = (foodAllergy?: string | null) => {
  return useMemo(() => {
    const defaultFoodAllergyOptions = [
      {
        value: "nueces",
        label: "Nueces (Maní, Almendras, etc)",
      },
      {
        value: "crustaceos",
        label: "Crustaceos",
      },
      {
        value: "nueces",
        label: "Ninguna",
      },
    ];
    if (!foodAllergy) {
      return defaultFoodAllergyOptions;
    }
    const alreadyExists = defaultFoodAllergyOptions.some(
      ({ value }) => value === foodAllergy
    );
    if (!alreadyExists) {
      defaultFoodAllergyOptions.push({
        value: foodAllergy.toLowerCase(),
        label: uppercaseFirstLetter(foodAllergy),
      });
    }
    return defaultFoodAllergyOptions;
  }, [foodAllergy]);
};

const useGetPronounsOptions = (pronouns?: string | null) => {
  return useMemo(() => {
    const defaultPronounsOptions = [
      {
        value: "ella",
        label: "Ella",
      },
      {
        value: "elle",
        label: "Elle",
      },
      {
        value: "el",
        label: "El",
      },
    ];
    if (!pronouns) {
      return defaultPronounsOptions;
    }
    const alreadyExists = defaultPronounsOptions.some(
      ({ value }) => value === pronouns
    );
    if (!alreadyExists) {
      defaultPronounsOptions.push({
        value: pronouns.toLowerCase(),
        label: uppercaseFirstLetter(pronouns),
      });
    }
    return defaultPronounsOptions;
  }, [pronouns]);
};
const defaultShirtSizeOptions = [
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
  { value: "XXXL", label: "XXXL" },
];

const defaultShirtStyleOptions = [
  { value: "corte_ajustado", label: "Corte ajustado" },
  { value: "corte_clasico", label: "Corte clásico" },
];

export const UserInformationForm = () => {
  const { data: user, refetch } = useQuery(["me"], me);
  const countrySelectId = useId();
  const genderSelectId = useId();
  const [submitMessage, setSubmitMessage] = useState("");
  const [isMutating, setMutating] = useState(false);
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const genderOptions = useGetGenderOptions(user?.gender);
  const foodPreferenceOptions = useGetFoodPreferenceOptions(
    user?.foodPreference
  );
  const foodAllergyOptions = useGetFoodAllergyOptions(user?.foodAllergy);
  const pronounsOptions = useGetPronounsOptions(user?.pronouns);

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
      foodPreference: user?.foodPreference
        ? foodPreferenceOptions.find(
            (foodPreference: SelectOption) =>
              foodPreference.value === user.foodPreference
          )
        : undefined,
      shirtSize: user?.shirtSize
        ? defaultShirtSizeOptions.find(
            (defaultShirtSize) => defaultShirtSize.value === user.shirtSize
          )
        : undefined,
      shirtStyle: user?.shirtStyle
        ? defaultShirtStyleOptions.find(
            (defaultShirtStyle) => defaultShirtStyle.value === user.shirtStyle
          )
        : undefined,
      foodAllergy: user?.foodAllergy
        ? foodAllergyOptions.find(
            (foodAllergy: SelectOption) =>
              foodAllergy.value === user.foodAllergy
          )
        : undefined,
      pronouns: user?.pronouns
        ? pronounsOptions.find(
            (pronouns: SelectOption) => pronouns.value === user.pronouns
          )
        : undefined,
    }),
    [
      genderOptions,
      foodPreferenceOptions,
      foodAllergyOptions,
      pronounsOptions,
      user?.company,
      user?.country,
      user?.gender,
      user?.name,
      user?.position,
      user?.seniority,
      user?.username,
      user?.yearsOfExperience,
      user?.pronouns,
      user?.foodAllergy,
      user?.foodPreference,
      user?.shirtSize,
      user?.shirtStyle,
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

    try {
      setMutating(true);
      if (isMutating) {
        return;
      }
      setSubmitMessage("");
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
    } finally {
      setMutating(false);
    }
  });

  return (
    <Form
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
      <FormSection>
        <H3>INFORMACIÓN PERSONAL</H3>
        <FormFieldsSection>
          <FormFieldSection>
            <FormLabel htmlFor="name">Nombre</FormLabel>
            <TextInput
              {...register("name", nameValidation)}
              id="name"
              placeholder="Nombre"
              error={Boolean(errors.name?.type)}
            />
            <Error {...errors.name} />
          </FormFieldSection>

          <FormFieldSection>
            <FormLabel htmlFor="username">Nombre de Usuario</FormLabel>
            <TextInput
              {...register("username", nameValidation)}
              id="username"
              placeholder="Nombre de Usuario"
              inputMode="email"
              error={Boolean(errors.username?.type)}
            />
            <Error {...errors.username} />
          </FormFieldSection>

          {!user?.email ? (
            <>
              <FormFieldSection>
                <FormLabel htmlFor="email">Correo Electrónico</FormLabel>
                <TextInput
                  {...register("email", emailValidation)}
                  id="email"
                  placeholder="Correo Electrónico"
                  inputMode="email"
                  error={Boolean(errors.email?.type)}
                />
                <Error {...errors.email} />
              </FormFieldSection>
            </>
          ) : null}

          <FormFieldSection>
            <FormLabel>País</FormLabel>
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  isClearable
                  placeholder="Seleccionar País"
                  styles={customStyles}
                  options={countryOptions}
                  instanceId={countrySelectId}
                />
              )}
            />
            <Error {...errors.country} />
          </FormFieldSection>

          <FormFieldSection>
            <FormLabel htmlFor="company">Compañía</FormLabel>
            <TextInput
              {...register("company", optionalStringValidation)}
              id="company"
              placeholder="Compañía"
              error={Boolean(errors.company?.type)}
            />
            <Error {...errors.company} />
          </FormFieldSection>

          <FormFieldSection>
            <FormLabel htmlFor="position">Posición / Cargo</FormLabel>
            <TextInput
              {...register("position", optionalStringValidation)}
              id="position"
              placeholder="Posición / Cargo"
              error={Boolean(errors.position?.type)}
            />
            <Error {...errors.position} />
          </FormFieldSection>

          <FormFieldSection>
            <FormLabel htmlFor="seniority">Seniority</FormLabel>
            <TextInput
              {...register("seniority", optionalStringValidation)}
              id="seniority"
              placeholder="Seniority"
              error={Boolean(errors.seniority?.type)}
            />
            <Error {...errors.seniority} />
          </FormFieldSection>

          <FormFieldSection>
            <FormLabel htmlFor="yearsOfExperience">
              Años de Experiencia
            </FormLabel>
            <TextInput
              {...register("yearsOfExperience", notNegativeNumberValidation)}
              id="yearsOfExperience"
              placeholder="Años de Experiencia"
              type="number"
              inputMode="numeric"
              min={0}
              max={100}
              error={Boolean(errors.yearsOfExperience?.type)}
            />
            <Error {...errors.yearsOfExperience} />
          </FormFieldSection>

          <FormFieldSection>
            <FormLabel>Género</FormLabel>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  isClearable
                  placeholder="Seleccionar Género"
                  styles={customStyles}
                  options={genderOptions}
                  instanceId={genderSelectId}
                />
              )}
            />
            <Error {...errors.gender} />
          </FormFieldSection>
        </FormFieldsSection>
        <FormFieldsSection>
          <UpdateButton
            type="submit"
            disabled={Object.entries(errors).length > 0 || !isDirty}
          >
            Actualizar
          </UpdateButton>
        </FormFieldsSection>
      </FormSection>

      <Error
        message={submitMessage}
        color={submitMessage.includes("Error") ? "red" : "white"}
      />
      {formErrors.map((error) => {
        return <Error key={error} message={error} color={"red"} />;
      })}
    </Form>
  );
};
