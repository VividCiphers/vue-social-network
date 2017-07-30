<template>
  <div>
    <MyHeader></MyHeader>
    <p>This is Homepage</p>
  </div>
</template>

<script>

import MyHeader from './MyHeader';

export default {
  components: {
    MyHeader,
  },
};
</script>

<style scoped>

  p {
    color: red;
  }

</style>