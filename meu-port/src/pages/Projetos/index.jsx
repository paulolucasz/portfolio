import styles from "./Projetos.module.css";
import Card from "../../componentes/Card";
import { useEffect, useState } from "react";

function Projetos() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        const buscarRepositorio = async () => {
            try {
                const response = await fetch('https://api.github.com/users/paulolucasz/repos');
                const data = await response.json();
                setRepositories(data);
            } catch (error) {
                console.error('Erro ao buscar repositórios:', error);
            }
        };

        buscarRepositorio();
    }, []);

    return (
        <section className={styles.projetos}>
            <h2>Projetos</h2>

            {repositories.length > 0 ? (
                <section className={styles.lista}>
                    {repositories.map((repo) => (
                        <Card
                            key={repo.id}
                            name={repo.name}
                            description={repo.description}
                            html_url={repo.html_url}
                        />
                    ))}
                </section>
            ) 
            
            : (
                <p>carregando repositórios...</p>
            )}
        </section>
    );
}

export default Projetos;




/*return (
        <section className={styles.projetos}>
            <h2>Projetos</h2>
            <section className={styles.lista}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        </section>
    );*/