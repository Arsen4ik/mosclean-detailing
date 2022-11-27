const app = Vue.createApp({
    data(){
        return {
            date: new Date().getFullYear(),
            // pict1: true,
            // pict2: true,
            // pict3: true,
            // pict4: true,
        }
    },
    // methods: {
    //     changePict1(){
    //         this.pict1 = !this.pict1
    //     }, 
    //     changePict2(){
    //         this.pict2 = !this.pict2
    //     },
    //     changePict3(){
    //         this.pict3 = !this.pict3
    //     },
    //     changePict4(){
    //         this.pict4 = !this.pict4
    //     }
    // }
})
app.mount('body')