import React from 'react';

import './style.scss';

const FAQ = () => {
  return(
    <div className="faq">
      <h2>FAQ</h2>
        
      <h3>A quoi ça sert ?</h3>
      <p>
        Cette application permet de trouver une liste de dépôts GitHub pour un critère donné.
      </p>

      <h3>Comment faire une recherche ?</h3>
      <p>
        Sur la page recherche, complétez le champ de recherche et valider la recherche.
      </p>
    
      <h3>Puis-je chercher n'importe quel terme ?</h3>
      <p>
        Oui, c'est fou.
      </p>
    </div>
  )
}

export default FAQ;
