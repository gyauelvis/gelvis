<script>
import Header from './components/header.vue';
import Intro from './components/intro.vue';
import Tech from './components/techs.vue';
import Blog from './components/blogs.vue';

export default {
  name: 'App',
  components:{
    Header,
    Intro,
    Tech,
    Blog
  },
}


</script>

<template>

  <div class="wrapper">
    <Header />
    <Intro />
    <Tech />
    <Blog />
  </div>
  

</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap');

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #fff8ff;
    scroll-behavior: smooth;
  }

  .title{
    font-family: 'Montserrat', sans-serif;
    font-size: large;
    font-weight: bold;
    padding: 1rem 0;
}

  .wrapper {
    position: relative;
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }

  .say-hello button{
    outline: none;
    border-radius: 2rem;
    width: 4.8rem;
    height: 1.8rem;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-size: small;
}

  @media screen and (min-width: 600px){
    .wrapper {
      margin: 0 5rem;
    }
  }

  @media screen and (min-width: 1000px){
    .wrapper {
      margin: 0 12rem;
    }
    .say-hello button{
      width: 6rem;
      height: 2.2rem;
      cursor: pointer;
    }
    .say-hello button:hover{
      transition: all 0.5s ease-in-out;
    }
  }


.intro-wrapper{
  margin: 0 2rem;
}



</style>
