<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-2 pb-4 mb-3 border-bottom">
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">ARTICLE</span>
        <h3 class="page-title">Add Author</h3>
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
                          placeholder="name_author"
                          id="name_author"
                          v-model="author.name_author"
                          class="form-control"
                          required
                          name="name_author"
                        />
                      </d-input-group>
                    </div>

                    <div class="form-group">
                      <d-input-group class="mb-3">
                        <d-input
                          placeholder="Image Author"
                          id="img_article"
                          v-model="img_author.img_author"
                          class="form-control"
                          required
                          name="img_author"
                        />
                      </d-input-group>
                    </div>
                  </d-form>
                  <button @click="saveAuthor" class="btn btn-success">
                    Submit
                  </button>
                </div>
                <div v-else>
                  <d-col>
                    <d-button outline theme="success" class="mb-2 mr-1"
                      >You submitted successfully!</d-button
                    >
                  </d-col>
                  <button class="btn btn-success" @click="newAuthor">
                    Add
                  </button>
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
// import ArticleDataService from "../services/ArticleDataService";
import AuthorDataService from "../services/AuthorDataService";
import "quill/dist/quill.snow.css";

export default {
  name: "add-author",
  data() {
    return {
      config: {
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, false] }],
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            ["link", "image"]
          ]
        },
        placeholder: "Write Something !!!",
        theme: "snow"
      },
      author: {
        name_author: "",
        img_author: "",
      },
      submitted: false
    };
  },
  methods: {
    // retrieveAuthors() {
    //   AuthorDataService.getAll()
    //     .then(response => {
    //       this.author = response.data;
    //       // console.log(response.data);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // },
    saveAuthor() {
      var data = {
        name_author: this.article.img_article,
        img_author: this.article.title_article,
      };
      // console.log(data);
      AuthorDataService.create(data)
        .then(response => {
          this.article.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },

    newAuthor() {
      this.submitted = false;
      this.author = {};
    }
  },
  // mounted() {
  //   this.retrieveAuthors();
  // }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
