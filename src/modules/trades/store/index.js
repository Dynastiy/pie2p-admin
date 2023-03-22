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
    orders: null,
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

    SET_ORDERS_DATA(state, payload) {
      state.orders = payload;
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
    // List
    async list({ commit }, page) {
      NProgress.start();
      commit("SET_LOADING", true);
      try {
        let res = await $request.get(`admin/trades?page=${page}&pageSize=20`);
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

    // View Single Transaction
    async view({ commit }, id) {
      NProgress.start();
      commit("SET_LOADING", true);
      try {
        let res = await $request.get(`admin/trades/${id}`);
        console.log(res);
        let responsePayload = res.data;
        commit("SET_SINGLE_DATA", responsePayload);
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

    //   Trade Orders
    async tradeOrders({ commit }, id) {
      NProgress.start();
      commit("SET_LOADING", true);
      try {
        let res = await $request.get(
          `admin/trades/${id}/orders?page=1&pageSize=20`
        );
        console.log(res);
        let responsePayload = res.data;
        commit("SET_ORDERS_DATA", responsePayload.data);
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
        commit("SET_SINGLE_ERROR", "Internal connection error");
        return error;
      } finally {
        NProgress.done();
      }
    },

    // Close Trade
    async closeTrade({ commit, dispatch }, id) {
      NProgress.start();
      commit("SET_LOADING", true);
      try {
        let res = await $request.put(`admin/trades/${id}/close`);
        console.log(res);
        dispatch("list", "1");
        dispatch("view", id);
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

        return error;
      } finally {
        NProgress.done();
      }
    },

    // Cancel Orders
    async cancelOrder({ commit, dispatch }, payload) {
      NProgress.start();
      commit("SET_LOADING", true);
      try {
        let res = await $request.put(`admin/orders/${payload.orderID}/cancel`);
        console.log(res);
        dispatch("view", payload.id);
        dispatch("tradeOrders", payload.id);
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
        commit("SET_LOADING", false);
        return error;
      } finally {
        NProgress.done();
      }
    },
  },
};
