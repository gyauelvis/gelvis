<template>
    <div class="say-hello">
        <button :style="{background:color}">{{msg}}</button>

    </div>
</template>

<script>

export default {
    name: "Button1",
    props:{
        msg:{
            type: String,
            default: 'Button1',
        },
        color:{
            type: String,
            default: '#121113'
        }
    }
}

</script>

<style scoped>
.say-hello{
    font-family: 'Montserrat', sans-serif;
}
.say-hello button{
    background: #121113;
    border: none;
}
.say-hello button:hover{
    opacity: 80%;
}



</style>