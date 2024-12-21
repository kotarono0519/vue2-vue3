<template>
    <div id="app">
      <div>
        <p>dataCount {{ dataCount }}</p>
        <p>computedCount {{ computedCount }}</p>
        <p>watchText {{ watchText }}</p>
      </div>
    </div>
  </template>
  
  <script>
  // Options API と呼ばれる
  export default {
    name: 'App',
  
    // リアクティブな値は data
    data: () => ({
      dataCount: 10,
      watchText: "",
    }),
  
    // 自動計算される computed
    computed: {
      computedCount() {
        return this.dataCount + 10
      },
    },
  
    // 値が変動したら動作する watch
    watch: {
      dataCount() {
        this.watchText = "watch しました"
      }
    },
  
    // 画面初期表示時のみ動作 mounted
    mounted() {
      // this.dataCount = 15
    },
  
    // 関数を格納 methods
    methods: {
      firstFunction() {
        console.log('Function!!')
      }
  }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  