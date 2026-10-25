import { useState, useEffect } from 'react';

function SuiviEtudes() {
  const [matieres, setMatieres] = useState(() => {
    const sauvegarde = localStorage.getItem('suiviEtudes');
    return sauvegarde ? JSON.parse(sauvegarde) : [];
  });
  const [nom, setNom] = useState('');
  const [heures, setHeures] = useState('');

  useEffect(() => {
    localStorage.setItem('suiviEtudes', JSON.stringify(matieres));
  }, [matieres]);

  const ajouter = (e) => {
    e.preventDefault();
    const h = Number(heures);
    if (!nom.trim() || h <= 0) return;
    setMatieres(prev => [...prev, { id: Date.now(), nom: nom.trim(), heures: h }]);
    setNom('');
    setHeures('');
  };

  const supprimer = (id) => {
    setMatieres(prev => prev.filter(m => m.id !== id));
  };

  const total = matieres.reduce((somme, m) => somme + m.heures, 0);

  return (
    <div>
      <form onSubmit={ajouter}>
        <input
          placeholder="Matière"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <input
          type="number"
          placeholder="Heures"
          value={heures}
          onChange={(e) => setHeures(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>
      <ul>
        {matieres.map((m) => (
          <li key={m.id}>
            {m.nom} : {m.heures} h
            <button onClick={() => supprimer(m.id)}>X</button>
          </li>
        ))}
      </ul>
      <p>Total : {total} h</p>
    </div>
  );
}

export default SuiviEtudes;