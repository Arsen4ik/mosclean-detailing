const app = Vue.createApp({
    data(){
        return {
            date: new Date().getFullYear(),
            // connect: true
        }
    },
    methods: {
        // connection(){
        //     this.connect = !this.connect
        //     console.log('gg')
        // }
    }
})
app.mount('body')