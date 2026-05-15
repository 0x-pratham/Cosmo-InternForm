import { motion, AnimatePresence } from "framer-motion";

function FormField({
  label,
  error,
  children,
  className = "",
}) {
  return (
    <div className={className}>
      <label className="block font-label text-xs uppercase tracking-wider text-muted mb-2.5">
        {label}
      </label>

      {children}

      <AnimatePresence mode="wait">
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-red-600 text-sm mt-2 flex items-center gap-1.5"
          >
            <span className="inline-block w-1 h-1 rounded-full bg-red-500" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export function TextInput({ registration, error, ...props }) {
  return (
    <FormField label={props.label} error={error}>
      <input
        {...registration}
        {...props}
        className={`w-full h-14 rounded-2xl px-5 text-ink ${
          error ? "border-red-300 focus:border-red-400" : ""
        } ${props.className || ""}`}
      />
    </FormField>
  );
}

export default FormField;
