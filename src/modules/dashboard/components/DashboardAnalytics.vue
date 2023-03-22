<template>
  <div id="dashboard-analytics">
    <div class="overview d-flex flex-column justify-content-between">
      <div class="analytics-header mb-4">
        <div class="d-flex align-items-center justify-content-between">
          <h4 class="mb-1">Myt.page Overview</h4>
          <span>
            <i-icon
              icon="material-symbols:arrow-outward-rounded"
              width="25px"
            />
          </span>
        </div>
        <span class="body-text">Total 42.5k Sales </span>
      </div>

      <div class="overview-items">
        <div class="overview-data">
          <span class="overview-icon users">
            <i-icon icon="uil:users-alt" />
          </span>
          <div>
            <h4 class="data-number">4,576</h4>
            <span class="desc-text">Total Users</span>
          </div>
        </div>

        <div class="overview-data">
          <span class="overview-icon profit">
            <i-icon icon="bi:bar-chart-fill" />
          </span>
          <div>
            <h4 class="data-number">$24.6k</h4>
            <span class="desc-text">Total Profit</span>
          </div>
        </div>

        <div class="overview-data">
          <span class="overview-icon transactions">
            <i-icon icon="material-symbols:show-chart-rounded" />
          </span>
          <div>
            <h4 class="data-number">4.5k</h4>
            <span class="desc-text">Total Transaction</span>
          </div>
        </div>
      </div>
    </div>

    <div class="trainer-affiliate">
      <div class="trainer">
        <div class="analytics-header">
          <div class="d-flex align-items-center justify-content-between">
            <h5 class="mb-1">Trainer</h5>
            <span>
              <i-icon
                icon="material-symbols:arrow-outward-rounded"
                width="24px"
              />
            </span>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-start">
          <div class="data-info w-100">
            <span class="analytic-year">2023</span>
            <div class="">
              <h6 class="number-analytics">8.14k</h6>
              <span class="desc-text">Total number of trainers</span>
            </div>
          </div>
          <img src="@/assets/img/trainer-img.svg" width="80" alt="" />
        </div>
      </div>

      <div class="affiliate">
        <div class="analytics-header">
          <div class="d-flex align-items-center justify-content-between">
            <h5 class="mb-1">Affiliate</h5>
            <span>
              <i-icon
                icon="material-symbols:arrow-outward-rounded"
                width="24px"
              />
            </span>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-start">
          <div class="data-info w-100">
            <span class="analytic-year">2023</span>
            <div class="">
              <h6 class="number-analytics">8.14k</h6>
              <span class="desc-text">Total number of Affiliates</span>
            </div>
          </div>
          <img src="@/assets/img/affiliate-img.svg" width="80" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
