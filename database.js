import { create } from "domain"
import { randomUUID } from "crypto"

//UUID = Universal Unique ID.

export class DatabeseMemory {
    #videos = new Map()
  
    list(){
      return this.#videos.values(id)
    }
    
  create (videos) {
    const videoId = randomUUID()
    this.#videos.set(videoId, videos)

  }

  updade (id, videos) { //
    this.#videos.set(videos)
  }

  delete (id) {
    this.videos.delete(id)
  }

}
