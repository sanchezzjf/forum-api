import { Router } from 'express'

const router = new Router()

router.get('/', (req, res) => {
    res.send("oiii")
})

router.get('/news', (req,res) => {
    /*
        CONSULTA BANCO
    */

    //mock res
    res.json({
        news: [
            {
                1: {
                    thumb: "https://ascenty.com/wp-content/uploads/2023/04/1169640_Ascenty_BLOG1-1920x1000-c-default.png",
                    title: "Foco em IA e Segurança",
                    sinopse: "A Cisco está avançando com o AgenticOps como modelo operacional para TI moderna. A empresa reforçou a segurança das redes contra riscos da nova era digital",
                },
                2: {
                    thumb: "https://www.deltapowersolutions.com/pt-br/mcis/artigo-tecnico-powering-competitiveness-em-datacenters.php",
                    title: "VMware ficou mais caro, mais restrito e mais imprevisível. As equipes de TI estão preparadas para a próxima mudança?",
                    sinopse: "Webinar analisa o histórico de mudanças de licenciamento da Broadcom, o impacto real em ambientes virtualizados e o que os dados de mercado indicam sobre os próximos movimentos.",
                },
                3: {
                    thumb: "https://www.cisoadvisor.com.br/wp-content/uploads/2026/03/Network-Secure-ARTIGOS-ISO.avif",
                    title: "Network Secure conquista certificação internacional ISO 27001:2022 para seu SOC",
                    sinopse: "A Network Secure, empresa referência em cibersegurança, conquistou recentemente a certificação internacional ISO/IEC 27001:2022, reforçando seu compromisso com práticas globais de gestão de segurança da informação.",
                },
            }
        ]
    })
})

router.get('/news/:news_id', (req, res) => {

    res.send(`em progresso....`)
})

export {
    router
}