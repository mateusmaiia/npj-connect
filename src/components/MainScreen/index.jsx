import './style.css'
import FAQDropDown from '../FAQDropDown';


export function MainScreen() {
    return (
        <main>
            <section className='container-wrapper'>
                <article id='intro' className='bg-darkblue'>
                    <div>
                        <h1 className='title'>
                            O SEU ACESSO<br />
                            <span className='title-highlight'>GRATUITO</span> À LEI
                        </h1>
                    </div>

                    <div className='row'></div>

                    <p className='description'>
                        &quot;NPJ Connect&quot; é um sistema web inovador projetado para
                        facilitar a interação eficiente e segura entre clientes e
                        advogados. Este sistema oferece uma plataforma intuitiva e
                        amigável que permite aos clientes em busca de serviços
                        jurídicos encontrar facilmente advogados qualificados para
                        suas necessidades específicas.
                    </p>
                    <button className='button'>
                        CONECTE-SE
                    </button>
                </article>

                <article id='goals' className='bg-white'>
                    <div>
                        <h1 className='title'>
                            <span className='title-smaller'>PRA QUE SERVE</span><br />
                            O NPJ CONNECT?
                        </h1>
                    </div>

                    <p>
                        O sistema web oferecido gratuitamente pela nossa plataforma tem
                        como principal objetivo <strong>oferecer suporte jurídico à comunidade</strong> por
                        meio do Núcleo de Práticas Jurídicas (NPJ) da <strong>UNINASSAU</strong>.
                        Com acesso simplificado, buscamos proporcionar um canal direto
                        para consultas legais, orientações e esclarecimentos de <strong>questões
                        jurídicas relevantes</strong>.
                    </p>

                    <p>
                        Nosso compromisso é fornecer um serviço que <strong>aproxime a expertise jurídica
                        acadêmica da comunidade</strong>, oferecendo informações precisas e confiáveis para
                        auxiliar nas demandas legais cotidianas. Com o apoio dos profissionais e
                        estudantes do NPJ, buscamos promover a acessibilidade à justiça,
                        contribuindo para o entendimento dos <strong>direitos e deveres legais de forma
                        clara e acessível a todos</strong>.
                    </p>

                    <img src='src/assets/img/dia-a-dia.png' alt="Dia a dia do escritorio" />
                </article>

                <article id='about-us' className='bg-darkblue'>
                    <div>
                        <h1 className='title'>
                            QUEM SOMOS?
                        </h1>
                    </div>

                    <p>
                        Nossa equipe é composta por <strong>profissionais comprometidos e estudantes apaixonados
                        pelo direito</strong>, todos engajados em oferecer um serviço que promove a justiça e a
                        compreensão dos direitos e deveres legais. Combinamos a expertise acadêmica do
                        NPJ com a vontade de ajudar a comunidade a compreender questões legais de forma
                        clara e simplificada.
                    </p>

                    <button className='button'>
                        CONHEÇA-NOS
                    </button>
                </article>

                <article id='faq' className='bg-white'>

                    <h2 className='title'>
                        <span className='title-smaller'>PERGUNTAS FREQUENTES</span>
                    </h2>

                    <FAQDropDown />

                </article>

            </section>
        </main>
    )
}
