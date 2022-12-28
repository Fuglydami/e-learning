import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [show, setShow] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openTab, setOpenTab] = useState(1);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        openModal,
        loading,
        error,
        isModalOpen,
        closeModal,
        openTab,
        setOpenTab,
        showSidebar,
        setShowSidebar,
        setLoading,
        show,
        setShow,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
