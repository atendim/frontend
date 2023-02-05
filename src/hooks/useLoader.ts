import { useContext } from "react";
import { LoaderContext } from "../contexts/loader";

export const useLoader = () => useContext(LoaderContext)