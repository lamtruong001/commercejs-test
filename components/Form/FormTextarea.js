import { useFormContext } from "react-hook-form";

import FormError from "./FormError";

function FormTextarea({
  label,
  name,
  required = false,
  validation = {},
  ...props
}) {
  const { register } = useFormContext();

  const isRequired = required ? `${label || name} is required` : false;

  return (
    <div className="py-2">
      <textarea
        ref={register({ required: isRequired, ...validation })}
        id={name}
        name={name}
        className="appearance-none bg-transparent placeholder-faded-black border border-grey focus:border-blue focus:outline-none rounded-md w-full text-base p-2"
        {...props}
      />
      <FormError name={name} />
    </div>
  );
}

export default FormTextarea;
