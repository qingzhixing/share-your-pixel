<template>
    <div id="home-page">
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

                </div>
            </div>
        </header>
        <main>Main</main>
        <footer></footer>
    </div>
</template>

<script>

export default {
    name: "HomePage",
    setup(){
        //header

        return{
            //header
        }
    }
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
    padding:10px;
    box-sizing: border-box;

    background-color: #434343;

    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;

    #nav-bar{
        //宽度=100%-左侧网站信息显示宽度-padding
        width: calc(100% - 300px - 10px);
        height: 100%;
        padding-left: 10px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        #nav-bar-left{
            height:100%;
            display: flex;
            flex-direction: row;
            align-items: center;

            //link
            a{
                font-size:20px;
                padding-left:20px;
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
    }

    #website-info-display{
        background-color: #5a4f4f;

        width:300px;
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
        }
        #website-name{
            //margin-left: 10px;
            width: 100%;
            text-align: center;

            font-size: 20px;
        }
    }

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
