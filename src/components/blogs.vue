<template>
    <div class="title">Blogs</div>
    <div class="blogContainer" v-motion-slide-visible-bottom>

        <div class="blogBox">
            <div class="topBox">
                
            </div>
            <a href="https://dev.to/gyauelvis/programming-languages-every-developer-should-watch-out-for-1ak4" class="blogImg">
                <img src="./icons/😲.png" alt="A Comprehensive Guide to APIs and the Fetch API">
            </a>
            <div class="blogTitle">
                <span>Programming Languages Every Developer Should Watch Out For 😲</span>
            </div>
        </div>

        <div class="blogBox">
            <div class="topBox">
                
            </div>
            <a href="https://dev.to/gyauelvis/a-beginners-guide-to-apis-4ce4" class="blogImg">
                <img src="./icons/blogImg3.svg" alt="A Comprehensive Guide to APIs and the Fetch API">
            </a>
            <div class="blogTitle">
                <span>A Comprehensive Guide to APIs and the Fetch API🚀</span>
            </div>
        </div>

        <div class="blogBox">
            <div class="topBox">
                
            </div>
            <a href="https://dev.to/gyauelvis/a-beginners-guide-polymorphism-virtual-functions-and-abstract-classes-1m6" class="blogImg">
                <img src="./icons/blogImg.svg" alt="a-beginners-guide-polymorphism-virtual-functions-and-abstract-classes">
            </a>
            <div class="blogTitle">
                <span>A Beginners Guide: Polymorphism, Virtual Functions, and Abstract Classes With C++👨‍💻</span>
            </div>
        </div>
        <div class="blogBox">
            <a href="https://dev.to/gyauelvis/mastering-background-image-darkening-with-css-simple-yet-effective-techniques-1cmn" class="blogImg">
                <img src="./icons/blogImg1.svg" alt="mastering-background-image-darkening-with-css-simple-yet-effective-techniques">
            </a>
            <div class="blogTitle">
                <span>Mastering Background Image Darkening with CSS: Simple Yet Effective Techniques😎</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: "Blog",
    }
</script>
<style scoped>
.blogImg {
    height: 100%;
    width: 100%;
    position: relative;
}
    .blogBox{
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 15rem;
        border: 1px solid #121113;
        margin: 1rem 0;
        position: relative;
    }
    .blogBox:hover{
        transform: translateY(-1rem);
        transition: all 0.5s ease-in-out;
    }
    .blogTitle{
        margin: 1rem 0;
        position: absolute;
        padding: 0.2rem 0;
        width: 100%;
        bottom: 0;
        font-family: 'Montserrat', sans-serif;
        line-height: 1.4rem;
    }
    .blogTitle span {
        padding: 0 0.5rem;
    }

    .blogTitle::before{
        content: "";
        display: block;
        margin: 1rem 0;
        width: 100%;
        background-color: #121113;
        height: 1px;
    }
    .blogImg img{
        width: 100%;
        height: 10rem;
        object-fit: cover;
    }

    @media screen and (min-width: 1000px) {
        .blogContainer{
            display: flex;
            align-items: center;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .blogBox{
            flex-direction: row;
            width: 48%;
        }
    }

</style>