import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
const store =new Vuex.Store({
    state:{
       cartList:[]
    },
    getters:{
        cartList(state){
            return state.cartList
        }
    },
    mutations:{
     addCart(state,payload){
       let oldProduct=null;
       for(let item of state.cartList){
           if(item.id===payload.id){
            oldProduct=item
           }
       }
       if(oldProduct){
           oldProduct.count+=1
       }else{
        payload.count=1;
        payload.checked=true
        state.cartList.push(payload)
       }
     }
    },
    actions:{
        
    },

})
export default store