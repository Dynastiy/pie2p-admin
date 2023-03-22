<template>
  <div>
    <!-- Table Content  -->
    <div class="">
      <div class="table-responsive">
        <table class="table table-centered table-nowrap mb-0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">
                Cluster ID
                <span role="button">
                  <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
                </span>
              </th>
              <th scope="col">
                Category
                <span role="button">
                  <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
                </span>
              </th>
              <th scope="col">
                Sub-category
                <span role="button">
                  <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
                </span>
              </th>
              <th scope="col">
                Variant
                <span role="button">
                  <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
                </span>
              </th>
              <th scope="col">
                Time Created
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
                  <span class="edit" role="button" @click="$emit('edit')">
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
</template>

<script>
export default {};
</script>

<style></style>
