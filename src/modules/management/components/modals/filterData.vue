<template>
  <div id="filter-data">
    <div class="spacer">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h4>Filter Search</h4>
        <span @click="$emit('close')" class="fliter-close" role="button">
          <i-icon
            icon="material-symbols:close"
            class="text-danger"
            width="22px"
          />
        </span>
      </div>

      <div class="mb-3">
        <label for="">User ID</label>
        <input type="text" />
      </div>

      <div class="mb-3">
        <label for="">Location</label>
        <select name="" id="">
          <option value="">Value 1</option>
          <option value="">Value 2</option>
        </select>
      </div>
    </div>
    <hr class="m-0" />

    <!-- <div class="spacer">
      <div class="mb-3">
        <label for="">Amount Generated Range</label>
        <select name="" id="">
          <option value="">Value 1</option>
          <option value="">Value 2</option>
        </select>
      </div>
      <select name="" id="">
        <option value="">Value 1</option>
        <option value="">Value 2</option>
      </select>
    </div>
    <hr class="m-0" /> -->

    <div class="spacer">
      <div class="mb-3">
        <label for="">Date Range</label>
        <input
          type="text"
          placeholder="Start Date"
          onfocus="(this.type='date')"
        />
      </div>
      <div class="text-center mb-3 small">-- TO --</div>
      <input type="text" placeholder="End Date" onfocus="(this.type='date')" />
    </div>
    <hr class="m-0" />

    <div class="spacer d-flex flex-column" style="gap: 20px">
      <button class="primary-btn w-100">apply filter</button>
      <button class="outline-btn w-100">clear filter</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
