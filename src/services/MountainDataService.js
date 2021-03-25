import http from "../http-common";

class MountainDataService {
    getAll() {
        return http.get("/mountains");
    }

    get(id) {
        return http.get(`/mountains/${id}`);
    }

    create(data) {
        return http.post("/mountains", data);
    }

    update(id, data) {
        return http.put(`/mountains/${id}`, data);
    }

    delete(id) {
        return http.delete(`/mountains/${id}`);
    }

    // deleteAll() {
    //     return http.delete(`/authors`);
    // }

    // findByTitle(title) {
    //     return http.get(`/articles?title_article=${title}`);
    // }
}

export default new MountainDataService();