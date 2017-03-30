<template>
    <div id="loader">
        <transition>
            <router-view></router-view>
        </transition>
        <router-view name="a"></router-view>
        <router-view name="b"></router-view>
        <router-link :to="{name: 'change', query: {user: num}}">click</router-link>
        <div v-on:click="changeTo">go</div>
    </div>
</template>
<script>
    const loader = {
        name: 'loader',
        data: function (){
            return {
                num: 1,
            }
        },
        computed:{
            counter(){
                console.log(this.num);
                this.num = this.num + 1;
            },

                //

        },
        methods:{
            changeTo(){

            }
        }
    }
    export default loader;
</script>
<style>

</style>
