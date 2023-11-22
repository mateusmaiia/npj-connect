import './style.css'


export function MainScreen(){
    return(
        <main>
            <section className='container-wrapper'>
                <div>
                    <h1 className='name'>
                        O SEU ACESSO <span>GRATUITO</span> À LEI
                    </h1>
                </div>

                <div className='row'>
                    
                </div>

                <p className='about-us'>
                    NPJ Conect é um sistema web inovador projetado para
                    facilitar a interação eficiente e segura entre clientes e 
                    advogados. Este sistema oferece uma plataforma intuitiva e
                    amigável que permite aos clientes em busca de serviços
                    jurídicos encontrar facilmente advogados qualificados para
                    suas necessidades específicas.
                </p>

                <button className='button'>
                    CONECTE-SE
                </button>
            </section>
        </main>
    )
}

