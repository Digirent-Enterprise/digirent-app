export interface ICategory {
  _id: string;
  name: string;
  image: string;
  checked: boolean;
}

export interface CategoryState {
  pending: boolean;
  categories: ICategory[];
  error: string | null;
}

export interface SetCategoryPayload {
  categories: ICategory[];
}

export type SetCategory = {
  type: string;
  payload: SetCategoryPayload;
};

export type CategoryActions = SetCategory;
