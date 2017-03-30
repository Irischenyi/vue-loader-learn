<template>
    <div id="third">
        <input  v-bind:value="jack" type="checkbox" id="jack" v-model="checkName">
        <label for="jack">jack</label>
        <input  value="nnn" type="checkbox" id="nnn" v-model="checkName">
        <label for="nnn">nnn</label>
        <div>{{checkName}}</div>
        <input v-model.number="age" type="number" v-on:input.number="pullAge">
        <br/>
        <br/>
        <input v-model.trim="msg" v-on:input="pullMsg(msg)">
        <p class="mm">{{ msg }}</p>
        <div>{{messages}}</div>
    </div>
</template>
<script>
let third = {
    name: 'third',
    data(){
        return {
         counter: 100,
         checked: false,
         checkName: [],
         jack: 'jack',
         age: 0,
         msg: 'sss'
        }
    },
    props:['messages'],
    methods:{
        pullAge($event){
            this.age  = $event.target.value;
            console.log(typeof($event.target.value));
        },
        pullMsg(msg){
            console.log(msg);
        }
    }
}
export default third;
</script>
<style>
#third{
    margin-top: 40px;
}
.mm{
    text-align: left;
}
</style>
