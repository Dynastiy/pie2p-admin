<template>
  <div class="reports-table">
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
              Location
              <span role="button">
                <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
              </span>
            </th>
            <th scope="col" v-if="activeEl !== '1'">
              User%
              <span role="button">
                <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
              </span>
            </th>
            <th scope="col">
              Date
              <span role="button">
                <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
              </span>
            </th>
            <th scope="col">
              $Generated
              <span role="button">
                <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hello World</td>
            <td>Hello World</td>
            <td>Hello World</td>
            <td>Hello World</td>
            <td v-if="activeEl !== '1'">Hello World</td>
            <td>Hello World</td>
            <td>Hello World</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["activeEl"],
};
</script>

<style></style>
