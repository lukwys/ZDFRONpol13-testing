import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:3000/blogs', (req, res, ctx) => (
    res(ctx.json([
      {
        id: 1,
        title: "test title",
        shortText: "test short text",
        longText: "test long text",
        img: "url"
      },
      {
        id: 2,
        title: "test title",
        shortText: "test short text",
        longText: "test long text",
        img: "url"
      }
    ]))
  ))
]
