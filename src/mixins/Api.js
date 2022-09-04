import axios from "axios"

export default {
    data(){
        return{
            dados: {},
        }
    },
    methods:{
        getDadosApi: async function(url){
            let response = await axios.get(url)
            let payload = response.data
            this.dados = payload
            console.log(payload)
            
        }
    }
}