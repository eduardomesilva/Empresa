import {createRouter, createWebHashHistory} from 'vue-router'
import Contratos from './components/vendas/Contratos.vue'
import Dashboard from './components/dashboard/Dashboard.vue'
import Home from './views/Home.vue'
import Indicadores from './components/servicos/Indicadores.vue'
import Lead from './components/vendas/Lead.vue'
import Leads from './components/vendas/Leads.vue'
import Login from './views/Login.vue'
import Opcoes from './components/servicos/Opcoes.vue'
import Rodape from './components/dashboard/Rodape.vue'
import Servico from './components/servicos/Servico.vue'
import Servicos from './components/servicos/Servicos.vue'
import Site from './views/Site.vue'
import Vendas from './components/vendas/Vendas.vue'
import VendasPadrao from './components/vendas/VendasPadrao.vue'


const routes = [
    {
        path: '/home',
        alias: '/app',
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
                    {path: ':id', name: 'servico', alias:'/s/:id', components: 
                        {
                            default: Servico,
                            opcoes: Opcoes ,
                            indicadores: Indicadores ,
                        }
                    }
                ]
            },
            {path: 'dashboard', components: 
                {   
                    default: Dashboard,
                    rodape: Rodape
                }
            },
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/',
        component: Site
    },

    {path: '/redirecionamento-1', redirect: '/home/servicos'},

    {path: '/:catchAll(.*)*', redirect: '/'}
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router