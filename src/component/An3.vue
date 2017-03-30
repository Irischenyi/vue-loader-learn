<template>
    <div id="an3">
        animation-demo-3
        <div>
            <transition-group name="list">
                <p v-for="(item,index) in items"
                    v-bind:key="item"
                    class="list-item"
                >
                {{ item }}
            </p>
            </transition-group>
        </div>
        <button v-on:click="add">Add</button>
        <button v-on:click="remove">Aemove</button>
    </div>
</template>
<script>
    let an3 = {
        name: 'an3',
        data: function(){
            return {
                items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        },
        methods: {
            random(){
                return Math.floor(Math.random() * this.items.length);

            },
            add(){
                this.items.splice(this.random(), 0, this.items.length+1);
                console.log(this.items);

            },
            remove(){
                this.items.splice(this.random(), 1);
                console.log(this.random());
            }
        }
    }
    export default an3;
</script>

<style>
#an3{
    width: 900px;
    height: 120px;
    background-color: #f25292;
    margin: 0 auto;
    margin-top: 30px;
    padding-top: 20px;
}
p{
    display: inline-block;
    margin-right: 4px;
}
.list-item{
    transition: all 1s;
}
.list-enter-active{
  transition: all 1s;
}
.list-leave-active {
    position: absolute;
}
.list-enter, .list-leave-active {
  opacity: 0;
  transform: scale(2);
}
</style>
