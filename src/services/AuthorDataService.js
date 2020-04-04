import http from "../http-common";

class AuthorDataService {
    getAll() {
        return http.get("/authors");
    }

    get(id) {
        return http.get(`/authors/${id}`);
    }

    // create(data) {
    //     return http.post("/articles", data);
    // }

    // update(id, data) {
    //     return http.put(`/articles/${id}`, data);
    // }

    // delete(id) {
    //     return http.delete(`/articles/${id}`);
    // }

    // deleteAll() {
    //     return http.delete(`/articles`);
    // }

    // findByTitle(title) {
    //     return http.get(`/articles?title_article=${title}`);
    // }
}

export default new AuthorDataService();