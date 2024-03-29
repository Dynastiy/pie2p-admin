<template>
  <div class="tw-bg-white tw-p-4 tw-rounded-lg">
    <div
      class="d-flex align-items-center justify-content-between tw-mt-2 tw-mb-3"
    >
      <div v-if="$slots.search">
        <slot name="search"></slot>
      </div>
      <div class="d-flex align-items-center justify-content-between tw-w-full">
        <div class="d-flex align-items-center">
          <div v-if="showBaseCount && items.length > 0" class="">
            <div
              class="tw-mr-1 text-center tw-font-semibold tw-text-xs tw-text-light"
            >
              <!-- {{ showFrom }} - {{ showTo }} / {{ totalRecord }} -->
              Showing {{ ((currentPage - 1) * perPage) + items.length }} / {{ totalRecords }}
            </div>
          </div>
          <b-pagination
            v-if="paginate"
            :currentPage="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            :pages="pages"
            align="right"
            size="sm"
            class="my-0"
            @change="$emit('page-changed', $event)"
          ></b-pagination>
        </div>
        <div v-if="$slots.button">
          <slot name="button"></slot>
        </div>
      </div>
    </div>
    <b-table
      id="globalTable"
      :items="items"
      :fields="fields"
      stacked="md"
      :filter="filter"
      :scrollable="scrollable"
      hover
      responsive
      show-empty
      sort-icon-left
      :busy="busy"
      :per-page="perPage"
      class="custom-table table-responsive mt-2"
      :class="classCustom"
      :table-class="tableClass"
      @row-clicked="rowClickAction($event)"
      :no-local-sorting="false"
      @row-hovered="sortEvent"
      @row-unhovered="onRowUnhovered"
    >
      <template #cell(fullname)="data">
        <span class="text-capitalize"
          >{{ data.item.firstName }} {{ data.item.lastName }}</span
        >
      </template>
      <template #head()="{ label, field: { key, sortable } }">
        {{ label }}
        <template v-if="sortable">
          <!-- Custom icons -->
          <template v-if="useCustomIcons">
            <!-- <img v-if="sortBy !== key" src="icons/table-sort.svg" alt="" > -->
            <!-- <b-icon
                v-if="sortBy !== key"
                icon="arrow-down-up"
                class="bold-icon"
              ></b-icon> -->
            <b-icon
              v-if="sortBy !== key"
              icon="arrows-collapse"
              class="bold-icon"
            ></b-icon>
            <b-icon
              v-else-if="sortDesc"
              icon="arrow-down"
              class="bold-icon"
            ></b-icon>
            <b-icon v-else icon="arrow-up" class="bold-icon"></b-icon>
          </template>
          <!-- Normal icons -->
          <template v-else>
            <b-img
              v-if="sortBy !== key"
              :src="sortIconNeutral"
              style="width: 0.65rem; height: 1rem"
            ></b-img>
            <b-img
              v-else-if="sortDesc"
              :src="sortIconAsc"
              style="width: 0.65rem; height: 1rem"
            ></b-img>
            <b-img
              v-else
              :src="sortIconDesc"
              style="width: 0.65rem; height: 1rem"
            ></b-img>
          </template>
        </template>
      </template>
      <template #empty>
        <div class="p-4">
          <div
            class="d-flex align-items-center flex-column justify-content-center"
          >
            <h1 class="no-data">NO DATA RECORDED</h1>
            <!-- <img src="@/assets/img/empty.svg" alt="empty-list" class="empty" /> -->
          </div>
        </div>
      </template>

      <template #table-busy>
        <b-skeleton-table
          :rows="4"
          :columns="4"
          :table-props="{ bordered: false, striped: false }"
        ></b-skeleton-table>
      </template>
      <template #cell(edit)="item">
        <slot name="edit" :data="item"></slot>
      </template>
      <template #cell(fullName)="data">
        <span class="tw-capitalize" v-if="data.item.user">{{ `${data.item.user.firstName} ${data.item.user.lastName}` }}</span>
      </template>
      <template #cell(userName)="data">
        <span class="tw-capitalize">{{ `${data.item.firstName} ${data.item.lastName}` }}</span>
      </template>
      <template #cell(channel)="data">
        <span
          v-if="data.item.channel === 'deposit'"
          class="text-12 badge-success rounded text-center p-1 text-white"
        >
          {{ data.item.channel }}
        </span>
        <span
          v-else-if="data.item.channel === 'withdrawal'"
          class="text-12 badge-danger rounded text-center p-1 text-white"
        >
          {{ data.item.channel }}
        </span>

        <span
          v-else
          class="text-12 badge-warning rounded text-center p-1 text-white"
        >
          No data
        </span>
      </template>
      <template #cell(status)="data">
        <slot name="status" :data="data">
          <span :class="data.item.status" class="status">
            {{ data.item.status }}
          </span>
        </slot>
      </template>
      <template #cell(encounter_datetime)="data">
        <slot name="encounter_datetime" :data="data">
          <div>
            {{ formatDate(data.item.encounter_datetime) }}
          </div>
        </slot>
      </template>
      <template #cell(created_at)="data">
        <slot name="created_at" :data="data">
          <div>
            {{ formatDate(data.item.created_at) }}
          </div>
        </slot>
      </template>
      <template #cell(updated_at)="data">
        <slot name="updated_at" :data="data">
          <div>
            {{ formatDate(data.item.updated_at) }}
          </div>
        </slot>
      </template>
      <template #cell(ordered_datetime)="data">
        <slot name="ordered_datetime" :data="data">
          <div>
            {{ formatDate(data.item.ordered_datetime) }}
          </div>
        </slot>
      </template>
      <template #cell(date)="data">
        <slot name="date" :data="data">
          <div>
            {{ formatDate(data.item.date) }}
          </div>
        </slot>
      </template>
      <template #cell(time)="data">
        <slot name="time" :data="data">
          <div>
            {{ formatDate(data.item.time) }}
          </div>
        </slot>
      </template>
      <template #cell(createdAt)="data">
        <slot name="createdAt" :data="data">
          <div>
            {{ formatDate(data.item.createdAt) }}
          </div>
        </slot>
      </template>

      <template #cell(triple_actions)="data">
        <slot name="triple_actions" :data="data">
          {{ data.value }}
        </slot>
      </template>
      <template #cell(dots)="row">
        <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
          <template #button-content>
            <b-icon icon="three-dots-vertical" class="dot"></b-icon>
          </template>
          <template v-if="dropdownItem.length > 0">
            <b-dropdown-item
              v-for="(dropdown, index) in dropdownItem"
              :key="index"
              class="text-capitalize"
              @click="$emit(dropdown, row.item)"
              >{{ dropdown.split("_").join(" ") }}</b-dropdown-item
            >
          </template>
        </b-dropdown>
      </template>
      <template #cell(type)="item">
        <slot name="type" :data="item"></slot>
      </template>
      <template #cell(uom)="data">
        <span name="uom"> {{ data.item.uom }}</span>
      </template>
      <template #cell(reference_range)="item">
        <slot name="reference_range" :data="item"></slot>
      </template>
      <template #cell(color)="data">
        <slot name="color" :data="data">
          <div
            class="rounded-circle"
            style="height: 25px; width: 25px"
            :style="{ backgroundColor: data.value }"
          ></div>
        </slot>
      </template>
      <template #cell(action)="data">
        <slot name="action" :data="data">{{ data.value }}</slot>
      </template>
      <template #cell(panel)="item">
        <slot name="panel" :data="item"></slot>
      </template>
      <template #cell(specimen_type)="item">
        <slot name="specimen_type" :data="item"></slot>
      </template>

      <template #cell(lab_unit)="item">
        <slot name="lab_unit" :data="item"></slot>
      </template>

      <template #cell(obv)="item">
        <slot name="obv" :data="item"></slot>
      </template>

      <template #cell(actions)="row">
        <div class="text-right tw-flex tw-space-x-2 w-auto">
          <span
            v-if="!disableEditAction"
            class=""
            role="button"
            @click="$emit('edit', row.item)"
          >
            <b-icon variant="info" icon="pencil-square" style="width: 15px; height: 15px;"></b-icon>
          </span>
          <span
            v-if="!disableDeleteAction"
            class=""
            role="button"
            @click="$emit('delete', row.item)"
          >
            <b-icon variant="danger" icon="trash" style="width: 15px; height: 15px;"></b-icon>
          </span>
          <span
            v-if="!disableViewAction"
            class=""
            role="button"
            @click="$emit('view', row.item)"
          >
            <b-icon variant="primary" icon="eye" style="width: 15px; height: 15px;"></b-icon>
          </span>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
import { formatDate } from "@/filter";
export default {
  props: {
    isClientPagination: {
      type: Boolean,
      default: false,
    },
    showTableSearch: {
      type: Boolean,
      default: true,
    },
    scrollable: {
      type: Boolean,
      default: false,
    },
    currentPage: {
      type: Number,
      default: 1,
    },

    classCustom: {
      type: String,
      default: "custom-class",
    },
    items: {
      type: Array,
      required: true,
    },
    fields: {
      type: Array,
      default: () => [],
      required: false,
    },
    perPage: {
      type: Number,
      default: 10,
    },
    /**
     * @description
     * The number of pages coming from the server(API)
     */
    pages: {
      type: Number,
      default: 0,
    },
    totalRecords: {
      type: Number,
      default: 0,
    },
    showBaseCount: {
      type: Boolean,
      default: true,
    },
    busy: {
      type: Boolean,
      default: false,
    },
    /**
     * @description
     * If true, pagination will be displayed
     */
    paginate: {
      type: Boolean,
      default: true,
    },
    filter: {
      type: String,
      required: false,
      default: "",
    },
    searchFilters: {
      type: String,
      required: false,
      default: "",
    },
    // this is for the three dots dropdown
    dropdownItem: {
      type: Array,
      default: () => [],
    },
    tableClass: {
      type: String,
      default: "custom-table pointer",
    },
    disableEditAction: {
      type: Boolean,
      default: false,
    },
    disableDeleteAction: {
      type: Boolean,
      default: false,
    },
    disableViewAction: {
      type: Boolean,
      default: false,
    },
    filterbank: {
      type: Array,
      default: () => [],
    },
  },
  data: () => {
    return {
      formatDate,
      totalRows: ""
    };
  },

  methods: {
    rowClickAction(item) {
      this.$emit("row-clicked", item);
    },
    onRowUnhovered(e) {
      this.$emit("unhoverData", e);
    },
    sortEvent(e) {
      this.$emit("sortData", e);
    },
  },

  mounted() {
    this.totalRows = this.perPage * this.pages;
  },
};
</script>

<style>
.no-data {
  font-size: 16px;
}

.empty {
  width: 150px;
  height: 150px;
}
</style>
