import { Hono } from 'hono';
import { getCookie, setCookie, deleteCookie } from 'hono/cookie';

type AuthUser = {
  username: string
  password: string
}

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})
app.get('/api/logout', (c) => {
  deleteCookie(c, 'username')
  return c.text('Logouted!')
})

app.post('/api/login', async (c) => {
  const { username, password } = await c.req.json<AuthUser>()
  console.log(username, password)
  if (username === 'Flavio' && password === '123') {
    setCookie(c, 'username', username, { 
      expires: new Date(Date.now() + 900000000), 
    })
    return c.text('Logged in!')
  }
  c.status(401)
  c.header('Content-Type', 'text/plain')
  return c.body('Unauthorized')
})

export default app
