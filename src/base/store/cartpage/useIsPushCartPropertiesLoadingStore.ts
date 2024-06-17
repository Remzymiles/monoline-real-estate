import { create } from "zustand";
import { IIsPushCartPropertiesLoadingStore } from "../../interface/cartpage/IIsPushCartPropertiesLoadingStore";

export const useIsPushCartPropertiesLoadingStore =
  create<IIsPushCartPropertiesLoadingStore>((set) => ({
    IsPushCartPropertiesLoading: {},

    setIsPushCartPropertiesLoading: (propertyId, isLoading) =>
      set((state) => ({
        IsPushCartPropertiesLoading: {
          ...state.IsPushCartPropertiesLoading,
          [propertyId]: isLoading,
        },
      })),
  }));
