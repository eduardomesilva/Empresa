import {createRouter, createWebHashHistory} from 'vue-router'
import Contratos from './components/vendas/Contratos.vue'
import Dashboard from './components/dashboard/Dashboard.vue'
import Home from './views/Home.vue'
import Lead from './components/vendas/Lead.vue'
import Leads from './components/vendas/Leads.vue'
import Login from './views/Login.vue'
import Servico from './components/servicos/Servico.vue'
import Servicos from './components/servicos/Servicos.vue'
import Site from './views/Site.vue'
import Vendas from './components/vendas/Vendas.vue'
import VendasPadrao from './components/vendas/VendasPadrao.vue'


const routes = [
    {
        path: '/home',
        component: Home,
        children:[
            {path: 'vendas', component: Vendas, children:
                [
                    {path: 'leads', name:'leads', component: Leads},
                    {path: 'leads/:id', name: 'lead', component: Lead},
                    {path: 'contratos', name: 'contratos', component: Contratos},
                    {path: '', component: VendasPadrao },
                ]
            },
            {path: 'servicos', name: 'servicos' , component: Servicos, children:
                [
                    {path: ':id', name: 'servico', component: Servico}
                ]
            },
            {path: 'dashboard', component: Dashboard},
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/',
        component: Site
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router