export const state = () => ({
  number: 100,
  count: 0,
  isLoading: false,
});

// store の値を取得するもの
export const getters = {
  getNumber: (state) => state.number,
  getCount: (state) => state.count,
  isLoading: (state) => state.isLoading
};

// store の値を変更するもの
export const mutations = {
  setNumber: (state, number) => {
    state = number;
  },

  ///////////////////////////////////////////////////////
  started: (state) => {
    state.isLoading = true;
  },
  done: (state, data) => {
    state.count = data;
    state.isLoading = false;
  },
};

// 非同期処理などは acions
export const actions = {

  async fetcNumber({ commit }) {
    commit("started");
    try {
      const { data } = await this.$api.fetchNumber();
      commit("done", data);
    } catch (error) {
      // エラー処理とか
    }
  },
};