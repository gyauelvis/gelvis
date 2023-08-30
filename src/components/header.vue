<template>
    <header>
        <nav class="nav-bar">
            <a href="#" class="name">gelvis</a>
            <div class="say-hello">
                <button >Say Hello</button>
            </div>
        </nav>
    </header>
</template>

<script>

export default {
    name: 'Header'
}

</script>

<style scoped>
header{
    margin: 0;
}

nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height:4rem;
    
}

.name,.say-hello{
    margin: 0 1rem;
    font-family: 'Montserrat', sans-serif;

}

.name{
    text-decoration: none;
    font-size: large;
    color: #35A7FF;
    font-weight: 500;
}

.name::before{
    content: '< ';
    
}
.name::after{
    content: ' />';
    
}

.say-hello button{
    background: #35A7FF;
    outline: none;
    border: none;
    border-radius: 2rem;
    width: 6rem;
    height: 1.8rem;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
}

</style>
