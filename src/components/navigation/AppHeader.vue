<template>
  <div id="app-header" class="spacer sticky-top">
    <div class="app-header-content">
      <span role="button" @click="collapseMenu">
        <i-icon
          :icon="
            isCollapsed
              ? 'ant-design:menu-unfold-outlined'
              : 'ant-design:menu-fold-outlined'
          "
          class="header-icon"
        />
      </span>

      <div class="user-menu-actions">
        <span>
          <i-icon icon="ion:notifications-outline" class="header-icon" />
        </span>
        <el-divider direction="vertical"></el-divider>
        <div class="d-flex align-items-center" style="gap: 20px">
          <span>
            <img
              class="header-image"
              src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg"
              alt=""
            />
          </span>
          <span class="el-dropdown-link user-name text-capitalize">
            {{ user.name }}
          </span>
          <!-- <el-dropdown trigger="click">
            <span class="el-dropdown-link user-name text-capitalize">
              {{ user.name }}
              <i class="el-icon-arrow-down el-icon--right font-weight-bold"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data: () => {
    return {};
  },
  methods: {
    ...mapActions("drawer", ["setCollapseState"]),
    collapseMenu() {
      this.setCollapseState();
    },
  },

  mounted() {},

  computed: {
    ...mapState("auth", {
      user: (state) => state.user,
    }),
    ...mapState("drawer", {
      isCollapsed: (state) => state.collapsed,
    }),
  },
};
</script>

<style></style>

<style></style>
