<template>
  <div>
    <p>number {{ number }}</p>
    <p>count {{ count }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
  name: 'IndexPage',

  // getter actions は computed 配下で行う
  computed: {
    ...mapGetters({
      number: "getNumber", 
      count: "getCount"
    }),

    ...mapActions({
      action: "fetchNumber",
    })
  },

}
</script>
