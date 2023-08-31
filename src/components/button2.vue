<template>
    <div class="say-hello">
        <button>{{msg}}</button>
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
}
.say-hello button{
 border: 1px solid #121113;
 background-color: #59A5D8;
 color:#121113;
 font-weight: bold;
 box-shadow: 1px 2px 1px #121113;
}
.say-hello button:hover{
    background-color: #f0f8ff;
    transition: all 0.3s ease-in-out;
}

@media screen and (min-width: 1000px) {
    .say-hello{
        justify-content: start;

    }
   
}

</style>