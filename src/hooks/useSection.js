import { useEffect, useContext } from "react";
import { SectionContext } from "../context/SectionContext";

export const useSection = () => {
  const { section, setSection } = useContext(SectionContext);

  return { section, setSection };
}