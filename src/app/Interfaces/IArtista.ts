import { IMusica } from "./IMusica";

export interface IArtista {
  id: string,
  nome: string,
  imagemUrl: string,
  musicas?: IMusica[]
}