
<template>
    <div id="an1">
        <div class="column1">
            <button v-on:click="show = !show">toggle</button>
            <transition name="slide-fade">
                <p v-if="show" key="1">show</p>
            </transition>
        </div>
        <div class="column2">
            <button v-on:click="changeSee ">
                click
            </button>
            <transition name = "bounce">
                <p v-if="see">can be see</p>
            </transition>
            <transition name = "bounce">
                <p v-if="see2">can be sees</p>
            </transition>
        </div>
        <div class="column1">
            <button v-on:click="change = ! change">click</button>
            <transition
                name="custom-classes-transition"
                enter-active-class="animated hinge"
                leave-active-class="animated bounceOutRight"
            >
                <div v-if="change">changes</div>
            </transition>
        </div>
    </div>
</template>
<script>
    let an1 = {
        name: 'an1',
        data: function(){
            return {
                show: true,
                see: false,
                see2: false,
                change: true
            }
        },
        methods: {
            changeSee(){
                if(this.see){
                    this.see2 = true;
                    console.log(this.see2);
                }
                this.see = true;

            }
        }
    }
    export default an1;
</script>

<style>
.column1, .column2{
    width: 800px;
    height: auto;
    background-color: grey;
    margin: 0 auto;
    margin-top: 2px;
}

.slide-fade-enter-active{
    transition: opacity .5s;
}
.slide-fade-leave-active{
    transition: all .8s cubic-bezier(1.0, 0.5, 0.2, 1.0);
}
.slide-fade-enter{
    opacity: 0;
}
.slide-fade-leave-active {
    transform: translateX(10px);
    opacity: 0;
}


.bounce-enter-active{
    animation: bounce-in .5s;
}
.bounce-leave-active{
    animation: bounce-out .5s;
}
.bounce2-enter-active{
    animation: bounce-in .5s;
}
.bounce2-leave-active{
    animation: bounce-out .5s;
}
@keyframes bounce-in {
    0%{
        transform: scale(0);
    }
    50%{
        transform: scale(1.5);
        color: red;
    }
    100%{
        transform: scale(1);
    }
}
@keyframes bounce-out {
    0%{
        transform: scale(1);
    }
    50%{
        transform: scale(1.5);
    }
    100%{
        transform: scale(0);
    }
}
</style>
