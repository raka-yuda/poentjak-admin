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
        <d-card class="card-small mb-4">
          <d-card-header class="border-bottom">
            <h6 class="m-0">Current Author</h6>
          </d-card-header>
          <d-card-body>
            <div v-if="currentAuthor">
              <d-card-body class="p-0">
                <div class="blog-comments__item d-flex p-3">

                  <!-- Avatar -->
                  <div class="mr-3">
                    <img :src="currentAuthor.img_author" :alt="currentAuthor.name_author" class="avatar"/>
                  </div>

                  <!-- Content -->
                  <div class="blog-comments__content">

                    <!-- Content - Title -->
                    <div class="blog-comments__meta text-muted">
                      <p class="m-0 my-1 mb-2 text-secondary">{{ currentAuthor.name_author }}</p>
                      <!-- <a class="text-secondary" :href="discussion.author.url">{{ discussion.author.name }}</a> on <a class="text-secondary" :href="discussion.post.url">{{ discussion.post.title }}</a> <span class="text-muted">– {{ discussion.date }}</span> -->
                    </div>

                    <!-- Content - Body -->
                    <!-- <p class="m-0 my-1 mb-2 text-secondary">{{ currentAuthor.name_author }}</p> -->

                    <!-- Content - Actions -->
                    <div class="blog-comments__actions">
                      <d-button-group size="small">
                        <d-button class="btn-white" @click="handleClick('reject', discussion.id)">
                          <span class="text-danger"><i class="material-icons">clear</i></span> Delete
                        </d-button>
                          <d-button class="btn-white">
                            <router-link :to="'/author/edit/' + currentAuthor.id">
                            <span class="text-light"><i class="material-icons">more_vert</i>
                              Edit
                            </span>
                            </router-link>
                          </d-button>
                      </d-button-group>
                    </div>
                  </div>

                </div>
              </d-card-body>
            </div>
            <div v-else>
              <br />
              <p>Please click on a Author...</p>
            </div>
          </d-card-body>
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

    setActiveAuthor(author, index) {
      this.currentAuthor = author;
      this.currentIndex = index;
    },
  },
  mounted() {
    this.retrieveAuthors();
  }
};
</script>

<style>
.avatar {
  vertical-align: middle;
  /* width: 50px;
  height: 50px;
  border-radius: 50%; */
  /* background-size: cover;
  background-position: top center; */
  object-fit: cover;
  width: 3.125rem;
  height: 100%;
  border-radius: 0.25rem;
}

.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
