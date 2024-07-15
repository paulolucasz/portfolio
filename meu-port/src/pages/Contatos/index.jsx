import styles from "./Contatos.module.css"
import { GoMail } from "react-icons/go";
import { BsInstagram , BsYoutube , BsGithub , BsLinkedin} from "react-icons/bs";


function Contatos() {
    return (
        <div>
                <section className={styles.contatos}>
                    <h2>Contato</h2>
                    <h3>Entre em contato</h3>
                    <p>Para que possamos conversar mais sobre</p>
                    <div className={styles.icones}>
                        <a href="@email.com" target="_blank" rel="noopener">
                        <GoMail /> </a>
                        <a href="http://" target="_blank" rel="noopener">
                        <BsInstagram /> </a>
                        <a href="http://" target="_blank" rel="noopener">
                        <BsYoutube /> </a>
                        <a href="http://" target="_blank" rel="noopener">
                        <BsGithub /> </a>
                        <a href="http://" target="_blank" rel="noopener">
                        <BsLinkedin /> </a>

                    </div>
                </section>
            
        </div>
    );
}

export default Contatos;
