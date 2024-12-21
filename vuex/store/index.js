export const state = () => ({
    number: 100,
    count: 0,
    isLoading: false
  });

  export const getters = {
    getNumber: (state) => state.number,
    getCount: (state) => state.count,
  };
  
  export const mutations = {
    setNumber: (state, number) => {
        state = number
    },

    ///////////////////////////////////////////////////////
    "started": (state) => {
        state.isLoading = true
      },
      "done": (state, data) => {
        state.count = data
        state.isLoading = false
      },


};
  
  // 非同期処理などは acion
  export const actions = {
    async fetcNumber({ commit }) {
        commit("started")
        try {
          const { data } = await this.$api.fetchNumber()
          commit("done", data)
        } catch (error) {
          // エラー処理とか
        }
      },
  };
  
  