import {server } from '@/mocks/server'
import { rest } from 'msw'
import { GET } from '../route'

describe('fetch issues', () => {

  it('should return issues', async () => {
      const issues = await GET()
      expect(issues)
  })

  // it('should return an empty array with an error', async () => {
  //     server.use(
  //         rest.get('/api/issues', (req, res, ctx) => {
  //             return res(ctx.status(400))
  //         })
  //     )
  //     const issues = await GET()
  //     expect(issues).toBe(0)
  // })
})