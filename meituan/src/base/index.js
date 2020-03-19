import mycomponents from './componentsG'

let plugins = {
    init: (Vue) => {
        Vue.use(mycomponents)
    }
}


export default plugins;