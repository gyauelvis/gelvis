<template>
    <div class="intro" >
        <div class="intro-wrapper">
            <div class="container">
                    <div class="fadeIn">
                        <div class="intro1">
                            <span>Hi! My name is</span>
                        </div>
                        <div class="name">
                            <span>Gyau Boahen Elvis</span>
                        </div>
                        <div class="what-i-do">
                            <span class="firstText" >I'm a</span>
                            <span class="secondText"></span>
                        </div>
                    </div>
                <div class="illustration">
                    <div>
                        <div class="illustrationFadeIn">
                            <img src="./icons/avatar.png" class="illustrationImg" alt="" @mouseover="shake()" @mouseleave="unShake()">
                        </div>
                    </div>
                </div>
            </div>
            <Button2 msg="Resume"/>
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
    methods: {
        changeWord(){
            let toggle = true;
            setInterval(() =>{
                if(toggle){
                    document.querySelector(".secondText").textContent = "Frontend Engineer";
                    toggle = false;
                }else{
                    document.querySelector(".secondText").textContent = "Technical Writer";
                    toggle = true;
                }
            },4000);
        },
        shake(){
            document.querySelector(".illustrationImg").classList.add("shake");
        },
        unShake(){
            document.querySelector(".illustrationImg").classList.remove("shake");
        }
    },
    mounted(){
        this.changeWord();
    }
}



</script>
<style scoped>
.intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width:100%;
    height: calc(100vh - 6rem);
    position: relative;
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
    line-height: 3.5rem;
}
.what-i-do{
    line-height: 1.3rem;
}

.what-i-do .secondText{
    font-weight: bold;
}
.secondText{
    width: 5rem;
    height: 2rem;
    position: relative;
    margin: 0 0.5rem;
}
.secondText::before{
    content: "";
    background-color: #fff8ff;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-left: 2px solid #59A5D8;
    animation: type 4s steps(12) infinite;
}

@keyframes type {
    40%,60%{
        left: 100%;
    }
    100%{
        left: 0%;
    }
}

.illustration{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;
    animation: fadeIn 500ms ease-in-out;
}
.illustration div{
    background-color: #1211135e;
    width: 13rem;
    height: 13rem;
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

@media screen and (min-width: 1000px) {
    .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .intro1 span,.what-i-do{
        font-size: x-large;
    }
    .what-i-do{
        line-height: 2rem;
    }
    .name{
        margin: 1rem 0;
        font-size: 3.8rem;
        line-height: 3.5rem;
    }
    .intro1{
        margin: 0;
    }

    .illustration div{
        background-color: #1211135e;
        width: 18rem;
        height: 18rem;
        border-radius: 50%;
        position: relative;
        box-shadow: 1px 5px 1px #1211135e;
    }
}

@media screen and (max-height: 730px) and (max-width:1025px) {
    .name{
        margin: 0.2rem 0;
        font-size: 2.2rem;
        line-height: 2.5rem;
    }
    .illustration div{
        width: 10rem;
        height: 10rem;
    }
}

.shake{
    animation: shake 1000ms ease-in-out infinite;
}
@keyframes shake {
    25%{
        transform: rotate(-4deg);
    }
    50%{
        transform: rotate(-4deg);
    }
    75%{
        transform: rotate(2deg);

    }
    100%{
        transform: rotate(2deg);
    }
    
}


.fadeIn{
    animation: fadeIn 500ms ease-in-out;
}


@keyframes fadeIn {
    0%{
        opacity: 0;
        transform: translateY(100px);
    }
    25%{
        opacity: 0.25;
        transform: translateY(75px);
    }
    50%{
        opacity: 0.5;
        transform: translateY(50px);
    }
    75%{
        opacity: 0.75;
        transform: translateY(25px);
    }
    100%{
        opacity: 1;
        transform: translateY(0px);
    }
}

</style>