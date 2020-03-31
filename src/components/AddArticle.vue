<!--<template>
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
-->
<template>
  <d-container fluid>
    <div v-if="!submitted">
      <d-row class="my-1">
        <d-col sm="3">
          <label for="title">Title</label>
        </d-col>
        <d-col sm="9">
          <d-form-input
            :id="title_article"
            v-model="article.title_article"
            class="form-control"
            :type="text"
            :required="true"
            :name="title_article"
          ></d-form-input>
        </d-col>
      </d-row>

      <d-row class="my-1">
        <d-col sm="3">
          <label for="title">Image Article</label>
        </d-col>
        <d-col sm="9">
          <d-form-input
            :id="img_article"
            v-model="article.img_article"
            class="form-control"
            :type="text"
            :required="true"
            :name="img_article"
          ></d-form-input>
        </d-col>
      </d-row>

      <d-row class="my-1">
        <d-col sm="3">
          <label for="title">Article</label>
        </d-col>
        <d-col sm="9">
          <d-form-textarea
            :id="article"
            v-model="article.article"
            class="form-control"
            :type="text"
            :required="true"
            :name="article"
            :placeholder="`Enter something`"
            :rows="3"
            :max-rows="6"
          ></d-form-textarea>
        </d-col>
      </d-row>

      <d-row class="my-1">
        <d-col sm="3">
          <label for="title">Author</label>
        </d-col>
        <d-col sm="9">
          <d-form-input
            :id="author"
            v-model="article.id_author"
            class="form-control"
            :type="text"
            :required="true"
            :name="author"
          ></d-form-input>
        </d-col>
      </d-row>
      <button @click="saveArticle" class="btn btn-success">Submit</button>
    </div>
    
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </d-container>
</template>

// <script>
// export default {
//   data () {
//     return {
//       inputTypes: ['text', 'password', 'email', 'number', 'url','tel', 'date', 'time']
//     }
//   }
// }
//
</script>

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
        // post_date: "",
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