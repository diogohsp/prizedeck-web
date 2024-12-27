import { useNavigate } from "react-router-dom";
import { HeaderViewProps } from "./InterfaceHeaderViewProps";

export const useHeaderModel = (): HeaderViewProps => {
  const navigate = useNavigate();

  return {
    navigate,
  };
};
