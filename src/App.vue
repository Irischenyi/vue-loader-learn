<template>
  <div id="app">
    {{msg}}
    <div v-html="all"></div>
    <div id="change" v-bind:class="{ active: isActive }">sss</div>
    <div v-bind:id="dynamicId">red</div>
    <div v-bind:disabled="someDynamicCondition">Button</div>
    <div>{{ message.split('').reverse().join('') }}</div>
    <div>{{ number + 1 }}</div>
    <div v-bind:id="'list-'+ id">sss</div>
    <div>{{ reversedMessage }}</div>
    <div>{{ flow() }}</div>
    <div v-on:click="change">click</div>
    <div @click="change">hahahah</div>
    <div id="domo">{{ fullName }}</div>
    <div>{{ seeChange }}</div>
    <div class="askbox">
        <p>
            Ask a yes/no question:
            <input v-model="question"/>
        </p>
        <p>answer: {{ answer }}</p>
    </div>
    <div class="sss" v-bind:class="{ active: isActive , 'has': true}">column,row</div>
    <div v-bind:class="[activeClass, errorClass]">has a change</div>
    <div v-bind:class="[{active: isActive},errorClass]">ssssss</div>
    <div v-bind:style="{ color: activeColor }">hahahaha</div>
    <h1 v-if="ok">Yes</h1>
    <h1 v-else>No</h1>
    <div v-if="canSee">Now you see me</div>
    <div v-else>Now you don't</div>
    <button v-on:click="changeSee">click</button>
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>
        Not A/B/C
    </div>
    <button v-on:click="clickChange">clickChange</button>
    <h1 v-show="ok">Hello!</h1>
    <ul>
        <li v-for="(item, index) of items">
                {{item.message}}--{{index}}
        </li>
    </ul>
    <ul>
        <li v-for="(value, key, index) in object">
            {{key}}-{{ value }}-{{index}}
        </li>
    </ul>
    <my-components></my-components>
  </div>
</template>
<!-- <template>
    <imput/>
</template> -->
<script>
var My = {
    template: '<div>newww</div>'
}
var apps =  {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      all: '<h1>call all</h1>',
      isActive: true,
      dynamicId: 'dynamicId',
      someDynamicCondition: true,
      message: '12345678',
      number: 2,
      id: 'assssss',
      ok: true,
      firstName: 'Foo',
      lastName: 'Bar',
      seeChange: '',
      answer: 'nothing',
      question: '',
      isActive: true,
      activeClass: 'active',
      errorClass: 'has',
      activeColor: 'red',
      ok: true,
      canSee: true,
      type: 'A',
      items: [
          {message: 'Foo'},
          {message: 'Bars'}
      ],
      object: {
          FirstName: 'Jphn',
          LastName: 'Doe',
          Age: 30,
      }
        }
    },
    computed: {
        reversedMessage: function(){
            return this.id.split('');
        },
        fullName: function(){
            return this.firstName + ' ' + this.lastName;
        }
    },
    methods: {
        flow: function(){
            return this.id;
        },
        change: function(){
            this.firstName = 'bbb' + this.firstName ;
        },
        view:  _.debounce(
            function(){
                if(this.question.indexOf('?') === -1){
                    return;
                }
                console.log('answer is new');
            },500
        ),
        changeSee: function(){
            this.canSee = !this.canSee;
        },
        clickChange: function(){
            this.type = 'B';
        },
    },
    watch: {
        firstName: function(val){
            this.lastName = this.firstName + this.lastName;
        },
        question: function (newQuestion){
            this.answer = newQuestion;
            this.view();
        }
    },
    components: {
        'my-components': My
    }
}
export default apps;
</script>

<style>
#app {
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
.askbox{
    width: 500px;
    height: 200px;
    background-color: grey;
    margin: 0 auto;
    margin-top: 50px;
    text-align: center;
}
.sss{
    background-color: blue;
}
.active{
    color: red;
    font-size: 100px;
}
.has{
    font-weight: bold;
}
</style>
