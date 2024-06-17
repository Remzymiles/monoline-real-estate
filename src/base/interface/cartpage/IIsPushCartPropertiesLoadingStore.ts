export interface IIsPushCartPropertiesLoadingStore {
    IsPushCartPropertiesLoading: { [propertyId: string]: boolean };
    setIsPushCartPropertiesLoading: (propertyId: string, isLoading: boolean) => void;
  }