<template>
    <div class="container ">
        <div class="title">
            Technologies
        </div>
        <div class="box">
            <div class="intro">
                <span>
                    Check out what I'm good at
                </span>
            </div>
            <div class="iconTable">
                <div class="row-main">
                    <div class="row row1">
                        <div class="icon"><img src="./icons/js.png" alt=""></div>
                        <div class="icon"><img src="./icons/css.png" alt=""></div>
                    </div>
                    <div class="row">
                        <div class="icon"><img src="./icons/html5.png" alt=""></div>
                        <div class="icon"><img src="./icons/github.png" alt=""></div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    export default{
        name:'Tech'
    }
</script>
<style scoped>
    .container{
        margin: 2rem 0;
    }
    .title{
        font-family: 'Montserrat', sans-serif;
        font-size: large;
        font-weight: bold;
        padding: 1rem 0;
    }
    .intro{
        font-family:'Playfair Display',sans-serif;
        font-weight: bolder;
        font-size: 1.8rem;
        line-height: 2.2rem;
        padding: 1rem 1rem;
        border-bottom: 1px solid black;
    }

    .box{
        border: 1px solid #000;
    }
    .iconTable{
        width: 100%;
        position: relative;
    }
    .row-main{
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: space-evenly;
    }
    .row{
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: space-evenly;
        
    }
    .row1{
        border-bottom: 1px solid #000;
    }
    .icon{
        padding: 1rem 0;
    }

</style>