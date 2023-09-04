<template>
    <div class="say-hello">
        <a href="https://docs.google.com/document/d/1ietzMoWkzZitmNFm9Hz1ybeNfQweKJVUPkqrZWPjXqo/edit?usp=sharing">{{msg}}</a>
    </div>
</template>

<script>
    export default {
    name: "Button2",
    props:{
        msg:{
            type: String,
            default: 'Button1',
        }
    }
    
}
</script>

<style scoped>
.say-hello{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    animation: fadeIn 500ms ease-in-out;
}
.say-hello a{
    text-decoration: none;
 border: 1px solid #121113;
 background-color: #59A5D8;
 color:#121113;
 font-weight: bold;
 box-shadow: 1px 2px 1px #121113;
}
.say-hello a{
    outline: none;
    border-radius: 2rem;
    padding: 0.5rem 1rem;
    color: #121113;
    font-family: 'Montserrat', sans-serif;
    font-size: small;
}
.say-hello a:hover{
    background-color: #f0f8ff;
    transition: all 0.3s ease-in-out;
}

@media screen and (min-width: 1000px) {
    .say-hello{
        justify-content: start;

    }
   
}

</style>