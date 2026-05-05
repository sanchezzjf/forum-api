import { Router } from 'express'

const router = new Router()

router.get('/', (req, res) => {
    res.send("oiii")
})

router.get('/news', (req,res) => {
    res.json({
        news: [
            {
                1: {
                    thumb: "link",
                    title: "Oiiiii",
                    sinopse: "oiiiiiiiiiiiiii",
                },
                2: {
                    thumb: "link",
                    title: "Oiiiii",
                    sinopse: "oiiiiiiiiiiiiii",
                },
                3: {
                    thumb: "link",
                    title: "Oiiiii",
                    sinopse: "oiiiiiiiiiiiiii",
                },
            }
        ]
    })
})

router.get('/news/:news_id', (req, res) => {
    res.send("em progresso....")
})

export {
    router
}