<template>
  <div>
    <MyHeader />
    <div class="pageBody">
        <Cards />
    </div>    
  </div>
</template>

<script>

import MyHeader from './MyHeader';
import Cards from './Cards';

export default {
  components: {
    MyHeader,
    Cards,
  },
};
</script>

<style scoped>

  .pageBody {
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>