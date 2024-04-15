import { useHandleFilterCity } from "./useHandleFilterCity";
import { useHandleFilterState } from "./useHandleFilterState";

export const useHandleClearFilter = () => {
  const { setSelectedCity, clearSelectedCity } = useHandleFilterCity();
  const { setSelectedState, clearSelectedState } = useHandleFilterState();

  const handleClearFilter = () => {
    setSelectedCity("");
    setSelectedState("");
  };

  return { handleClearFilter, clearSelectedState, clearSelectedCity };
};
