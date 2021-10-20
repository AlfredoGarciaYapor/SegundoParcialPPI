<template>

    <div class="login">
        <div class="container">
            <div class="card mt-5">
                <div class="card-body mt-auto">
                    <div class="row text-center">
                        <div class="col">
                            <h1>Inicio de Sesión</h1>

                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col">
                            <form action="" @submit.prevent="logIn()">
                                <div class="row">
                                    <div class="col text-center mt-3">
                                        <input type="text" placeholder="Nombre de usuario" v-model="userName">

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col text-center mt-3">
                                        <input type="password" placeholder="Contraseña" v-model="password">

                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col text-center mt-3">
                                        <input type="submit" value="Iniciar Sesión">

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="css" href="./assets/styles/styles.css"></style>

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
    methods: {
        logIn(){
            if(this.userName == "accept@test.com" && this.password == "examen2doParcial"){
                this.$router.replace({name: 'Dashboard'})
                console.log(this.userName + " " + this.password)
            }else{
                this.$swal({
                    icon: 'error',
                    title: 'Contraseña Incorrecta',
                    text: 'Ingrese su contraseña de manera correcta.',
                });
            }
        },
    },

    
}
</script>