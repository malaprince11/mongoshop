import React from 'react'
import greenDiamant from '../../assets/greenDiamant.png';
import bio from '../../assets/biocomsmetique.png';
import greencosmetique from '../../assets/greencosmetique.png';

const ThirdArticle = () => {
    return (
        <section>
        <div className="mongoTitleThird">
            <h1 className="mongoTitre3">Nos produit</h1>
  <h3 className="mongoTitre3">Best viewed on a tablet or desktop screens. Total responsiveness is still to be desired.</h3>
  <div className="quotestwo">
    <div className="cardTwo">
      <div className="boxOne boxBox1">
      <img src={greencosmetique} alt="Mangoshop" height="90px" className="imgBox" />
      <hr className="boxHr"/>
        <p>DES PRODUIT ECHO RESPONSABLE</p>  
      </div>
      
    </div>
    <div className="cardTwo">
      <div className="boxOne boxBox2">
      <img src={greenDiamant} alt="Mangoshop" height="90px" className="imgBox" />
      <hr className="boxHr"/>
        <p>LIEN DIRECT AVEC LES PRODUCTEUR</p>
      </div>
      
    </div>
    <div className="cardTwo">
      <div className="boxOne boxBox3">
      <img src={bio} alt="Mangoshop" height="90px" className="imgBox" />
      <hr className="boxHr"/>
        <p>PAS DE SURCOUT SUR LES PRIX</p>
      </div>
      
    </div>
  </div>
        </div>
        </section>
    )
}

export default ThirdArticle
