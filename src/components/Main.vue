<template>
  <div class="main">
    test
  </div>
</template>

<script>
export default {
  name: 'Main',

  mounted() {
    this.sendError();
  },

  methods: {
    sendError() {
      setTimeout(() => {
        throw new Error('test');
      }, 10000) 
    }
  }
}
</script>

<style scoped>

</style>
