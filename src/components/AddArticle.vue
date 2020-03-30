<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title_article"
          required
          v-model="article.title_article"
          name="title_article"
        />
      </div>

      <div class="form-group">
        <label for="description">Image Article</label>
        <input
          class="form-control"
          id="img_article"
          required
          v-model="article.img_article"
          name="img_article"
        />
      </div>

      <div class="form-group">
        <label for="title">Article</label>
        <textarea
          class="form-control"
          id="article"
          required
          v-model="article.article"
          name="article"
        />
      </div>
      <!-- 
      <div class="form-group">
        <label for="description">Post Date</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="article.description"
          name="description"
        />
      </div>-->

      <div class="form-group">
        <label for="title">Author</label>
        <input
          type="text"
          class="form-control"
          id="author"
          required
          v-model="article.id_author"
          name="title"
        />
      </div>

      <button @click="saveArticle" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script>
import ArticleDataService from "../services/ArticleDataService";

export default {
  name: "add-article",
  data() {
    return {
      article: {
        id: null,
        img_article: "",
        title_article: "",
        article: "",
        post_date: "",
        id_author: ""
      },
      submitted: false
    };
  },
  methods: {
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
        post_date: timenow,
        id_author: this.article.id_author
      };
      //   console.log(data);
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
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>