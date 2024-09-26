import { Hono, Next } from 'hono'
import { Context } from 'hono/jsx';

const app = new Hono()

async function autthmiddleware(c:any ,next :any) {
  if(c.req.header("Autherization")){
    const initime = new Date();
    await next()
    const totaltime = new Date().getTime() - initime.getTime()
    console.log(totaltime);
    
  }
  else{
    return c.text("you dont have acces")
  }
  
}
app.get('/', autthmiddleware, async (c) => {
  const body = await c.req.parseBody()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.json({msg: "as"})
})

export default app