import {Hono} from 'hono'
import {handle} from 'hono/vercel'
import {zValidator} from '@hono/zod-validator'
import { z } from 'zod';

export const runtime = 'edge';

const app=new Hono().basePath("/api");

app.get("/hello",(c)=>{
    return c.json({
        message:"Hello Finance"
    })
}).get("/hello/:test",zValidator("param",z.object({
    test:z.number()
})),(c)=>{
   
    return c.json({
        message:"Hello World",
       
    })
})


export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);