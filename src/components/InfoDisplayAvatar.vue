<template>
    <a-popover :position="bottom">
        <nut-avatar icon="my" shape="square"></nut-avatar>
        <template #content>

        </template>
    </a-popover>
</template>

<script>
import {reactive} from "vue";

export default {
    name: "InfoDisplayAvatar",
    setup(){
        //popover
        const popoverList = reactive([
            {
                name: "Setting",
            },
            {
                name: "Logout",
            },
            {
                name: "User Info",
            },
        ]);
        const onOpen=function(arg){
            console.log(arg);
        }

        return{
            //popover
            popoverList,
            onOpen,
        }
    }
}
</script>

<style scoped lang="scss">
</style>
