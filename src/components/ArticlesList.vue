<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-2 pb-4 mb-3 border-bottom">
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">ARTICLE</span>
        <h3 class="page-title">All Articles</h3>
      </d-col>
    </d-row>

    <d-row>
      <!-- <div class="col-md-8">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Search by title" v-model="title" />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" @click="searchTitle">Search</button>
          </div>
        </div>
      </div>-->
      <d-col md="6" class="mb-4">
        <d-card class="card-small mb-4">
          <d-card-header class="border-bottom">
            <h6 class="m-0">Articles List</h6>
          </d-card-header>
          <d-card-body>
            <ul class="list-group">
              <li
                class="list-group-item"
                :class="{ active: index == currentIndex }"
                v-for="(article, index) in articles"
                :key="index"
                @click="setActiveArticle(article, index)"
              >
                {{ article.title_article }}
              </li>
            </ul>
            <!-- <button class="m-3 btn btn-sm btn-danger" @click="removeAllArticles">Remove All</button> -->
          </d-card-body>
        </d-card>
      </d-col>

      <d-col md="6" class="mb-4">
        <d-card class="card-small mb-4">
          <d-card-header class="border-bottom">
            <h6 class="m-0">Current Article</h6>
          </d-card-header>
          <d-card-body>
            <div v-if="currentArticle">
              <d-card class="card-small card-post card-post--1">
                <div
                  class="card-post__image"
                  :style="{
                    backgroundImage:
                      'url(\'' + currentArticle.img_article + '\')'
                  }"
                >
                  <!-- <d-badge
              pill
              :class="['card-post__category', 'bg-' + post.categoryTheme ]"
                  >{{ post.category }}</d-badge>-->
                  <div class="card-post__author d-flex">
                    <a
                      href="#"
                      class="card-post__author-avatar card-post__author-avatar--small"
                      :style="{
                        backgroundImage:
                          'url(\'' + currentArticle.author.img_author + '\')'
                      }"
                      >Written by {{ currentArticle.author.name_author }}</a
                    >
                  </div>
                </div>
                <d-card-body>
                  <h5 class="card-title">
                    <a href="#" class="text-fiord-blue">{{
                      currentArticle.title_article
                    }}</a>
                  </h5>
                  <small class="text-muted"
                    >Written by {{ currentArticle.author.name_author }}</small
                  ><br />
                  <div v-html="currentArticle.article"></div>

                  <div class="ml-auto mt-3">
                    <d-button size="sm" class="btn-white mr-3">
                      <i class="material-icons mr-3">edit</i>
                      <a class :href="'/edit/' + currentArticle.id">Edit</a>
                    </d-button>
                    <router-link :to="'/articles/' + currentArticle.id">
                      <d-button size="sm" class="btn-white">
                        <i class="material-icons mr-3">edit</i>
                        <a class>Show</a>
                      </d-button>
                    </router-link>
                  </div>
                </d-card-body>
              </d-card>

              <!-- <a class="badge badge-warning" :href="'/articles/' + currentArticle.id">Edit</a> -->
              <!-- <div>
          <label>
            <strong>Status:</strong>
          </label>
          {{ currentTutorial.published ? "Published" : "Pending" }}
              </div>-->

              <!-- <a class="badge badge-warning" :href="'/articles/' + currentArticle.id">Edit</a> -->
            </div>
            <div v-else>
              <br />
              <p>Please click on a Tutorial...</p>
            </div>
          </d-card-body>
        </d-card>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
import ArticleDataService from "../services/ArticleDataService";

export default {
  name: "articles-list",
  data() {
    return {
      articles: [],
      currentArticle: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveArticles() {
      ArticleDataService.getAll()
        .then(response => {
          this.articles = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveArticles();
      this.currentArticle = null;
      this.currentIndex = -1;
    },

    setActiveArticle(article, index) {
      this.currentArticle = article;
      this.currentIndex = index;
    },

    // removeAllArticles() {
    //   ArticleDataService.deleteAll()
    //     .then(response => {
    //       console.log(response.data);
    //       this.refreshList();
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // },

    searchTitle() {
      ArticleDataService.findByTitle(this.title)
        .then(response => {
          this.articles = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveArticles();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
