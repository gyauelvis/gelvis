<template>
    <div class="say-hello">
        <a :style="{background:color}" :href="link">{{msg}}</a>

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
            type: String
        },
        link:{
            type: String,
            default : '#',
        }
    }
}

</script>

<style scoped>
.say-hello{
    font-family: 'Montserrat', sans-serif;
}
.say-hello a{
    background-color: #59A5D8;
    border: none;
    text-decoration: none;
    color: #fff8ff;
    padding: 0.5rem 1rem;
    font-size: small;
    border-radius: 1rem;
    font-family: 'Montserrat', sans-serif;
}
.say-hello a:hover{
    opacity: 80%;
}



</style>