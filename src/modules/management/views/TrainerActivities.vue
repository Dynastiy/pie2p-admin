<template>
  <div class="body">
    <div id="all-users" class="body-content">
      <div class="header-area spacer">
        <!-- <h5 class="w-100">All Admins</h5> -->
        <div class="w-100">
          <button
            @click="showCluster"
            class="primary-btn d-flex align-items-center"
            style="gap: 10px"
          >
            <i-icon icon="memory:plus" width="20px" />
            <span>add trainer cluster</span>
          </button>
        </div>
        <div class="w-100">
          <div class="search-field w-100">
            <label class="mb-0" for="">Search</label>
            <div class="d-flex align-items-center" style="gap: 20px">
              <div class="search-area">
                <i-icon icon="carbon:search" class="search-icon" />
                <input type="search" name="" id="" placeholder="User Email" />
              </div>
              <button class="primary-btn filter-button" @click="openFilter">
                filter
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- CLUSTER OPTIONS -->
      <div class="cluster-table-filters">
        <div class="container spacer pb-2">
          <div class="cluster-options">
            <span
              role="button"
              @click="switchActive('1')"
              :class="{ 'active-cluster': activeEl === '1' }"
              >All Clusters</span
            >
            <span
              role="button"
              @click="switchActive('2')"
              :class="{ 'active-cluster': activeEl === '2' }"
              >Pending Clusters</span
            >
          </div>
        </div>
        <div class="cluster-line"></div>

        <!-- CLUSTER TABLE  -->
        <div class="mt-4">
          <ClustersTable @edit="editCluster" />
        </div>
      </div>
    </div>
    <div class="filter-container">
      <filter-data @close="closeFilter" />
    </div>

    <!-- Create Cluster Modal  -->
    <div>
      <ModalDialog v-if="addCluster">
        <template #header>
          <div class="text-right">
            <span role="button" @click="closeModal">
              <i-icon
                icon="material-symbols:close"
                class="text-danger"
                width="25px"
              />
            </span>
          </div>
          <div class="text-center mt-3">
            <h2>{{ headerText }}</h2>
          </div>
        </template>

        <template #body>
          <div>
            <form action="" @submite.prevent="alert('hello World')">
              <div class="mb-3">
                <label for="">Category</label>
                <div class="input-field">
                  <i-icon icon="tabler:category-2" class="form-icon" />
                  <input type="text" placeholder="Category" />
                </div>
              </div>

              <div class="mb-3">
                <label for="">Sub-category</label>
                <div class="input-field">
                  <i-icon icon="carbon:category-new-each" class="form-icon" />
                  <input type="text" placeholder="Sub-category" />
                </div>
              </div>

              <div class="mb-4">
                <label for="">Variant</label>
                <div class="input-field">
                  <i-icon icon="carbon:category" class="form-icon" />
                  <input type="text" placeholder="Variant" />
                </div>
              </div>

              <div>
                <button class="primary-btn w-100">add new cluster</button>
              </div>
            </form>
          </div>
        </template>

        <template #footer>
          <div></div>
        </template>
      </ModalDialog>
    </div>
  </div>
</template>

<script>
import ClustersTable from "../components/tables/ClustersTable.vue";
import filterData from "../components/modals/filterData.vue";
import ModalDialog from "@/components/modals/ModalDialog.vue";

export default {
  components: { ClustersTable, filterData, ModalDialog },
  data: () => {
    return {
      activeEl: "1",
      addCluster: false,
      headerText: "",
    };
  },
  methods: {
    switchActive(value) {
      this.activeEl = value;
    },
    openFilter() {
      let filterContainer = document.querySelector(".filter-container");
      filterContainer.classList.add("display");
    },

    closeFilter() {
      let filterContainer = document.querySelector(".filter-container");
      filterContainer.classList.remove("display");
    },

    closeModal() {
      this.addCluster = false;
    },

    showCluster() {
      this.addCluster = true;
      this.headerText = "New Custer";
    },

    editCluster() {
      this.addCluster = true;
      this.headerText = "Edit Custer";
    },
  },
};
</script>

<style></style>
