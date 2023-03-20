import Link from 'next/link';
import { useState } from 'react';

//Importação das fontes e dos icones
import { Inter } from '@next/font/google'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs';

//Importação de componentes
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';


import styles from '@/styles/Home.module.scss'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  //Estados dropdown da seção "Perguntas frequentes"
  const [questionOneIsOpen, setQuestionOneIsOpen] = useState(false);
  const [questionTwoIsOpen, setQuestionTwoIsOpen] = useState(false);
  const [questionThreeIsOpen, setQuestionThreeIsOpen] = useState(false);

  //Estado do dropdown do Menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className={styles.initialPage}>

      {/*Landing*/}
      <div className={styles.landing} id="landing">

        {/*Componente do Header*/}
        <Header />

        {/*Começo da página inicial*/}

        <h1>Energia por assinatura. <strong>Verde e mais barata.</strong> Para seu <strong>negócio ou residência.</strong></h1>

        <div className={styles.points}>
          <div>
            <span><AiOutlineCheck size={25} /> Até <strong>15% de economia</strong> na sua conta</span>
            <span><AiOutlineCheck size={25} /> <strong>Sem</strong> obras</span>
            <span><AiOutlineCheck size={25} /> <strong>Sem</strong> investimento</span>
            <span><AiOutlineCheck size={25} /> <strong>Sem</strong> fidelidade</span>
            <span><AiOutlineCheck size={25} /> <strong>Sem</strong> burocracia e <strong>100% online</strong></span>
          </div>
        </div>

        <h1 className={styles.secondText}>O <strong>meio ambiente mais limpo</strong> e sua <strong>energia mais barata</strong></h1>

        <button>Quero economizar</button>

      </div>


      {/*Como funciona?*/}

      <div className={styles.howWorks} id="howWorks">

        <h1>Como funciona?</h1>

        <div className={styles.container}>
          <iframe src="https://www.youtube.com/embed/fl5w6iv8p6E" title="Explicação sobre como funciona a energia solar" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowFullScreen />

          <div className={styles.explanation}>
            <p>A Interconnect conecta você a usinas de energia solar na sua região.</p>
            <p>Você não precisa instalar painéis solares ou fazer qualquer obra. Tudo é feito 100% online e sem fidelidade ou multa</p>
            <p>A gente produz energia mais barata e a distribuidora da sua região segue responsável pela entrega.</p>
            <p>Você passa a pagar a energia que consome diretamente à usina, e, nós cuidaremos da fatura da distribuidora.</p>
          </div>

        </div>

        <button>Escolha o melhor plano para você</button>

      </div>

      {/*Passos*/}

      <div className={styles.steps} id="steps">

        <h1>Sua casa com energia solar em apenas 3 passos</h1>

        <div className={styles.container}>
          <div className={styles.step}>
            <span>1</span>
            <hr />
            <h1>ENVIE SUA FATURA</h1>
            <p>Com a fatura teremos informações importantes para conseguirmos elaborar a melhor proposta de economia para você</p>
          </div>

          <div className={styles.step}>
            <span>2</span>
            <hr/>
            <h1>ANÁLISE</h1>
            <p>Iremos analisar seu consumo e com base no mesmo iremos escolher a melhor usina do nosso portifólio e definir a quantidade de cotas necessátias para atender sua necessidade</p>
          </div>

          <div className={styles.step}>
            <span>3</span>
            <hr />
            <h1>PARABÉNS!</h1>
            <p>Parabéns, iremos entrar em contato com você para farmos seguimento aos próximos passos da sua econômia!</p>
          </div>
        </div>

      </div>

      {/*Perguntas frequentes*/}

      <div className={styles.commonQuestions} id="commonQuestions">
        <h1>Perguntas frequentes</h1>


        <div className={styles.questionsComponent}>

          {/*Primeira pergunta*/}
          <div className={styles.questionComponent}>

            <div className={styles.question} onClick={() => setQuestionOneIsOpen(!questionOneIsOpen)}>
              <h1> O que a Interconnect faz?</h1>
              {questionOneIsOpen ? <AiOutlineClose size={20} color='3ACF49'/> : <RiArrowDropDownLine size={40} color='3ACF49'/>}
            </div>

            {questionOneIsOpen &&
              <div className={styles.response}>
                <p>
                  Somos uma plataforma de compartilhamento de créditos de energia limpa e renovável que interliga micro e mini usinas de geração às Unidades Consumidoras de energia elétrica.
                  Dessa forma, proporcionamos economia de energia sem investimentos para os consumidores
                </p>
              </div>
            }
          </div>

          {/*Segunda pergunta*/}
          <div className={styles.questionComponent}>

            <div className={styles.question} onClick={() => setQuestionTwoIsOpen(!questionTwoIsOpen)}>
              <h1> Quem pode aderir?</h1>
              {questionTwoIsOpen ? <AiOutlineClose size={20} color='3ACF49'/> : <RiArrowDropDownLine size={40} color='3ACF49'/>}
            </div>

            {questionTwoIsOpen &&
              <div className={styles.response}>
                <p>Qualquer pessoa física ou jurídica que possui uma, ou mais, Unidades Consumidoras de energia de baixa ou alta tensão na mesma área de concessão que possuímos usinas parceiras</p>
              </div>
            }

          </div>

          {/*Terceira pergunta*/}
          <div className={styles.questionComponent}>

            <div className={styles.question} onClick={() => setQuestionThreeIsOpen(!questionThreeIsOpen)}>
              <h1> O serviço que a Interconnect oferece é regulamentado?</h1>
              {questionThreeIsOpen ? <AiOutlineClose size={20} color='3ACF49'/> : <RiArrowDropDownLine size={40} color='3ACF49'/>}
            </div>


            {questionThreeIsOpen &&
              <div className={styles.response}>
                <p>
                  Sim. A ANEEL regulamentou essa atividade através da Lei 14300/22, permitindo aos consumidores de energia elétrica de todo país produzirem sua própria energia elétrica, seja instalando um sistema solar no telhado
                  da sua casa/estabelecimento, seja participando do compartilhamento de créditos de energia gerados por usinas remotamente.
                </p>
              </div>
            }
          </div>

        </div>

      </div>

      {/*Contato*/}

      <div className={styles.contact} id="contact">
        <h1>Ainda tem alguma dúvida?</h1>

        <p>Nossos colaboradores estão preparados para atende-lô da melhor forma possível!</p>

        <a className={styles.whatsAppButton} href='https://api.whatsapp.com/send?phone=5585981581536&text=Ol%C3%A1,%20tudo%20bem?%0AVim%20pelo%20site%20da%20Interconnect%20e%20quero%20economizar%20na%20minha%20conta%20de%20energia!' target="_blank" rel="noopener noreferrer">
          <BsWhatsapp size={50} color="FFF" />
          <p>Entre em contato conosco no Whatsapp!</p>
        </a>

        {/*Componente do rodapé*/}
        <Footer />

      </div>

    </main>
  )
}
