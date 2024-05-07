import React from "react";
import { ZodIssueOptionalMessage, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

const schema = z.object({
  description: z
    .string({ invalid_type_error: "Description field is required." })
    .min(1, { message: "Description should have at least on character." }),
  amount: z
    .number({ invalid_type_error: "Amount field is required." })
    .min(0, { message: "Number must be larger of equal to zero." }),
  category: z.enum(
    ["Groceries", "Utilities", "Entertainment", "Miscellaneous", "Health"],
    { errorMap: () => ({ message: "Please select an category." }) }
  ),
});

export type FormData = z.infer<typeof schema>;
export type categoryName = "category";

interface Props {
  onClick: (data: FormData) => void;
  categories: string[];
}

const Form = ({ onClick, categories }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  return (
    <form onSubmit={handleSubmit(onClick)}>
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
        <select
          {...register("category")}
          defaultValue={""}
          className="form-select"
          id="category"
        >
          <option value="" disabled></option>
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
      <button type="submit" className="btn btn-primary mb-5">
        Add
      </button>
    </form>
  );
};

export default Form;
