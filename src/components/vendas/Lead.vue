<template>
    <h4>Lead</h4>
    <div class="mb-3 row">
        <label class="col-sm-2 col-form-label"> ID</label>
        <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" :value="dados.id">
        </div>
    </div>

    <div class="mb-3 row">
        <label class="col-sm-2 col-form-label"> Nome</label>
        <div class="col-sm-10">
            <input type="text"  class="form-control" :value="dados.nome">
        </div>
    </div>

     <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Telefone</label>
        <div class="col-sm-10">
            <input type="text"  class="form-control" :value="dados.telefone">
        </div>
    </div>

    <div class="col-auto d-flex justify-content-between">
        <button type="button" class="btn btn-warning" @click="$router.push({name: 'leads'})">Voltar</button>
        <button type="button" class="btn btn-primary">Atualizar</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Lead',
    data(){
        return{
            dados: null,
        }
    },
    methods:{
        getDadosApi: async function(){
            let response = await axios.get(`http://localhost:3000/leads/${this.$route.params.id}`)
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