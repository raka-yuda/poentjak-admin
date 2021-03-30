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
                          placeholder="Post Name"
                          id="post_name"
                          v-model="post_mountain.post_name"
                          class="form-control"
                          required
                          name="post_name"
                        />
                      </d-input-group>
                    </div>

                    <div class="form-group">
                      <d-input-group class="mb-3">
                        <d-input
                          placeholder="Description"
                          id="description"
                          v-model="post_mountain.description"
                          class="form-control"
                          required
                          name="description"
                        />
                      </d-input-group>
                    </div>

                    <div class="form-group">
                      <d-input-group class="mb-3">
                        <d-select :required="true" v-model="post_mountain.id_mountain">
                          <option :value="null" disabled>Select Id</option>
                          <option
                            class="list-group-item"
                            v-for="item in mountains"
                            :key="item.id"
                            v-bind:value="item.id"
                            :selected="post_mountain.id_mountain == item.id"
                            >{{ item.name_mt }}</option
                          >
                        </d-select>
                      </d-input-group>
                    </div>
                    
                  </d-form>
                  <button @click="savePostMountain" class="btn btn-success">
                    Submit
                  </button>
                </div>
                <div v-else>
                  <d-col>
                    <d-button outline theme="success" class="mb-2 mr-1"
                      >You submitted successfully!</d-button
                    >
                  </d-col>
                  <button class="btn btn-success" @click="newPostMountain">
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
import MountainDataService from "../../services/MountainDataService";
import PostMountainDataService from "../../services/PostMountainDataService";

export default {
  name: "add-author",
  data() {
    return {
      post_mountain: {
        post_name: "",
        description: "",
        id_mountain: "",
      },
      mountains: [],
      submitted: false
    };
  },
  methods: {
    retrieveMountains() {
      MountainDataService.getAll()
        .then(response => {
          this.mountains = response.data.mountains;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    savePostMountain() {
      var data = {
        post_name: this.post_mountain.post_name,
        description: this.post_mountain.description,
        id_mountain: this.post_mountain.id_mountain,
      };

      // console.log(data);

      PostMountainDataService.create(data)
        .then(response => {
          this.post_mountain.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },

    newPostMountain() {
      this.submitted = false;
      this.post_mountain = {};
    }
  },
  mounted() {
    this.retrieveMountains();
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
