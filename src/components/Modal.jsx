import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ open, onClose, image, title, description, eventDetails }) => {
  useEffect(() => {
    // Close the modal if user clicks outside the modal area
    const handleOutsideClick = (event) => {
      if (event.target.id === "modal-backdrop") {
        onClose();
      }
    };
    document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="modal-backdrop"
          className={
            "fixed inset-0 z-50 bg-black bg-opacity-20 flex items-center justify-center"
          }
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg transform max-w-2xl w-full relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
            >
              &times;
            </button>
            <div className="flex">
              {/* Image on the left */}
              <div className="w-1/3">
                <img
                  src={image}
                  alt="Modal"
                  className="w-full h-auto object-cover rounded-l-lg"
                />
              </div>

              {/* Title and description on the right */}
              <div className="w-2/3 p-6">
                <h2 className="text-xl font-semibold mb-4">{title}</h2>
                <p className="text-gray-600">{description}</p>
                <p>{eventDetails}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
