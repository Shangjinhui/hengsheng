<template>
    <div class="footer-out">
        <div class="footer-inner">
            <div class="family flex">
                <p>恒生家族</p>
                <ul class="flex">
                    <li v-for="(item,index) in family" :key="index">
                        <a :href="item.link" target="_blank" rel="noopener noreferrer">{{item.title}}</a>
                    </li>
                </ul>
            </div>
            <div class="mid flex-top">
                <div class="left">
                    <img src="@/assets/images/footer1.png" alt="">
                    <p class="desc">
                        <span>让金融变简单</span>
                        <i></i>
                    </p>
                </div>
                <div class="center">
                    <div class="block">
                        <p class="title">ADDRESS</p>
                        <p class="desc" v-html="other.description"></p>
                    </div>
                    <div class="block">
                        <p class="title">PHONE</p>
                        <p class="desc">{{other.subtitle}}</p>
                    </div>
                </div>
                <div class="right" v-if="other.exp1">
                    <img :src="$imgurl+other.exp1.url" alt="">
                    <p class="company">{{other.exp1.title}}</p>
                    <p class="desc">{{other.exp1.text}}</p>
                </div>
            </div>
            <p class="btm">{{copyright}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            family:[
                {name:'恒生云'},
                {name:'i私募'},
                {name:'恒云科技'},
                {name:'恒生聚源'},
                {name:'云毅网络'},
                {name:'云赢网络'},
                {name:'商智神州'},
                {name:'云永网络'},
                {name:'芸擎网络'},
            ],
            other:{},
            copyright:'',
        }
    },
    mounted(){
        this.getData();
    },
    methods:{
        getData(){
            this.$fetch({
                url: "index.php/common/initGuideAndFoot",
                loading:false
            }).then((res) => {
                //console.log(res);
                if (res.code == 0) {
                    this.family = res.data.foot_links;
                    this.other = res.data.foot_other;
                    this.copyright = res.data.foot_copyright;
                }
            });
        },
    }
}
</script>
<style lang="scss" scoped>
.footer-out{
    height:450px;
    background: #050D17;
    position:relative;
    .footer-inner{
        width:1200px;
        margin:0 auto;
        padding-top:38px;
        font-size: 14px;
        color:rgba(255,255,255,.5);
        .family{
            height:60px;
            padding:0 10px;
            border-top:1px solid rgba(155, 159, 163,.28);
            border-bottom:1px solid rgba(155, 159, 163,.28);
            p{
                color:#fff;
                margin-right:60px;
            }
            ul{
                li{
                    padding:0 12px;
                    border-right: 1px solid rgba(255,255,255,.5);
                    a{
                        color:rgba(255,255,255,.5);
                    }
                }
            }
        }
        .mid{
            padding-top:55px;
            .left{
                margin-right:173px;
                img{
                    width:337px;
                }
                .desc{
                    margin-top:52px;
                    position:relative;
                    span{
                        font-size: 28px;
                        color:#fff;
                        position:absolute;
                        left:0;
                        top:0;
                        z-index:3;
                        letter-spacing: 5px;
                    }
                    i{
                        width: 210px;
                        height: 14px;
                        background: linear-gradient(270deg, #1E88F0 0%, #4A47FF 100%);
                        position:absolute;
                        left:0;
                        top:26px;
                        z-index:2;
                    }
                }
            }
            .center{
                width:340px;
                margin-right:160px;
                .block{
                    margin-bottom:26px;
                    .title{
                        color:#fff;
                        margin-bottom: 12px;
                    }
                }
            }
            .right{
                padding-top:10px;
                color:#fff;
                text-align: center;
                img{
                    width:98px;
                    margin:0 auto;
                }
                .company{
                    margin-top:18px;
                }
                .desc{
                    font-size:9px;
                    transform: scale(.75);
                }
            }
        }
        .btm{
            width:100%;
            font-size: 12px;
            text-align: center;
            color: rgba(255,255,255,.5);
            line-height: 17px;
            position:absolute;
            left:0;
            bottom:16px;
        }
    }
}
@media (min-width:1280px){
    .footer-out{
    height:450px;
    background: #050D17;
    position:relative;
    .footer-inner{
        width:1200px;
        margin:0 auto;
        padding-top:38px;
        font-size: 14px;
        color:rgba(255,255,255,.5);
        .family{
            height:60px;
            padding:0 10px;
            border-top:1px solid rgba(155, 159, 163,.28);
            border-bottom:1px solid rgba(155, 159, 163,.28);
            p{
                color:#fff;
                margin-right:60px;
            }
            ul{
                li{
                    padding:0 12px;
                    border-right: 1px solid rgba(255,255,255,.5);
                    a{
                        color:rgba(255,255,255,.5);
                    }
                }
            }
        }
        .mid{
            padding-top:55px;
            .left{
                margin-right:173px;
                img{
                    width:337px;
                }
                .desc{
                    margin-top:52px;
                    position:relative;
                    span{
                        font-size: 28px;
                        color:#fff;
                        position:absolute;
                        left:0;
                        top:0;
                        z-index:3;
                        letter-spacing: 5px;
                    }
                    i{
                        width: 210px;
                        height: 14px;
                        background: linear-gradient(270deg, #1E88F0 0%, #4A47FF 100%);
                        position:absolute;
                        left:0;
                        top:26px;
                        z-index:2;
                    }
                }
            }
            .center{
                width:340px;
                margin-right:160px;
                .block{
                    margin-bottom:26px;
                    .title{
                        color:#fff;
                        margin-bottom: 12px;
                    }
                }
            }
            .right{
                padding-top:10px;
                color:#fff;
                text-align: center;
                img{
                    width:98px;
                    margin:0 auto;
                }
                .company{
                    margin-top:18px;
                }
                .desc{
                    font-size:9px;
                    transform: scale(.75);
                }
            }
        }
        .btm{
            width:100%;
            font-size: 12px;
            text-align: center;
            color: rgba(255,255,255,.5);
            line-height: 17px;
            position:absolute;
            left:0;
            bottom:16px;
        }
    }
}
}
</style>