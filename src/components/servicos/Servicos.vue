<template>
<div>
    <h5>Serviços</h5>
    <hr>
    <div class="row">
        <div class="col" v-for="dado in dados" :key="dado.id">
            <div class="card" style="width: 11rem">
                <img class="card-img-top" :src="`/img/${dado.icone}`">
                <div class="card-body text-center">
                    <p class="card-text">{{dado.servico}}</p>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Servicos',
    data(){
        return{
            dados: null,
        }
    },
    methods:{
        getDadosApi: async function(){
            let response = await axios.get('http://localhost:3000/servicos')
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