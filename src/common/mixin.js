import backtop from "components/common/backTop/backtop" 
export const backTopMixin={
data() {
    return {
        isshowBackTop: false,
    }
},
components:{
    backtop
},
methods: {
    bactopClick(){
        this.$refs.scroll.scrollTo(0,0,500)
    }, 
},
}