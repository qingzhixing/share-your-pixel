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

    overflow-y: scroll;
}
header{
    width: 100%;
    height:55px;
    background-color: #f00;
}
main{
    width: 100%;
    //height值会自动计算
    height:100%;
    background-color: #0f0;
}
footer{

}
</style>
