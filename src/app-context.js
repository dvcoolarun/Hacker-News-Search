import * as React from "react";

import { appReducer } from "./containers/appReducer";
import { initialState } from "./containers/initialState";

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(appReducer, initialState)
    const value = { state, dispatch }
    return <AppContext.Provider value = { value } > { children } </AppContext.Provider>
}

const useAppState = () => {
    const context = React.useContext(AppContext);

    if (context === undefined) {
        throw new Error('useAppState must be use inside the AppContextProvider')
    }
    return context;
}

export {AppContextProvider, useAppState}