<template>
<div id="an4" class="demo">
  <div>animation-demo-4</div>
  <br/>
  <button v-on:click="shuffle">Shuffle</button>
    <transition-group name="demo" tag="ul">
        <li v-for="item in items" v-bind:key="item">
          {{ item }}
        </li>
    </transition-group>
</div>
</template>
<script>
    let an4 = {
        name: 'an4',
        data: function(){
            return {
                items: [1,2,3,4,5,6,7,8,9]
            }
        },
        methods: {
            shuffle: function () {
                this.items = _.shuffle(this.items)
            }
        }
    }
    export default an4;
</script>

<style>
#an4{
    width: 900px;
    height: 350px;
    background-color: #FEA096;
    margin: 0 auto;
    margin-top: 30px;
    padding-top: 20px;
}
.demo-move {
  transition: transform 1s;
}
li{
    display: block;
    margin-top: 4px;
}
</style>
