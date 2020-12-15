import React from 'react';
import Logo from '../../assets/logopp.png';
import { Button } from '../../components/Form/Button/style';
import { Input } from '../../components/Form/Input/style';
import styles from './Index.module.css';
import Servicos1 from '../../assets/servicos1.png'
import Servicos2 from '../../assets/servicos2.svg'
import Servicos3 from '../../assets/servicos3.svg'
import Servicos4 from '../../assets/servicos4.svg'
import Servicos5 from '../../assets/servicos5.svg'
import UndrawContato from '../../assets/undraw_contato.png';
import ImgBM from '../../assets/imgBM.jpg';
import Head from '../../components/Helper/Head'

const Institucional = () => {
    return (
        <section id={styles.main}>
            <Head title="Institucional" />
            <section id={styles.home} style={{backgroundImage: `url(${ImgBM}`}}>
        <nav id={styles.navBar}>
            <ul id={styles.lista1}>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#sobre">Sobre</a>
                </li>
                <li>
                    <a href="#servicos">Serviços</a>
                </li>  
            </ul>
            <div>
                <img className={styles.logo} alt="" src={Logo} />
            </div>
            <ul className={styles.lista2}>
                <li>
                    <a href="#planos">Planos</a>
                </li>
                <li>
                    <a href="#contato">Contato</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
            </ul>
        </nav>
    

        <div className={styles.filtro}>
            <div>
                <img id={styles.logo} alt="" src={Logo}/>
            </div>
            <center>
                <p>Monitore a produtividade dos seus funcionários em tempo real. Tenha o controle total de todos os
                    computadores da sua organização de qualquer lugar do mundo.</p>
                <a href="/login">
                    <button className={styles.btnLogin}>Login</button>
                </a>
                <a href="/cadastro">
                    <button className={styles.cadastro}>Cadastro</button>
                </a>
                
            </center>
        </div>
    </section>

    <section id={styles.sobre}>
        <h1>Business Monitoring</h1>
        <div className={styles.container}>
            <div className={styles.card}>
                <i className="fas fa-cogs"></i>
                <h2>Integrar</h2>
                <p>Atualizado constantemente para se integrar
                     aos principais navegadores da web de forma
                      fácil e invisível.Além disso possuimos uma
                       poderosa API de integração para conectar com
                        os seus aplicativos já utilizados
                </p>
            </div>

            <div className={styles.card}>
                <i className="fas fa-eye"></i>
                <h2>Observar</h2>
                <p>Você sabe quais sites e aplicativos seu time mais usa? 
                    Nossa ferramenta te mostra esses dados para ajudar no
                     gerenciamento dos seus colaboradores, de modo a torná-los
                      mais produtivos e incentivar boas práticas, como as pausas 
                      durante o expediente</p>
            </div>

            <div className={styles.card}>
                <i className="fas fa-running"></i>
                <h2>Agir</h2>
                <p>Defina remotamente quais sites podem ser acessados pelos seus
                  colaboradores, quais aplicativos e hardwares estão sendo utilizados 
                  para que você possa agir com antecedência</p>
            </div>
        </div>

    </section>

    <section id={styles.servicos}>
        <h1 className={styles.textoServicos}>Para você gestor</h1>
        <div className={styles.container1}>
            <img src={Servicos1} alt=""/>
            <p>
                Controle o histórico de seus funcionários
                remotamente de qualquer lugar do mundo.
            </p>
        </div>

        <div className={styles.container2}>
            <p>
                Gere relatórios com gráficos para mapear a produtividade
                do seu time pela nossa API integrando com qualquer ferramenta já utilizada pela sua empresa.
            </p>
            <img src={Servicos2} alt="" />
        </div>

        <div className={styles.container1}>
            <img alt="" src={Servicos3}/>
            <p>
                Saiba de forma dinamica quais os sites mais
                acessados e tome decisões referente a produtividade do seu time.
            </p>
        </div>
        <h1 className={styles.textoServicos2}>Para a sua equipe</h1>

        <div className={styles.container2}>
            <p>
                Suporte técnico para garantir o desempenho da sua máquina.
            </p>
            <img src={Servicos4} alt="" />
        </div>
        <div className={styles.container1}>
            <img src={Servicos5} alt="" />
            <p>
                Abra um chamado para dar auxílio em
                caso de problemas com seu sistema.
            </p>
        </div>

    </section>

    <section id={styles.planos}>
        <h1 className={styles.textoPlanos}>Planos</h1>
        <div className={styles.containerPlanos}>
            <div className={styles.card1}>
                <p className={styles.cima}>Até 100 usuários</p>
                <h2>R$ 12,00</h2> <h5>por usuário</h5>
                <p>Monitoramento Ativo</p>
                <p>Suporte via Slack</p>
                <p>15 dias grátis</p>
                <Button>Contratar</Button>
            </div>
            <div className={styles.card2}>
                <p className={styles.cima}>Acima de 100 usuários</p>
                <h2 className={styles.h2maior}>R$ 9,90</h2> <h5>por usuário</h5>
                <p>Monitoramento Ativo</p>
                <p>Suporte via Slack</p>
                <p>15 dias grátis</p>
                <Button id={styles.cor2}>Contratar</Button>
            </div>

            <div className={styles.card1}>
                <p className={styles.cima}>Até 10 usuários</p>
                <h2>R$ 16,00</h2> <h5>por usuário</h5>
                <p>Monitoramento Ativo</p>
                <p>Suporte via Slack</p>
                <p>15 dias grátis</p>
                <Button>Contratar</Button>
            </div>

        </div>
    </section>

    <section id={styles.contato}>
        <h1 className={styles.textoContato}>Contato</h1>
        <div className={styles.contato}>
            <img src={UndrawContato} alt="" />
            <form className={styles.formu}>
                <h3 >Nome</h3>
                <Input id={styles.input} type="text" />
                <br />
                <h3>Email</h3>
                <Input id={styles.input} type="email" />
                <br />
                <h3>Mensagem</h3>
                <textarea id={styles.indexInput} cols="50" rows="10" style={{resize: 'none'}}></textarea>
                <br />
                <Button id={styles.btnTexteArea}>Enviar</Button>
            </form>
        </div>
    </section>

    <footer className={styles.footer} id={styles.rodape}>
        <article>
            <img className={styles.logofooter} src={Logo} alt="" />
        </article>

        <div className={styles.icons}>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-twitter"></i>
        </div>

        <div>
            <p className={styles.gmail}>
                suporteajuda@businessmonitoring.com.br
            </p>
        </div>

    </footer>
        </section>
    )
}

export default Institucional;
