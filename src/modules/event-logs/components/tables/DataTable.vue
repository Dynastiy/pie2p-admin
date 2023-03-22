<template>
  <div class="body" v-loading="loading">
    <div class="body-content">
      <div class="text-right">
        <button class="primary-btn filter-button mb-3" @click="openFilter">
          filter
        </button>
      </div>
      <div class="table-responsive">
        <table class="table table-centered table-nowrap mb-0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">
                Event Date
                <span role="button">
                  <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
                </span>
              </th>
              <th scope="col">
                {{
                  LogType === "trainer"
                    ? "Trainer ID"
                    : LogType === "affiliate"
                    ? "Affiliate ID"
                    : "User ID"
                }}
                <span role="button">
                  <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
                </span>
              </th>
              <th scope="col">
                Event ID
                <span role="button">
                  <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
                </span>
              </th>
              <th scope="col">
                Event Name
                <span role="button">
                  <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
                </span>
              </th>
              <th scope="col">
                Info Type
                <span role="button">
                  <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
                </span>
              </th>
              <!-- <th scope="col">
              $Generated
              <span role="button">
                <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
              </span>
            </th> -->
            </tr>
          </thead>
          <div>
            <span
              class="error-alert w-100 mt-3"
              v-if="!loading && dataSet === null"
              >{{
                error
                  ? error
                  : loading
                  ? ""
                  : dataSet === null
                  ? "No data Found"
                  : ""
              }}</span
            >
          </div>

          <tbody>
            <tr
              v-for="(item, index) in dataSet"
              :key="index"
              role="button"
              @click="getDetails(item)"
            >
              <td>{{ "#" + (index + 1) }}</td>
              <td>{{ timeStamp(item.createdAt) }}</td>
              <td>
                {{
                  LogType === "trainer"
                    ? item.trainerID || "No data"
                    : LogType === "affiliate"
                    ? item.affliateID || "No data"
                    : item.userID || "No data"
                }}
              </td>
              <td>{{ item.eventId || "No data" }}</td>
              <td>
                <span class="event-name-tag">{{ item.eventname }}</span>
              </td>
              <td>
                <span class="info-type" :class="item.infotype">{{
                  item.infotype
                }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Filter  -->
    <div class="filter-container">
      <filter-data @close="closeFilter" />
    </div>

    <!-- Details  -->
    <ModalDialog v-if="logDetails">
      <template #header>
        <div class="d-flex align-items-center justify-content-between">
          <h6>Event Details</h6>
          <span role="button" @click="closeModal">
            <i-icon
              icon="material-symbols:close"
              class="text-danger"
              width="25px"
            />
          </span>
        </div>
      </template>

      <template #body>
        <div class="mb-3">
          <label for="" class="mb-0 details-label">Description</label>
          <div class="description" v-html="logData.log_description"></div>
          <div class="mt-3 other-details">
            <!-- <div>
              <span>Log Name:</span>
              <span>{{ logData.eventNAm }} </span>
            </div> -->

            <div>
              <span>Event ID :</span>
              <span>{{ logData.eventId }}</span>
            </div>

            <!-- <div>
              <span>{{
                LogType === "trainer"
                  ? "Trainer ID :"
                  : LogType === "affiliate"
                  ? "Affiliate ID :"
                  : "User ID :"
              }}</span>
              <span>
                {{
                  LogType === "trainer"
                    ? logData.trainerID || "No data"
                    : LogType === "affiliate"
                    ? logData.affliateID || "No data"
                    : logData.userID || "No data"
                }}
              </span>
            </div> -->

            <div>
              <span>Event Name: </span>
              <span> {{ logData.eventname }} </span>
            </div>

            <div>
              <span>Date: </span>
              <span> {{ timeStamp(logData.createdAt) }} </span>
            </div>
            <!-- {{ logData }} -->
          </div>
        </div>
      </template>
    </ModalDialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import filterData from "../modals/filterData.vue";
import { timeStamp } from "@/plugins/filters";
import ModalDialog from "@/components/modals/ModalDialog.vue";
export default {
  props: ["LogType"],
  components: { filterData, ModalDialog },
  data: () => {
    return {
      timeStamp,
      // logDetails: false,
    };
  },
  methods: {
    ...mapActions("eventLogs", ["getSingleLog"]),
    getDetails(item) {
      let payload = {
        LogType: this.LogType,
        data: {
          logId: item._id,
          adminId: this.user.id,
        },
      };
      console.log(payload);
      this.getSingleLog(payload);
    },
    openFilter() {
      let bodyContent = document.querySelector(".body-content");
      bodyContent.classList.add("collapsed");

      let filterContainer = document.querySelector(".filter-container");
      filterContainer.classList.add("display");
    },

    closeFilter() {
      let bodyContent = document.querySelector(".body-content");
      bodyContent.classList.remove("collapsed");

      let filterContainer = document.querySelector(".filter-container");
      filterContainer.classList.remove("display");
    },

    closeModal() {
      this.$store.commit("eventLogs/REMOVE_SINGLE_DATA");
    },
  },

  computed: {
    ...mapState("eventLogs", {
      dataSet: (state) => state.dataSet,
      loading: (state) => state.loading,
      error: (state) => state.error,
      logDetails: (state) => state.singleSuccess,
      logData: (state) => state.singleDataSet,
    }),
    ...mapState("auth", {
      user: (state) => state.user,
    }),
  },
};
</script>

<style></style>
