

function PokemonCard() {
  return(
    <div className='card'>              
      <span className='numero'>#25</span>
      <img src="https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png" alt="pikachu" />
      <h3>Pikachu</h3>
      <div className='tipos'>
        <span className='tipo'>Eletrico</span>
      </div>
    </div>
  );
  
}

export default PokemonCard;
