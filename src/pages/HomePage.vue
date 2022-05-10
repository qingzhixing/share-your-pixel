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

<style scoped lang="scss ">
#home-page{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
header{
    width: 100%;
    height:55px;
}
main{
    width: 100%;
    height:100%;
}
footer{

}
</style>
