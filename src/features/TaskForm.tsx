import React from "react";
import { useForm, Resolver } from "react-hook-form";
import useTask from "../hooks/useTask";

type FormValues = {
  name: string;
  description: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.name ? values : {},
    errors: !values.name
      ? {
          name: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

export default function TaskForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const { createTask } = useTask();

  // @ts-ignore
  const onSubmit = handleSubmit((data) => createTask(data));

  return (
    <form onSubmit={onSubmit}>
      <input {...register("name")} placeholder="name of the task" />
      {errors?.name && <p>{errors.name.message}</p>}

      <input {...register("description")} placeholder="description" />
      <button onClick={onSubmit}> Save Task </button>
    </form>
  );
}
