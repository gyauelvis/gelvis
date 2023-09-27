<template>
    <header>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <nav class="nav-bar">
            <a href="#" class="name">gelvis</a>
            <Button1 msg = "Say Hello"  link = "mailto:gyauelvis@gmail.com"/>
        </nav>
    </header>
</template>

<script>

import Button1 from "./button_bl.vue"

export default {
    name: 'Header',
    components:{
        Button1
    },
}

</script>

<style scoped>
header{
    margin: 0;
}

nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height:4rem;
}

.material-symbols-outlined{
    color: #121113;
    font-size: x-large;
    transform: rotate(90deg);
    border: 1px solid #121113;
    border-radius: 0.3rem;
    box-shadow: 2.5px -2px 1px #121113;
    text-decoration: none;
}
.name{
    font-family: 'Montserrat', sans-serif;
}

.name{
    text-decoration: none;
    font-size: medium;
    font-weight: bold;
    color: #59A5D8;
    font-weight: 600;
}

.name::before{
    content: '< ';
    
}
.name::after{
    content: ' />';
    
}
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 300,
  'GRAD' 0,
  'opsz' 24
}

@media screen and (min-width: 600px){
    .name{
        display: block;
    }
    .material-symbols-outlined{    
        display: none;
    }
    nav {
        height:5rem;
    }
}
</style>
