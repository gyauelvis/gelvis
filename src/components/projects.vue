<template>
    <div class="title">
        Projects
    </div>

    <div class="projectContainer" v-motion-slide-visible-bottom>
        <div class="blogBox">
            <div class="topBox">
                <div class="projectTitle">WordHaven</div>
                <Button msg="Code" link = "https://github.com/gyauelvis/WordHaven.git"/>
            </div>
            <a href="https://wordhaven-international-church.vercel.app/" class="blogImg">
                <img src="./projects/wordhaven.jpg" alt="Word Haven International Church">
            </a>
            <div class="techStack blogTitle">
                Built a static website for the Worldhaven International Church. Stack Used: HTML, CSS, JavaScript
            </div>
        </div>
        <div class="blogBox">
            <div class="topBox">
                <div class="projectTitle">Tonaton Estate</div>
                <Button msg="Code" link = "https://github.com/gyauelvis/tonaton-estate.git"/>
            </div>
            <a href="https://tonaton-estate.vercel.app/" class="blogImg">
                <img src="./projects/tonaton.jpg" alt="Tonaton">
            </a>
            <div class="blogTitle">
                A clone of the popular Ghanaian Ecommerce app, Tonaton Estate. Stack used: HTML,Tailwind CSS, JavaScript
            </div>
        </div>
        <div class="blogBox">
            <div class="topBox">
                <div class="projectTitle">DevQuiz</div>
                <Button msg="Code" link="https://github.com/gyauelvis/devQuiz.git"/>
            </div>
            <a href="https://devquiz-peach.vercel.app/" class="blogImg">
                <img src="./projects/devquiz.jpeg" alt="Dev Quiz">
            </a>
            <div class="blogTitle">
                A Quiz application that queries player on various programming languages. Stack Used: HTML, Tailwind CSS, JavaScript
            </div>
        </div>
        <div class="blogBox">
            <div class="topBox">
                <div class="projectTitle">Student Portal</div>
                <Button msg="Code" link="https://github.com/gyauelvis/Student_Portal.git"/>
            </div>
            <a href="https://studentportal-three.vercel.app/" class="blogImg">
                <img src="./projects/studentPortal.jpg" alt="mastering-background-image-darkening-with-css-simple-yet-effective-techniques">
            </a>
            <div class="blogTitle">
                Decided to work on building UI for a student portal. Stack Used: HTML, Tailwind CSS, JavaScript
            </div>
        </div>
        <div class="blogBox">
            <div class="topBox">
                <div class="projectTitle">Dictionary</div>
                <Button msg="Code" link="https://github.com/gyauelvis/Student_Portal.git"/>
            </div>
            <a href="https://studentportal-three.vercel.app/" class="blogImg">
                <img src="./projects/dictionary.jpg" alt="Dictionary App">
            </a>
            <div class="blogTitle">
               Made a dictionary app using html, css and javascript.
            </div>
        </div>
    </div>
</template>
<script>
    import Button from './button_bl.vue'
    export default{
        name: "Projects",
        components: {
            Button,
    }
    }
</script>
<style scoped>
.blogBox{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    border: 1px solid #121113;
    height: 18rem;
    margin: 1rem 0;
    position: relative;
    overflow: hidden;
}
.blogTitle{
    margin: 1rem 0;
    border-top: 1px solid #121113;
    position: absolute;
    padding: 1rem 0.5rem;
    bottom: -1rem;
    background-color: #fff8ff;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.4rem;
    width: 100%;
}
.blogImg {
    height: 100%;
    width: 100%;
    position: relative;
}
.blogImg img{
    width: 100%;
    object-fit: contain;
}


.blogBox:hover{
    transform: translateY(-1rem);
    transition: all 0.5s ease-in-out;
}

.topBox{
    border-bottom: 1px solid #121113;
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    justify-content: space-between;
} 
.projectTitle {
    font-family:'Playfair Display',sans-serif;
}

@media screen and (min-width: 1000px) {
    .projectContainer{
        display: flex;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .blogBox{
        flex-direction: column;
        width: 48%;
    }
}

</style>