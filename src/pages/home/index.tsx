import { Button } from '../../components/button';
import styles from './home.module.scss';
import { MdSearch, MdComputer, MdAttachMoney, MdOutlinePrivacyTip } from 'react-icons/md';
import { LiaTrophySolid } from 'react-icons/lia';
import { AiFillSafetyCertificate } from 'react-icons/ai';

export const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.fadebg} />
            <header>
                <div className={styles.content}>
                    <div>
                        <h1>Saiba como iniciar sua jornada no mundo da programação <br />e <span>fature com isso</span></h1>
                        <span>
                            Todas as principais dúvidas de quem está começando,
                            esclarecidas em um só livro. Não se sinta perdido e comece
                            agora sua jornada rumo ao lucro através da programação.
                        </span>
                        <Button href="https://pay.kiwify.com.br/Hj2n0t6" title="QUERO APRENDER" className={styles.button} />
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
                <div className={styles.fadebgleft} />
                <div className={styles.summary}>
                    <div className={`${styles.sectionTitle} ${styles.centered}`}>
                        <span>CONTEÚDO DO LIVRO</span>
                        <span>Tudo o que você vai aprender</span>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.module}>
                            <h3>A Idade é Apenas um Número</h3>
                            <span>Vamos desmistificar a questão sobre ter idade certa para inciar a carreira na programação.</span>
                        </div>

                        <div className={styles.module}>
                            <h3>Áreas da Programação</h3>
                            <span>Uma das maiores dúvidas de quem está iniciando, é sobre qual área seguir. Aqui explicamos direitinho as principais para você escolher qual tem mais a ver contigo.</span>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.module}>
                            <h3>Tecnologias e Linguagens</h3>
                            <span>Dentro de cada área específica, saiba quais são as principais tecnologias e linguagens utilizadas no mercado à fora.</span>
                        </div>

                        <div className={styles.module}>
                            <h3>Soft Skills</h3>
                            <span>Nem só de conhecimento técnico vive o programador. Saiba como as soft skills influenciam diretamente no seu dia a dia e na sua carreira.</span>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.module}>
                            <h3>Inglês</h3>
                            <span>Hoje o inglês deixou de ser um diferencial. Na programação, isso fica ainda mais notável. Entenda o porquê.</span>
                        </div>

                        <div className={styles.module}>
                            <h3>Como Começar a Estudar</h3>
                            <span>Com tanta informação disponível nos dias de hoje, fica bem complicado saber o que consumir e como seguir nos estudos. Aqui você terá uma visão mais clara do que fazer para iniciar.</span>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.module}>
                            <h3>Faculdade na Programação</h3>
                            <span>Um dos maiores dilemas da área. Afinal, precisa ou não de faculdade para ser um programador? Aqui fica tudo muito claro.</span>
                        </div>

                        <div className={styles.module}>
                            <h3>Produtividade e Tempo</h3>
                            <span>Algumas dicas para tirar o máximo proveito dos seus estudos e como levar lado a lado com sua vida atual.</span>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.module}>
                            <h3>Aplicando para Vagas</h3>
                            <span>Saiba como e quando se aplicar para a sua primeira vaga no mercado de trabalho como programador.</span>
                        </div>

                        <div className={styles.module}>
                            <h3>Oportunidades Financeiras</h3>
                            <span>Aqui você vai entender como o mercado de trabalho está aquecido e a média salarial de cada uma das principais áreas.</span>
                        </div>
                    </div>

                    <div className={styles.module}>
                        <h3>A Minha Trilha de Estudos</h3>
                        <span>No final eu vou mostrar detalhadamente a trilha que eu fiz para me tornar um especialista bem-sucedido.</span>
                    </div>

                    <Button href="https://pay.kiwify.com.br/Hj2n0t6" title="QUERO COMEÇAR" className={styles.button} />

                </div>
            </section>

            <div className={styles.priceContainer}>
                <div className={styles.price}>
                    <div>
                        <img src="/assets/img/iphone_mockup.png" alt="" />

                        <h5>APROVEITE</h5>

                        <span className={styles.priceText}>8x DE <b>R$ 5,40</b></span>

                        <span className={styles.priceSingle}>ou R$ 37,90 À VISTA</span>

                        <Button href="https://pay.kiwify.com.br/Hj2n0t6" title="COMPRAR AGORA" className={styles.button} />

                        <div className={styles.footer}>
                            <div>
                                <AiFillSafetyCertificate className={styles.icon} />
                                <span>Compra Segura</span>
                            </div>
                            <div>
                                <LiaTrophySolid className={styles.icon} />
                                <span>Satisfação Garantida</span>
                            </div>
                            <div>
                                <MdOutlinePrivacyTip className={styles.icon} />
                                <span>Privacidade Protegida</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.about}>
                <div className={styles.photoBorder}>
                    <div>
                        <div className={styles.bg}>
                            <img src="/assets/img/ramon.png" alt="" className={styles.me} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.fadebgwhoareme} />
                    <div className={`${styles.sectionTitle} ${styles.right}`}>
                        <span>QUEM SOU EU</span>
                        <span>Saiba um pouco mais sobre mim</span>
                    </div>

                    <p>
                        Meu nome é Ramon Campos, tenho 32 anos e atuo como programador desde 2012.
                        Formado em Sistemas de Informação, passei por várias empresas durante minha carreira,
                        indo de startups a multinacionais
                    </p>
                    <p>
                        Nos últimos 5 anos foquei no meu desevolvimento pessoal e me aproximei mais do Frontend, me tornando especialista na área.
                        Já atuei como arquiteto, tech lead, dev fullstack e hoje sou dev frontend, atuando com ReactJS e React Native.
                    </p>
                </div>
            </div>

            <div className={styles.questions}>
                <div className={`${styles.sectionTitle} ${styles.centered}`}>
                    <span>PERGUNTAS FREQUENTES</span>
                    <span>Algumas perguntas recorrentes</span>
                </div>

                <div className={styles.question}>Vou aprender a programar lendo este livro?</div>
                <div className={styles.answer}>O intuito deste livro é apresentar as principais questões básicas da programação e te guiar de forma que você consiga saber por onde começar a estudar.</div>

                <div className={styles.question}>O livro vai ser atualizado com o tempo?</div>
                <div className={styles.answer}>As informações compartilhadas aqui constituem os fundamentos da programação e permanecerão inalteradas. No entanto, esteja ciente de que qualquer conteúdo NOVO que eu considere relevante será acrescentado posteriormente. Aqueles que adquirirem o livro terão acesso a todas as atualizações pelos próximos 12 meses.</div>

                <div className={styles.question}>Quando o livro será entregue?</div>
                <div className={styles.answer}>Após a confirmação do pagamento, você receberá o link de acesso em seu e-mail em até 15 minutos.</div>

                <div className={styles.question}>Existe uma garantia?</div>
                <div className={styles.answer}>A partir da data da compra, você conta com uma garantia de 7 dias.</div>
            </div>

            <footer>
                <span>
                    ® 2023 Ramon Campos | Todos os direitos reservados
                </span>
            </footer>
        </div>
    )
}