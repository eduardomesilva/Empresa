<template>
<div>
    <h5>Serviços</h5>
    <hr>
    <div class="row">
        <div class="col mb-2" v-for="dado in dados" :key="dado.id">
            <div class="card" style="width: 11rem">
                <img class="card-img-top" :src="`/img/${dado.icone}`">
                <div class="card-body text-center">
                    <router-link :to="{name: 'servico', params: {id: dado.id}}">
                        <p class="card-text">{{dado.servico}}</p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <router-view class="mt-3"/>
</div>
</template>

<script>
import Api from '@/mixins/Api';

export default {
    name: 'Servicos',
    mixins: [Api],
   
    created(){
        this.getDadosApi('http://localhost:3000/servicos')
    }
}
</script>