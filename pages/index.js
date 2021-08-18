import Head from 'next/head'
import React from 'react'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <React.Fragment>

<Head>
        <title>Beto Diaz-Avanza Libertad</title>
        <link rel="icon" type="ico" href="favicon.ico"/>
        <meta name="description" content="Beto Diaz precandidato a concejal-Avanza Libertad-Soy un vecino de la localidad de José C. Paz, que al igual que todos los cuidadanos busca un cambio en el partido. Buen vecino, trabajador, humilde y voy a ser un buen representante de los paceños."></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://avanza-libertad-jcp.vercel.app/" />
        <meta property="og:image" content="https://avanza-libertad-jcp.vercel.app/images/beto.png" />
        <meta property="og:description" content="Beto Diaz precandidato a concejal-Avanza Libertad-Soy un vecino de la localidad de José C. Paz, que al igual que todos los cuidadanos busca un cambio en el partido. Buen vecino, trabajador, humilde y voy a ser un buen representante de los paceños." />
        <meta name="google-site-verification" content="uT2W7Kop-FNNqIIg3RcsUUQgxw1o1indaDVuqdXsZ7I" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&amp;display=swap" rel="stylesheet"></link>
      </Head>

    <div>
      <header className="header" id="header">
          <img className="header_logo" src="images/AL-logo-pequeno.png" alt="logo"></img>
          <ul className="header_list">
              <li className="header_list_content">
                  <a href="#presentation">Inicio</a> </li>
              <li className="header_list_content">
                  <a href="#candidatos">Candidatos</a></li>
              <li className="header_list_content">
                  <a href="#contact">Contacto</a></li>
          </ul>
      </header> 
      <main id="presentation" className="presentation">
          <section className="presentation_information">
              <span className="title">Beto Diaz</span>
              <span className="subtitle">Pre Candidato a Concejal</span>
              <span className="subtitle">Avanza Libertad</span>
              <span className="text">Mi nombre es Alberto pero soy conocido por todos como Beto. Soy un vecino de la localidad de José C. Paz, que al igual que todos los cuidadanos busca un cambio en el partido. Buen vecino, trabajador, humilde y voy a ser un buen representante de los paceños.</span>
          </section>
          <section className="presentation_img">
              <div className="presentation_card">
                  <img className="images" src="images/beto diaz.jpg" alt="foto de beto"></img>
              </div>
              </section>
      </main>
      <section id="candidatos" className="candidatos">
          <div className="candidatos_text">
              <span className="title title-center title-color">También nos acompañan vecinos honestos de este municipio</span>
          </div>
          <div className="candidatos_container">
              <div className="candidatos_card">
                  <img className="img" src="images/tony.jpg" alt="tony"></img>
                  <span className="text text-color">Antonio Ontiveros</span>
                  <span className="text text-fonsize">Precandidato <br/> Concejal</span>
              </div>
              <div className="candidatos_card">
                  <img className="img" src="images/yamila gonzalez.jpg" alt="yamila"></img>
                  <span className="text text-color">Yamila Gonzalez</span>
                  <span className="text text-fonsize">Precandidata <br/> Concejal</span>
              </div>
              <div className="candidatos_card">
                  <img className="img" src="images/patricia graneros.jpg" alt="patricia"></img>
                  <span className="text text-color" >Patricia Graneros</span>
                  <span className="text text-fonsize">Precandidata <br/> Concejal</span>
              </div>
              <div className="candidatos_card">
                  <img className="img" src="images/norma acuña.jpg" alt="norma"></img>
                  <span className="text text-color">Norma Acuña</span>
                  <span className="text text-fonsize">Precandidata <br/> Concejal</span>
              </div>
              <div className="candidatos_card">
                  <img className="img" src="images/nelida beatriz perez.jpg" alt="nelida"></img>
                  <span className="text text-color" >Nelida Perez</span>
                  <span className="text text-fonsize">Precandidata <br/> Concejal</span>
              </div>
              <div className="candidatos_card">
                  <img className="img" src="images/mario gambino.jpg" alt="mario"></img>
                  <span className="text text-color">Mario Gambino</span>
                  <span className="text text-fonsize">Precandidato <br/> Concejal</span>
              </div>
              <div className="candidatos_card">
                  <img className="img" src="images/fernando mussare.jpg" alt="fernando"></img>
                  <span className="text text-color">Fernando Mussare</span>
                  <span className="text text-fonsize">Precandidato <br/> Concejal</span>
              </div>
          </div>
      </section>
      <section id="contact" className="contact">
          <section className="contact_text">
              <div className="contact_text_container">
                  <span className="title title-center">Si querés ser parte de este nuevo cambio en José C. Paz</span>
              </div>
                  <span className="subtitle">Súmate contactandonos por</span>
          </section>
          <section className="contact_information">
              <div className="contact_sub_information">
                  <div className="subtitle-small">
                  <FontAwesomeIcon icon={faPhone} />
                  11-6235-5996</div>       
                  <div className="subtitle-small">
                  <FontAwesomeIcon icon={faFacebook} />
                  Beto Diaz</div>  
                  <div className="subtitle-small">
                  <FontAwesomeIcon icon={faFacebook} />  
                  Antonio Roberto Ontiveros</div>
              </div>
          </section>
      </section>

      <a href="https://api.whatsapp.com/send?phone=+5491162355996" className="btn-wsp" target="_blank">
          <img className="icon_wsp" src="images/whatsapp.svg" alt="wsp"></img>
      </a>

      <footer className="footer">
          <span className="footer_text">Powered by: Devfree</span>
      </footer>
    </div>
    </React.Fragment>
   
  )
}
