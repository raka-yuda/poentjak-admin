<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-2 pb-4 mb-3 border-bottom">
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">ARTICLE</span>
        <h3 class="page-title">Edit Author</h3>
      </d-col>
    </d-row>

    <d-row>
      <d-col lg="12" class="mb-4">
        <d-card class="card-small mb-4">
          <div v-if="currentAuthor">
            <d-card-header class="border-bottom">
              <h6 class="m-0">Form Inputs</h6>
            </d-card-header>

            <d-list-group-item class="p-3">
              <d-row>
                <!-- Forms -->
                <d-col md="12">
                  <!-- <strong class="text-muted d-block mb-2">Forms</strong> -->
                  <d-form>
                    <div class="form-group">
                      <d-input-group class="mb-3">
                        <d-input
                          placeholder="Name Author"
                          id="name_author"
                          v-model="currentAuthor.name_author"
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
                          v-model="currentAuthor.img_author"
                          class="form-control"
                          required
                          name="img_author"
                        />
                      </d-input-group>
                    </div>

                  </d-form>

                  <!-- <button @click="deleteArticle" class="btn btn-danger mr-3">
                    Delete
                  </button> -->
                  <button
                    @click="updateAuthor()"
                    class="btn btn-success"
                    type="submit"
                  >
                    Update
                  </button>
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
// import ArticleDataService from "../../services/ArticleDataService";
import AuthorDataService from "../../services/AuthorDataService";

export default {
  name: "edit-author",
  data() {
    return {
      currentAuthor: null,
      message: "",
    };
  },
  methods: {

    getAuthor(id) {
      AuthorDataService.get(id)
        .then(response => {
          this.currentAuthor = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateAuthor() {
      // console.log(this.currentArticle);
      AuthorDataService.update(this.currentAuthor.id, this.currentAuthor)
        .then(response => {
          console.log(response.data);
          this.message = "Author was updated successfully!";
        })
        .catch(e => {
          console.log(e);
        });
    },

  },
  mounted() {
    this.message = "";
    this.getAuthor(this.$route.params.id);
    // this.retrieveAuthors();
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
