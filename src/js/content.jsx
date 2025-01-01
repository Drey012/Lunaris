import React, { useContext, useState, useEffect } from 'react';
import Slider from 'react-slick';
import '../css/global.scss';
import '../css/content.scss';
import lightBanner from './assets/lightBanner.png';
import darkBanner from './assets/darkBanner.png';
import { ThemeContext } from './themeContext';
import StarRating from "./starRating";

function Content() {
  const { theme } = useContext(ThemeContext);
  const [banner, setBanner] = useState(lightBanner);

  useEffect(() => {
    setBanner(theme === 'dark' ? darkBanner : lightBanner);
  }, [theme]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const produtos = [
    { id: 1, nome: 'Absorvente Noturno', preco: 'R$ 26,99', img: 'src/js/assets/Noturno.png' },
    { id: 2, nome: 'Absorvente Externo', preco: 'R$ 26,99', img: 'src/js/assets/Externo.png' },
    { id: 3, nome: 'Protetor Diário', preco: 'R$ 26,99', img: 'src/js/assets/Diario.png' },
    { id: 4, nome: 'Protetor Dia e Noite', preco: 'R$ 26,99', img: 'src/js/assets/DiaNoite.png' },
    { id: 5, nome: 'Absorvente Sem Abas', preco: 'R$ 26,99', img: 'src/js/assets/Toallas.png' },
  ];

  const feedbacks = [
    { id: 1, nome: 'Olivia Tanake', cargo: 'Pesquisadora da USP', title: 'Impressionante!', comentario: '"Ótima qualidade e super confortável!"', pic: 'src/js/assets/Olivia.png' },
    { id: 2, nome: 'Sr. Alfons', cargo: 'CEO da Representa', title: 'Top', comentario: '"Usei e aprovei! Representou!"', pic: 'src/js/assets/user.png' },
    { id: 3, nome: 'Ana Júlia Moraes', cargo: 'Gerente da oBoticário', title: 'Recomendo', comentario: '"Produto com alta tecnologia!"', pic: 'src/js/assets/AnaJulia.png' },
  ];

  return (
    <div className="content">
      <div className='Banner-Container' data-aos="fade-in"></div>
      <img src={banner} alt="Banner" data-aos="fade-in" />
      <div className="container">
        <div className="title">
          <h1 id='produtos-title' data-aos="fade-up">✧Nossos Produtos✧</h1>
        </div>
        <div className="produtos" id='produtos' data-aos="fade-up">
          <Slider {...settings}>
            {produtos.map((produto) => (
              <div className="card-container" key={produto.id} data-aos="zoom-in">
                <div className="card">
                  <img className="image" src={produto.img} alt={produto.nome} data-aos="flip-left" />
                  <StarRating />
                  <h3>{produto.nome}</h3>
                  <p>{produto.preco}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="cta-section" data-aos="fade-up">
      </div>

      <div className="feedbacks" id='feedbacks' data-aos="fade-up">
        <h1 id='feedbacks-title' data-aos="fade-up">✧Feedbacks✧</h1>
        <Slider {...settings}>
          {feedbacks.map((feedback) => (
            <div className="card-container" key={feedback.id} data-aos="zoom-in">
              <div className="feed-card">
                <h1 className='title' data-aos="flip-left">{feedback.title}</h1>
                <p className="comentario" data-aos="fade-up">{feedback.comentario}</p>
                <div className="perfil-container" data-aos="fade-left">
                  <img className="perfil" src={feedback.pic} alt={feedback.nome} />
                  <div className="dados">
                    <h3>{feedback.nome}</h3>
                    <p>{feedback.cargo}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="form-container" id='contato'>
        <div className="nuvem-fundo"></div>
        <form action="https://formsubmit.co/absorventeslunaris@gmail.com" method='POST' data-aos="fade-up">
          <h1>Sua opinião nos <span>Ilumina!</span></h1>

          <input type="text" name="nome" id="inome" placeholder="Nome" required data-aos="zoom-in" />

          <input type="email" name="email" id="iemail" placeholder="Email" required data-aos="zoom-in" />

          <textarea name="mensagem" id="imensagem" cols="30" rows="10" placeholder='Mensagem' required data-aos="zoom-in"></textarea>

          <button className="button1" type="submit" data-aos="zoom-in">Enviar</button>

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="http://localhost:5173/agradecimento.html" />
        </form>
        <div className="nuvem-frente" data-aos="fade-up"></div>
        
      </div>
    </div>
  );
}

export default Content;
