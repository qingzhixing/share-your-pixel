<template>
    <div id="home-page">
        <header>Header</header>
        <main>Main</main>
        <footer></footer>
    </div>
</template>

<script>
export default {
    name: "HomePage"
}
</script>

<style scoped lang="scss">
#home-page{
    //border: 1px solid black;

    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    //display: flex;
    flex-direction:column;

    overflow-y: scroll;
}
header{
    width: 100%;
    height:55px;
    background-color: #f00;
}
main{
    flex:1fr;
    width: 100%;
    //height: 100%;
    height:5000px;
    background-color: #0f0;
}
footer{

}
</style>
