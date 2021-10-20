<template>
    <div>
        <div class="card mb-3">
            <div class="card-header bg-light">
                <h3 class="card-title h5 mb-1">
                    {{title}}
                </h3>
                <button type="button" class="btn-close" aria-label="Close" @click="deleteList(index)"></button>{{index}}
                <small class="mb-0 text-muted">
                    {{description}}
                </small>
            </div>
            <div class="card-body">
                <div class="tasks" id="backlog" v-for="(tarea, key) in tareas" :key="key">
                    <Tarea :text="tarea.text" :progress="parseInt(tarea.progress)" :image="tarea.image" :tag="tarea.tag" :lista="index" :index="key"/>
                </div>
                <div class="btn btn-primary btn-block" @click="addTask(index)">Add task</div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
// ES6 Modules or TypeScript
// main.js
import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import Tarea from './Tarea.vue'

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

export default {
    name:"ListaDeTareas",
    components:{
        Tarea
    },
    props:{
        title: String,
        description: String,
        tareas: Array,
        index: Number
    },
    computed:{
        ...mapState(['listas'])
    },
    methods: {
    // addTask(){
    //   var json = {
    //     text:"",
    //     progress: 0,
    //     image:null,
    //     tag:null
    //   }
    //   this.$props.tareas.push(json)

    // },
    ...mapMutations(['addTask', 'deleteList'])
  },
}
</script>