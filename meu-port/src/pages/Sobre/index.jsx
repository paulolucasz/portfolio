import styles from "./Sobre.module.css"; 
import html from "./imagens/icon-html.svg"; 
import css from "./imagens/icon-css.svg"; 
import js from "./imagens/icon-js.svg"; 
import node from "./imagens/icon-node.svg"; 
import react from "./imagens/icon-react.svg"; 
import sql from "./imagens/icon-sql.svg"; 
import avatar from "./imagens/Mordecai.png" 


function Sobre() {
    return (
        <section className={styles.sobre}>

            <div className={styles.bio}>
                <img src={avatar} className={styles.avatar} alt="Avatar" />
                <div className={styles.textos}>
                    <h2>Sobre</h2>
                    <p>Sou <span>Paulo Lucas</span></p> <br />
                   {/*  <strong>Dev</strong> <br /> */}
                    <p>Estudante de Programação Front-End</p>
                    <p>Realizando faculdade de Ciência da Computação</p>
                    {/* <p>Especializado em engenharia de software</p> */}
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="HTML" />
                    <img src={css} alt="CSS" />
                    <img src={js} alt="JavaScript" />
                    <img src={react} alt="React" />
                    <img src={node} alt="Node.js" />
                    <img src={sql} alt="SQL" />
                </div>
            </div>
        </section>
    );
}   

export default Sobre;
