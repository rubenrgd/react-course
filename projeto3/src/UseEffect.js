import React, { useState, useEffect } from 'react';


function UseEffect() {
  
  const [ numero, setNumero ] = useState('')
  const [ segundoNumero, setSegundoNumero ] = useState('')
  const [ resultado, setResultado ] = useState('');

  const somar = () => {
      const numeroInt = parseInt(numero)
      const segNumeroInt = parseInt(segundoNumero)

      setResultado( numeroInt + segNumeroInt )
  }

  useEffect( () => {
    console.log('variável número', numero, segundoNumero)
  }, [numero, segundoNumero] )

  return (
    <div>
      Número 1: <br />
      <input type="text" value={numero} 
             onChange={e => setNumero(e.target.value)} />< br/>
      Número 2: <br />
      <input type="text" value={segundoNumero} 
             onChange={e => setSegundoNumero(e.target.value)} />< br/>
      <button onClick={somar}>Somar</button><br />
      Resultado: <br />
      <input type="text" value={resultado} />< br/>
    </div>
  );
}

export default App;