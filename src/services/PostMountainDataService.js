import http from "../http-common";

class PostMountainDataService {
    getAll() {
        return http.get("/post_mountains");
    }

    getByIdMountain(id) {
        return http.get(`/post_mountains/mountain/${id}`);
    }

    get(id) {
        return http.get(`/post_mountains/${id}`);
    }

    create(data) {
        return http.post("/post_mountains", data);
    }

    update(id, data) {
        return http.put(`/post_mountains/${id}`, data);
    }

    delete(id) {
        return http.delete(`/post_mountains/${id}`);
    }

    // deleteAll() {
    //     return http.delete(`/authors`);
    // }

    // findByTitle(title) {
    //     return http.get(`/articles?title_article=${title}`);
    // }
}

export default new PostMountainDataService();