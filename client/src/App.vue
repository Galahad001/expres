    <script setup>
    import {RouterView, RouterLink} from 'vue-router'
    </script>

<template>
    <nav>
      <h1>Python2022</h1>
      <RouterLink to='/'>Home</RouterLink>
      <RouterLink to='/blog'>Blog</RouterLink>
    </nav>
    <main>
      <RouterView/>
    </main>
</template>

<style scoped>
nav{
  background-color: gray;
  display: flex;
  gap: 20px;
  height: 50px;
  align-items: center;
  padding-right: 50px;
  padding-left: 50px;
  box-shadow: 0px 5px 5px rgb(0, 0, 0);
  border-radius: 5px;


  &
  a{
    text-decoration: none;
    color: aliceblue;
  }
}

h1{
  color: rgb(0, 255, 38);
  flex-grow: 1;
}

main{
  width: 90vw;
  height: 87vh;
  border: 1px solid black;
  margin: 20px auto 20px auto;
  border-radius: 10px;
  padding: 20px;
}

</style>