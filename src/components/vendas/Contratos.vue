<template>
    <div>
        <h5>Contratos</h5>
        
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">LEAD</th>
                    <th scope="col">SERVIÇO</th>
                    <th scope="col">DATA INICIO</th>
                    <th scope="col">DATA FIM</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dado in dados" :key="dado.id">
                    <td>{{dado.id}}</td>
                    <td>{{dado.leadId}}</td>
                    <td>{{dado.servicoId}}</td>
                    <td>{{dado.data_inicio}}</td>
                    <td>{{dado.data_fim}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    </template>

    <script>
        import Api from '@/mixins/Api';
        export default {
            name: 'Contrato',
            mixins: [Api],
            created(){
                this.getDadosApi('http://localhost:3000/contratos')
            }
        }
        </script>