<template>
  <div class="body">
    <div id="all-users" class="body-content">
      <div class="header-area spacer">
        <!-- <h5 class="w-100">All Admins</h5> -->
        <div class="w-100">
          <button
            @click="addAdmin = true"
            class="primary-btn d-flex align-items-center"
            style="gap: 10px"
          >
            <i-icon icon="memory:plus" width="20px" />
            <span>add admin</span>
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

      <!-- Table Content  -->
      <div class="">
        <div class="table-responsive">
          <table class="table table-centered table-nowrap mb-0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">
                  Full Name
                  <span role="button">
                    <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
                  </span>
                </th>
                <th scope="col">
                  User ID
                  <span role="button">
                    <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
                  </span>
                </th>
                <th scope="col">
                  User Email
                  <span role="button">
                    <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
                  </span>
                </th>
                <th scope="col">
                  Registration Date
                  <span role="button">
                    <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
                  </span>
                </th>
                <th scope="col">
                  User Category
                  <span role="button">
                    <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
                  </span>
                </th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hello World</td>
                <td>Hello World</td>
                <td>Hello World</td>
                <td>Hello World</td>
                <td>Hello World</td>
                <td>Hello World</td>
                <td>
                  <div class="d-flex align-items-center" style="gap: 25px">
                    <span class="edit" role="button">
                      <i-icon icon="uil:edit" />
                    </span>
                    <span class="delete" role="button">
                      <i-icon icon="fluent:delete-12-regular" />
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="filter-container">
      <filter-data @close="closeFilter" />
    </div>

    <!-- Create Admin Modal  -->
    <div>
      <ModalDialog v-if="addAdmin">
        <template #header>
          <div class="text-center mt-3">
            <h3>Add Admin</h3>
          </div>
        </template>

        <template #body>
          <div>
            <div class="mb-3">
              <label for="">Email</label>
              <div class="input-field">
                <i-icon icon="ic:sharp-alternate-email" class="form-icon" />
                <input type="email" placeholder="Email" />
              </div>
            </div>

            <div class="mb-3">
              <label for="">Role</label>
              <select name="" id="">
                <option value="">Value 1</option>
                <option value="">Value 2</option>
              </select>
            </div>

            <div>
              <button role="submit" class="primary-btn w-100 mb-3">
                add admin
              </button>
              <button
                role="button"
                class="outline-btn w-100"
                @click="closeModal"
              >
                cancel
              </button>
            </div>
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
import ModalDialog from "@/components/modals/ModalDialog.vue";
import filterData from "../components/modals/filterData.vue";
export default {
  components: { filterData, ModalDialog },
  data: () => {
    return {
      addAdmin: false,
    };
  },
  methods: {
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
      this.addAdmin = false;
    },
  },
};
</script>

<style></style>
