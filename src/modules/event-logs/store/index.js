/* eslint-disable no-undef */

import $request from "@/axios";
import toastify from "toastify-js";

const getDefaultState = () => {
  return {
    loading: false,
    error: false,
    success: false,
    dataSet: null,
    singleDataSet: {},
    singleError: false,
    singleSuccess: false,
  };
};

export default {
  namespaced: true,
  state: getDefaultState(),
  getters: {
    isLoading: (state) => state.loading,
    getData: (state) => state.dataSet,
  },

  mutations: {
    SET_LOADING(state) {
      state.loading = true;
      state.error = false;
      state.success = false;
      //   state.dataSet = null;
    },

    SET_ERROR(state, message) {
      state.error = message;
      state.success = false;
      state.loading = false;
    },

    SET_SUCCESS(state, message) {
      state.success = message;
      state.error = false;
      state.loading = false;
      state.dataSet = null;
    },

    REMOVE_ERROR_SUCCESS(state) {
      state.error = false;
      state.success = false;
      state.regError = false;
      state.regSuccess = false;
      state.validationErrors = {};
      state.loading = false;
    },

    SET_DATA(state, payload) {
      state.dataSet = payload;
      state.loading = false;
      state.error = false;
      state.success = false;
    },

    SET_SINGLE_DATA(state, payload) {
      state.singleDataSet = payload;
      state.loading = false;
      state.singleError = false;
      state.singleSuccess = true;
    },

    REMOVE_SINGLE_DATA(state) {
      state.singleDataSet = {};
      state.loading = false;
      state.singleError = false;
      state.singleSuccess = false;
    },
  },
  actions: {
    // Get Logs
    async getLogs({ commit }, payload) {
      let user_url = "admin/log/user";
      let trainer_url = "admin/log/trainer";
      let affiliate_url = "admin/log/affiliate";
      NProgress.start();
      commit("SET_LOADING", true);
      try {
        let res = await $request.post(
          payload.role === "user"
            ? user_url
            : payload.role === "trainer"
            ? trainer_url
            : affiliate_url,
          payload.id
        );
        console.log(res.data);
        let responsePayload = res.data;
        commit("SET_DATA", responsePayload.data);
        return res;
      } catch (error) {
        console.log(error);
        toastify({
          text: `Internal connection error`,
          className: "info",
          style: {
            background: "red",
            fontSize: "12px",
            borderRadius: "5px",
          },
        }).showToast();
        commit("SET_ERROR", "Internal connection error");
        return error;
      } finally {
        NProgress.done();
      }
    },

    // Get Logs
    async getSingleLog({ commit }, payload) {
      let user_url = "admin/single/log/user";
      let trainer_url = "admin/single/log/trainer";
      let affiliate_url = "admin/single/log/affiliate";
      NProgress.start();
      commit("SET_LOADING", true);
      try {
        let res = await $request.post(
          payload.LogType === "user"
            ? user_url
            : payload.LogType === "trainer"
            ? trainer_url
            : affiliate_url,
          payload.data
        );
        console.log(res);
        let responsePayload = res.data;
        commit("SET_SINGLE_DATA", responsePayload.data);
        return res;
      } catch (error) {
        console.log(error);
        toastify({
          text: `Internal connection error`,
          className: "info",
          style: {
            background: "red",
            fontSize: "12px",
            borderRadius: "5px",
          },
        }).showToast();
        // commit("SET_SINGLE_ERROR", "Internal connection error");
        return error;
      } finally {
        NProgress.done();
      }
    },
  },
};
