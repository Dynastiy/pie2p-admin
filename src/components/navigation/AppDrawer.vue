<template>
  <div id="app-drawer" class="py-2" :class="{ collapsible: isCollapsed }">
    <ul>
      <li>
        <img
          class="menu-icon"
          width="100px"
          height="100px"
          src="@/assets/img/logo.svg"
          alt=""
        />
      </li>
      <hr style="background-color: var(--primary-50)" />
      <li v-for="item in menu" :key="item.id">
        <div class="menu-item">
          <span
            class="menu-item-link"
            role="button"
            @click="goToLink(item)"
            :class="{ 'active-link': item.parent === routeParent }"
          >
            <div class="d-flex align-items-center" style="gap: 10px">
              <i-icon
                :icon="item.icon"
                v-if="item.icon"
                class="menu-item-icon"
              />
              <span :class="item.header ? 'menu-title-header' : 'menu-title'">
                {{ item.title }}
              </span>
            </div>
          </span>
        </div>
      </li>

      <!-- <hr class="bg-white" /> -->
    </ul>
  </div>
</template>

<script>
import menu from "@/api/menu";
import { mapState } from "vuex";
export default {
  data: () => {
    return {
      menu,
      subMenu: null,
    };
  },
  methods: {
    goToLink(item) {
      this.$router.push(item.url);
    },
  },
  computed: {
    routeName() {
      return this.$route.name;
    },
    routeParent() {
      return this.$route.meta.parent;
    },
    ...mapState("drawer", {
      isCollapsed: (state) => state.collapsed,
    }),
  },
};
</script>

<style></style>
