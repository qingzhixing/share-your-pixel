<template>
    <div id="main-page">
        <header>
            <div id="website-info-display">
                <router-link to="/">
                    <img src="../assets/images/icon.png" alt="website icon" id="website-icon"/>
                </router-link>
                <div id="website-name">Share Your Pixel</div>
            </div>
            <div id="nav-bar">
                <div id="nav-bar-left">
                    <router-link to="/">首页</router-link>
                    <router-link to="/discover">发现</router-link>
                </div>
                <div id="nav-bar-right">
                    <a-input-search id="search-bar" placeholder="Enter something" v-model="inputSearchValue" @search="search(inputSearchValue)" @keydown.enter="search(inputSearchValue)"/>

                    <div id="user-avatar">
                        <a-popover>
                            <a-avatar :style="{ backgroundColor: '#3370ff' }">
                                <IconUser />
                            </a-avatar>
                            <template #content>
                                NULL
                            </template>
                        </a-popover>
                    </div>

                </div>
            </div>
        </header>
        <main>
            <div id="content">
                <router-view></router-view>
            </div>
        </main>
        <footer>
            footer
        </footer>
    </div>
</template>

<script>

import {ref} from "vue";

export default {
    name: "HomePage",
    components: {
    },
    setup(){
        //search bar
        const inputSearchValue = ref('');
        const search = function(searchValue){
            if(searchValue.trim()===''){
                return;
            }
            console.log("searching:"+searchValue);
            //暂时用百度搜索接口代替网站搜索功能
            window.open("https://www.baidu.com/s?wd="+searchValue);
        }

        return{
            //search bar
            inputSearchValue,
            search,
        }
    }
}
</script>

<style scoped lang="scss">
#main-page{
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
    padding:10px;
    box-sizing: border-box;

    background-color: #434343;

    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;


    #website-info-display{
        background-color: #5a4f4f;

        width:300px;
        @media (max-width: 750px) {
            width:100px;
        }

        @media (max-width:360px){
            width:50px;
        }

        height:100%;

        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;

        border-radius:20px;

        #website-icon{
            padding-left: 10px;
            width: 70px;
            height: 70px;

            @media (max-width:360px){
                width: 50px;
                height: 50px;
                padding-left:0;
            }
        }
        #website-name{
            @media (max-width: 750px) {
                display: none;
            }
            //margin-left: 10px;
            width: 100%;
            text-align: center;

            font-size: 20px;
        }
    }
    #nav-bar{
        //宽度=100%-左侧网站信息显示宽度-padding
        width: calc(100% - 300px - 10px);
        @media (max-width: 750px) {
            width: calc(100% - 100px - 10px);
        }
        @media (max-width:360px){
            width: calc(100% - 50px - 10px);
        }

        height: 100%;
        padding-left: 10px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        #nav-bar-left{
            height:100%;

            align-self: flex-start;

            display: flex;
            flex-direction: row;
            align-items: center;

            //link
            a{
                font-size:20px;
                padding-left:20px;
                @media (max-width: 600px) {
                    font-size:15px;
                    padding-left:6px;
                }

                text-decoration-line: none;
                color: #fff;
            }
            a:hover{
                color: #a3a3a3;
            }
            a:active{
                color: #757575;
            }
        }

        #nav-bar-right {
            padding-left: 5px;
            height:100%;

            align-self: flex-end;

            display: flex;
            flex-direction: row;
            align-items: center;

            #search-bar{
                height: 90%;
                border-radius: 15px;
                @media (max-width: 510px) {
                    width:100px;
                    //font-size:5px;
                }
            }

            #user-avatar{
                padding-left: 10px;
            }
        }
    }

}
main{
    width: 100%;
    //height值会自动计算
    height:300%;
    background-color: #fdeded;

    display: flex;
    flex-direction: column;
    align-items: center;

    #content{
        width:80%;
        height: 100%;
        background-color: #fddada;
    }
}
footer{
    width: 100%;
    height:150px;
    background-color: #bfb0b0;
}
</style>
