<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-2 pb-4 mb-3 border-bottom">
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">MOUNTAIN</span>
        <h3 class="page-title">Edit Mountain</h3>
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
                <div v-if="currentMountain">

                  <d-form>
                    <div class="form-group">
                      <d-input-group class="mb-3">
                        <d-input
                          placeholder="Name Mountain"
                          id="name_mt"
                          v-model="currentMountain.name_mt"
                          class="form-control"
                          required
                          name="name_mt"
                        />
                      </d-input-group>
                    </div>

                    <div class="form-group">
                      <d-input-group class="mb-3">
                        <d-input
                          placeholder="Coordinate"
                          id="coordinate"
                          v-model="currentMountain.coordinate"
                          class="form-control"
                          required
                          name="coordinate"
                        />
                      </d-input-group>
                    </div>
                    <div class="form-group">
                      <d-input-group class="mb-3">
                        <d-input
                          placeholder="Rating"
                          id="rating"
                          v-model="currentMountain.rating"
                          class="form-control"
                          required
                          name="rating"
                          @keypress="isNumber($event)"
                        />
                      </d-input-group>
                    </div>
                    <div class="form-group">
                      <d-input-group class="mb-3">
                        <d-input
                          placeholder="Image Mountain"
                          id="img_mt"
                          v-model="currentMountain.img_mt"
                          class="form-control"
                          required
                          name="img_mt"
                        />
                      </d-input-group>
                    </div>
                    <div class="form-group">
                      <d-input-group class="mb-3">
                        <d-input
                          placeholder="Location"
                          id="location"
                          v-model="currentMountain.location"
                          class="form-control"
                          required
                          name="img_author"
                        />
                      </d-input-group>
                    </div>
                    <div class="form-group">
                      <d-textarea 
                        placeholder="Description"
                        id="description"
                        v-model="currentMountain.description"
                        class="form-control"
                        required
                        name="description"
                        rows="5">
                        </d-textarea>
                    </div>
                     <div class="form-group">
                      <d-textarea 
                        placeholder="Notes"
                        id="notes"
                        v-model="currentMountain.notes"
                        class="form-control"
                        required
                        name="notes"
                        rows="5">
                        </d-textarea>
                    </div>

                  </d-form>

                  <button @click="updateMountain" class="btn btn-success">
                    Submit
                  </button>
                  <div v-if="message">
                  
                  <d-button outline theme="success" class="mb-2 mt-3">
                    {{message}}
                  </d-button>
                  
                </div>
                </div>
                <div v-else>
                  <br />
                  <p>Please click on a Mountain...</p>
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

export default {
  name: "edit-author",
  data() {
    return {
      currentMountain: null,
      message: "",
    };
  },
  methods: {

    getMountain(id) {
      MountainDataService.get(id)
        .then(response => {
          this.currentMountain = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },


    updateMountain() {
      // console.log(this.currentArticle);
      MountainDataService.update(this.currentMountain.id, this.currentMountain)
        .then(response => {
          console.log(response.data);
          this.message = "Mountain data was updated successfully!";
        })
        .catch(e => {
          console.log(e);
        });
    },

  },
  mounted() {
    this.message = "";
    this.getMountain(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
