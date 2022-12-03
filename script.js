const app = Vue.createApp({
    data(){
        return {
            date: new Date().getFullYear(),
            // connect: true
        }
    },
    computed: {
        // connects(){
        //     return this.connect == false
        // }
    },
    methods: {
        // changePict1(){
        //     this.pict1 = !this.pict1
        // }, 
        // changePict2(){
        //     this.pict2 = !this.pict2
        // },
        // changePict3(){
        //     this.pict3 = !this.pict3
        // },
        // changePict4(){
        //     this.pict4 = !this.pict4
        // }
        // connection(){
        //     this.connect = !this.connect
        // }
    }
})
app.mount('body')