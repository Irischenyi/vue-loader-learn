<template>
    <div id="an2">
        <input type="radio" id="A" name="A" v-model="value" value="A">
        <label for="A">A</label>
        <input type="radio" id="B" name="B" v-model="value" value="B">
        <label for="B">B</label>
            <div>{{ value }}</div>
        <transition name="component-fade" mode="out-in">
            <component v-bind:is="view"></component>
        </transition>
    </div>
</template>
<script>
    let an2 = {
        name: 'an2',
        data: function(){
            return {
                value: 'A'
            }
        },
        computed:{
            view(){
                return this.value == 'A'? 'v-a':'v-b';
            }
        },
        components: {
            'v-a': {
                template: '<div>A is Choose</div>'
            },
            'v-b': {
                template: '<div>B is Choose</div>'
            }
        }
    }
    export default an2;
</script>
<style>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-active {
  opacity: 0;
}
#an2{
    margin-top: 50px;
}

</style>
