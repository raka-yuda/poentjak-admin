<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-2 pb-4 mb-3 border-bottom">
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">ARTICLE</span>
        <h3 class="page-title">Show Articles</h3>
      </d-col>
    </d-row>

    <d-row>
      <d-col lg="12" class="mb-4">
        <d-card class="card-small mb-4">
          <div v-if="currentArticle">
            <!-- <d-card-header class="border-bottom">
              <h6 class="m-0">Form Inputs</h6>
            </d-card-header> -->
            <div
              class="card-post__image"
              :style="{
                backgroundImage: 'url(\'' + currentArticle.img_article + '\')'
              }"
            >
              <!-- <div class="card-post__author d-flex">
                <a
                  href="#"
                  class="card-post__author-avatar card-post__author-avatar--small"
                  :style="{
                    backgroundImage:
                      'url(\'' + currentArticle.author.img_author + '\')'
                  }"
                  >Written by Anna Ken</a
                >
              </div> -->
            </div>

            <div class="row m-3 d-flex align-items-center">
              <img class="rounded-circle mr-3" :src="author[currentArticle.id_author].img_author" width="46" height="46" style="background-size: cover; object-fit: cover;">

              <h6 class="mb-0 mr-4">{{ author[currentArticle.id_author].name_author }}</h6>
              <span class="dot mr-4"></span>
              <p class="mb-0">{{ currentArticle.post_date }}</p>
            </div>

            <d-list-group-item class="p-3">
              <d-row>
                <!-- Forms -->
                <d-col md="12">
                  <!-- <strong class="text-muted d-block mb-2">Forms</strong> -->
                  <d-form>
                    <div class="form-group">
                      <d-input-group class="mb-3">
                        <!-- <d-input
                          placeholder="Title"
                          id="title_article"
                          v-model="currentArticle.title_article"
                          class="form-control"
                          required
                          name="title_article"
                        /> -->
                        <h4 class="mb-0">{{ currentArticle.title_article }}</h4>
                      </d-input-group>
                    </div>

                    <!-- <div class="form-group">
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
                    </div> -->

                    <div v-html="currentArticle.article"></div>

                    <!-- <div class="form-group">
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
                    </div> -->
                  </d-form>

                  <!-- <button @click="deleteArticle" class="btn btn-danger mr-3">
                    Delete
                  </button>
                  <button
                    @click="updateArticle"
                    class="btn btn-success"
                    type="submit"
                  >
                    Update
                  </button> -->
                </d-col>

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
          console.log(this.currentArticle);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = "";
    this.retrieveAuthors();
    this.getArticle(this.$route.params.id);
    
    console.log(this.author[this.currentArticle.id_author])
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}

.dot {
  height: 8px;
  width: 8px;
  background-color: #E3E6E8;
  border-radius: 50%;
  display: inline-block;
}
</style>
