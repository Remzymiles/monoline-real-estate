export interface ISearchValueStore {
  searchValue: string;
  updateSearchValue: (value: string | undefined) => void;
}
