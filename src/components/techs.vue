<template>
    <div class="container" v-motion-slide-visible-bottom>
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
                <div class="row-main row0">
                    <div class="row row1 row-r">
                        <div class="icon"><img src="./icons/js.png" alt="" title="JavaScript"></div>
                        <div class="icon border-line"><img src="./icons/tailwind.png" alt="" class="vue" title="TailwindCSS"></div>
                    </div>
                    <div class="row row1">
                        <div class="icon"><img src="./icons/css.png" alt="" title="CSS"></div>
                        <div class="icon border-line"><img src="./icons/github.png" alt="" title="GitHub"></div>
                    </div>
                </div>
                <div class="row-main">
                    <div class="row row1 row-r">
                        <div class="icon"><img src="./icons/vue.png" class="vue" alt="" title="Vue.js"></div>
                        <div class="icon border-line"><img src="./icons/html5.png" alt="" title="HTML"></div>
                    </div>
                    <div class="row">
                        <div class="icon"><img src="./icons/git.png" alt="" class="vue"  title="GIT"></div>
                        <div class="icon border-line"><img src="./icons/vscode.png" alt="" class="vue" title="GitHub"></div>
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
    .vue{
        width: 99px;
        height: 99px;
    }
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
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        padding: 1rem 0;
        width: 100%;
        height: 100%;
    }
    .border-line{
        border-left: 1px solid #000;
    }

    @media screen and (min-width: 1200px) {
        .row-main{
            flex-direction: row;
            justify-content: center;
            border: 0;
        }
        .border-line{
            border-left: 0px;
        }
        
        .icon{
            padding: 2rem 4.3rem;
            
        }
        .row1{
            border-bottom: 0px ;
        }
        .row0{
            border-bottom: 1px solid #000;
        }
    }
</style>