<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-2 pb-4 mb-3 border-bottom">
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">ARTICLE</span>
        <h3 class="page-title">Add Articles</h3>
      </d-col>
    </d-row>

    <d-row>
      <d-col lg="12" class="mb-4">
        <d-card class="card-small mb-4">
          <d-card-header class="border-bottom">
            <h6 class="m-0">Form Inputs</h6>
          </d-card-header>

          <d-list-group-item class="p-3">
            <d-row>
              <!-- Forms -->
              <d-col sm="12">
                <!-- <strong class="text-muted d-block mb-2">Forms</strong> -->
                <div v-if="!submitted">
                  <d-form>
                    <div class="form-group">
                      <d-input-group class="mb-3">
                        <d-input
                          placeholder="Title"
                          id="title_article"
                          v-model="article.title_article"
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
                          v-model="article.img_article"
                          class="form-control"
                          required
                          name="img_article"
                        />
                      </d-input-group>
                    </div>

                    <div class="form-group">
                      <d-form-textarea
                        :id="article"
                        v-model="article.article"
                        class="form-control"
                        :required="true"
                        :name="article"
                        :placeholder="`Enter something`"
                        :rows="6"
                        :max-rows="9"
                      ></d-form-textarea>
                    </div>

                    <div class="form-group">
                      <d-input-group class="mb-3">
                        <d-select :required="true" v-model="article.id_author">
                          <option :value="null" disabled>Select Age</option>
                          <option
                            class="list-group-item"
                            v-for="item in author"
                            :key="item.id"
                            v-bind:value="item.id"
                            :selected="article.id_author == item.id"
                          >{{ item.name_author }}</option>
                        </d-select>
                      </d-input-group>
                    </div>

                    <!-- <div class="form-group">
                      <d-input type="password" placeholder="Password" value="myCoolPassword" />
                    </div>
                    <div class="form-group">
                      <d-input
                        placeholder="1234 Main St"
                        value="7898 Kensington Junction, New York, USA"
                      />
                    </div>-->
                  </d-form>
                  <button @click="saveArticle" class="btn btn-success">Submit</button>
                </div>
                <div v-else>
                  <d-col>
                    <d-button outline theme="success" class="mb-2 mr-1">You submitted successfully!</d-button>
                  </d-col>
                  <button class="btn btn-success" @click="newTutorial">Add</button>
                </div>
              </d-col>
            </d-row>
          </d-list-group-item>
        </d-card>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
import ArticleDataService from "../services/ArticleDataService";
import AuthorDataService from "../services/AuthorDataService";

export default {
  name: "add-article",
  data() {
    return {
      author: [],
      article: {
        id: null,
        img_article: "",
        title_article: "",
        article: "",
        published: false,
        id_author: ""
      },
      submitted: false
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
    saveArticle() {
      var currentdate = new Date();
      var timenow =
        currentdate.getFullYear() +
        "-" +
        currentdate.getMonth() +
        "-" +
        currentdate.getDate() +
        " " +
        +currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds();
      var data = {
        img_article: this.article.img_article,
        title_article: this.article.title_article,
        article: this.article.article,
        published: this.article.published,
        post_date: timenow,
        id_author: this.article.id_author
      };
      // console.log(data);
      ArticleDataService.create(data)
        .then(response => {
          this.article.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },

    newTutorial() {
      this.submitted = false;
      this.article = {};
    }
  },
  mounted() {
    this.retrieveAuthors();
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>