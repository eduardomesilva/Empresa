<template>
    <h5>Leads</h5>
    {{dados}}
</template>

<script>
import axios from 'axios';

export default {
    name: 'Leads',
    data(){
        return{
            dados: null,
        }
    },
    methods:{
        getDadosApi: async function(){
            let response = await axios.get('http://localhost:3000/leads')
            let payload = response.data
            this.dados = payload
            console.log(payload)
            
        }
    },
    created(){
        this.getDadosApi()
    }
}
</script>