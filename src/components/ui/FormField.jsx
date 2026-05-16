import { motion, AnimatePresence } from "framer-motion";

function FormField({ label, error, children, className = "" }) {
  return (
    <motion.div
      layout
      className={`flex flex-col ${className}`.trim()}
    >
      <label className="mb-2 block font-label text-xs font-medium uppercase tracking-[0.12em] text-muted sm:mb-2.5">
        {label}
      </label>

      {children}

      <AnimatePresence mode="wait">
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            role="alert"
            className="text-red-600 text-sm mt-2 flex items-center gap-1.5"
          >
            <span className="inline-block w-1 h-1 rounded-full bg-red-500 shrink-0" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function TextInput({ registration, error, label, className = "", ...props }) {
  return (
    <FormField label={label} error={error}>
      <input
        {...registration}
        {...props}
        className={`form-control ${error ? "is-invalid" : ""} ${className}`.trim()}
      />
    </FormField>
  );
}

export default FormField;
