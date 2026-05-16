import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MessageCircle, ExternalLink } from "lucide-react";
import Button from "../ui/Button";

function SuccessModal({ isOpen }) {
    useEffect(() => {
  if (isOpen) {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    document.body.style.overflow = "hidden";

  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [isOpen]);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-ink/60 backdrop-blur-md px-4 py-6"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 24 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="glass-panel relative my-auto w-full max-w-2xl overflow-hidden p-6 sm:max-w-3xl sm:p-10 lg:p-11 xl:max-w-3xl"
          >
            <motion.div
              className="pointer-events-none absolute top-0 right-0 h-60 w-60 rounded-full bg-gradient-to-br from-teal-300/20 to-amber-300/20 blur-[80px]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.15, stiffness: 200 }}
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-[var(--radius-pill)] bg-gradient-to-br from-teal-600 to-teal-400 shadow-xl shadow-teal-500/25 sm:h-24 sm:w-24"
              >
                <CheckCircle2 className="h-10 w-10 text-white sm:h-12 sm:w-12" aria-hidden />
              </motion.div>

              <h2 className="font-display mt-6 text-balance text-[clamp(1.75rem,4vw+0.75rem,3.25rem)] font-semibold leading-[1.15] text-ink sm:mt-8">
                Application
                <span className="mt-1 block text-gradient-luxury sm:mt-1.5">
                  Submitted Successfully
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted sm:mt-6 sm:text-lg">
                Thank you for applying to the Cosmolix Industrial Internship Program 2026. Our team
                will review your application and contact shortlisted students shortly.
              </p>

              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <Button
                  href="https://chat.whatsapp.com/EAHPR4kmq7A5eu0xsK9kJF"
                  variant="gold"
                  className="min-h-[3rem] justify-center !text-white sm:min-h-0"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
                  Join WhatsApp Community
                </Button>

                <Button
                  href="https://cosmolix.co.in"
                  variant="outline"
                  className="min-h-[3rem] justify-center sm:min-h-0"
                >
                  <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
                  Visit Website
                </Button>
              </div>

              <p className="mt-6 text-sm text-muted-light sm:mt-8">
                You will be redirected to cosmolix.co.in shortly...
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SuccessModal;
