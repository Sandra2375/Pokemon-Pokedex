

function PokemonCard({pokemon}) {
  return(
    <div className='card'>              
      <span className='numero'>#{pokemon.id}</span>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <div className='tipos'>
       {pokemon.types.map((t) => (
           <span key={t.type.name} className={"tipo " + t.type.name}>{t.type.name}</span>
       ))}
      </div>
    </div>
  );
  
}

export default PokemonCard;
