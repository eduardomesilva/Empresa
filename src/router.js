import {createRouter, createWebHashHistory} from 'vue-router'
import Contratos from './components/vendas/Contratos.vue'
import Dashboard from './components/dashboard/Dashboard.vue'
import Home from './views/Home.vue'
import Lead from './components/vendas/Lead.vue'
import Leads from './components/vendas/Leads.vue'
import Login from './views/Login.vue'
import Servicos from './components/servicos/Servicos.vue'
import Site from './views/Site.vue'
import Vendas from './components/vendas/Vendas.vue'

const routes = [
    {
        path: '/home',
        component: Home,
        children:[
            {path: 'vendas', component: Vendas, children:
                [
                    {path: 'leads', component: Leads},
                    {path: 'leads/:id', component: Lead},
                    {path: 'contratos', component: Contratos},
                ]
            },
            {path: 'servicos', component: Servicos},
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