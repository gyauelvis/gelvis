<template>
    <div class="title">Blogs</div>
    <div class="blogContainer" v-motion-slide-visible-bottom>
        <div class="blogBox">
            <a href="https://dev.to/gyauelvis/a-beginners-guide-polymorphism-virtual-functions-and-abstract-classes-1m6" class="blogImg">
                <img src="./icons/blogImg.svg" alt="">
            </a>
            <div class="blogTitle">
                A Beginners Guide: Polymorphism, Virtual Functions, and Abstract Classes With C++👨‍💻
            </div>
        </div>
        <div class="blogBox">
            <a href="https://dev.to/gyauelvis/mastering-background-image-darkening-with-css-simple-yet-effective-techniques-1cmn" class="blogImg">
                <img src="./icons/blogImg1.svg" alt="">
            </a>
            <div class="blogTitle">
                Mastering Background Image Darkening with CSS: Simple Yet Effective Techniques😎
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
    .blogTitle{
        margin: 1rem 0;
        border-top: 1px solid #121113;
        position: absolute;
        padding: 0.2rem 0.5rem;
        bottom: 0;
        font-family: 'Montserrat', sans-serif;
        line-height: 1.4rem;
    }
    .blogImg img{
        width: 100%;
        height: 10rem;
        object-fit: cover;
    }

</style>