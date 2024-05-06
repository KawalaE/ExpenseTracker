import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { categories } from "../ExpenseTracker";

const schema = z.object({
  description: z
    .string()
    .min(1, { message: "Description should have at least on character." }),
  amount: z
    .number({ invalid_type_error: "Amount field is required." })
    .min(0, { message: "Number must be larger of equal to zero." }),
  category: z.enum([
    "Groceries",
    "Utilities",
    "Entertainment",
    "Miscellaneous",
    "Health",
  ]),
});

type FormData = z.infer<typeof schema>;

const onSubmit = (data: FormData) => {
  console.log(data);
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="label-control">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="label-control">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="label-control">
          Category
        </label>
        <select {...register("category")} className="form-select" id="category">
          <option value="" disabled selected></option>
          {categories.map((category) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button disabled={!isValid} type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default Form;
