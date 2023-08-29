import { Button } from '../../components/button';
import styles from './home.module.scss';
import { MdSearch, MdComputer, MdAttachMoney } from 'react-icons/md';

export const Home = () => {
    return (
        <div className={styles.container}>
            <header>
                <div className={styles.content}>
                    <div>
                        <h1>Saiba como inciar sua jornada no mundo da programação <br />e <span>fature com isso</span></h1>
                        <span>
                            Todas as principais dúvidas de quem está começando,
                            esclarecidas em um só livro. Não se sinta perdido e comece
                            agora sua jornada rumo ao lucro através da programação.
                        </span>
                        <Button title="QUERO APRENDER" className={styles.button} />
                    </div>

                    <div>
                        <img src="/assets/img/mockup.png" alt="" />
                    </div>
                </div>
            </header>

            <section className={styles.centered}>
                <div className={styles.sectionTitle}>
                    <span>É PRA VOCÊ?</span>
                    <span>Para quem é este livro?</span>
                </div>

                <div className={styles.targetPublic}>
                    <div>
                        <div>

                            <div>
                                <div className={styles.iconContainer}>
                                    <MdSearch className={styles.icon} />
                                </div>

                                <p>
                                    Para aqueles que estão insatisfeitos
                                    com a carreira atual e estão buscando
                                    novas possibilidades.
                                </p>
                            </div>
                            <div>
                                <div className={styles.iconContainer}>
                                    <MdComputer className={styles.icon} />
                                </div>

                                <p>
                                    Para quem já está começando a
                                    desbravar o mundo da programação
                                    mas se sente perdido em meio a
                                    tanta informação.
                                </p>
                            </div>
                            <div>
                                <div className={styles.iconContainer}>
                                    <MdAttachMoney className={styles.icon} />
                                </div>

                                <p>
                                    Àqueles buscam a possibilidade
                                    de fazer uma renda extra
                                    com algo novo.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.centered}>
                <div className={styles.content}>
                    <div>
                        <img src="/assets/img/guy-on-pc.png" alt="" />
                    </div>
                    <div>
                        <div className={`${styles.sectionTitle} ${styles.right}`}>
                            <span>MEIOS</span>
                            <span>Como o livro vai te ajudar</span>
                        </div>

                        <p>
                            Ao embarcar em qualquer jornada, é uma experiência comum nos sentirmos inseguros e desorientados.
                            No campo da programação, essa sensação é acentuada. A vasta quantidade de informações
                            disponíveis na internet, muitas vezes, pode ser mais prejudicial do que benéfica.
                        </p>
                        <p>
                            Neste livro, você encontrará um guia claro e abrangente para compreender esse universo.
                            Desde a essência do mundo da programação até o que estudar e como iniciar, forneceremos
                            todas as informações necessárias para que você se sinta confiante e seguro ao prosseguir.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.wbg}>
                <div className={styles.summary}>
                    <div className={`${styles.sectionTitle} ${styles.centered}`}>
                        <span>CONTEÚDO DO LIVRO</span>
                        <span>Tudo o que você vai aprender</span>
                    </div>

                    <div className={styles.module}>
                        <div>
                            <h3>Oportunidades Financeiras</h3>
                            <span>Aqui você vai entender como o mercado de trabalho está aquecido e a média salarial de cada uma das principais áreas.</span>
                        </div>
                    </div>

                    <div className={styles.module}>
                        <h3>Oportunidades Financeiras</h3>
                        <span>Aqui você vai entender como o mercado de trabalho está aquecido e a média salarial de cada uma das principais áreas.</span>
                    </div>

                    <div className={styles.module}>
                        <h3>Oportunidades Financeiras</h3>
                        <span>Aqui você vai entender como o mercado de trabalho está aquecido e a média salarial de cada uma das principais áreas.</span>
                    </div>
                </div>
            </section>

            <footer></footer>
        </div>
    )
}