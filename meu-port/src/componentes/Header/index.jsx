import styles from './Header.module.css'
import { Link } from 'react-router-dom'
function Header() {

return( 

    <header className={styles.header}>
        <Link to="/" >
        <span>VascodaGama</span>
        </Link>
        <nav>
            <Link to ="/" href=""> Home</Link>
            <Link to ="/sobre" target='blank' href=""> Sobre</Link>
            <Link to ="/projetos" target='blank' href=""> Projetos</Link>
            <Link to ="/contatos" target='blank' href=""> Contatos</Link>
        </nav>




    </header>

)

}

export default Header
