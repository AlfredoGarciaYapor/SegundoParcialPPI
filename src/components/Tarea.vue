<template>
    <div>
        <div class="card mb-3 cursor-grab">
            <div class="card-header bg-light text-end">
                <button type="button" class="btn-close" aria-label="Close" @click="deleteTask({lista: lista, index: index}), edit=false"></button>{{index}}
            </div>
            <img v-if="image != null && edit == false" class="card-img-top" :src="image" alt="Bootstrap Kanban Board" />
            <div class="card-body" v-if="edit == false">

                <span v-if="tag == 'hold'" class="badge bg-primary text-white mb-2">On hold</span>
                <span v-if="tag == 'bug'" class="badge bg-danger text-white mb-2">Bug</span>
                <span v-if="tag == 'enhancement'" class="badge bg-warning text-white mb-2">Enhancement</span>

                <p class="mb-0">{{text}}</p>

                <div class="text-right">
                    <small class="text-muted mb-1 d-inline-block" v-if="progress >= 0">{{progress}}%</small>
                </div>

                <div class="progress" style="height: 5px;" v-if="edit == false">
                    <div class="progress-bar" role="progressbar" style="width: 25%;" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
            <div class="card-body" v-if="edit == true">

                <label for="">Etiquetas</label>
                <select class="form-select mb-2" v-model="task.tag" aria-label="Default select example">
                    <option selected value="" disabled>----Seleccionar---</option>
                    <option value="">Sin Etiqueta</option>
                    <option value="hold">On hold</option>
                    <option value="bug">Bug</option>
                    <option value="enhancement">Enhancement</option>
                </select>

                <input class="mb-1" type="text" v-model="task.text" placeholder="Ingresar Descripcción">
                <!-- <p class="mb-0">{{text}}</p> -->

                <div class="text-right">
                    <input type="number" v-model="task.progress" placeholder="Ingresa porcentaje de progreso."/>
                </div>

                <div class="progress mb-1" style="height: 5px;" v-if="edit == false">
                    <div class="progress-bar" role="progressbar" style="width: 25%;" :aria-valuenow="parseInt(progress)" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
            <div class="card-footer">
                <!-- @click="edit = true" -->
                <button class="btn btn-primary btn-block" v-if="edit == false" @click="edit = true">Editar</button>
                <button class="btn btn-primary btn-block" v-if="edit == true" @click="edit = false">Cancelar Edición</button>
                <button class="btn btn-primary btn-block" v-if="edit == true" @click="updateTask(task), edit = false">Save</button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
// ES6 Modules or TypeScript
// main.js
import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);


export default {
    name:"Tarea",
    props:{
        text: String,
        progress: Number,
        image: String,
        tag: String,
        lista: Number,
        index: Number
    },
    data() {
        return {
            edit: false,
            task:{
                listaIndex: 0,
                tareaIndex: 0,
                text: "",
                progress: 0,
                image: "",
                tag: ""
            }
        }
    },
    mounted() {
        this.task.text = this.$props.text
        this.task.progress = this.$props.progress
        this.task.image = this.$props.image
        this.task.tag = this.$props.tag
        this.task.listaIndex = this.$props.lista
        this.task.tareaIndex = this.$props.index


        console.log('%c⧭', 'color: #e50000', this.task)
    },
    methods: {
        ...mapMutations(['deleteTask','updateTask']),
        editMode(){
            this.edit = false
        }
    },
}
</script>