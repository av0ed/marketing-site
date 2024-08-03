import { RemixiconComponentType } from "@remixicon/react";

interface Props {
  IconLeft?: RemixiconComponentType;
  IconRight?: RemixiconComponentType;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  hint?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  label: string;
  placeholder?: string;
  type: "email" | "password" | "text";
}

const classes = {
  error: "font-normal text-red-600",
  hint: "font-normal text-neutral-500",
  icon: "absolute text-neutral-400",
  iconError: "absolute text-red-600",
  input: `flex items-center w-full text-neutral-900 border border-neutral-200
      bg-neutral-50 rounded gap-x-2 py-2.5 px-3.5 text-ellipsis overflow-hidden
      font-normal placeholder-neutral-500 focus:outline-none focus:ring
      disabled:pointer-events-none disabled:border-neutral-100
      disabled:placeholder-neutral-400`,
  inputError: "focus:ring-red-200 focus:border-red-600",
  inputFocus: "focus:ring-indigo-200 focus:border-indigo-600",
  inputWrapper: "flex items-center relative",
  label: `flex flex-col gap-y-1.5 font-medium text-sm text-neutral-700 w-full
    max-w-[340px]`,
};

export default function TextInput({
  IconLeft,
  IconRight,
  onChange,
  error,
  hint,
  isDisabled,
  isRequired,
  label,
  placeholder,
  type,
}: Props) {
  const inputClasses = `
    ${classes.input} 
    ${error ? classes.inputError : classes.inputFocus} 
    ${IconLeft ? "pl-[42px]" : ""} 
    ${IconRight ? "pr-[38px]" : ""}
  `;

  return (
    <label className={classes.label}>
      {label}
      <div className={classes.inputWrapper}>
        {IconLeft && (
          <IconLeft className={`${classes.icon} left-3.5 h-5 w-5`} />
        )}
        <input
          aria-invalid={!!error}
          aria-required={isRequired}
          className={inputClasses}
          disabled={isDisabled}
          onChange={onChange}
          placeholder={placeholder}
          required={isRequired}
          type={type}
        />
        {IconRight && (
          <IconRight
            className={`${error ? classes.iconError : classes.icon} right-3.5 h-4 w-4`}
          />
        )}
      </div>
      {hint && !error && <span className={classes.hint}>{hint}</span>}
      {error && <span className={classes.error}>{error}</span>}
    </label>
  );
}
