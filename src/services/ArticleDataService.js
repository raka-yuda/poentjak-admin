import http from "../http-common";

class ArticleDataService {
    getAll() {
        return http.get("/articles");
    }

    getAllPublished() {
        return http.get("/articles/published");
    }

    get(id) {
        return http.get(`/articles/${id}`);
    }

    create(data) {
        return http.post("/articles", data);
    }

    update(id, data) {
        return http.put(`/articles/${id}`, data);
    }

    delete(id) {
        return http.delete(`/articles/${id}`);
    }

    // deleteAll() {
    //     return http.delete(`/articles`);
    // }

    findByTitle(title) {
        return http.get(`/articles?title_article=${title}`);
    }
}

export default new ArticleDataService();