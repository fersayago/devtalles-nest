// se llama adapter por que voy a adaptar una funcionalidad externa como axios a mi codigo
// sirve como puente entre mi clase y el paquete de terceros 
// la idea es facilitar el cambio en caso de que el paquete de terceros cambie o se depreque

import axios from "axios"

export class PokeApiAdapter {

  private readonly axios = axios;

  async get( url: string ){
    const { data } = await this.axios.get(url);
    return data
  }

  async post( url: string, data: any ){

  }

  async patch( url: string, data: any ){
    
  }

  async delete( url: string ){
    
  }
}