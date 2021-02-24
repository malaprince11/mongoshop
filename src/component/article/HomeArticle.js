import React from 'react'
import {Animated} from "react-animated-css";
import cosmetic from '../../assets/cosmetic.jpg';


const HomeArticle = () => {
    return (
        <section>
        <div className="mongoTitle">
        
            <div className="titre">
            <h2 className="Title2">Mango shop</h2>
            <text className="intro">Bienvenue sur Mongo Shop</text>
            </div>

           
            <div className="sectionAnimate">

            <div className="animateBox">
            <h3 className="boxTitleText">Qui somme nous</h3>
            <hr className="boxHr"/>
            <div className="boxcontentTextDiv">

            <text className="boxcontentText">Mongo shop est une idée de créer le magasin de produit de beauté et de comestique de produit 100% naturel africain que ca soit le beure de karité spécial coprs et cheveux ou le nep nep ainsi, que le miel du mali reconnu pour ces vertue et son gout prononcer voici le premier shop qui feras le pont entre produit de different pays </text>
            </div>
            </div>

            <div className="imgBox2">
            <img src={cosmetic} alt="Mangoshop" height="400px" width="350px"  />
            
            </div>
            </div>
            
        </div>

            
        </section>
    )
}

export default HomeArticle
