import React, { useRef } from "react";
import LoadingBar from "react-top-loading-bar";

export const TopLoaderContext = React.createContext();

const TopLoader = ({ children }) => {
  const loadingRef = useRef(null);
  return (
    <TopLoaderContext.Provider value={{loadingRef}}>
      <LoadingBar
        ref={loadingRef}
        waitingTime={400}
        color="#4361EE"
      />
      {children}
    </TopLoaderContext.Provider>
  );
};

export default TopLoader;