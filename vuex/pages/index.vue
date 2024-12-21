<template>
  <div>
    <p>number {{ number }}</p>
    <p>count {{ count }}</p>
    <button @click="hello" disabled="isLoading">BUTTON</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "IndexPage",

  // getter actions は computed 配下で行う
  computed: {
    ...mapGetters({
      number: "getNumber",
      count: "getCount",
      isLoading: "isLoading",
    }),

    ...mapActions({
      fetchNumber: "fetchNumber",
    }),
  },

  method: {
    hello() {
      this.fetchNumber();

      const texts = {hello:1, hehehehe: 2}
      const text = { hello }
    },
  },
};
</script>
