import fastify from "fastify";
import { DatabeseMemory } from "./database.js";

const server = fastify()


//*Record create.
server.post('/videos', () => {
 
  return {videos_create: "create videos"}
})
 
//?picking up details.
server.get('/videos', () => {
  return {detls: "Hellow Details" }
})

//-change.
server.put('/videos:id', () =>{
  return {change: 'videos'}
})


//List prot server. 
server.listen({
  port: 3333,

})