import { dispatchHelper } from './action-helpers'

export const CATEGORY__FETCH = "category__fetch";
export const CATEGORY__CREATE = "category__create";
export const CATEGORY__DELETE = "category__delete";
export const CATEGORY__UPDATE = "category__update";

export function fetchCategories() {
    return dispatchHelper(axios.get("/api/category"), CATEGORY__FETCH)
}

export function createCategory(data) {
    return dispatchHelper(axios.post("/api/category", {name: data.name}), CATEGORY__CREATE)
}

export function deleteCategory({id}) {
    return dispatchHelper(axios.post(`/api/category/delete/${id}`), CATEGORY__DELETE)
}

export function updateCategory(data) {
    return dispatchHelper(axios.put(`/api/category/${data.id}`, data), CATEGORY__UPDATE)
}
