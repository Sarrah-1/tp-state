import { useState } from 'react';

function FormulaireNom() {
  const [nom, setNom] = useState('');

  const handleChange = (event) => {
    setNom(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour, ${nom} !`);
  };

  //Un formulaire contrôlé est gérée par l'état React
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input type="text" value={nom} onChange={handleChange} />
      </label>
      <button type="submit">Valider</button>
      <p>Nom saisi : {nom}</p>
    </form>
  );
}

export default FormulaireNom;
