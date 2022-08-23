<template>
<div>
    <h5>Leads</h5>
    
    <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">NOME</th>
                <th scope="col">TELEFONE</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="d in dados" :key="d.id">
                <td>{{d.id}}</td>
                <td>{{d.nome}}</td>
                <td>{{d.telefone}}</td>
                <td>
                    <router-link :to="`/home/vendas/leads/${d.id}`" class="btn btn-sm btn-primary"></router-link>
                </td>
            </tr>
        </tbody>
    </table>
</div>
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