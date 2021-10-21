<template>
    <div>
        <div class="row mb-5">
            <div class="col-2 text-center">
                <button class="btn btn-info btn-block mt-5 ml-3" @click="DashboardPage">Dashborad</button>
            </div>
            <div class="col-2 text-center">
                <button class="btn btn-info btn-block mt-5 ml-3" @click="LogInPage">Log in</button>
            </div>
        </div>
        
        

        <ul>
            <li><label for=""><b>Nombre: </b></label>{{userInfo.nombre}}</li>
            <li><label for=""><b>User name: </b></label>{{userInfo.userName}}</li>
            <li><label for=""><b>Password: </b></label>{{userInfo.password}}</li>
        </ul>
    </div>
</template>

<script>
import {mapState} from 'vuex'
// ES6 Modules or TypeScript
// main.js
import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

export default {
    name: 'LogIn',
    data() {
        return {
            userName:'',
            password:'',
            // match:false
        }
    },
    computed:{
        ...mapState(['userInfo'])
    },
    mounted() {
        
    },
    methods: {
        DashboardPage(){
            this.$router.replace({name: 'Dashboard'})
        },
        LogInPage(){
            this.$router.replace({name: 'LogIn'})
        },
    },
}
</script>