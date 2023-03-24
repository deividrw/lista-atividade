import React, { useState } from "react";
import "./style.css";

export default function Atividade() {
  const [atividade, setAtividade] = useState("");
  const [date, setDate] = useState("");
  const [lancarAtividades, setLancarAtividades] = useState([]);
  const [clear, setClear] = useState("");

  const handleAtividadeChange = (event) => {
    setAtividade(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleReset = () => {
    setAtividade("");
    setDate("");
  };

  // const handleClear = (event) => {
  //   setClear(event.target.value);
  //   index(null);
  // };

  const handleLancarAtividade = (event) => {
    event.preventDefault();
    if (atividade.trim() === "" || date.trim() === "") {
      alert("Favor descrever atividade e data.");
    } else {
      setLancarAtividades([...lancarAtividades, { atividade, date }]);
      handleReset();
    }
  };

  const handleExcluirAtividade = (index) => {
    setLancarAtividades(lancarAtividades.filter((_, i) => i !== index));
  };

  return (
    <div id="container">
      <div>
        <form onSubmit={handleLancarAtividade}>
          <h1 className="title">Listas de atividades</h1>
          <label htmlFor="atividade">Nome da Atividade</label>
          <input
            type="text"
            name="atividade"
            id="atividade"
            value={atividade}
            onChange={handleAtividadeChange}
          />

          <br />

          <label htmlFor="date">Data da Ativdade</label>
          <input
            name="date"
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
          />

          <button type="button" onClick={handleReset}>
            Limpar
          </button>
          <button type="submit">Lançar</button>
        </form>
        <hr />

        
        <table>
         
          <thead>
            <tr>
              
              <th>ATIVIDADE</th>

              <th>DATA</th>

              <th>ACTiON</th>
              
            </tr>
            
          </thead>
          <tbody>
            {lancarAtividades.map((atividade, index) => (
              <tr key={index}>
                
                <td className="atividade">{atividade.atividade}</td>
                <td className="date">{atividade.date}</td>
                <td><button onClick={() => handleExcluirAtividade(index)}>EXCLUIR</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
