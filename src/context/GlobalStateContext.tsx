/* eslint-disable react-refresh/only-export-components */
import * as React from 'react';
import { useImmer } from "use-immer";

type ProviderValue = {
  accordionStates: Record<string, boolean>,
  getAccordion(keys: string[]): Array<GetAccordionReturnObj>,
}

export type GetAccordionReturnObj = {
  getStateKey: () => string;
  getState: () => boolean;
  toggleAccordion: () => void;
  openAccordion: () => void;
  closeAccordion: () => void;
}

// ==============================================================
export function GlobalStateProvider({ children }: React.PropsWithChildren) {
  const [accordionStates, setAccordionStates] = useImmer<Record<string, boolean>>({});


  function toggleAccordion(key: string) {
    setAccordionStates(draft => {
      draft[key] = !draft[key];
    });
  }
  function openAccordion(key: string) {
    setAccordionStates(draft => draft[key] = true);
  }
  function closeAccordion(key: string) {
    setAccordionStates(draft => draft[key] = false);
  }

  
  function getAccordion(keys: string[]) {
    return keys.map(key => ({
      getStateKey: () => key,
      getState: () => accordionStates[key],
      toggleAccordion: () => toggleAccordion(key),
      openAccordion: () => openAccordion(key),
      closeAccordion: () => closeAccordion(key),
    }))
  }

  // --------------------------------------------------------------
  // --------------------------------------------------------------
  const value = {
    accordionStates,
    getAccordion,
  } satisfies ProviderValue;

  return <GlobalStateContext.Provider value={value}>{children}</GlobalStateContext.Provider>;
}

export const GlobalStateContext = React.createContext<ProviderValue | undefined>(undefined);

export const useGlobalState = () => {
  // https://kentcdodds.com/blog/how-to-use-react-context-effectively#the-custom-consumer-component
  const context = React.useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider')
  }
  return context;
};