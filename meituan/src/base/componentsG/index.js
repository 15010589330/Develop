import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';


let mycomponents = {
    install:()=>{
        Vue.component(Swipe.name, Swipe);
        Vue.component(SwipeItem.name, SwipeItem);
    }
}

export default mycomponents