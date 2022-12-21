import { useQuery } from "@tanstack/react-query";
import { useEffect, useId, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import Select from "react-select/creatable";

import { ErrorResponse } from "../../helpers/API";

import { PreferencesType } from "../../helpers/API/types";
import {
  customStyles,
  Error,
  Form,
  FormFieldSection,
  FormFieldsSection,
  FormLabel,
  FormSection,
  UpdateButton,
} from "../Form/components";
import { H3, P } from "../core/Typography";

interface SelectOption {
  label: any;
  value: string;
}

interface FormData {
  foodPreference?: SelectOption;
  shirtSize?: SelectOption;
  shirtStyle?: SelectOption;
  foodAllergy?: SelectOption;
  pronouns?: SelectOption;
}

const uppercaseFirstLetter = (string: string) => {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
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

export const UserPreferencesForm = <T extends PreferencesType>({
  getterFunction,
  getterKey,
  subtitle,
  mutationFunction,
}: {
  subtitle?: React.ReactNode;
  getterFunction: (args?: any) => Promise<T>;
  getterKey: string[];
  mutationFunction: (fields: Partial<T>) => Promise<T>;
}) => {
  const { data: user, refetch } = useQuery(getterKey, getterFunction);
  const [isMutating, setMutating] = useState(false);
  const foodPreferenceId = useId();
  const shirtSizeId = useId();
  const shirtStyleId = useId();
  const pronounsSelectId = useId();
  const [submitMessage, setSubmitMessage] = useState("");
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const foodPreferenceOptions = useGetFoodPreferenceOptions(
    user?.foodPreference
  );
  const foodAllergyOptions = useGetFoodAllergyOptions(user?.foodAllergy);
  const pronounsOptions = useGetPronounsOptions(user?.pronouns);

  const defaultValues = useMemo(
    () => ({
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
      foodPreferenceOptions,
      foodAllergyOptions,
      pronounsOptions,
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
  } = useForm<FormData>({
    mode: "onSubmit",
    defaultValues,
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const onSubmit = handleSubmit(async (data) => {
    const submit = {
      ...(touchedFields?.foodPreference &&
      data?.foodPreference !== user?.foodPreference
        ? { foodPreference: data?.foodPreference?.value }
        : {}),
      ...(touchedFields?.shirtSize && data?.shirtSize !== user?.shirtSize
        ? { shirtSize: data?.shirtSize?.value }
        : {}),
      ...(touchedFields?.shirtStyle && data?.shirtStyle !== user?.shirtStyle
        ? { shirtStyle: data?.shirtStyle?.value }
        : {}),
      ...(touchedFields?.foodAllergy && data?.foodAllergy !== user?.foodAllergy
        ? { foodAllergy: data?.foodAllergy?.value }
        : {}),
      ...(touchedFields?.pronouns && data?.pronouns !== user?.pronouns
        ? { pronouns: data?.pronouns?.value }
        : {}),
    };

    try {
      if (isMutating) {
        return;
      }
      setSubmitMessage("");
      setMutating(true);
      const response = await mutationFunction(submit as any);
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
      <FormSection>
        <H3>Preferencias</H3>
        <P>{subtitle}</P>
        <FormFieldsSection>
          <FormFieldSection>
            <FormLabel>Tamaño de Polera</FormLabel>
            <Controller
              name="shirtSize"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder="Tamaño de Polera"
                  isSearchable={false}
                  styles={customStyles}
                  options={defaultShirtSizeOptions}
                  instanceId={shirtSizeId}
                />
              )}
            />
            <Error {...errors.shirtSize} />
          </FormFieldSection>

          <FormFieldSection>
            <FormLabel>Estilo de Polera</FormLabel>
            <Controller
              name="shirtStyle"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder="Estilo de polera"
                  isSearchable={false}
                  styles={customStyles}
                  options={defaultShirtStyleOptions}
                  instanceId={shirtStyleId}
                />
              )}
            />
            <Error {...errors.shirtStyle} />
          </FormFieldSection>

          <FormFieldSection>
            <FormLabel>Preferencias Alimenticias</FormLabel>
            <Controller
              name="foodPreference"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  isClearable
                  placeholder="Preferencias alimenticias"
                  styles={customStyles}
                  options={foodPreferenceOptions}
                  instanceId={foodPreferenceId}
                />
              )}
            />
            <Error {...errors.foodPreference} />
          </FormFieldSection>

          <FormFieldSection>
            <FormLabel>Alergias alimenticias</FormLabel>
            <Controller
              name="foodAllergy"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  isClearable
                  placeholder="Alergias alimenticias"
                  styles={customStyles}
                  options={foodAllergyOptions}
                  instanceId={shirtStyleId}
                />
              )}
            />
            <Error {...errors.foodAllergy} />
          </FormFieldSection>

          <FormFieldSection>
            <FormLabel>Pronombres</FormLabel>
            <Controller
              name="pronouns"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  isClearable
                  placeholder="Pronombres"
                  styles={customStyles}
                  options={pronounsOptions}
                  instanceId={pronounsSelectId}
                />
              )}
            />
            <Error {...errors.pronouns} />
          </FormFieldSection>
        </FormFieldsSection>
        <FormFieldsSection>
          <UpdateButton
            loading={isMutating}
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
