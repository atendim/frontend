import { createContext, useState } from "react";
import { Loader } from "../components/Loader";

type LoaderContextData = { isLoading: boolean; setLoading(is: boolean): void };

export const LoaderContext = createContext<LoaderContextData>(
  {} as LoaderContextData
);

export const LoaderProvider = ({ children }: React.PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <LoaderContext.Provider value={{ isLoading, setLoading: setIsLoading }}>
      {isLoading ? <Loader /> : null}
      {children}
    </LoaderContext.Provider>
  );
};
