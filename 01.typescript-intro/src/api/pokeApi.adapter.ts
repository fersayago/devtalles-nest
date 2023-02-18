// se llama adapter por que voy a adaptar una funcionalidad externa como axios a mi codigo
// sirve como puente entre mi clase y el paquete de terceros 
// la idea es facilitar el cambio en caso de que el paquete de terceros cambie o se depreque

import axios from "axios"

// utilizamos esta interface para decirle a mis clases como van a lucir y que metodos van a tener ocultando la implementación.
export interface HttpAdapter {
  get<T>( url: string ): Promise<T>;
}

export class PokeApiFetchAdapter implements HttpAdapter {

  async get<T>( url: string ): Promise<T> {
    const resp = await fetch(url);
    const data: T = await resp.json()
    console.log('con fetch')
    return data
  }
}

export class PokeApiAdapter implements HttpAdapter {

  private readonly axios = axios;

  // T representa el generico por defecto
  async get<T>( url: string ): Promise<T>{
    const { data } = await this.axios.get<T>(url);
    console.log('con axios')
    return data
  }

  async post( url: string, data: any ){

  }

  async patch( url: string, data: any ){
    
  }

  async delete( url: string ){
    
  }
}