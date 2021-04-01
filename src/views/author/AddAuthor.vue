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
                          placeholder="Name Author"
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
                          id="img_author"
                          v-model="author.img_author"
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
import AuthorDataService from "../../services/AuthorDataService";

export default {
  name: "add-author",
  data() {
    return {
      author: {
        name_author: "",
        img_author: "",
      },
      submitted: false
    };
  },
  methods: {
    saveAuthor() {
      var data = {
        name_author: this.author.name_author,
        img_author: this.author.img_author,
      };

      AuthorDataService.create(data)
        .then(response => {
          this.author.id = response.data.id;
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
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
