<template>
  <!-- Details  -->
  <ModalDialog>
      <template #header>
        <div class="d-flex align-items-center justify-content-between">
          <h6>User Details</h6>
          <span role="button" @click="close()">
            <i-icon
              icon="material-symbols:close"
              class="text-danger"
              width="25px"
            />
          </span>
        </div>
      </template>

      <template #body>
        <div v-if="loading" class="text-center">
        <i-icon icon="eos-icons:bubble-loading" />
      </div>
        <div class="mb-3" v-else>
          <div class="d-flex align-items-center" style="gap:50px">
           <div>
            <h6 class="details-header">Full Name</h6>
            <p class="details-body">
              {{ user.firstName + " " + user.lastName }}
            </p>
           </div>
           <div>
            <h6 class="details-header">Email Address</h6>
            <p class="details-body text-lowercase">
              {{ user.email }}
            </p>
           </div>
          </div>
          <hr>
          <div class="d-flex align-items-center" style="gap:50px">
           <div>
            <h6 class="details-header">Phone Number</h6>
            <p class="details-body">
              {{ user.phoneNumber || "No data" }}
            </p>
           </div>
           <div>
            <h6 class="details-header">Date of Birth</h6>
            <p class="details-body">
              {{ user.dateOfBirth || "No data" }}
            </p>
           </div>
           <div>
            <h6 class="details-header">Gender</h6>
            <p class="details-body">
              {{ user.gender || "No data" }}
            </p>
           </div>
          </div>
          <hr>
          <div>
            <h6 class="details-header">Address</h6>
            <p class="details-body">
              {{ user.address || "No data" }}
            </p>
           </div>
          <!-- {{ user }} -->
        </div>
      </template>
    </ModalDialog>
</template>

<script>
import ModalDialog from "@/components/modals/ModalDialog.vue";
import { mapState } from "vuex";
export default {
    components:{
        ModalDialog
    },
    methods: {
      close(){
        this.$store.commit("users/REMOVE_SINGLE_DATA");
        alert("Hello World")
      }
    },
    computed:{
      ...mapState("users", {
      // dataSet: (state) => state.dataSet,
      loading: (state) => state.loading,
      user: (state) => state.singleDataSet,
    }),
    }

}
</script>

<style>

</style>