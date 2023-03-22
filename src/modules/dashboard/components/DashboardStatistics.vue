<template>
  <div id="dashboard-statistics">
    <div class="monthly-stats">
      <div class="analytics-header">
        <div class="d-flex align-items-center justify-content-between">
          <h4 class="mb-1">Monthly Stats</h4>
          <span>
            <i-icon
              icon="material-symbols:arrow-outward-rounded"
              width="25px"
            />
          </span>
        </div>
        <span class="body-text">Total 139 sessions created </span>
      </div>

      <div>
        <h5 class="my-3">Session Activities</h5>
        <div class="sessions-values">
          <div class="session-value">
            <span class="number-tag">80</span>
            <span class="body-text">Categories Created</span>
          </div>
          <div class="session-value">
            <span class="number-tag">80</span>
            <span class="body-text">Variants Created</span>
          </div>
          <div class="session-value">
            <span class="number-tag">80</span>
            <span class="body-text">Sub Categories Created</span>
          </div>
        </div>
      </div>
    </div>

    <div class="sales-stats">
      <div class="analytics-header mb-5">
        <div class="d-flex justify-content-between">
          <div class="d-flex" style="gap: 10px">
            <i-icon
              icon="fluent-emoji-high-contrast:recycling-symbol"
              color="var(--primary-200)"
              width="100px"
            />
            <div class="d-flex flex-column justify-content-between">
              <div>
                <h4 class="">Sales this Month</h4>
                <span class="body-text">Total sales this month </span>
              </div>
              <h2>$27,450</h2>
            </div>
          </div>
          <span>
            <i-icon
              icon="material-symbols:arrow-outward-rounded"
              width="25px"
            />
          </span>
        </div>
      </div>

      <div>
        <div class="sessions-values">
          <div class="session-value">
            <span class="number-tag">80</span>
            <span class="body-text">Trainers this month</span>
          </div>
          <div class="session-value">
            <span class="number-tag">80</span>
            <span class="body-text">Affiliates this month</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
