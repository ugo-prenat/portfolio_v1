import React from 'react'

import css from '../../styles/about.module.css'
import me from '../../assets/images/me.jpeg'

export default function About() {
  return (
    <div className={`component ${css.component}`} id='about'>
      
      <div className={css.imgContainer}>
        <span className={css.colorFilter}></span>
        <img src={me} alt='Photo de profil' />
      </div>
      
      <div className={css.content}>
        <p className={css.title}>Je m'appelle <span>Ugo Prenat</span></p>
        <p className={css.paragraph}>Je suis développeur web et mobile actuellement en licence à la <a href='https://codingfactory.fr/' target='_blank' rel='noreferrer'>Coding Factory by ESIEE-IT</a>. En plus de la programmation, ma formation me permet d’apprendre à travailler selon les méthodes agiles notamment grâce à l’eduScrum.</p>
        <p className={css.paragraph}>Toujours interréssé par l’apprentissage de nouvelles technologies, je m’intersse depuis plusieurs mois à la <a href='https://www.kicklox.com/blog-talent/mern-stack-definition-enjeux-avantages/' target='_blank' rel='noreferrer'>stack MERN</a> qui me permet de créer des applications web fullstack de A à Z</p>
      </div>
    </div>
  )
}
