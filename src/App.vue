<script>
import Header from './components/header.vue';
import Intro from './components/intro.vue';

export default {
  name: 'App',
  components:{
    Header,
    Intro,
  },
}


</script>

<template>

  <div class="wrapper">
    <Header />
    <Intro />
  </div>
  

</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap');

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #f0f8ff;
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
      transition: all 0.5s ease-in-out ;
    }
  }

  @keyframes fadeIn {
    0%{
        opacity: 0;
        transform: translateY(100px);
    }
    25%{
        opacity: 0;
        transform: translateY(75px);
    }
    50%{
        opacity: 0.33;
        transform: translateY(50px);
    }
    75%{
        opacity: 0.66;
        transform: translateY(25px);
    }
    100%{
        opacity: 1;
        transform: translateY(0px);
    }
}



</style>
