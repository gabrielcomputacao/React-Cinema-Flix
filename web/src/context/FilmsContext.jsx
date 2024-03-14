import { createContext, useState } from "react";

export const FilmsContext = createContext();

export const FilmsProvider = ({ children }) => {
  const [selectedFilm, setSelectedFilm] = useState();
  const [showAlert, setShowAlert] = useState({
    message: "",
    severity: "success",
    show: false,
  });

  function onSetShowAlert(message, severity) {
    setShowAlert((prev) => {
      return { ...prev, message, severity, show: true };
    });
  }

  function onClose() {
    setShowAlert((prev) => {
      return { ...prev, message: "", severity: "success", show: false };
    });
  }

  return (
    <FilmsContext.Provider
      value={{
        selectedFilm,
        setSelectedFilm,
        showAlert,
        onSetShowAlert,
        onClose,
      }}
    >
      {children}
    </FilmsContext.Provider>
  );
};