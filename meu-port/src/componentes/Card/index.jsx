import styles from "./Card.module.css"
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Card ({name, description, html_url}){
    return(
        <section className={styles.card}>

            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                
                <div className={styles.card_icones}>
                <FaHtml5 />
                <FaCss3Alt />
                <FaJs />
                <FaReact />

                </div>

                <a href={html_url} className={styles.botao}
                    target="_blank">
                <FaArrowRightLong />

                </a>



            </div>



        </section>


    )
}

export default Card