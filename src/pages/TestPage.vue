<template>
    <div>
        <h1>Test Page</h1>
    </div>
    <nut-searchbar v-model="searchValue"></nut-searchbar>
    <nut-button type="primary">主要按钮</nut-button>
    <nut-button type="info">信息按钮</nut-button>
    <nut-button type="default">默认按钮</nut-button>
    <nut-button type="danger">危险按钮</nut-button>
    <nut-button type="warning">警告按钮</nut-button>
    <nut-button type="success">成功按钮</nut-button>
</template>

<script>
export default {
    name: "TestPage"
}
</script>

<style scoped>

</style>
