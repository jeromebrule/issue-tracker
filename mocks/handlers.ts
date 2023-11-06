import { rest } from 'msw';

export const handlers = [
    rest.get('/api/issues/:id', ({ params }) => {
        const { id } = params
        console.log('Fetching issue with ID "%s"', id)
    }),
    // rest.post('/todos', async (req, res, ctx) => {
    //     const { title } = await req.json()

    //     return res(
    //         ctx.status(201),
    //         ctx.json(
    //             {
    //                 "userId": 1,
    //                 "title": title,
    //                 "completed": false,
    //                 "id": 5
    //             }),
    //     )
    // }),
    // rest.put('/todos/:id', async (req, res, ctx) => {
    //     const { id, userId, title, completed } = await req.json()

    //     return res(
    //         ctx.status(200),
    //         ctx.json(
    //             {
    //                 userId,
    //                 title,
    //                 completed,
    //                 id
    //             }),
    //     )
    // }),
    // rest.delete('/todos/:id', (req, res, ctx) => {
    //     const { id } = req.params

    //     return res(
    //         ctx.status(200),
    //         ctx.json(
    //             {
    //                 id: Number(id)
    //             }),
    //     )
    // }),
]