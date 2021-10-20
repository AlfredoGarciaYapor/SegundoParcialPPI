import Vue from 'vue'
import Vuex from 'vuex'

// import { login } from './login.module';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listas:[
      {
        title: "Backlog",
        description: "Nam pretium turpis et arcu. Duis arcu.",
        tareas:[
          {
            text:"You can move these elements between the containers",
            progress: 25,
            image:null,
            tag:null
          },
          {
            text:"Moving them anywhere else isn't quite possible",
            progress: 33,
            image:"https://source.unsplash.com/sECcwm6BN8w/400x200",
            tag:"hold"
          }
        ]
      },
      {
        title: "In Progress",
        description: "Aenean posuere, tortor sed cursus feugiat.",
        tareas:[
          {
            text:"Moving them anywhere else isn't quite possible",
            progress: 45,
            image:null,
            tag:"bug"
          },
          {
            text:"Anything can be moved around. That includes images, links or any other nested elements.",
            progress: 75,
            image:null,
            tag:null
          }
        ]
      },
      {
        title: "Completed",
        description: "Curabitur ligula sapien, tincidunt non.",
        tareas:[
          {
            text:"Moving them anywhere else isn't quite possible",
            progress: 95,
            image:"https://source.unsplash.com/zNRITe8NPqY/400x200",
            tag:"enhancement"
          },
          {
            text:"You can move these elements between the containers",
            progress: 80,
            image:null,
            tag:null
          }
        ]
      }
    ]
  },
  mutations: {
    addList(state){
      var json = {
        title: "",
        description: "",
        tareas:[]
      }
      state.listas.push(json)
    },
    deleteList(state, index){
      
      console.log('%c⧭', 'color: #00a3cc', index);
      state.listas.splice(index, 1)
    },
    addTask(state, index){
      var json = {
        text:"",
        progress: 0,
        image:null,
        tag:null
      }
      state.listas[index].tareas.push(json)
    },
    deleteTask(state, positions){

      console.log('%c⧭', 'color: #00e600', positions.lista, ", ", positions.index);
      state.listas[positions.lista].tareas.splice(positions.index, 1)
    },
    updateTask(state, task){
      // var json = {
      //   lista:task.lista,
      //   index:task.index,
      //   text:task.text,
      //   progress: task.progress,
      //   image:task.image,
      //   tag:task.tag
      // }

      state.listas[task.listaIndex].tareas[task.tareaIndex].text = task.text
      state.listas[task.listaIndex].tareas[task.tareaIndex].progress = task.progress
      state.listas[task.listaIndex].tareas[task.tareaIndex].image = task.image
      state.listas[task.listaIndex].tareas[task.tareaIndex].tag = task.tag


    }
  },
  actions: {
  },
  modules: {
    // login
  }
})
