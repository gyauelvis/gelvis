<template>
    <div class="intro">
        <div class="intro-wrapper">
            <div>
                <div>
                    <div class="intro1">
                        <span>Hi! My name is</span>
                    </div>
                    <div class="name">
                        <span>Gyau Boahen Elvis</span>
                    </div>
                    <div class="what-i-do">
                        I'm a <span class="emp">frontend engineer</span> and a <span class="emp">technical writter.</span>
                    </div>
                </div>
                <div class="illustration">
                    <div>
                        <img src="./icons/gelvisill.png" alt="">
                    </div>
                </div>
            </div>
            <Button2 msg="Resume" color="#f0f8ff "/>
            <sIcon />
        </div>
    </div>
</template>

<script>
import Button2 from "./button2.vue"
import sIcon from "./socialMediaIcons.vue"
export default{
    name: "Intro",
    components:{
        Button2,
        sIcon
    },
}

</script>
<style scoped>
.intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width:100%;
    height: calc(100vh - 6rem);
}
.intro-wrapper{
    margin: 0 2rem;
}


.intro1{
    margin: 0.2rem 0;
}
.intro1 span,.what-i-do{
    font-family: 'Montserrat', sans-serif;
    font-size: medium;
}

.name{
    margin: 0 0 0.2rem 0;
    font-family:'Playfair Display',sans-serif;
    font-weight: bolder;
    font-size: 2.8rem;
    line-height: 3.2rem;
}
.what-i-do{
    line-height: 1.3rem;
}

.what-i-do span{
    font-weight: bold;
}

.illustration{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;
}
.illustration div{
    background-color: #1211135e;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    position: relative;
    box-shadow: 1px 5px 1px #1211135e;
}

.illustration img{
    margin: -2px 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
}


</style>