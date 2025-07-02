"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

const ContactForm = () => {
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
      } catch  {
        setStatus("An error occurred.");
      }
      setSubmitting(false);
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <motion.form
        onSubmit={formik.handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#0d0d0d] shadow-2xl rounded-3xl p-8 max-w-lg w-full"
      >
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Contact Us
        </h2>

      
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="mb-4">
          <label className="block text-white font-medium mb-2">Your Name</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="Enter your name"
            className="w-full bg-[#0d0d0d] p-3 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
          )}
        </motion.div>

       
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="mb-4">
          <label className="block text-white font-medium mb-2">Your Email</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Enter your email"
            className="w-full bg-[#0d0d0d] p-3 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          )}
        </motion.div>

        
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="mb-4">
          <label className="block text-white font-medium mb-2">Your Message</label>
          <textarea
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            placeholder="Write your message..."
            className="w-full bg-[#0d0d0d] p-3 border border-gray-100 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          {formik.touched.message && formik.errors.message && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
          )}
        </motion.div>

       
        <motion.button
          type="submit"
          whileHover={!formik.isSubmitting ? { scale: 1.05 } : {}}
          whileTap={!formik.isSubmitting ? { scale: 0.95 } : {}}
          transition={{ duration: 0.2 }}
          className={`w-full py-3 rounded-lg font-medium text-white transition duration-300 flex items-center justify-center gap-2
            ${formik.isSubmitting ? "bg-cyan-400 cursor-not-allowed" : "bg-cyan-600 hover:bg-cyan-700"}
          `}
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
        </motion.button>

       
        {formik.status && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-sm mt-4 text-gray-600"
          >
            {formik.status}
          </motion.p>
          
        )}
      </motion.form>
    </div>
  );
};

export default ContactForm;
