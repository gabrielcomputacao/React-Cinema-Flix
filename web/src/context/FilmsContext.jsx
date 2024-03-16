import { createContext, useState } from "react";

export const FilmsContext = createContext();

export const FilmsProvider = ({ children }) => {
  const [selectedFilm, setSelectedFilm] = useState();
  const [selectedSession, setSelectedSession] = useState();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [films, setFilms] = useState([]);
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
      return { ...prev, message: "", show: false };
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
        selectedSession,
        setSelectedSession,
        selectedSeats,
        setSelectedSeats,
        films,
        setFilms,
      }}
    >
      {children}
    </FilmsContext.Provider>
  );
};
