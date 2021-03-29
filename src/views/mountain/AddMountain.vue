<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-2 pb-4 mb-3 border-bottom">
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">MOUNTAIN</span>
        <h3 class="page-title">Add New Mountain</h3>
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
                          placeholder="Name Mountain"
                          id="name_mt"
                          v-model="mountain.name_mt"
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
                          v-model="mountain.coordinate"
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
                          v-model="mountain.rating"
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
                          v-model="mountain.img_mt"
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
                          v-model="mountain.location"
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
                        v-model="mountain.description"
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
                        v-model="mountain.notes"
                        class="form-control"
                        required
                        name="notes"
                        rows="5">
                        </d-textarea>
                    </div>

                  </d-form>

                  <button @click="saveMountain" class="btn btn-success">
                    Submit
                  </button>
                </div>
                <div v-else>
                  <d-col>
                    <d-button outline theme="success" class="mb-2"
                      >You submitted successfully!</d-button
                    >
                  </d-col>
                  <button class="btn btn-success" @click="newMountain">
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

export default {
  name: "add-author",
  data() {
    return {
      mountain: {
        name_mt : "",
        coordinate : "",
        rating : "",
        img_mt : "",
        location : "",
        description : "",
        notes : "",
      },
      submitted: false
    };
  },
  methods: {
    saveMountain() {
      var data = {
        name_mt : this.mountain.name_mt,
        coordinate : this.mountain.coordinate,
        rating : parseInt(this.mountain.rating),
        img_mt : this.mountain.img_mt,
        location : this.mountain.location,
        description : this.mountain.description,
        notes : this.mountain.notes,
      };

      MountainDataService.create(data)
        .then(response => {
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },

    newMountain() {
      this.submitted = false;
      this.mountain = {};
    },

  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
