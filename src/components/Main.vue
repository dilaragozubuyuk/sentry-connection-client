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
      }, 20000) 
    }
  }
}
</script>

<style scoped>

</style>
