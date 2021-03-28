<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-2 pb-4 mb-3 border-bottom">
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">ARTICLE</span>
        <h3 class="page-title">All Author</h3>
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
            <h6 class="m-0">Author List</h6>
          </d-card-header>
          <d-card-body>
            <ul class="list-group">
              <li
                class="list-group-item"
                :class="{ active: index == currentIndex }"
                v-for="(author, index) in authors"
                :key="index"
                @click="setActiveAuthor(author, index)"
              >
                {{ author.name_author }}
              </li>
            </ul>
            <!-- <button class="m-3 btn btn-sm btn-danger" @click="removeAllArticles">Remove All</button> -->
          </d-card-body>
        </d-card>
      </d-col>

      <d-col md="6" class="mb-4">
        
        <d-card class="card-small mb-4 pt-3">

          <div v-if="currentAuthor">
            <!-- Card Header -->
            <d-card-header class="text-center">
              
              <!-- User Avatar -->
              <div class="mb-3 mx-auto">
                <img class="rounded-circle" :src="currentAuthor.img_author" :alt="currentAuthor.name_author" width="110" height="110">
              </div>

              <!-- User Name -->
              <h4 class="mb-0">{{ currentAuthor.name_author }}</h4>

              <!-- User Job Title -->
              <!-- <span class="text-muted d-block mb-2">{{ userDetails.jobTitle }}</span> -->

              <!-- User Follow -->
              <d-button pill outline size="sm" class="mb-2"> <i class="material-icons mr-1">edit</i> <a class :href="'/author/edit/' + currentAuthor.id">Edit</a></d-button>

            </d-card-header>
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
import AuthorDataService from "../../services/AuthorDataService";

export default {
  name: "articles-list",
  data() {
    return {
      articles: [],
      currentArticle: null,
      currentIndex: -1,
      title: "",
      currentAuthor: "",
      authors: []
    };
  },
  methods: {
    retrieveAuthors() {
      AuthorDataService.getAll()
        .then(response => {
          this.authors = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    // retrieveArticles() {
    //   ArticleDataService.getAll()
    //     .then(response => {
    //       this.articles = response.data;
    //       console.log(response.data);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // },

    // refreshList() {
    //   this.retrieveArticles();
    //   this.currentArticle = null;
    //   this.currentIndex = -1;
    // },

    setActiveAuthor(author, index) {
      this.currentAuthor = author;
      this.currentIndex = index;
    },

    // searchTitle() {
    //   ArticleDataService.findByTitle(this.title)
    //     .then(response => {
    //       this.articles = response.data;
    //       console.log(response.data);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // }
  },
  mounted() {
    this.retrieveAuthors();
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
