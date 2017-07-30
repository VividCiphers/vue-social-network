<template>
  <div>
    <div class='main'>
        <h1><i class="fa fa-instagram" aria-hidden="true"></i> <div class="name"> Clonegram</div></h1>
        <input placeholder="Search" />
        <div class='nav-icons'>
            <a href="#"><i class="fa fa-compass" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-user-o" aria-hidden="true"></i></a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>

  .main {
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .main input {
      height: 1em;
      background-color: #f2f2f2;
      border: 1px solid lightgray;
      border-radius: 3px;
      padding: 5px;
      text-align: center;
  }

  .main h1 {
      font-family: 'Lobster', cursive;
      font-size: 2em;
  }

  .main .nav-icons a {
      font-size: 1.6em;
      color: gray;
      padding: 0 10px;
  }
 
 .name {
     border-left: 1px solid lightgray;
     padding-left: 10px;
     display: inline-block;
 }

</style>