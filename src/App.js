import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1]=useState('');
  const [linea2, setLinea2]=useState('');
  const [imagen, setImagen]=useState('');

  
  const onChangeLinea1 = function(evento){
    setLinea1(evento.target.value);
  }

  const onChangeLinea2 = function(evento){
    setLinea2(evento.target.value)
  }

  const onChangeImagen = function(evento){
    setImagen(evento.target.value);
  }

  const onChangeExport = function(){
    alert('Exportando');
    html2canvas(document.querySelector(".meme")).then(canvas=>{
      var img = canvas.toDataURL("image/png");

      var link = document.createElement('a');
      link.download='meme.png';
      link.href=img;
      link.click();

    });
  }

  

  return (
    <div className="App" id='meme'>
      <select onChange={onChangeImagen}>
        <option value="fire">Casa en llama</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
        <option value="unicornios">unicornio</option>
      </select>
      <br/>
      <input onChange={onChangeLinea1} type="text" placeholder='Linea 1'/><br/>
      <input onChange={onChangeLinea2} type="text" placeholder='Linea 2'/><br/>
      <button onClick={onChangeExport}>Exportar</button>
      <br/>
      <br/>
      <div className='meme'>
        <span>{linea1}</span><br/>
        <span>{linea2}</span><br/>
        <img src={"/img/"+imagen+".jpg"}/>
      </div>
    </div>


  );
}

export default App;
