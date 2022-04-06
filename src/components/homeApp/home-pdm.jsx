import React from 'react'
import PizzaDuMois from '../../data/pizzaOfMonth.json'

export const TextGold = ({ children }) => {
   return <span className={' text-gold'}>{children}</span>
}

export const PdM = () => {
   const capitalizeFirstLetter = txt => {
      return txt.split(' ').map(word => (
         <>
            <span className={'font-decorative uppercase'}>{word.slice(0, 1)}</span>
            {word.slice(1)}{' '}
         </>
      ))
   }

   return (
      <>
         <section
            className={
               'border-t-2 border-b-2 border-beige px-8 py-16 text-center tracking-wide leading-loose text-3xl font-thin'
            }>
            <p>
               <TextGold>Tous les mois</TextGold>, <br /> La Pizza Sestini<sup>&copy;</sup> met à profit sa{' '}
               <TextGold>créativité</TextGold> et son <TextGold>expérience</TextGold> afin de vous
               offrir une pizza <TextGold>originale</TextGold> et des <TextGold>produits</TextGold>{' '}
               de <TextGold>qualité sélectionnés</TextGold> avec soins.
            </p>
         </section>
         <section className={'text-beige-light text-3xl px-16 my-44 text-center'}>
            <p>Tomato-Logo-here</p>
         </section>

         <article id={'pizza-du-mois'} className={'text-beige text-3xl px-auto my-12 text-center'}>
            <h2
               className={
                  'text-beige-light text-uppercase text-3xl px-16 my-16 text-center leading-loose tracking-wider font-thin font-accent'
               }>
               Ce mois-ci, <br /> Découvrez
            </h2>
            <div className={'mx-auto border-t-2 border-b-2 w-3/5 h-3 border-beige-light'} />
            <h3 className={'text-5xl font-bolder font-accent my-12'}>
               {capitalizeFirstLetter(PizzaDuMois.nom)}
            </h3>
            <div className={'mx-auto border-t-2 border-b-2 w-3/5 h-3 border-beige-light'} />
            <dl className={'text-3xl font-describe my-12 leading-relaxed tracking-wider'}>
               <dt className={'hidden'}>Ingrédients</dt>
               <dd>{PizzaDuMois.base.label}</dd>
               {PizzaDuMois.ingredients.map(ingredient => (
                  <dd>{ingredient}</dd>
               ))}
               {!PizzaDuMois.afterCook ? null : (
                  <>
                     <dt className={'hidden'}>Après cuisson</dt>
                     {PizzaDuMois.afterCook.map(ingredient => (
                        <dd>{ingredient}</dd>
                     ))}
                  </>
               )}
               <dt className={'hidden'}>Prix</dt>
               <dl className={"text-3xl text-right mx-8 p-o text-beige-light font-accent"}>{PizzaDuMois.prix}€</dl>
            </dl>
            <img
               className={'m-o p-o w-screen'}
               src={PizzaDuMois.url}
               alt="Photo de la pizza du mois"
            />
         </article>

      </>
   )
}