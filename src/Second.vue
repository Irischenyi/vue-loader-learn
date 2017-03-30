<template>
  <div id="seconds">
    <input v-bind:value="something" v-on:input="counter"/>
    <div>{{ something }}</div>
  </div>
</template>

<script>
var second =  {
  name: 'seconds',
  data () {
    return {
        something: '',
        total: 1,
        }
    },
    computed: {

    },
    methods: {
        counter(){
            this.total = this.total + 1;
        }
    },
}
export default second;
</script>

<style>
#seconds {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#dynamicId{
    color:red;
}
.active{
    color:red;
}
h1, h2 {
  font-weight: normal;
}
#list-a {
    font-size: 100px;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
