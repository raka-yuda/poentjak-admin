<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-2 pb-4 mb-3 border-bottom">
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">ARTICLE</span>
        <h3 class="page-title">Edit Articles</h3>
      </d-col>
    </d-row>

    <d-row>
      <d-col lg="12" class="mb-4">
        <d-card class="card-small mb-4">
          <div v-if="currentArticle">
            <d-card-header class="border-bottom">
              <h6 class="m-0">Form Inputs</h6>
            </d-card-header>

            <d-list-group-item class="p-3">
              <d-row>
                <!-- Forms -->
                <d-col md="12">
                  <!-- <strong class="text-muted d-block mb-2">Forms</strong> -->
                  <d-form>
                    <div class="form-group">
                      <d-input-group class="mb-3">
                        <d-input
                          placeholder="Title"
                          id="title_article"
                          v-model="currentArticle.title_article"
                          class="form-control"
                          required
                          name="title_article"
                        />
                      </d-input-group>
                    </div>

                    <div class="form-group">
                      <d-input-group class="mb-3">
                        <d-input
                          placeholder="Image Article"
                          id="img_article"
                          v-model="currentArticle.img_article"
                          class="form-control"
                          required
                          name="img_article"
                        />
                      </d-input-group>
                    </div>

                    <div class="form-group">
                      <d-form-textarea
                        id="article"
                        class="form-control"
                        v-model="currentArticle.article"
                        :placeholder="`Enter something`"
                        :rows="6"
                        :max-rows="9"
                      ></d-form-textarea>
                    </div>

                    <div class="form-group">
                      <d-input-group class="mb-3">
                        <d-select
                          :required="true"
                          v-model="currentArticle.id_author"
                        >
                          <option :value="null" disabled>Select Age</option>
                          <option
                            class="list-group-item"
                            v-for="item in author"
                            :key="item.id"
                            v-bind:value="item.id"
                            :selected="currentArticle.id_author == item.id"
                            >{{ item.name_author }}</option
                          >
                        </d-select>
                      </d-input-group>
                    </div>
                  </d-form>

                  <button @click="deleteArticle" class="btn btn-danger mr-3">
                    Delete
                  </button>
                  <button
                    @click="updateArticle"
                    class="btn btn-success"
                    type="submit"
                  >
                    Update
                  </button>
                </d-col>

                <!-- 
    <button
      class="badge badge-primary mr-2"
      v-if="currentTutorial.published"
      @click="updatePublished(false)"
    >UnPublish</button>
                <button v-else class="badge badge-primary mr-2" @click="updatePublished(true)">Publish</button>-->
                <div v-if="message">
                  <d-col>
                    <d-button outline theme="success" class="mb-2 mr-1 mt-3">{{
                      message
                    }}</d-button>
                  </d-col>
                </div>
              </d-row>
            </d-list-group-item>
          </div>

          <div v-else>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        </d-card>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
import ArticleDataService from "../../services/ArticleDataService";
import AuthorDataService from "../../services/AuthorDataService";

export default {
  name: "article",
  data() {
    return {
      currentArticle: null,
      message: "",
      author: []
    };
  },
  methods: {
    retrieveAuthors() {
      AuthorDataService.getAll()
        .then(response => {
          this.author = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    getArticle(id) {
      ArticleDataService.get(id)
        .then(response => {
          this.currentArticle = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateArticle() {
      ArticleDataService.update(this.currentArticle.id, this.currentArticle)
        .then(response => {
          console.log(response.data);
          this.message = "The Article was updated successfully!";
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteArticle() {
      ArticleDataService.delete(this.currentArticle.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "articles" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = "";
    this.getArticle(this.$route.params.id);
    this.retrieveAuthors();
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
