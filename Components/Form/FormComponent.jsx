import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const FormComponent = ({
  validations,
  submitFn = () => {},
  defaultValues,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setError,
  } = useForm({
    resolver: validations ? zodResolver(validations) : undefined,
    defaultValues: defaultValues ? defaultValues : null,
  });

  const submitForm = (data) => {
    submitFn(data, reset);
  };

  const FormWrapper = ({ children, className }) => {
    return (
      <form className={className} onSubmit={handleSubmit(submitForm)}>
        {children}
      </form>
    );
  };

  return {
    FormWrapper,
    errors,
    register,
    watch,
    reset,
    setError,
  };
};
