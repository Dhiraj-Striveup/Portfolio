"use client";
import React, {  useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Linkedin, X as Close } from "lucide-react";

type Props = { onClose: () => void };

const ContactModal: React.FC<Props> = ({ onClose }) => {
     const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('hello@example.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 9000)
  }
  const [tab, setTab] = useState<"quick" | "form">("quick");
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { setStatus, setSubmitting, resetForm }) => {
      setStatus("Sending...");
      setSubmitting(true);
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (res.ok) {
          setStatus("Message sent successfully!");
          resetForm();
        } else {
          setStatus("Failed to send message.");
        }
      } catch {
        setStatus("An error occurred.");
      }
      setSubmitting(false);
    },
  });

  return (
    <AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center
                   bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
       
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 32 }}
          className="relative w-full max-w-lg rounded-xl bg-[#0d0d0d] p-6
                     shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
         
          <div className="mx-auto mb-6 h-1.5 w-20 rounded-full bg-white/10" />

        
          <div className="mb-8 flex items-center justify-center gap-6 text-white/60">
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-5 w-5 hover:text-cyan-400 transition" />
            </a>
          </div>

         
          <div className="mb-6 grid grid-cols-2 gap-4">
            {["quick", "form"].map((key) => (
              <button
                key={key}
                onClick={() => setTab(key as "quick" | "form")}
                className={`rounded-md px-4 py-2 text-sm font-medium transition
                  ${
                    tab === key
                      ? "bg-white/10 text-white"
                      : "text-white/50 hover:bg-white/5"
                  }`}
              >
                {key === "quick" ? "Quick connect" : "Fill a form"}
              </button>
            ))}
          </div>

         
          {tab === "quick" ? (
            <div className="grid grid-cols ">
              <a
                href="#"
                className="group rounded-lg border border-white/5
                           bg-gradient-to-br from-[#14161a] to-[#0d0f12] p-5
                           hover:border-cyan-400/30 transition"
              >
                <div className="mb-4 flex items-center gap-3">
                  <Mail className="h-6 w-6 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                </div>
                <p  onClick={handleCopy} className="text-sm font-medium text-white">
                  {copied ? 'Copied!' : 'dhiraj.striveup@gmail.com'}
                </p>
                <p className="mt-1 text-sm text-white/60">
                  Send me an email directly
                </p>
              </a>
            </div>
          ) : (
            <form
              onSubmit={formik.handleSubmit}
              action="https://formspree.io/f/your-id"
              method="POST"
              className="space-y-4"
            >
              <input
                name="name"
                placeholder="Name"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="w-full rounded-md border border-white/10 bg-transparent
                           px-4 py-3 text-sm text-white placeholder-white/40
                           focus:border-cyan-400 focus:outline-none"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.name}
                </p>
              )}
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                required
                className="w-full rounded-md border border-white/10 bg-transparent
                           px-4 py-3 text-sm text-white placeholder-white/40
                           focus:border-cyan-400 focus:outline-none"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </p>
              )}
              <textarea
                name="message"
                rows={4}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                placeholder="Message"
                required
                className="w-full rounded-md border border-white/10 bg-transparent
                           px-4 py-3 text-sm text-white placeholder-white/40
                           focus:border-cyan-400 focus:outline-none"
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.message}
                </p>
              )}
              <button
                type="submit"
                className="w-full rounded-md bg-gradient-to-r from-cyan-500 to-blue-600
                           py-3 text-sm font-medium text-white
                           hover:from-cyan-400 hover:to-blue-500 transition"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-cyan-800"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
              {formik.status && (
                <p className="text-center text-sm mt-4 text-gray-600">
                  {formik.status}
                </p>
              )}
            </form>
          )}

          <div className="mt-8 rounded-md bg-green-800/20 px-1  md:px-4 py-3 text-center">
            <span className="flex items-center justify-center gap-2 text-sm font-medium text-green-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Currently available for new opportunities
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 text-white/40 transition hover:text-white"
          >
            <Close size={20} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactModal;
