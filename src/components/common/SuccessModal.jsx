import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MessageCircle, ExternalLink } from "lucide-react";
import Button from "../ui/Button";

function SuccessModal({ isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-ink/50 backdrop-blur-md p-6"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 24 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="relative w-full max-w-2xl rounded-[40px] glass-panel p-10 lg:p-12 overflow-hidden"
          >
            <motion.div
              className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-teal-300/20 to-amber-300/20 blur-[80px] rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.15, stiffness: 200 }}
                className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-600 to-teal-400 flex items-center justify-center mx-auto shadow-xl shadow-teal-500/25"
              >
                <CheckCircle2 className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="font-display text-4xl lg:text-5xl font-semibold mt-8 text-ink">
                Application
                <span className="block text-gradient-luxury mt-1">
                  Submitted Successfully
                </span>
              </h2>

              <p className="text-muted text-lg leading-relaxed mt-6 max-w-xl mx-auto">
                Thank you for applying to the Cosmolix Industrial Internship Program
                2026. Our team will review your application and contact shortlisted
                students shortly.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <Button
                  href="https://chat.whatsapp.com/EAHPR4kmq7A5eu0xsK9kJF"
                  variant="gold"
                  className="!text-white"
                >
                  <MessageCircle className="w-4 h-4" />
                  Join WhatsApp Community
                </Button>

                <Button
                  href="https://cosmolix.co.in"
                  variant="outline"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Website
                </Button>
              </div>

              <p className="text-sm text-muted-light mt-8">
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
