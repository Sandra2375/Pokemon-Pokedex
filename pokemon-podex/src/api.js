export const API = 'https://pokeapi.co/api/v2';

export async function buscarJson(url){
    const resposta = await fetch(url); //É o responsável q vai até a intnet buscar os dados. 
    if(!resposta.ok){ //trata erro caso acontesa, lançando o tipo de erro.
        throw new error("erro na requisição: " + resposta.status);
        
    }
    return resposta.json();
}
