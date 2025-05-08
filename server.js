import fastify from "fastify";
import { DatabeseMemory } from "./database.js";
import { create } from "domain";
import { response } from "express";

const server = fastify()

const database = new DatabeseMemory()


//*Record create.
server.post('/videos', (request, reply) => { 
  database.create({
    title: 'Video',
    
    description: 'Descrição do vídeo',
    duration: 180

  })
  zconsole.log(database.list())
   return response.status(201).send()

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