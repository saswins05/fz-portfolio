import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { Button } from "@headlessui/react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  // Schema de validation Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Le nom est requis"),
    email: Yup.string()
      .email("Email invalide")
      .required("L'email est requis"),
    message: Yup.string().required("Le message est requis"),
  });

  // Soumission du formulaire
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Submitted:", values);
    resetForm(); // Réinitialise le formulaire après soumission
    alert("Votre message a été envoyé avec succès !");
  };

  return (
    <motion.div
      className="relative flex items-center justify-center font-poppins  shadow-lg
       rounded-xl  min-h-screen bg-[#173c4c] text-white px-6 lg:px-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="p-6 lg:p-12  shadow-lg rounded-xl  max-w-5xl w-full">
        {/* Contenu global : divisé en deux colonnes sur desktop */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Formulaire */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-[#2af4ed] mb-6">
              Envoyez-moi un message
            </h1>
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">
                  {/* Champ Nom */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-medium text-[#a5c233] mb-2"
                    >
                      Nom complet
                    </label>
                    <Field
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Entrez votre nom"
                      className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2af4ed]"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Champ Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-medium text-[#a5c233] mb-2"
                    >
                      Email
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Entrez votre email"
                      className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2af4ed]"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Champ Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block font-medium text-[#a5c233] mb-2"
                    >
                      Message
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      placeholder="Entrez votre message"
                      rows="5"
                      className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2af4ed]"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Bouton Soumettre */}
                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 cursor-pointer bg-[#2af4ed] hover:bg-[#1e573a] text-black font-semibold rounded-lg shadow-md transition-all duration-300"
                    >
                      Envoyer
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          {/* Liens Utiles */}
          <div className="flex-1 lg:pl-6">
            <h2 className="text-2xl font-bold text-[#a5c233] mb-6">
              Coordonnées
            </h2>
            <div className="space-y-6">
              <motion.div
                className="flex items-center gap-4"
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Mail className="w-6 h-6 text-[#2af4ed]" />
                <p className="text-gray-100">email@example.com</p>
              </motion.div>
              <motion.div
                className="flex items-center gap-4"
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Phone className="w-6 h-6 text-[#2af4ed]" />
                <p className="text-gray-100">+212 6 12 34 56 78</p>
              </motion.div>
              <motion.div
                className="flex items-center gap-4"
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
              >
                <MapPin className="w-6 h-6 text-[#2af4ed]" />
                <p className="text-gray-100">Casablanca, Maroc</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
