<template>
  <d-container class="main-content-container px-md-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-2 pb-4 mb-3 border-bottom d-flex justify-content-center mt-4">
      <d-col col sm="4" class="text-center mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">ARTICLE</span>
        <h3 class="page-title">Show Articles</h3>
      </d-col>
    </d-row>

    <d-row class="d-flex justify-content-center">
      <d-col sm="12" class="my-3 ">

        <d-card class="card-small mb-4">
          <div v-if="currentArticle">
            <div
              class="card-post__image" :style="{backgroundImage: 'url(\'' + currentArticle.img_article + '\')'}">
            </div>

            <div v-if="currentArticle.author" class="row m-3 d-flex align-items-center">
              <img class="rounded-circle mr-3" :src="currentArticle.author.img_author" width="46" height="46" style="background-size: cover; object-fit: cover;">

              <h6 class="mb-0 mr-md-4 mr-2">{{ currentArticle.author.name_author }}</h6>
              <span class="dot mr-md-4 mr-2"></span>
              <p class="mb-0">{{ currentArticle.post_date }}</p>
            </div>

            <d-list-group-item class="px-6">
              <d-row>
                <!-- Forms -->
                <d-col md="12">
                  <!-- <strong class="text-muted d-block mb-2">Forms</strong> -->
                  <d-form>
                      <h1 class="title-article mb-0">{{ currentArticle.title_article }}</h1>
                      <p v-html="currentArticle.article"></p>
                  </d-form>

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
    retrieveAuthor(id) {
      AuthorDataService.get(id)
        .then(response => {
          this.currentArticle.author = response.data
        })
        .catch(e => {
          console.log(e);
        });
    },
    async getArticle(id) {
      return await ArticleDataService.get(id)
        .then(response => {
          return response.data;
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  async mounted() {
    this.message = "";
    let article = await this.getArticle(this.$route.params.id);
    article.author = this.retrieveAuthor(article.id_author);
    this.currentArticle = article;
  }
};
</script>

<style scoped>
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





/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  p {
    font-size: 16px !important;
    line-height: 24px !important;
  }

  h2 {
    font-size: 20px !important;
    line-height: 24px !important;
  }

  h1 {
    font-size: 34px !important;
    line-height: 42px !important;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  p {
    font-size: 18px !important;
    line-height: 28px !important;
  }

  h2 {
    font-size: 10px !important;
    line-height: 24px !important;
  }

  h1{
    font-size: 34px !important;
    line-height: 42px !important;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  p {
    font-size: 21px !important;
    line-height: 32px !important;
  }
}
</style>
