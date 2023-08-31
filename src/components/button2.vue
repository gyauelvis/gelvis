<template>
    <div class="say-hello">
        <button :style="{background:color}">{{msg}}</button>
    </div>
</template>

<script>
    export default {
    name: "Button2",
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
}
.say-hello button{
 border: 1px solid #121113;
 background-color: #f0f8ff;
 color:#121113;
 font-weight: bold;
 box-shadow: 1px 2px 1px #121113;
}

</style>