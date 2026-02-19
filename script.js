
/* =========================================
   SCRIPT.JS - Main Javascript File
   1. Translations (i18n)
   2. DOM Elements & State
   3. Navigation Logic
   4. Scroll Animations
   5. Testimonials Carousel
   6. FAQ Accordion
   7. Contact Form & Chatbot (Eva)
   8. Exit Intent Modal
   ========================================= */

const translations = {
    pt: {
        nav_home: "Início",
        nav_routes: "Tours",
        nav_skipper: "Passeios de Barco",
        nav_services: "Serviços",
        nav_book: "Reservar",
        hero_title: "A sua viagem começa com um <span class='highlight'>sorriso.</span>",
        hero_subtitle: "Conforto, segurança e pontualidade. O transfer que merece.",
        hero_cta_primary: "Agendar Agora",
        hero_cta_secondary: "Ver Destinos",
        routes_title: "Tours mais solicitados",
        routes_subtitle: "Explore os destinos mais populares de Portugal connosco.",
        route_1_title: "Serra da Estrela",
        route_1_desc: "A Serra da Estrela, situada na região do Centro, designa a cadeia montanhosa onde se encontram as maiores altitudes de Portugal Continental.",
        inc_transport_return: "Transporte de ida e volta (ponto de recolha)",
        inc_ac: "Transporte em veículo com ar condicionado",
        inc_insurance: "Seguro de acidentes pessoais",
        inc_free_time: "Tempo livre para explorar (sem guia turístico)",
        exc_lunch: "Almoço",
        exc_tickets_monuments: "Bilhetes para monumentos/parques/actividades",
        feature_reception: "Receção no terminal",
        feature_help: "Ajuda com bagagem",
        feature_wifi: "Wi-Fi a bordo",
        exc_stops: "Paragens extra",
        exc_tickets: "Bilhetes",
        exc_meals: "Refeições",
        exc_hotel: "Alojamento",
        btn_book: "Saiba Mais",
        route_2_title: "Sintra",
        route_2_desc: "Viva um dia inesquecível! Explore ruas medievais, cenários marcantes e um passeio confortável até Sintra, repleta de maravilhas arquitetónicas e natureza vibrante.",
        route_2_price: "A partir de €120,00",
        feature_duration: "Duração de 4 horas",
        feature_guide: "Guia experiente",
        feature_stops: "Paragens para fotos",
        feature_fullday: "Dia completo",
        feature_beaches: "Melhores praias",
        feature_luxury: "Carro de luxo",
        route_3_title: "Cabo da Roca",
        route_3_desc: "Onde a terra termina e o mar começa, uma das vistas mais maravilhosas, o ponto mais ocidental da Europa continental. É um lugar de beleza natural, com imponentes falésias de 150 metros de altura. Paisagem deslumbrante e um verdadeiro paraíso para os amantes da fotografia.",
        route_4_title: "Cascais",
        route_4_desc: "A vila de Cascais tornou-se no século XIX, um destino de verão predileto da aristocracia e das famílias nobres europeias, devido à sua localização idílica e clima agradável. Ainda hoje é um destino favorito dos portugueses e da elite internacional.",
        route_5_title: "Évora",
        route_5_desc: "Évora é a capital da região centro-sul de Portugal, o Alentejo. No centro histórico da cidade encontra-se o antigo Templo romano de Évora (também conhecido por Templo de Diana)",
        route_6_title: "Fátima",
        route_6_desc: "Um dos maiores centros de peregrinação Mariana do mundo, o Santuário de Fátima recebe milhões de visitantes todos os anos, sendo hoje um local de fé, reflexão e profunda devoção.",
        route_7_title: "Nazaré",
        route_7_desc: "Viva um momento inesquecível nesta vila piscatória conhecida mundialmente pelas suas ondas gigantes!",
        route_8_title: "Portinho da Arrábida",
        route_8_desc: "Situada no Parque Natural da Serra da Arrábida, a Praia do Portinho é uma das mais bonitas de Portugal. As suas areias brancas e finas e os variados tons de azul das águas límpidas contrastam com a verdejante vegetação da Serra, formando um belíssimo cenário.",
        route_9_title: "Aveiro",
        route_9_desc: "Conhecida como a \"Veneza Portuguesa\", Aveiro é famosa pelos seus canais urbanos navegados por barcos moliceiros e pela sua forte ligação à ria e ao sal.",
        services_title: "Os nossos serviços",
        services_subtitle: "Flexibilidade e profissionalismo em cada quilómetro.",
        srv_transfers: "Transfers",
        srv_transfers_desc: "De e para aeroportos, hotéis e estações com pontualidade.",
        srv_tours: "Tours",
        srv_tours_desc: "Roteiros turísticos personalizados para conhecer o melhor de Portugal.",
        srv_events: "Eventos",
        srv_events_desc: "Transporte para casamentos, congressos e eventos corporativos.",
        srv_airport: "Aeroporto",
        srv_airport_desc: "Monitorização de voos e receção personalizada no desembarque.",

        srv_executive: "Transporte Executivo",
        srv_executive_desc: "Viagens corporativas com conforto e eficiência.",
        srv_cruise: "Cruzeiros",
        srv_cruise_desc: "Transfers diretos para o terminal de cruzeiros de Lisboa.",
        srv_private: "Transporte Particular",
        srv_private_desc: "Viagens privadas sob medida para as suas necessidades diárias.",
        srv_boat_tours: "Passeios de Barco",
        srv_boat_tours_desc: "Sinta a liberdade do mar numa experiência vibrante, inesquecível e exclusiva.",
        about_title: "Sobre Nós",
        about_subtitle: "Mais do que transporte, entregamos tranquilidade.",
        about_p1: "A Etransfers nasceu com o objetivo de oferecer serviços de transfers privados fiáveis, pontuais e confortáveis, adaptados às necessidades de cada cliente. Trabalhamos com foco na qualidade do serviço, na atenção ao detalhe e numa experiência simples desde a reserva até ao destino final.",
        about_p2: "A nossa equipa é composta por motoristas experientes e certificados, com profundo conhecimento dos percursos e do funcionamento local, garantindo viagens seguras, eficientes e sem preocupações, seja em deslocações de lazer ou profissionais.",
        about_feat_1: "Visão: Conectar pessoas e destinos com qualidade e confiança.",
        about_feat_2: "Missão: Garantir conforto e tranquilidade em cada viagem.",
        about_feat_3: "Valores: Profissionalismo, segurança, proximidade.",
        comfort_title: "Conforto de Primeira Classe",
        comfort_desc: "Veículo moderno, seguro e adaptável às necessidades de diferentes clientes.",
        comf_seats: "Carrinha de 9 lugares",
        comf_luggage: "Capacidade para até 10 malas",
        comf_ac: "Ar condicionado",
        comf_windows: "Vidros escurecidos",
        comf_child_seats: "Cadeiras para crianças",
        comf_child_seats_desc: "(mediante solicitação)",
        comf_water: "Água incluída",
        btn_check_fleet: "Alugar Agora",
        comp_title: "Passeios de Barco e Serviços de Skipper",
        comp_subtitle: "Experiências exclusivas para atender todas as suas necessidades.",
        comp_1_title: "Pack Diversão Top Max",

        comp_1_desc: "Desfrute de um passeio de barco pela costa até ao Seixal (Ponta dos Corvos) ou Paço D'Arcos (Giribita). A experiência inclui vistas fantásticas e uma paragem para mergulhos, atividades e petiscos, sendo ideal para relaxar e conviver com família ou amigos no mar.",
        comp_info_title: "Informações do serviço",
        comp_1_departure: "Partida: Doca do Bom Sucesso",
        comp_1_arrival: "Chegada: Doca do Bom Sucesso",
        comp_1_min_pax: "Número mínimo de ocupantes: 2 pessoas",
        comp_1_max_pax: "Número máximo de ocupantes: 8 pessoas",
        comp_1_duration: "Duração: 03h00",
        comp_2_title: "Pack Diversão Top Económico",
        comp_2_desc: "Trata-se de um passeio costeiro de barco com destino à Praia da Ponta dos Corvos (Seixal) ou à Praia da Giribita (Paço D'Arcos). A experiência inclui navegação panorâmica, paragem para mergulhos, comes e bebes e atividades, sendo o cenário ideal para relaxar e divertir-se com a família ou amigos.",
        comp_2_departure: "Partida: Doca do Bom Sucesso",
        comp_2_arrival: "Chegada: Doca do Bom Sucesso",
        comp_2_min_pax: "Número mínimo de ocupantes: 2 pessoas",
        comp_2_max_pax: "Número máximo de ocupantes: 8 pessoas",
        comp_2_duration: "Duração: 02h00",
        comp_3_title: "Pack Diversão Exclusive",
        comp_3_desc: "Este pack é perfeito para navegar ao longo da bela costa entre Lisboa e Cascais, passando por várias praias, como Praia da Cruz Quebrada, Caxias, Paço D'Arcos, Torre, Moinho, Carcavelos, Parede, Avencas, Bafureira, São Pedro do Estoril, Azarujinha, Poça, Pescoço Cavalo, Tamariz, Moitas, Duquesa, Conceição, Albatroz, Rainha e Pescadores.",
        comp_3_departure: "Partida: Doca de Oeiras",
        comp_3_arrival: "Chegada: Doca de Oeiras",
        comp_3_note: "Nota: Informamos que, neste local, é aplicada uma taxa de embarque de passageiros no valor de 7€ (por grupo), a ser incluída no valor final.",
        comp_3_min_pax: "Número mínimo de ocupantes: 2 pessoas",
        comp_3_max_pax: "Número máximo de ocupantes: 6 pessoas",
        comp_3_duration: "Duração: 4h",
        comp_4_title: "Pack Cultural",
        comp_4_desc: "Este pack para além de um belo passeio permite a observação de marcos históricos importantes de uma perspetiva diferente tais como o Padrão dos Descobrimentos, Torre de Belém, Cristo Rei, Ponte 25 de Abril, MAAT e Praça do Comercio.",
        comp_4_departure: "Partida: Doca do Bom Sucesso",
        comp_4_arrival: "Chegada: Doca do Bom Sucesso",
        comp_4_min_pax: "Mínimo de ocupantes: 2 pessoas",
        comp_4_max_pax: "Máximo de ocupantes: 8 Pessoas",
        comp_4_duration: "Duração: 1h30",
        comp_5_title: "Pack Bugiar",
        comp_5_desc: "Este pack inclui a observação de um dos monumentos mais importantes da história da navegação mundial e nacional, o Farol do Bugio, o mesmo que dá as boas-vindas aos marinheiros na entrada da barra de Lisboa.",
        comp_5_departure: "Partida: Doca do Bom Sucesso",
        comp_5_arrival: "Chegada: Doca do Bom Sucesso",
        comp_5_min_pax: "Número mínimo de ocupantes: 2 pessoas",
        comp_5_max_pax: "Número máximo de ocupantes: 6 pessoas",
        comp_5_duration: "Duração: 1h30m aproximadamente",
        comp_6_title: "Aluguer de Embarcação sem Skipper",
        comp_6_desc: "Para quem tem carta de navegação, mas não um barco próprio! Agora pode desfrutar da liberdade de navegar sem preocupações ou encargos de possuir uma embarcação. Oferecemos um serviço de aluguer flexível para que possa explorar as águas ao seu ritmo.",
        comp_6_rates_title: "Vários packs de várias horas disponíveis.",
        comp_6_note: "Antes da partida, será recebido por um responsável que fornecerá todas as informações necessárias para uma experiência segura e confortável. No regresso, terá apoio no desembarque para garantir um processo simples e sem complicações.",
        btn_know_more: "Saiba Mais",
        reviews_title: "O que dizem nossos clientes",
        tourist: "Turista",
        business: "Viajante",
        client: "Cliente",
        review_1: "\"Serviço de excelência. Pontualidade absoluta, viatura confortável e um atendimento muito profissional. Recomendo a Etransfers sem qualquer reserva.\"",
        review_1_author: "Marta S.",
        review_role: "Cliente Satisfeita",
        chat_status: "Online",
        chat_intro: "Olá! Sou a Eva. Como posso ajudar?",
        chat_opt_quote: "Pedir Orçamento",
        chat_opt_faq: "Dúvidas Frequentes",
        chat_opt_human: "Falar com Humano",
        chat_ask_dest: "Para onde gostaria de ir?",
        chat_ask_name: "Antes de começarmos, qual é o seu nome?",
        chat_ask_date: "Qual a data e hora prevista?",
        chat_ask_pax: "Quantas pessoas viajarão?",
        chat_final: "Perfeito! Clique abaixo para finalizar no WhatsApp:",
        chat_ask_custom_dest: "Qual o destino pretendido?",
        chat_final: "Perfeito! Clique abaixo para finalizar no WhatsApp:",
        wa_start: "Olá! Sou",
        wa_want_quote: "Gostaria de um orçamento:",
        wa_service: "Serviço",
        wa_dest: "Opção/Destino",
        wa_date: "Data",
        wa_pax: "Pessoas",
        chat_btn_whatsapp: "Enviar no WhatsApp",
        chat_ask_service: "Qual o tipo de serviço que procura?",
        chat_opt_skipper: "Skipper / Barco",
        chat_opt_transfer: "Transfer / Van",
        chat_ask_boat_opt: "Que tipo de passeio prefere?",
        chat_ask_route: "Para onde gostaria de ir?",
        chat_opt_other: "Outro",
        chat_ask_date_cal: "Selecione a data:",
        chat_ask_pax_num: "Selecione o número de passageiros:",
        chat_btn_confirm: "Confirmar",
        // Boat Packs
        pack_top_max: "Pack Diversão Top Max",
        pack_top_eco: "Pack Diversão Top Económico",
        pack_exclusive: "Pack Diversão Exclusive",
        pack_cultural: "Pack Cultural",
        pack_bugiar: "Pack Bugiar",
        pack_no_skipper: "Aluguer Sem Skipper",
        // Destinations
        dest_serra: "Serra da Estrela",
        dest_sintra: "Sintra",
        dest_cabo: "Cabo da Roca",
        dest_cascais: "Cascais",
        dest_evora: "Évora",
        dest_fatima: "Fátima",
        dest_nazare: "Nazaré",
        dest_arrabida: "Portinho da Arrábida",
        dest_aveiro: "Aveiro",
        dest_algarve: "Algarve",
        // FAQ
        faq_prices: "Os preços são fixos?",
        faq_payment: "Formas de pagamento?",
        faq_booking: "Como fazer reserva?",
        faq_luggage: "Posso levar bagagem volumosa?",
        faq_delays: "E se o voo atrasar?",
        faq_cancel: "Como cancelar ou alterar?",
        faq_safety: "Segurança",
        faq_why: "Porquê nós",
        btn_back: "Voltar",
        // Placeholders
        ph_name: "Seu nome",
        review_2: "\"Processo de reserva simples e serviço irrepreensível. O motorista foi extremamente simpático e cumpriu todos os horários.\"",
        review_2_author: "João R.",
        review_3: "\"Transfer rápido, seguro e confortável. Superou as expectativas e tornou a nossa chegada muito mais tranquila.\"",
        review_3_author: "Ana e Ricardo M.",
        review_4: "\"Excelente relação qualidade-preço. Comunicação clara e total confiança desde o primeiro contacto.\"",
        review_4_author: "Carlos F.",
        review_5: "\"Utilizamos a Etransfers sempre que viajamos. Consistência, profissionalismo e atenção ao detalhe.\"",
        review_5_author: "Sofia L.",
        faq_title: "Perguntas Frequentes",
        faq_1_q: "O que é a ETransfers?",
        faq_1_a: "A ETransfers é uma empresa especializada em serviços de transfer privado e partilhado, garantindo transporte confortável, seguro e pontual entre aeroportos, hotéis, alojamentos locais, portos, estações e outros destinos turísticos.",
        faq_2_q: "Que tipos de transfers a ETransfers disponibiliza?",
        faq_2_a: "A ETransfers oferece transfers de aeroporto, transfers privados, transfers partilhados, transfers turísticos, transporte porta-a-porta e serviços personalizados para particulares, famílias, grupos e empresas.",
        faq_3_q: "A ETransfers realiza transfers de e para aeroportos?",
        faq_3_a: "Sim. A ETransfers efetua transfers de e para aeroportos, assegurando recolha pontual, acompanhamento do voo em tempo real e transporte direto até ao destino final, sem paragens desnecessárias.",
        faq_4_q: "Os transfers da ETransfers são privados?",
        faq_4_a: "A maioria dos serviços são transfers privados, o que significa que o veículo é exclusivo para o cliente ou grupo, garantindo maior conforto, privacidade e flexibilidade de horários.",
        faq_5_q: "Em que zonas a ETransfers opera?",
        faq_5_a: "A ETransfers opera em Portugal, realizando transfers entre aeroportos, cidades, hotéis, alojamentos locais, portos de cruzeiros e principais pontos turísticos, mediante reserva prévia.",
        faq_6_q: "Como posso reservar um transfer com a ETransfers?",
        faq_6_a: "A reserva de um transfer com a ETransfers pode ser feita de forma simples através do site, indicando local de recolha, destino, data, hora e número de passageiros.",
        faq_7_q: "Os preços dos transfers são fixos?",
        faq_7_a: "Sim. Os preços dos transfers da ETransfers são fixos e transparentes, sem taxas ocultas, permitindo ao cliente saber exatamente quanto irá pagar antes de confirmar a reserva.",
        faq_8_q: "Os motoristas da ETransfers são profissionais?",
        faq_8_a: "Sim. Todos os motoristas da ETransfers são profissionais, experientes, devidamente licenciados e com profundo conhecimento dos percursos, garantindo uma viagem segura e confortável.",
        faq_9_q: "A ETransfers acompanha atrasos de voos?",
        faq_9_a: "Sim. A ETransfers faz monitorização de voos em tempo real, ajustando automaticamente o horário de recolha em caso de atraso, sem custos adicionais para o cliente.",
        faq_10_q: "Os veículos da ETransfers são confortáveis e seguros?",
        faq_10_a: "Sim. A frota da ETransfers é composta por veículos modernos, confortáveis, climatizados e sujeitos a manutenção regular, cumprindo todas as normas de segurança.",
        faq_11_q: "A ETransfers disponibiliza cadeiras para crianças?",
        faq_11_a: "Sim. Mediante pedido prévio, a ETransfers disponibiliza cadeiras auto para bebés e crianças, garantindo total segurança durante o transfer.",
        faq_12_q: "É possível transportar bagagem volumosa?",
        faq_12_a: "Sim. A ETransfers permite o transporte de bagagem volumosa, como malas grandes, carrinhos de bebé ou equipamento desportivo, devendo essa informação ser indicada no momento da reserva.",
        faq_13_q: "A ETransfers realiza transfers turísticos?",
        faq_13_a: "Sim. A ETransfers disponibiliza transfers turísticos personalizados, ideais para visitar locais de interesse, praias, cidades históricas e atrações turísticas, com horários flexíveis.",
        faq_14_q: "Posso alterar ou cancelar uma reserva?",
        faq_14_a: "Sim. É possível alterar ou cancelar uma reserva de transfer, de acordo com as condições indicadas no momento da reserva. Recomenda-se contactar a ETransfers com a maior antecedência possível.",
        faq_15_q: "Porque devo escolher a ETransfers?",
        faq_15_a: "A ETransfers destaca-se pela pontualidade, conforto, preços competitivos, atendimento personalizado e elevado padrão de qualidade, sendo uma solução fiável para transfers em Portugal.",
        contact_title: "Entre em Contacto",
        contact_desc: "Esclareça as suas dúvidas ou peça um orçamento sem compromisso.",
        contact_phone_title: "Telefone / WhatsApp",
        contact_email_title: "Email",
        contact_address_title: "Morada",
        form_name: "Nome",
        form_email: "Email",
        form_message: "Mensagem",
        form_name_ph: "O seu nome",
        form_email_ph: "o-seu@email.com",
        form_message_ph: "Como podemos ajudar?",
        form_btn: "Enviar Mensagem",
        footer_desc: "O seu parceiro de confiança em mobilidade e turismo em Portugal.",
        footer_links: "Links Rápidos",
        footer_legal: "Legal",
        footer_privacy: "Política de Privacidade",
        footer_terms: "Termos de Uso",
        // Popup
        popup_title: "Fale Connosco",
        popup_subtitle: "Escolha como prefere entrar em contacto:",
        popup_whatsapp: "WhatsApp",
        popup_phone: "Ligar Agora",
        popup_email: "Enviar Email",
        wa_interest_msg: "Olá! Gostaria de saber mais sobre: ",
        wa_site_msg: "Olá! Visitei o vosso site e gostaria de obter mais informações.",
        footer_copyright: "&copy; 2026 Etransfers. Todos os direitos reservados. Desenvolvido por <a href='https://webmari.pt' target='_blank' style='text-decoration: underline;'>Webmari.pt</a>",
        // Exit Intent
        exit_title: "Espere! Não vá ainda!",
        exit_subtitle: "Tem dúvidas sobre o seu transfer? <br> Fale diretamente com nossa equipa agora e receba resposta imediata.",
        exit_btn_wa: "Falar no WhatsApp Agora",
        exit_btn_email: "Enviar Email",
        exit_disclaimer: "Atendimento humano e personalizado."
    },
    en: {
        nav_home: "Home",
        nav_routes: "Tours",
        nav_skipper: "Boat Tours",
        nav_services: "Services",
        nav_book: "Book Now",
        hero_title: "Your journey begins with a <span class='highlight'>smile.</span>",
        hero_subtitle: "Comfort, safety, and punctuality. The transfer you deserve.",
        hero_cta_primary: "Book Now",
        hero_cta_secondary: "View Destinations",
        routes_title: "Most Requested Tours",
        routes_subtitle: "Explore Portugal's most popular destinations with us.",
        route_1_title: "Serra da Estrela",
        route_1_desc: "Serra da Estrela, located in the Center region, designates the mountain range where the highest altitudes of Mainland Portugal are found.",
        inc_transport_return: "Round trip transport (pick-up point)",
        inc_ac: "Transport in air-conditioned vehicle",
        inc_insurance: "Personal accident insurance",
        inc_free_time: "Free time to explore (no tour guide)",
        exc_lunch: "Lunch",
        exc_tickets_monuments: "Tickets for monuments/parks/activities",
        feature_reception: "Terminal reception",
        feature_help: "Luggage assistance",
        feature_wifi: "Onboard Wi-Fi",
        exc_stops: "Extra stops",
        exc_tickets: "Entrance fees",
        exc_meals: "Meals",
        exc_hotel: "Accommodation",
        btn_book: "Learn More",
        route_2_title: "Sintra",
        route_2_desc: "Live an unforgettable day! Explore medieval streets, striking scenery, and a comfortable ride to Sintra, full of architectural wonders and vibrant nature.",
        route_2_price: "From €120.00",
        feature_duration: "4 hours duration",
        feature_guide: "Expert guide",
        feature_stops: "Photo stops",
        feature_fullday: "Full day",
        feature_beaches: "Best beaches",
        feature_luxury: "Luxury car",
        route_3_title: "Cabo da Roca",
        route_3_desc: "Where the land ends and the sea begins, one of the most wonderful views, the westernmost point of continental Europe. It is a place of natural beauty, with imposing cliffs 150 meters high. Stunning landscape and a true paradise for photography lovers.",
        route_4_title: "Cascais",
        route_4_desc: "The village of Cascais became in the 19th century a favorite summer destination for the aristocracy and noble European families, due to its idyllic location and pleasant climate. Even today it is a favorite destination for the Portuguese and the international elite.",
        route_5_title: "Évora",
        route_5_desc: "Évora is the capital of Portugal's south-central region, the Alentejo. In the city's historic center stands the ancient Roman Temple of Évora (also known as the Temple of Diana).",
        route_6_title: "Fátima",
        route_6_desc: "One of the largest centers of Marian pilgrimage in the world, the Sanctuary of Fátima receives millions of visitors every year, being today a place of faith, reflection and deep devotion.",
        route_7_title: "Nazaré",
        route_7_desc: "Live an unforgettable moment in this fishing village known worldwide for its giant waves!",
        route_8_title: "Portinho da Arrábida",
        route_8_desc: "Located in the Arrábida Natural Park, Portinho Beach is one of the most beautiful in Portugal. Its fine white sands and the varied shades of blue of the clear waters contrast with the lush green vegetation of the Mountain, forming a beautiful scenery.",
        route_9_title: "Aveiro",
        route_9_desc: "Known as the \"Portuguese Venice\", Aveiro is famous for its urban canals navigated by moliceiro boats and for its strong connection to the estuary and salt.",
        services_title: "Our Services",
        services_subtitle: "Flexibility and professionalism in every kilometer.",
        srv_transfers: "Transfers",
        srv_transfers_desc: "To and from airports, hotels, and stations with punctuality.",
        srv_tours: "Tours",
        srv_tours_desc: "Customized tour itineraries for you to see the best of Portugal.",
        srv_events: "Events",
        srv_events_desc: "Transport for weddings, congresses, and corporate events.",
        srv_airport: "Airport",
        srv_airport_desc: "Flight monitoring and personalized reception at arrivals.",

        srv_executive: "Executive Transport",
        srv_executive_desc: "Corporate travel with comfort and efficiency.",
        srv_cruise: "Cruise Transfers",
        srv_cruise_desc: "Direct transfers to Lisbon cruise terminal.",
        srv_private: "Private Transport",
        srv_private_desc: "Private trips tailored to your daily needs.",
        srv_boat_tours: "Boat Tours",
        srv_boat_tours_desc: "Feel the freedom of the sea in a vibrant, unforgettable, and exclusive experience.",
        about_title: "About Us",
        about_subtitle: "More than just transport, we deliver peace of mind.",
        about_p1: "Etransfers was born with the goal of offering reliable, punctual, and comfortable private transfer services, tailored to each client's needs. We focus on service quality, attention to detail, and a simple experience from booking to the final destination.",
        about_p2: "Our team consists of experienced and certified drivers with deep knowledge of routes and local operations, ensuring safe, efficient, and worry-free journeys, whether for leisure or business.",
        about_feat_1: "Vision: Connecting people and destinations with quality and trust.",
        about_feat_2: "Mission: Ensuring comfort and peace of mind in every journey.",
        about_feat_3: "Values: Professionalism, safety, proximity.",
        comfort_title: "First Class Comfort",
        comfort_desc: "Modern, safe, and adaptable vehicle to meet different client needs.",
        comf_seats: "9-Seater Van",
        comf_luggage: "Capacity for up to 10 bags",
        comf_ac: "Air Conditioning",
        comf_windows: "  Tinted windows",
        comf_child_seats: "Child seats",
        comf_child_seats_desc: "(upon request)",
        comf_water: "Water included",
        btn_check_fleet: "Rent Now",
        comp_title: "Boat Tours and Skipper Services",
        comp_subtitle: "Exclusive experiences to meet all your needs.",
        comp_1_title: "Fun Pack Top Max",
        comp_1_title: "Fun Pack Top Max",
        comp_1_desc: "Enjoy a boat trip along the coast to Seixal (Ponta dos Corvos) or Paço D'Arcos (Giribita). The experience includes fantastic views and a stop for diving, activities, and snacks, making it ideal for relaxing and socializing with family or friends at sea.",
        comp_info_title: "Service Information",
        comp_1_departure: "Departure: Doca do Bom Sucesso",
        comp_1_arrival: "Arrival: Doca do Bom Sucesso",
        comp_1_min_pax: "Minimum number of occupants: 2 people",
        comp_1_max_pax: "Maximum number of occupants: 8 people",
        comp_1_duration: "Duration: 03h00",
        comp_2_title: "Fun Pack Top Economical",
        comp_2_desc: "This is a coastal boat trip to Ponta dos Corvos Beach (Seixal) or Giribita Beach (Paço D'Arcos). The experience includes panoramic navigation, stops for diving, food and drinks, and activities, making it the ideal setting to relax and have fun with family or friends.",
        comp_2_departure: "Departure: Doca do Bom Sucesso",
        comp_2_arrival: "Arrival: Doca do Bom Sucesso",
        comp_2_min_pax: "Minimum number of occupants: 2 people",
        comp_2_max_pax: "Maximum number of occupants: 8 people",
        comp_2_duration: "Duration: 02h00",
        comp_3_title: "Fun Pack Exclusive",
        comp_3_desc: "This pack is perfect for sailing along the beautiful coast between Lisbon and Cascais, passing by several beaches such as Cruz Quebrada, Caxias, Paço D'Arcos, Torre, Moinho, Carcavelos, Parede, Avencas, Bafureira, São Pedro do Estoril, Azarujinha, Poça, Pescoço Cavalo, Tamariz, Moitas, Duquesa, Conceição, Albatroz, Rainha, and Pescadores.",
        comp_3_departure: "Departure: Doca de Oeiras",
        comp_3_arrival: "Arrival: Doca de Oeiras",
        comp_3_note: "Note: Please be advised that a passenger boarding fee of €7 (per group) applies at this location, to be included in the final price.",
        comp_3_min_pax: "Minimum number of occupants: 2 people",
        comp_3_max_pax: "Maximum number of occupants: 6 people",
        comp_3_duration: "Duration: 4h",
        comp_4_title: "Cultural Pack",
        comp_4_desc: "In addition to a beautiful tour, this pack allows the observation of important historical landmarks from a different perspective, such as the Padrão dos Descobrimentos, Belém Tower, Cristo Rei, 25 de Abril Bridge, MAAT, and Praça do Comércio.",
        comp_4_departure: "Departure: Doca do Bom Sucesso",
        comp_4_arrival: "Arrival: Doca do Bom Sucesso",
        comp_4_min_pax: "Minimum occupants: 2 people",
        comp_4_max_pax: "Maximum occupants: 8 people",
        comp_4_duration: "Duration: 1h30",
        comp_5_title: "Bugiar Pack",
        comp_5_desc: "This pack includes the observation of one of the most important monuments in the history of world and national navigation, the Bugio Lighthouse, the same one that welcomes sailors at the entrance of the Lisbon bar.",
        comp_5_departure: "Departure: Doca do Bom Sucesso",
        comp_5_arrival: "Arrival: Doca do Bom Sucesso",
        comp_5_min_pax: "Minimum number of occupants: 2 people",
        comp_5_max_pax: "Maximum number of occupants: 6 people",
        comp_5_duration: "Duration: approximately 1h30m",
        comp_6_title: "Boat Rental without Skipper",
        comp_6_desc: "For those who have a sailing license but not their own boat! Now you can enjoy the freedom of sailing without the worries or burdens of owning a vessel. We offer a flexible rental service so you can explore the waters at your own pace.",
        comp_6_rates_title: "Several packs of various hours available.",
        comp_6_note: "Before departure, you will be met by a manager who will provide all the necessary information for a safe and comfortable experience. On return, you will have support disembarking to ensure a simple and hassle-free process.",
        btn_know_more: "Learn More",
        reviews_title: "What Our Clients Say",
        tourist: "Tourist",
        business: "Traveler",
        client: "Client",
        review_1: "\"Excellent service. Absolute punctuality, comfortable vehicle, and very professional service. I recommend ETransfers without any reservation.\"",
        review_1_author: "Marta S.",
        review_role: "Satisfied Client",
        chat_status: "Online",
        chat_intro: "Hello! I'm Eva. How can I help you?",
        chat_opt_quote: "Request Quote",
        chat_opt_faq: "FAQ",
        chat_opt_human: "Speak to Human",
        chat_ask_dest: "Where would you like to go?",
        chat_ask_name: "Before we start, what is your name?",
        chat_ask_date: "What is the date and time?",
        chat_ask_pax: "How many people?",
        chat_final: "Perfect! Click below to finish on WhatsApp:",
        chat_ask_custom_dest: "What is the intended destination?",
        chat_final: "Perfect! Click below to finish on WhatsApp:",
        wa_start: "Hello! I am",
        wa_want_quote: "I would like a quote:",
        wa_service: "Service",
        wa_dest: "Option/Destination",
        wa_date: "Date",
        wa_pax: "People",
        chat_btn_whatsapp: "Send on WhatsApp",
        chat_ask_service: "What type of service are you looking for?",
        chat_opt_skipper: "Skipper / Boat",
        chat_opt_transfer: "Transfer / Van",
        chat_ask_boat_opt: "What type of tour do you prefer?",
        chat_ask_route: "Where would you like to go?",
        chat_opt_other: "Other",
        chat_ask_date_cal: "Select the date:",
        chat_ask_pax_num: "Select number of passengers:",
        chat_btn_confirm: "Confirm",
        // Boat Packs
        pack_top_max: "Fun Pack Top Max",
        pack_top_eco: "Fun Pack Top Economical",
        pack_exclusive: "Fun Pack Exclusive",
        pack_cultural: "Cultural Pack",
        pack_bugiar: "Bugiar Pack",
        pack_no_skipper: "Boat Rental without Skipper",
        // Destinations
        dest_serra: "Serra da Estrela",
        dest_sintra: "Sintra",
        dest_cabo: "Cabo da Roca",
        dest_cascais: "Cascais",
        dest_evora: "Évora",
        dest_fatima: "Fátima",
        dest_nazare: "Nazaré",
        dest_arrabida: "Portinho da Arrábida",
        dest_aveiro: "Aveiro",
        dest_algarve: "Algarve",
        // FAQ
        faq_prices: "Are prices fixed?",
        faq_payment: "Payment methods?",
        faq_booking: "How to book?",
        faq_luggage: "Can I bring large luggage?",
        faq_delays: "What if flight delays?",
        faq_cancel: "How to cancel or change?",
        faq_safety: "Safety",
        faq_why: "Why Choose Us",
        btn_back: "Back",
        // Placeholders
        ph_name: "Your name",
        review_2: "\"Simple booking process and impeccable service. The driver was extremely friendly and met all schedules.\"",
        review_2_author: "João R.",
        review_3: "\"Fast, safe, and comfortable transfer. Exceeded expectations and made our arrival much smoother.\"",
        review_3_author: "Ana and Ricardo M.",
        review_4: "\"Excellent value for money. Clear communication and total trust from the first contact.\"",
        review_4_author: "Carlos F.",
        review_5: "\"We use ETransfers whenever we travel. Consistency, professionalism, and attention to detail.\"",
        review_5_author: "Sofia L.",
        faq_title: "Frequently Asked Questions",
        faq_1_q: "What is ETransfers?",
        faq_1_a: "ETransfers is a company specializing in private and shared transfer services, ensuring comfortable, safe, and punctual transport between airports, hotels, local accommodations, ports, stations, and other tourist destinations.",
        faq_2_q: "What types of transfers does ETransfers provide?",
        faq_2_a: "ETransfers offers airport transfers, private transfers, shared transfers, tourist transfers, door-to-door transport, and personalized services for individuals, families, groups, and companies.",
        faq_3_q: "Does ETransfers provide transfers to and from airports?",
        faq_3_a: "Yes. ETransfers provides transfers to and from airports, ensuring punctual pickup, real-time flight monitoring, and direct transport to the final destination without unnecessary stops.",
        faq_4_q: "Are ETransfers services private?",
        faq_4_a: "Most services are private transfers, meaning the vehicle is exclusive to the client or group, ensuring greater comfort, privacy, and schedule flexibility.",
        faq_5_q: "In which areas does ETransfers operate?",
        faq_5_a: "ETransfers operates in Portugal, providing transfers between airports, cities, hotels, local accommodations, cruise ports, and main tourist spots, upon prior reservation.",
        faq_6_q: "How can I book a transfer with ETransfers?",
        faq_6_a: "Booking a transfer with ETransfers can be done simply through the website, indicating the pickup location, destination, date, time, and number of passengers.",
        faq_7_q: "Are transfer prices fixed?",
        faq_7_a: "Yes. ETransfers transfer prices are fixed and transparent, with no hidden fees, allowing the client to know exactly how much they will pay before confirming the booking.",
        faq_8_q: "Are ETransfers drivers professional?",
        faq_8_a: "Yes. All ETransfers drivers are professional, experienced, duly licensed, and have deep knowledge of the routes, ensuring a safe and comfortable journey.",
        faq_9_q: "Does ETransfers monitor flight delays?",
        faq_9_a: "Yes. ETransfers monitors flights in real-time, automatically adjusting the pickup time in case of delay, at no additional cost to the client.",
        faq_10_q: "Are ETransfers vehicles comfortable and safe?",
        faq_10_a: "Yes. The ETransfers fleet consists of modern, comfortable, air-conditioned vehicles subject to regular maintenance, complying with all safety standards.",
        faq_11_q: "Does ETransfers provide child seats?",
        faq_11_a: "Yes. Upon prior request, ETransfers provides car seats for babies and children, ensuring total safety during the transfer.",
        faq_12_q: "Is it possible to transport bulky luggage?",
        faq_12_a: "Yes. ETransfers allows the transport of bulky luggage, such as large suitcases, baby strollers, or sports equipment; this information must be indicated at the time of booking.",
        faq_13_q: "Does ETransfers provide tourist transfers?",
        faq_13_a: "Yes. ETransfers offers personalized tourist transfers, ideal for visiting places of interest, beaches, historic cities, and tourist attractions, with flexible schedules.",
        faq_14_q: "Can I change or cancel a booking?",
        faq_14_a: "Yes. It is possible to change or cancel a transfer booking, according to the conditions indicated at the time of booking. It is recommended to contact ETransfers as far in advance as possible.",
        faq_15_q: "Why should I choose ETransfers?",
        faq_15_a: "ETransfers stands out for punctuality, comfort, competitive prices, personalized service, and high quality standards, being a reliable solution for transfers in Portugal.",
        contact_title: "Contact Us",
        contact_desc: "Ask your questions or get a quote without obligation.",
        contact_phone_title: "Phone / WhatsApp",
        contact_email_title: "Email",
        contact_address_title: "Address",
        form_name: "Name",
        form_email: "Email",
        form_message: "Message",
        form_name_ph: "Your name",
        form_email_ph: "your@email.com",
        form_message_ph: "How can we help?",
        form_btn: "Send Message",
        footer_desc: "Your trusted partner for mobility and tourism in Portugal.",
        footer_links: "Quick Links",
        footer_legal: "Legal",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Use",
        // Popup
        popup_title: "Contact Us",
        popup_subtitle: "Choose how you prefer to contact us:",
        popup_whatsapp: "WhatsApp",
        popup_phone: "Call Now",
        popup_email: "Send Email",
        wa_interest_msg: "Hello! I would like to know more about: ",
        wa_site_msg: "Hello! I visited your website and would like more information.",
        footer_copyright: "&copy; 2026 Etransfers. All rights reserved. Developed by <a href='https://webmari.pt' target='_blank' style='text-decoration: underline;'>Webmari.pt</a>",
        // Exit Intent
        exit_title: "Wait! Don't go yet!",
        exit_subtitle: "Have questions about your transfer? <br> Speak directly with our team now for an immediate response.",
        exit_btn_wa: "Chat on WhatsApp Now",
        exit_btn_email: "Send Email",
        exit_disclaimer: "Personalized human support."
    },
    es: {
        nav_home: "Inicio",
        nav_routes: "Tours",
        nav_skipper: "Paseos en Barco",
        nav_services: "Servicios",
        nav_book: "Reservar",
        hero_title: "Su viaje empieza con una <span class='highlight'>sonrisa.</span>",
        hero_subtitle: "Confort, seguridad y puntualidad. El traslado que usted merece.",
        hero_cta_primary: "Reservar Ahora",
        hero_cta_secondary: "Ver Destinos",
        routes_title: "Tours más solicitados",
        routes_subtitle: "Explore los destinos más populares de Portugal con nosotros.",
        route_1_title: "Serra da Estrela",
        route_1_desc: "La Serra da Estrela, situada en la región Centro, designa la cadena montañosa donde se encuentran las mayores altitudes de Portugal Continental.",
        inc_transport_return: "Transporte de ida y vuelta (punto de recogida)",
        inc_ac: "Transporte en vehículo con aire acondicionado",
        inc_insurance: "Seguro de accidentes personales",
        inc_free_time: "Tiempo libre para explorar (sin guía turístico)",
        exc_lunch: "Almuerzo",
        exc_tickets_monuments: "Entradas para monumentos/parques/actividades",
        feature_reception: "Recepción en terminal",
        feature_help: "Ayuda con equipaje",
        feature_wifi: "Wi-Fi a bordo",
        exc_stops: "Paradas extra",
        exc_tickets: "Entradas",
        exc_meals: "Comidas",
        exc_hotel: "Alojamiento",
        btn_book: "Saber Más",
        route_2_title: "Sintra",
        route_2_desc: "¡Vive un día inolvidable! Explora calles medievales, paisajes impactantes y un paseo cómodo hasta Sintra, repleta de maravillas arquitectónicas y naturaleza vibrante.",
        route_2_price: "Desde €120,00",
        feature_duration: "Duración de 4 horas",
        feature_guide: "Guía experto",
        feature_stops: "Paradas para fotos",
        feature_fullday: "Día completo",
        feature_beaches: "Mejores playas",
        feature_luxury: "Coche de lujo",
        route_3_title: "Cabo da Roca",
        route_3_desc: "Donde la tierra termina y el mar empieza, una de las vistas más maravillosas, el punto más occidental de la Europa continental. Es un lugar de belleza natural, con imponentes acantilados de 150 metros de altura. Paisaje deslumbrante y un verdadero paraíso para los amantes de la fotografía.",
        route_4_title: "Cascais",
        route_4_desc: "La villa de Cascais se convirtió en el siglo XIX en un destino de verano predilecto de la aristocracia y de las familias nobles europeas, debido a su ubicación idílica y clima agradable. Aún hoy es un destino favorito de los portugueses y de la élite internacional.",
        route_5_title: "Évora",
        route_5_desc: "Évora es la capital de la región centro-sur de Portugal, el Alentejo. En el centro histórico de la ciudad se encuentra el antiguo Templo romano de Évora (también conocido como Templo de Diana).",
        route_6_title: "Fátima",
        route_6_desc: "Uno de los mayores centros de peregrinación mariana del mundo, el Santuario de Fátima recibe millones de visitantes cada año, siendo hoy un lugar de fe, reflexión y profunda devoción.",
        route_7_title: "Nazaré",
        route_7_desc: "¡Viva un momento inolvidable en esta villa pesquera conocida mundialmente por sus olas gigantes!",
        route_8_title: "Portinho da Arrábida",
        route_8_desc: "Situada en el Parque Natural de la Sierra de Arrábida, la Playa del Portinho es una de las más bonitas de Portugal. Sus arenas blancas y finas y los variados tonos de azul de las aguas límpidas contrastan con la verde vegetación de la Sierra, formando un bellísimo escenario.",
        route_9_title: "Aveiro",
        route_9_desc: "Conocida como la \"Venecia portuguesa\", Aveiro es famosa por sus canales urbanos navegados por barcos moliceiros y por su fuerte conexión con la ría y la sal.",
        services_title: "Nuestros Servicios",
        services_subtitle: "Flexibilidad y profesionalismo en cada kilómetro.",
        srv_transfers: "Traslados",
        srv_transfers_desc: "Desde y hacia aeropuertos, hoteles y estaciones con puntualidad.",
        srv_tours: "Tours",
        srv_tours_desc: "Itinerarios turísticos personalizados para conocer lo mejor de Portugal.",
        srv_events: "Eventos",
        srv_events_desc: "Transporte para bodas, congresos y eventos corporativos.",
        srv_airport: "Aeropuerto",
        srv_airport_desc: "Monitoreo de vuelos y recepción personalizada a la llegada.",

        srv_executive: "Transporte Ejecutivo",
        srv_executive_desc: "Viajes corporativos con confort y eficiencia.",
        srv_cruise: "Cruceros",
        srv_cruise_desc: "Traslados directos a la terminal de cruceros de Lisboa.",
        srv_private: "Transporte Particular",
        srv_private_desc: "Viajes privados a medida de sus necesidades diarias.",
        srv_boat_tours: "Paseos en Barco",
        srv_boat_tours_desc: "Sienta la libertad del mar en una experiencia vibrante, inolvidable y exclusiva.",
        about_title: "Sobre Nosotros",
        about_subtitle: "Más que transporte, entregamos tranquilidad.",
        about_p1: "Etransfers nació con el objetivo de ofrecer servicios de traslados privados fiables, puntuales y cómodos, adaptados a las necesidades de cada cliente. Trabajamos enfocados en la calidad del servicio, la atención al detalle y una experiencia sencilla desde la reserva hasta el destino final.",
        about_p2: "Nuestro equipo está compuesto por conductores experimentados y certificados, con profundo conocimiento de las rutas y el funcionamiento local, garantizando viajes seguros, eficientes y sin preocupaciones, ya sea por ocio o negocios.",
        about_feat_1: "Visión: Conectar personas y destinos con calidad y confianza.",
        about_feat_2: "Misión: Garantizar confort y tranquilidad en cada viaje.",
        about_feat_3: "Valores: Profesionalismo, seguridad, cercanía.",
        comfort_title: "Confort de Primera Clase",
        comfort_desc: "Vehículo moderno, seguro y adaptable a las necesidades de diferentes clientes.",
        comf_seats: "Furgoneta de 9 plazas",
        comf_luggage: "Capacidad para hasta 10 maletas",
        comf_ac: "Aire acondicionado",
        comf_windows: " vidrios oscurecidos",
        comf_child_seats: "Asientos para niños",
        comf_child_seats_desc: "(bajo petición)",
        comf_water: "Agua incluida",
        btn_check_fleet: "Alquilar Ahora",
        comp_title: "Paseos en Barco y Servicios de Patrón",
        comp_subtitle: "Experiencias exclusivas para satisfacer todas sus necesidades.",
        comp_1_title: "Pack Diversión Top Max",
        comp_1_title: "Pack Diversión Top Max",
        comp_1_desc: "Disfrute de un paseo en barco por la costa hasta Seixal (Ponta dos Corvos) o Paço D'Arcos (Giribita). La experiencia incluye vistas fantásticas y una parada para zambullidas, actividades y aperitivos, siendo ideal para relajarse y convivir con familia o amigos en el mar.",
        comp_info_title: "Información del servicio",
        comp_1_departure: "Salida: Doca do Bom Sucesso",
        comp_1_arrival: "Llegada: Doca do Bom Sucesso",
        comp_1_min_pax: "Número mínimo de ocupantes: 2 personas",
        comp_1_max_pax: "Número máximo de ocupantes: 8 personas",
        comp_1_duration: "Duración: 03h00",
        comp_2_title: "Pack Diversión Top Económico",
        comp_2_desc: "Se trata de un paseo costero en barco con destino a la Playa de Ponta dos Corvos (Seixal) o a la Playa de Giribita (Paço D'Arcos). La experiencia incluye navegación panorámica, parada para zambullidas, comida y bebida y actividades, siendo el escenario ideal para relajarse y divertirse con la familia o amigos.",
        comp_2_departure: "Salida: Doca do Bom Sucesso",
        comp_2_arrival: "Llegada: Doca do Bom Sucesso",
        comp_2_min_pax: "Número mínimo de ocupantes: 2 personas",
        comp_2_max_pax: "Número máximo de ocupantes: 8 personas",
        comp_2_duration: "Duración: 02h00",
        comp_3_title: "Pack Diversión Exclusive",
        comp_3_desc: "Este pack es perfecto para navegar a lo largo de la hermosa costa entre Lisboa y Cascais, pasando por varias playas como Praia da Cruz Quebrada, Caxias, Paço D'Arcos, Torre, Moinho, Carcavelos, Parede, Avencas, Bafureira, São Pedro do Estoril, Azarujinha, Poça, Pescoço Cavalo, Tamariz, Moitas, Duquesa, Conceição, Albatroz, Rainha y Pescadores.",
        comp_3_departure: "Salida: Doca de Oeiras",
        comp_3_arrival: "Llegada: Doca de Oeiras",
        comp_3_note: "Nota: Informamos que, en este lugar, se aplica una tasa de embarque de pasajeros por valor de 7€ (por grupo), a incluir en el precio final.",
        comp_3_min_pax: "Número mínimo de ocupantes: 2 personas",
        comp_3_max_pax: "Número máximo de ocupantes: 6 personas",
        comp_3_duration: "Duración: 4h",
        comp_4_title: "Pack Cultural",
        comp_4_desc: "Además de un hermoso paseo, este pack permite la observación de importantes hitos históricos desde una perspectiva diferente, como el Padrón de los Descubrimientos, la Torre de Belém, el Cristo Rey, el Puente 25 de Abril, el MAAT y la Plaza del Comercio.",
        comp_4_departure: "Salida: Doca do Bom Sucesso",
        comp_4_arrival: "Llegada: Doca do Bom Sucesso",
        comp_4_min_pax: "Mínimo de ocupantes: 2 personas",
        comp_4_max_pax: "Máximo de ocupantes: 8 personas",
        comp_4_duration: "Duración: 1h30",
        comp_5_title: "Pack Bugiar",
        comp_5_desc: "Este pack incluye la observación de uno de los monumentos más importantes de la historia de la navegación mundial y nacional, el Faro de Bugio, el mismo que da la bienvenida a los marineros en la entrada de la barra de Lisboa.",
        comp_5_departure: "Salida: Doca do Bom Sucesso",
        comp_5_arrival: "Llegada: Doca do Bom Sucesso",
        comp_5_min_pax: "Número mínimo de ocupantes: 2 personas",
        comp_5_max_pax: "Número máximo de ocupantes: 6 personas",
        comp_5_duration: "Duración: 1h30m aproximadamente",
        comp_6_title: "Alquiler de Barco sin Patrón",
        comp_6_desc: "¡Para quien tiene carta de navegación, pero no un barco propio! Ahora puede disfrutar de la libertad de navegar sin preocupaciones o cargas de poseer una embarcación. Ofrecemos un servicio de alquiler flexible para que pueda explorar las aguas a su ritmo.",
        comp_6_rates_title: "Varios packs de varias horas disponibles.",
        comp_6_note: "Antes de la partida, será recibido por un responsable que le proporcionará toda la información necesaria para una experiencia segura y cómoda. Al regreso, tendrá apoyo en el desembarque para garantizar un proceso simple y sin complicaciones.",
        btn_know_more: "Saber Más",
        reviews_title: "Lo que dicen nuestros clientes",
        tourist: "Turista",
        business: "Viajero",
        client: "Cliente",
        review_1: "\"Servicio de excelencia. Puntualidad absoluta, vehículo cómodo y una atención muy profesional. Recomiendo ETransfers sin ninguna reserva.\"",
        review_1_author: "Marta S.",
        review_role: "Cliente Satisfecha",
        chat_status: "En línea",
        chat_intro: "¡Hola! Soy Eva. ¿Cómo puedo ayudarle?",
        chat_opt_quote: "Pedir Presupuesto",
        chat_opt_faq: "Preguntas Frecuentes",
        chat_opt_human: "Hablar con Humano",
        chat_ask_dest: "¿A dónde le gustaría ir?",
        chat_ask_name: "Antes de empezar, ¿cuál es su nombre?",
        chat_ask_date: "¿Cuál es la fecha y hora?",
        chat_ask_pax: "¿Cuántas personas?",
        chat_final: "¡Perfecto! Haga clic abajo para finalizar en WhatsApp:",
        chat_ask_custom_dest: "¿Cuál es el destino deseado?",
        chat_final: "¡Perfecto! Haga clic abajo para finalizar en WhatsApp:",
        wa_start: "¡Hola! Soy",
        wa_want_quote: "Me gustaría un presupuesto:",
        wa_service: "Servicio",
        wa_dest: "Opción/Destino",
        wa_date: "Fecha",
        wa_pax: "Personas",
        chat_btn_whatsapp: "Enviar en WhatsApp",
        chat_ask_service: "¿Qué tipo de servicio busca?",
        chat_opt_skipper: "Skipper / Barco",
        chat_opt_transfer: "Transfer / Van",
        chat_ask_boat_opt: "¿Qué tipo de paseo prefiere?",
        chat_ask_route: "¿A dónde le gustaría ir?",
        chat_opt_other: "Otro",
        chat_ask_date_cal: "Seleccione la fecha:",
        chat_ask_pax_num: "Seleccione el número de pasajeros:",
        chat_btn_confirm: "Confirmar",
        // Boat Packs
        pack_top_max: "Pack Diversión Top Max",
        pack_top_eco: "Pack Diversión Top Económico",
        pack_exclusive: "Pack Diversión Exclusive",
        pack_cultural: "Pack Cultural",
        pack_bugiar: "Pack Bugiar",
        pack_no_skipper: "Alquiler Sin Patrón",
        // Destinations
        dest_serra: "Serra da Estrela",
        dest_sintra: "Sintra",
        dest_cabo: "Cabo da Roca",
        dest_cascais: "Cascais",
        dest_evora: "Évora",
        dest_fatima: "Fátima",
        dest_nazare: "Nazaré",
        dest_arrabida: "Portinho da Arrábida",
        dest_aveiro: "Aveiro",
        dest_algarve: "Algarve",
        // FAQ
        faq_prices: "¿Los precios son fijos?",
        faq_payment: "¿Formas de pago?",
        faq_booking: "¿Cómo reservar?",
        faq_luggage: "¿Puedo llevar equipaje voluminoso?",
        faq_delays: "¿Y si el vuelo se retrasa?",
        faq_cancel: "¿Cómo cancelar o cambiar?",
        faq_safety: "Seguridad",
        faq_why: "Por qué nosotros",
        btn_back: "Volver",
        // Placeholders
        ph_name: "Su nombre",
        review_2: "\"Proceso de reserva sencillo y servicio irreprochable. El conductor fue extremadamente simpático y cumplió todos los horarios.\"",
        review_2_author: "João R.",
        review_3: "\"Traslado rápido, seguro y cómodo. Superó las expectativas e hizo nuestra llegada mucho más tranquila.\"",
        review_3_author: "Ana y Ricardo M.",
        review_4: "\"Excelente relación calidad-precio. Comunicación clara y total confianza desde el primer contacto.\"",
        review_4_author: "Carlos F.",
        review_5: "\"Utilizamos ETransfers siempre que viajamos. Consistencia, profesionalismo y atención al detalle.\"",
        review_5_author: "Sofia L.",
        faq_title: "Preguntas Frecuentes",
        faq_1_q: "¿Qué es ETransfers?",
        faq_1_a: "ETransfers es una empresa especializada en servicios de traslado privado y compartido, garantizando transporte cómodo, seguro y puntual entre aeropuertos, hoteles, alojamientos locales, puertos, estaciones y otros destinos turísticos.",
        faq_2_q: "¿Qué tipos de traslados ofrece ETransfers?",
        faq_2_a: "ETransfers ofrece traslados al aeropuerto, traslados privados, traslados compartidos, traslados turísticos, transporte puerta a puerta y servicios personalizados para particulares, familias, grupos y empresas.",
        faq_3_q: "¿Realiza ETransfers traslados desde y hacia aeropuertos?",
        faq_3_a: "Sí. ETransfers realiza traslados desde y hacia aeropuertos, asegurando recogida puntual, seguimiento del vuelo en tiempo real y transporte directo hasta el destino final, sin paradas innecesarias.",
        faq_4_q: "¿Son privados los traslados de ETransfers?",
        faq_4_a: "La mayoría de los servicios son traslados privados, lo que significa que el vehículo es exclusivo para el cliente o grupo, garantizando mayor comodidad, privacidad y flexibilidad de horarios.",
        faq_5_q: "¿En qué zonas opera ETransfers?",
        faq_5_a: "ETransfers opera en Portugal, realizando traslados entre aeropuertos, ciudades, hoteles, alojamientos locales, puertos de cruceros y principales puntos turísticos, mediante reserva previa.",
        faq_6_q: "¿Cómo puedo reservar un traslado con ETransfers?",
        faq_6_a: "La reserva de un traslado con ETransfers se puede hacer de forma sencilla a través del sitio web, indicando lugar de recogida, destino, fecha, hora y número de pasajeros.",
        faq_7_q: "¿Son fijos los precios de los traslados?",
        faq_7_a: "Sí. Los precios de los traslados de ETransfers son fijos y transparentes, sin tasas ocultas, permitiendo al cliente saber exactamente cuánto pagará antes de confirmar la reserva.",
        faq_8_q: "¿Son profesionales los conductores de ETransfers?",
        faq_8_a: "Sí. Todos los conductores de ETransfers son profesionales, experimentados, debidamente licenciados y con profundo conocimiento de los recorridos, garantizando un viaje seguro y cómodo.",
        faq_9_q: "¿ETransfers monitorea los retrasos de los vuelos?",
        faq_9_a: "Sí. ETransfers realiza un seguimiento de los vuelos en tiempo real, ajustando automáticamente el horario de recogida en caso de retraso, sin costos adicionales para el cliente.",
        faq_10_q: "¿Son cómodos y seguros los vehículos de ETransfers?",
        faq_10_a: "Sí. La flota de ETransfers está compuesta por vehículos modernos, cómodos, climatizados y sujetos a mantenimiento regular, cumpliendo todas las normas de seguridad.",
        faq_11_q: "¿ETransfers ofrece sillas para niños?",
        faq_11_a: "Sí. Bajo petición previa, ETransfers ofrece sillas de auto para bebés y niños, garantizando total seguridad durante el traslado.",
        faq_12_q: "¿Es posible transportar equipaje voluminoso?",
        faq_12_a: "Sí. ETransfers permite el transporte de equipaje voluminoso, como maletas grandes, carritos de bebé o equipo deportivo, debiendo indicarse esta información en el momento de la reserva.",
        faq_13_q: "¿Realiza ETransfers traslados turísticos?",
        faq_13_a: "Sí. ETransfers ofrece traslados turísticos personalizados, ideales para visitar lugares de interés, playas, ciudades históricas y atracciones turísticas, con horarios flexibles.",
        faq_14_q: "¿Puedo modificar o cancelar una reserva?",
        faq_14_a: "Sí. Es posible modificar o cancelar una reserva de traslado, de acuerdo con las condiciones indicadas en el momento de la reserva. Se recomienda contactar con ETransfers con la mayor antelación posible.",
        faq_15_q: "¿Por qué elegir ETransfers?",
        faq_15_a: "ETransfers destaca por su puntualidad, confort, precios competitivos, atención personalizada y alto estándar de calidad, siendo una solución fiable para traslados en Portugal.",
        contact_title: "Contáctenos",
        contact_desc: "Resuelva sus dudas o pida un presupuesto sin compromiso.",
        contact_phone_title: "Teléfono / WhatsApp",
        contact_email_title: "Email",
        contact_address_title: "Dirección",
        form_name: "Nombre",
        form_email: "Email",
        form_message: "Mensaje",
        form_name_ph: "Su nombre",
        form_email_ph: "su@email.com",
        form_message_ph: "¿Cómo podemos ayudarle?",
        form_btn: "Enviar Mensaje",
        footer_desc: "Su socio de confianza en movilidad y turismo en Portugal.",
        footer_links: "Enlaces Rápidos",
        footer_legal: "Legal",
        footer_privacy: "Política de Privacidad",
        footer_terms: "Términos de Uso",
        // Popup
        popup_title: "Contáctenos",
        popup_subtitle: "Elija cómo prefiere contactarnos:",
        popup_whatsapp: "WhatsApp",
        popup_phone: "Llamar Ahora",
        popup_email: "Enviar Email",
        wa_interest_msg: "¡Hola! Me gustaría saber más sobre: ",
        wa_site_msg: "¡Hola! Visité su sitio web y me gustaría obtener más información.",
        footer_copyright: "&copy; 2026 Etransfers. Todos los derechos reservados. Desarrollado por <a href='https://webmari.pt' target='_blank' style='text-decoration: underline;'>Webmari.pt</a>",
        // Exit Intent
        exit_title: "¡Espere! ¡No se vaya todavía!",
        exit_subtitle: "¿Tiene dudas sobre su traslado? <br> Hable directamente con nuestro equipo ahora y reciba respuesta inmediata.",
        exit_btn_wa: "Hablar por WhatsApp Ahora",
        exit_btn_email: "Enviar Email",
        exit_disclaimer: "Atención humana y personalizada."
    },
    fr: {
        nav_home: "Accueil",
        nav_routes: "Tours",
        nav_services: "Services",
        nav_skipper: "Promenades en Bateau",
        nav_book: "Réserver",
        hero_title: "Votre voyage commence par un <span class='highlight'>sourire.</span>",
        hero_subtitle: "Confort, sécurité et ponctualité. Le transfert que vous méritez.",
        hero_cta_primary: "Réserver Maintenant",
        hero_cta_secondary: "Voir Destinations",
        routes_title: "Tours les plus demandés",
        routes_subtitle: "Explorez les destinations les plus populaires du Portugal avec nous.",
        route_1_title: "Serra da Estrela",
        route_1_desc: "La Serra da Estrela, située dans la région Centre, désigne la chaîne de montagnes où se trouvent les plus hautes altitudes du Portugal continental.",
        inc_transport_return: "Transport aller-retour (point de prise en charge)",
        inc_ac: "Transport en véhicule climatisé",
        inc_insurance: "Assurance accidents personnels",
        inc_free_time: "Temps libre pour explorer (sans guide touristique)",
        exc_lunch: "Déjeuner",
        exc_tickets_monuments: "Billets pour monuments/parcs/activités",
        feature_reception: "Accueil au terminal",
        feature_help: "Aide aux bagages",
        feature_wifi: "Wi-Fi à bord",
        exc_stops: "Arrêts supplémentaires",
        exc_tickets: "Billets d'entrée",
        exc_meals: "Repas",
        exc_hotel: "Hébergement",
        btn_book: "En Savoir Plus",
        route_2_title: "Sintra",
        route_2_desc: "Vivez une journée inoubliable ! Explorez des rues médiévales, des paysages marquants et un trajet confortable jusqu'à Sintra, pleine de merveilles architecturales et de nature vibrante.",
        route_2_price: "À partir de €120,00",
        feature_duration: "Durée de 4 heures",
        feature_guide: "Guide expert",
        feature_stops: "Arrêts photos",
        feature_fullday: "Journée complète",
        feature_beaches: "Meilleures plages",
        feature_luxury: "Voiture de luxe",
        route_3_title: "Cabo da Roca",
        route_3_desc: "Où la terre finit et la mer commence, l'une des vues les plus merveilleuses, le point le plus occidental de l'Europe continentale. C'est un lieu de beauté naturelle, avec d'imposantes falaises de 150 mètres de haut. Paysage époustouflant et véritable paradis pour les amateurs de photographie.",
        route_4_title: "Cascais",
        route_4_desc: "La ville de Cascais est devenue au XIXe siècle une destination estivale privilégiée de l'aristocratie et des familles nobles européennes, en raison de son emplacement idyllique et de son climat agréable. Aujourd'hui encore, c'est une destination préférée des Portugais et de l'élite internationale.",
        route_5_title: "Évora",
        route_5_desc: "Évora est la capitale de la région centre-sud du Portugal, l'Alentejo. Dans le centre historique de la ville se trouve l'ancien temple romain d'Évora (également connu sous le nom de temple de Diane).",
        route_6_title: "Fátima",
        route_6_desc: "L’un des plus grands centres de pèlerinage marial au monde, le Sanctuaire de Fátima reçoit des millions de visiteurs chaque année, étant aujourd’hui un lieu de foi, de réflexion et de profonde dévotion.",
        route_7_title: "Nazaré",
        route_7_desc: "Vivez un moment inoubliable dans ce village de pêcheurs connu mondialement pour ses vagues géantes !",
        route_8_title: "Portinho da Arrábida",
        route_8_desc: "Située dans le parc naturel de la Serra da Arrábida, la plage de Portinho est l'une des plus belles du Portugal. Son sable blanc et fin et les nuances variées de bleu des eaux claires contrastent avec la végétation verdoyante de la montagne, formant un paysage magnifique.",
        route_9_title: "Aveiro",
        route_9_desc: "Connue comme la \"Venise portugaise\", Aveiro est célèbre pour ses canaux urbains navigués par des bateaux moliceiros et pour son lien fort avec la ria et le sel.",
        services_title: "Nos Services",
        services_subtitle: "Flexibilité et professionnalisme à cada kilomètre.",
        srv_transfers: "Transferts",
        srv_transfers_desc: "De et vers aéroports, hôtels et gares avec ponctualité.",
        srv_tours: "Tours",
        srv_tours_desc: "Itinéraires touristiques personnalisés pour découvrir le meilleur du Portugal.",
        srv_events: "Événements",
        srv_events_desc: "Transport pour mariages, congrès et événements d'entreprise.",
        srv_airport: "Aéroport",
        srv_airport_desc: "Suivi des vols et accueil personnalisé à l'arrivée.",

        srv_executive: "Transport Exécutif",
        srv_executive_desc: "Voyages d'affaires avec confort et efficacité.",
        srv_cruise: "Croisières",
        srv_cruise_desc: "Transferts directs vers le terminal de croisière de Lisbonne.",
        srv_private: "Transport Privé",
        srv_private_desc: "Voyages privés adaptés à vos besoins quotidiens.",
        srv_boat_tours: "Promenades en Bateau",
        srv_boat_tours_desc: "Ressentez la liberté de la mer dans une expérience vibrante, inoubliable et exclusive.",
        about_title: "À Propos de Nous",
        about_subtitle: "Plus que du transport, nous offrons la tranquillité.",
        about_p1: "Etransfers est née avec l'objectif d'offrir des services de transferts privés fiables, ponctuels et confortables, adaptés aux besoins de chaque client. Nous travaillons en mettant l'accent sur la qualité du service, l'attention aux détails et une expérience simple de la réservation à la destination finale.",
        about_p2: "Notre équipe est composée de chauffeurs expérimentés et certifiés, ayant une connaissance approfondie des itinéraires et du fonctionnement local, garantissant des voyages sûrs, efficaces et sans soucis, que ce soit pour les loisirs ou les affaires.",
        about_feat_1: "Vision : Connecter les gens et les destinations avec qualité et confiance.",
        about_feat_2: "Mission : Garantir confort et tranquillité à chaque voyage.",
        about_feat_3: "Valeurs : Professionnalisme, sécurité, proximité.",
        comfort_title: "Confort de Première Classe",
        comfort_desc: "Véhicule moderne, sûr et adaptable aux besoins de différents clients.",
        comf_seats: "Van de 9 places",
        comf_luggage: "Capacité jusqu'à 10 valises",
        comf_ac: "Climatisation",
        comf_windows: "Vitres teintées",
        comf_child_seats: "Sièges enfants",
        comf_child_seats_desc: "(sur demande)",
        comf_water: "Eau incluse",
        btn_check_fleet: "Louer Maintenant",
        comp_title: "Balades en Bateau et Services de Skipper",
        comp_subtitle: "Expériences exclusives pour répondre à tous vos besoins.",
        comp_1_title: "Pack Plaisir Top Max",
        comp_1_title: "Pack Plaisir Top Max",
        comp_1_desc: "Profitez d'une promenade en bateau le long de la côte jusqu'à Seixal (Ponta dos Corvos) ou Paço D'Arcos (Giribita). L'expérience comprend des vues fantastiques et un arrêt pour la baignade, des activités et des collations, étant idéal pour se détendre et socialiser avec la famille ou les amis en mer.",
        comp_info_title: "Informations sur le service",
        comp_1_departure: "Départ : Doca do Bom Sucesso",
        comp_1_arrival: "Arrivée : Doca do Bom Sucesso",
        comp_1_min_pax: "Nombre minimum d'occupants : 2 personnes",
        comp_1_max_pax: "Nombre maximum d'occupants : 8 personnes",
        comp_1_duration: "Durée : 03h00",
        comp_2_title: "Pack Plaisir Top Économique",
        comp_2_desc: "Il s'agit d'une promenade en bateau côtier vers la plage de Ponta dos Corvos (Seixal) ou la plage de Giribita (Paço D'Arcos). L'expérience comprend une navigation panoramique, un arrêt pour la baignade, de la nourriture et des boissons et des activités, étant le cadre idéal pour se détendre et s'amuser en famille ou entre amis.",
        comp_2_departure: "Départ : Doca do Bom Sucesso",
        comp_2_arrival: "Arrivée : Doca do Bom Sucesso",
        comp_2_min_pax: "Nombre minimum d'occupants : 2 personnes",
        comp_2_max_pax: "Nombre maximum d'occupants : 8 personnes",
        comp_2_duration: "Durée : 02h00",
        comp_3_title: "Pack Plaisir Exclusive",
        comp_3_desc: "Ce pack est parfait pour naviguer le long de la magnifique côte entre Lisbonne et Cascais, en passant par plusieurs plages telles que Praia da Cruz Quebrada, Caxias, Paço D'Arcos, Torre, Moinho, Carcavelos, Parede, Avencas, Bafureira, São Pedro do Estoril, Azarujinha, Poça, Pescoço Cavalo, Tamariz, Moitas, Duquesa, Conceição, Albatroz, Rainha et Pescadores.",
        comp_3_departure: "Départ : Doca de Oeiras",
        comp_3_arrival: "Arrivée : Doca de Oeiras",
        comp_3_note: "Note : Veuillez noter qu'une taxe d'embarquement de 7€ (par groupe) s'applique à cet endroit, à inclure dans le prix final.",
        comp_3_min_pax: "Nombre minimum d'occupants : 2 personnes",
        comp_3_max_pax: "Nombre maximum d'occupants : 6 personnes",
        comp_3_duration: "Durée : 4h",
        comp_4_title: "Pack Culturel",
        comp_4_desc: "En plus d'une belle promenade, ce pack permet l'observation de monuments historiques importants d'une perspective différente, tels que le Padrão dos Descobrimentos, la Tour de Belém, le Cristo Rei, le Pont du 25 Avril, le MAAT et la Praça do Comércio.",
        comp_4_departure: "Départ : Doca do Bom Sucesso",
        comp_4_arrival: "Arrivée : Doca do Bom Sucesso",
        comp_4_min_pax: "Minimum d'occupants : 2 personnes",
        comp_4_max_pax: "Maximum d'occupants : 8 personnes",
        comp_4_duration: "Durée : 1h30",
        comp_5_title: "Pack Bugiar",
        comp_5_desc: "Ce pack comprend l'observation de l'un des monuments les plus importants de l'histoire de la navigation mondiale et nationale, le phare de Bugio, le même qui accueille les marins à l'entrée de la barre de Lisbonne.",
        comp_5_departure: "Départ : Doca do Bom Sucesso",
        comp_5_arrival: "Arrivée : Doca do Bom Sucesso",
        comp_5_min_pax: "Nombre minimum d'occupants : 2 personnes",
        comp_5_max_pax: "Nombre maximum d'occupants : 6 personnes",
        comp_5_duration: "Durée : environ 1h30m",
        comp_6_title: "Location de Bateau sans Skipper",
        comp_6_desc: "Pour ceux qui ont un permis de navigation, mais pas leur propre bateau ! Maintenant, vous pouvez profiter de la liberté de naviguer sans les soucis ou les charges de posséder un navire. Nous offrons un service de location flexible pour que vous puissiez explorer les eaux à votre rythme.",
        comp_6_rates_title: "Plusieurs packs de plusieurs heures disponibles.",
        comp_6_note: "Avant le départ, vous serez accueilli par un responsable qui vous fournira toutes les informations nécessaires pour une expérience sûre et confortable. Au retour, vous aurez un soutien au débarquement pour assurer un processus simple et sans tracas.",
        btn_know_more: "En Savoir Plus",
        reviews_title: "Ce que disent nos clients",
        tourist: "Touriste",
        business: "Voyageur",
        client: "Client",
        review_1: "\"Service d'excellence. Ponctualité absolue, véhicule confortable et un service très professionnel. Je recommande ETransfers sans aucune réserve.\"",
        review_1_author: "Marta S.",
        review_role: "Cliente Satisfaite",
        chat_status: "En ligne",
        chat_intro: "Bonjour ! Je suis Eva. Comment puis-je vous aider ?",
        chat_opt_quote: "Demander un Devis",
        chat_opt_faq: "FAQ",
        chat_opt_human: "Parler à un Humain",
        chat_ask_dest: "Où souhaitez-vous aller ?",
        chat_ask_name: "Avant de commencer, quel est votre nom ?",
        chat_ask_date: "Quelle est la date et l'heure ?",
        chat_ask_pax: "Combien de personnes ?",
        chat_final: "Parfait ! Cliquez ci-dessous pour finir sur WhatsApp :",
        chat_final: "Parfait ! Cliquez ci-dessous pour finir sur WhatsApp :",
        wa_start: "Bonjour ! Je suis",
        wa_want_quote: "Je voudrais un devis :",
        wa_service: "Service",
        wa_dest: "Option/Destination",
        wa_date: "Date",
        wa_pax: "Personnes",
        chat_btn_whatsapp: "Envoyer sur WhatsApp",
        chat_ask_service: "Quel type de service recherchez-vous ?",
        chat_opt_skipper: "Skipper / Bateau",
        chat_opt_transfer: "Transfert / Van",
        chat_ask_boat_opt: "Quel type de balade préférez-vous ?",
        chat_ask_route: "Où souhaitez-vous aller ?",
        chat_opt_other: "Autre",
        chat_ask_date_cal: "Sélectionnez la date :",
        chat_ask_pax_num: "Sélectionnez le nombre de passagers :",
        chat_btn_confirm: "Confirmer",
        // Boat Packs
        pack_top_max: "Pack Plaisir Top Max",
        pack_top_eco: "Pack Plaisir Top Économique",
        pack_exclusive: "Pack Plaisir Exclusive",
        pack_cultural: "Pack Culturel",
        pack_bugiar: "Pack Bugiar",
        pack_no_skipper: "Location Sans Skipper",
        // Destinations
        dest_serra: "Serra da Estrela",
        dest_sintra: "Sintra",
        dest_cabo: "Cabo da Roca",
        dest_cascais: "Cascais",
        dest_evora: "Évora",
        dest_fatima: "Fátima",
        dest_nazare: "Nazaré",
        dest_arrabida: "Portinho da Arrábida",
        dest_aveiro: "Aveiro",
        dest_algarve: "Algarve",
        // FAQ
        faq_prices: "Les prix sont-ils fixes?",
        faq_payment: "Modes de paiement?",
        faq_booking: "Comment réserver?",
        faq_luggage: "Puis-je apporter des bagages volumineux?",
        faq_delays: "Et si le vol est retardé?",
        faq_cancel: "Comment annuler ou modifier?",
        faq_safety: "Sécurité",
        faq_why: "Pourquoi nous",
        btn_back: "Retour",
        // Placeholders
        ph_name: "Votre nom",
        review_2: "\"Processus de réservation simple et service irréprochable. Le chauffeur était extrêmement sympathique et a respecté tous les horaires.\"",
        review_2_author: "João R.",
        review_3: "\"Transfert rapide, sûr et confortable. A dépassé les attentes et a rendu notre arrivée beaucoup plus tranquille.\"",
        review_3_author: "Ana et Ricardo M.",
        review_4: "\"Excellent rapport qualité-prix. Communication claire et confiance totale dès le premier contact.\"",
        review_4_author: "Carlos F.",
        review_5: "\"Nous utilisons ETransfers chaque fois que nous voyageons. Constance, professionnalisme et souci du détail.\"",
        review_5_author: "Sofia L.",
        faq_title: "Questions Fréquemment Posées",
        faq_1_q: "Qu'est-ce que ETransfers ?",
        faq_1_a: "ETransfers est une entreprise spécialisée dans les services de transfert privé et partagé, garantissant un transport confortable, sûr et ponctuel entre les aéroports, hôtels, hébergements locaux, ports, gares et autres destinations touristiques.",
        faq_2_q: "Quels types de transferts ETransfers propose-t-elle ?",
        faq_2_a: "ETransfers propose des transferts aéroport, des transferts privés, des transferts partagés, des transferts touristiques, des transports porte-à-porte et des services personnalisés pour les particuliers, les familles, les groupes et les entreprises.",
        faq_3_q: "ETransfers effectue-t-elle des transferts depuis et vers les aéroports ?",
        faq_3_a: "Oui. ETransfers assure des transferts depuis et vers les aéroports, garantissant une prise en charge ponctuelle, un suivi des vols en temps réel et un transport direct jusqu'à la destination finale, sans arrêts inutiles.",
        faq_4_q: "Les transferts d'ETransfers sont-ils privés ?",
        faq_4_a: "La plupart des services sont des transferts privés, ce qui signifie que le véhicule est exclusif pour le client ou le groupe, garantissant un plus grand confort, une confidentialité et une flexibilité horaire.",
        faq_5_q: "Dans quelles zones ETransfers opère-t-elle ?",
        faq_5_a: "ETransfers opère au Portugal, effectuant des transferts entre les aéroports, les villes, les hôtels, les hébergements locaux, les ports de croisière et les principaux sites touristiques, sur réservation préalable.",
        faq_6_q: "Comment puis-je réserver un transfert avec ETransfers ?",
        faq_6_a: "La réservation d'un transfert avec ETransfers peut se faire simplement via le site web, en indiquant le lieu de prise en charge, la destination, la date, l'heure et le nombre de passagers.",
        faq_7_q: "Les prix des transferts sont-ils fixes ?",
        faq_7_a: "Oui. Les prix des transferts d'ETransfers sont fixes et transparents, sans frais cachés, permettant au client de savoir exactement combien il paiera avant de confirmer la réservation.",
        faq_8_q: "Les chauffeurs d'ETransfers sont-ils professionnels ?",
        faq_8_a: "Oui. Tous les chauffeurs d'ETransfers sont professionnels, expérimentés, dûment licenciés et ont une connaissance approfondie des itinéraires, garantissant un voyage sûr et confortable.",
        faq_9_q: "ETransfers surveille-t-elle les retards de vol ?",
        faq_9_a: "Oui. ETransfers surveille les vols en temps réel, ajustant automatiquement l'heure de prise en charge en cas de retard, sans frais supplémentaires pour le client.",
        faq_10_q: "Les véhicules d'ETransfers sont-ils confortables et sûrs ?",
        faq_10_a: "Oui. La flotte d'ETransfers est composée de véhicules modernes, confortables, climatisés et soumis à un entretien régulier, respectant toutes les normes de sécurité.",
        faq_11_q: "ETransfers fournit-elle des sièges pour enfants ?",
        faq_11_a: "Oui. Sur demande préalable, ETransfers met à disposition des sièges auto pour bébés et enfants, garantissant une sécurité totale pendant le transfert.",
        faq_12_q: "Est-il possible de transporter des bagages volumineux ?",
        faq_12_a: "Oui. ETransfers permet le transport de bagages volumineux, tels que de grandes valises, des poussettes ou des équipements sportifs, cette information devant être indiquée au moment de la réservation.",
        faq_13_q: "ETransfers propose-t-elle des transferts touristiques ?",
        faq_13_a: "Oui. ETransfers propose des transferts touristiques personnalisés, idéaux pour visiter des lieux d'intérêt, des plages, des villes historiques et des attractions touristiques, avec des horaires flexibles.",
        faq_14_q: "Puis-je modifier ou annuler une réservation ?",
        faq_14_a: "Oui. Il est possible de modifier ou d'annuler une réservation de transfert, selon les conditions indiquées au moment de la réservation. Il est recommandé de contacter ETransfers le plus tôt possible.",
        faq_15_q: "Pourquoi choisir ETransfers ?",
        faq_15_a: "ETransfers se distingue par la ponctualité, le confort, les prix compétitifs, un service personnalisé et des normes de qualité élevées, étant une solution fiable pour les transferts au Portugal.",
        contact_title: "Contactez-nous",
        contact_desc: "Posez vos questions ou demandez un devis sans engagement.",
        contact_phone_title: "Téléphone / WhatsApp",
        contact_email_title: "Email",
        contact_address_title: "Adresse",
        form_name: "Nom",
        form_email: "Email",
        form_message: "Message",
        form_name_ph: "Votre nom",
        form_email_ph: "votre@email.com",
        form_message_ph: "Comment pouvons-nous vous aider ?",
        form_btn: "Envoyer Message",
        footer_desc: "Votre partenaire de confiance en mobilité et tourisme au Portugal.",
        footer_links: "Liens Rapides",
        footer_legal: "Légal",
        footer_privacy: "Politique de Confidentialité",
        footer_terms: "Conditions d'Utilisation",
        // Popup
        popup_title: "Contactez-nous",
        popup_subtitle: "Choisissez comment vous préférez nous contacter :",
        popup_whatsapp: "WhatsApp",
        popup_phone: "Appeler Maintenant",
        popup_email: "Envoyer Email",
        wa_interest_msg: "Bonjour ! J'aimerais en savoir plus sur : ",
        wa_site_msg: "Bonjour ! J'ai visité votre site web et je voudrais plus d'informations.",
        footer_copyright: "&copy; 2026 Etransfers. Tous droits réservés. Développé par <a href='https://webmari.pt' target='_blank' style='text-decoration: underline;'>Webmari.pt</a>",
        // Exit Intent
        exit_title: "Attendez ! Ne partez pas tout de suite !",
        exit_subtitle: "Vous avez des questions sur votre transfert ? <br> Parlez directement avec notre équipe maintenant pour une réponse immédiate.",
        exit_btn_wa: "Discuter sur WhatsApp",
        exit_btn_email: "Envoyer un Email",
        exit_disclaimer: "Support humain et personnalisé."
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // =========================================
    // 0. FAQ ACCORDION (Moved to top for priority)
    // =========================================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                // Close others
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherQuestion = otherItem.querySelector('.faq-question');
                        if (otherQuestion) otherQuestion.setAttribute('aria-expanded', 'false');
                    }
                });
                // Toggle current
                const isActive = item.classList.toggle('active');
                question.setAttribute('aria-expanded', isActive);
            });
        }
    });

    // =========================================
    // 1. LANGUAGE SWITCHER
    // =========================================
    const langOptions = document.querySelectorAll('.lang-option');
    const currentLangDisplay = document.querySelector('.current-lang');

    // Set default language
    let currentLang = 'pt';

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        currentLang = lang;
        localStorage.setItem('selectedLang', lang);

        // Update elements text
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });

        // Update active class
        langOptions.forEach(opt => {
            opt.classList.remove('active');
            if (opt.dataset.lang === lang) opt.classList.add('active');
        });

        // Update display with icon
        const langNames = { 'pt': 'PT', 'en': 'EN', 'es': 'ES', 'fr': 'FR' };
        currentLangDisplay.innerHTML = `<i class="fa-solid fa-globe"></i> <span>${langNames[lang]}</span>`;

        // Refresh Chatbot if it's initialized (has children)
        const chatMessages = document.getElementById('chat-messages');
        if (chatMessages && chatMessages.children.length > 0 && typeof window.initChat === 'function') {
            window.initChat();
        }
    }

    // Toggle dropdown on click (for mobile/tablet)
    const langSelect = document.querySelector('.lang-select');
    if (langSelect) {
        langSelect.addEventListener('click', (e) => {
            // Prevent toggling if checking the checkbox itself if it existed, but here we just toggle class
            // Only toggle if clicking the display, not the options
            if (e.target.closest('.lang-option')) return;

            langSelect.classList.toggle('active');
            e.stopPropagation();
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!langSelect.contains(e.target)) {
                langSelect.classList.remove('active');
            }
        });

        // Event Listeners
        langOptions.forEach(opt => {
            opt.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = e.target.getAttribute('data-lang');
                setLanguage(lang);
                langSelect.classList.remove('active'); // Close after selection
            });
        });
    }

    // Check saved preference
    let savedLang = localStorage.getItem('selectedLang');
    if (!translations[savedLang]) {
        savedLang = 'pt';
    }
    // Default to PT, but allow saved preference
    setLanguage(savedLang);

    // =========================================
    // 2. MOBILE MENU
    // =========================================
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isActive = mobileMenuBtn.classList.toggle('active');
            mobileMenuBtn.setAttribute('aria-expanded', isActive);
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // =========================================
    // 3. SCROLL ANIMATIONS
    // =========================================
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach(el => {
        // Initial state set in JS to ensure friendly fallback if JS fails
        el.style.opacity = "0";
        el.style.transform = "translateY(50px)";
        el.style.transition = "all 0.8s ease-out";
        observer.observe(el);
    });

    // Hero fade-in
    const hero = document.querySelector('.hero');
    if (hero) {
        setTimeout(() => {
            hero.style.opacity = "1";
            hero.style.transform = "translateY(0)";
        }, 200);

        // Initial Hero Style
        hero.style.opacity = "0";
        hero.style.transform = "translateY(30px)";
        hero.style.transition = "all 1s ease-out";
    }




    // =========================================
    // 5. TESTIMONIAL CAROUSEL
    // =========================================
    const track = document.querySelector('.testimonials-track');
    // Using IDs from HTML update
    const prevBtn = document.getElementById('prevReview');
    const nextBtn = document.getElementById('nextReview');

    if (track && prevBtn && nextBtn) {
        let currentIndex = 0;

        function getVisibleCards() {
            if (window.innerWidth <= 600) return 1;
            if (window.innerWidth <= 900) return 2;
            return 3;
        }

        function updateCarousel() {
            const card = track.querySelector('.testimonial-card');
            if (!card) return;

            const cardWidth = card.offsetWidth;
            // Get gap from CSS
            const style = window.getComputedStyle(track);
            const gap = parseFloat(style.gap) || 30;
            const moveAmount = cardWidth + gap;

            track.style.transform = `translateX(-${currentIndex * moveAmount}px)`;
        }

        nextBtn.addEventListener('click', () => {
            const totalCards = track.querySelectorAll('.testimonial-card').length;
            const visibleCards = getVisibleCards();
            const maxIndex = totalCards - visibleCards;

            if (currentIndex < maxIndex) {
                currentIndex++;
            } else {
                currentIndex = 0; // Infinite loop effect (jump to start)
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            const totalCards = track.querySelectorAll('.testimonial-card').length;
            const visibleCards = getVisibleCards();
            const maxIndex = totalCards - visibleCards;

            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = maxIndex; // Infinite loop effect (jump to end)
            }
            updateCarousel();
        });

        // Recalculate on resize
        window.addEventListener('resize', () => {
            // reset to 0 or clamp current index to valid range
            const totalCards = track.querySelectorAll('.testimonial-card').length;
            const visibleCards = getVisibleCards();
            const maxIndex = totalCards - visibleCards;
            if (currentIndex > maxIndex) currentIndex = maxIndex;
            updateCarousel();
        });
    }

    // =========================================
    // CHATBOT EVA LOGIC
    // =========================================
    // =========================================
    // CHATBOT EVA LOGIC
    // =========================================


















});

// Contact Modal Logic
function openContactModal(serviceName = null) {
    const modal = document.getElementById('contact-modal');
    if (modal) {
        // Update WhatsApp link with dynamic message if serviceName is provided
        const waBtn = modal.querySelector('.modal-btn.whatsapp');
        if (waBtn) {
            const lang = localStorage.getItem('selectedLang') || 'pt';
            const t = translations[lang];
            const waNumber = "351968224687";

            let message = "";
            if (serviceName) {
                message = `${t.wa_interest_msg} ${serviceName}`;
            } else {
                // Default message if no specific service
                message = lang === 'pt' ? "Olá, gostaria de obter mais informações." :
                    lang === 'en' ? "Hello, I would like more information." :
                        lang === 'es' ? "Hola, me gustaría obtener más información." :
                            "Bonjour, je voudrais plus d'informations.";
            }

            const encodedText = encodeURIComponent(message);
            waBtn.href = `https://wa.me/${waNumber}?text=${encodedText}`;
        }

        modal.classList.add('active');
        modal.style.visibility = 'visible';
        modal.style.opacity = '1';
    }
}

function closeContactModal() {
    const modal = document.getElementById('contact-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            if (!modal.classList.contains('active')) {
                modal.style.visibility = 'hidden';
                modal.style.opacity = '0';
            }
        }, 300);
    }
}

// Event Delegation for robustness (handles dynamic elements and timing issues)
document.addEventListener('click', (e) => {
    const btn = e.target.closest('a[data-i18n="btn_book"], a[data-i18n="btn_know_more"]');
    if (btn) {
        e.preventDefault();

        // Try to find the service title
        let serviceName = null;
        const cardContent = btn.closest('.card-content'); // Route cards
        if (cardContent) {
            const titleEl = cardContent.querySelector('h3');
            if (titleEl) {
                serviceName = titleEl.textContent.trim();
            }
        }

        openContactModal(serviceName);
    }

    // Close modal when clicking outside
    const modal = document.getElementById('contact-modal');
    if (modal && e.target === modal) {
        closeContactModal();
    }

    // Contact Section WhatsApp Button Logic
    const waContactSectionBtn = e.target.closest('.contact-card.action-whatsapp');
    if (waContactSectionBtn) {
        e.preventDefault();
        const lang = localStorage.getItem('selectedLang') || 'pt';
        const t = translations[lang];
        const waNumber = "351968224687";
        const message = t.wa_site_msg;
        const encodedText = encodeURIComponent(message);
        window.open(`https://wa.me/${waNumber}?text=${encodedText}`, '_blank');
    }
});

// Force scroll to top on page load
window.onload = function () {
    window.scrollTo(0, 0);
    // Remove hash from URL to prevent auto-scrolling to section
    if (window.location.hash) {
        history.replaceState(null, null, window.location.pathname);
    }
};

// =========================================
// PREVENT ACCIDENTAL TAB CLOSURE
// =========================================
// Chrome, Edge, Firefox, Safari - Modern approach
window.onbeforeunload = function (e) {
    // Only block if the form has been interacted with (or always if desired)
    // For now, always block as requested

    // Standard return value (some browsers show this, others don't)
    var msg = 'Are you sure you want to leave?';

    e = e || window.event;

    // For IE and Firefox prior to 4
    if (e) {
        e.returnValue = msg;
    }

    // For Safari
    return msg;
};



// =========================================
// CHATBOT EVA LOGIC (Global Scope)
// =========================================
(function () {
    // State
    let chatState = 'start';
    let quoteData = { dest: '', date: '', pax: '' };
    let currentOptionsElement = null;

    // Helper: Get Chat Elements
    const getChatElements = () => {
        return {
            window: document.getElementById('chatbot-window'),
            messages: document.getElementById('chat-messages'),
            fab: document.querySelector('.chatbot-fab')
        };
    };

    // Helper: Get Current Language
    const getLang = () => {
        const stored = localStorage.getItem('selectedLang');
        return (translations && translations[stored]) ? stored : 'pt';
    };

    // Helper: Get Translations
    const getT = () => {
        return translations[getLang()];
    };

    // Global toggleChat
    window.toggleChat = function () {
        const els = getChatElements();
        if (!els.window) return;

        const isActive = els.window.classList.toggle('active');
        if (isActive) {
            // If empty, initialize
            if (els.messages && els.messages.children.length === 0) {
                initChat();
            }
        }
        if (els.fab) {
            els.fab.setAttribute('aria-expanded', isActive);
            els.fab.setAttribute('aria-label', isActive ? 'Fechar Chat' : 'Abrir Chatbot');
        }
    };

    function initChat() {
        const t = getT();
        const els = getChatElements();
        if (!els.messages) return;

        els.messages.innerHTML = '';
        clearOptions();

        setTimeout(() => {
            renderMessage(t.chat_intro, 'bot');
            renderMainMenu(t);
        }, 500);
    }
    // Expose for language switcher
    window.initChat = initChat;

    function createOptionsContainer() {
        const els = getChatElements();
        if (currentOptionsElement && currentOptionsElement.parentNode) {
            currentOptionsElement.remove();
        }
        const container = document.createElement('div');
        container.className = 'chat-options-inline';
        els.messages.appendChild(container);
        els.messages.scrollTop = els.messages.scrollHeight;
        currentOptionsElement = container;
        return container;
    }

    function clearOptions() {
        if (currentOptionsElement && currentOptionsElement.parentNode) {
            currentOptionsElement.remove();
        }
        currentOptionsElement = null;
    }

    function renderMessage(text, sender) {
        const els = getChatElements();
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}`;
        msgDiv.innerHTML = text;
        els.messages.appendChild(msgDiv);
        els.messages.scrollTop = els.messages.scrollHeight;
    }

    function renderMainMenu(t) {
        const options = [
            { text: t.chat_opt_quote, action: 'quote' },
            { text: t.chat_opt_faq, action: 'faq' },
            { text: t.chat_opt_human, action: 'human' }
        ];
        renderOptions(options);
    }

    function renderOptions(options) {
        const els = getChatElements();
        const container = createOptionsContainer();
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'chat-option-btn';
            btn.innerText = opt.text;
            btn.onclick = () => handleOption(opt);
            container.appendChild(btn);
        });
        els.messages.scrollTop = els.messages.scrollHeight;
    }

    function handleOption(opt) {
        const t = getT();

        if (opt.text) {
            renderMessage(opt.text, 'user');
        }
        clearOptions();

        setTimeout(() => {
            if (opt.action === 'quote') {
                askName(t, () => {
                    chatState = 'service_type';
                    renderMessage(t.chat_ask_service, 'bot');
                    renderOptions([
                        { text: t.chat_opt_skipper, action: 'set_service_Skipper' },
                        { text: t.chat_opt_transfer, action: 'set_service_Transfer' }
                    ]);
                });
            }
            else if (opt.action === 'set_service_Skipper') {
                quoteData.service = 'Skipper';
                renderMessage(t.chat_ask_boat_opt, 'bot');
                renderOptions([
                    { text: t.pack_top_max, action: 'set_dest_Pack Top Max' },
                    { text: t.pack_top_eco, action: 'set_dest_Pack Top Economico' },
                    { text: t.pack_exclusive, action: 'set_dest_Pack Exclusive' },
                    { text: t.pack_cultural, action: 'set_dest_Pack Cultural' },
                    { text: t.pack_bugiar, action: 'set_dest_Pack Bugiar' },
                    { text: t.pack_no_skipper, action: 'set_dest_No Skipper' },
                    { text: t.chat_opt_other || "Outro/Other", action: 'set_dest_Outro' }
                ]);
            }
            else if (opt.action === 'set_service_Transfer') {
                quoteData.service = 'Transfer';
                renderMessage(t.chat_ask_route, 'bot');
                renderOptions([
                    { text: t.dest_serra, action: 'set_dest_Serra da Estrela' },
                    { text: t.dest_sintra, action: 'set_dest_Sintra' },
                    { text: t.dest_cabo, action: 'set_dest_Cabo da Roca' },
                    { text: t.dest_cascais, action: 'set_dest_Cascais' },
                    { text: t.dest_evora, action: 'set_dest_Evora' },
                    { text: t.dest_fatima, action: 'set_dest_Fatima' },
                    { text: t.dest_nazare, action: 'set_dest_Nazare' },
                    { text: t.dest_arrabida, action: 'set_dest_Arrabida' },
                    { text: t.dest_aveiro, action: 'set_dest_Aveiro' },
                    { text: t.chat_opt_other || "Outro/Other", action: 'set_dest_Outro' }
                ]);
            }
            else if (opt.action === 'set_dest_Outro') {
                askDestination(t, () => {
                    askDate(t);
                });
            }
            else if (opt.action.startsWith('set_dest_')) {
                quoteData.dest = opt.text;
                askDate(t);
            }
            else if (opt.action === 'faq') {
                renderMessage(t.chat_opt_faq, 'bot');
                renderOptions([
                    { text: t.faq_booking, action: 'show_faq_6' },
                    { text: t.faq_prices, action: 'show_faq_7' },
                    { text: t.faq_luggage, action: 'show_faq_12' },
                    { text: t.faq_delays, action: 'show_faq_9' },
                    { text: t.faq_cancel, action: 'show_faq_14' },
                    { text: t.btn_back, action: 'restart' }
                ]);
            }
            else if (opt.action.startsWith('show_faq_')) {
                const faqId = opt.action.replace('show_faq_', '');
                const question = t[`faq_${faqId}_q`];
                const answer = t[`faq_${faqId}_a`];
                renderMessage(`<strong>${question}</strong><br>${answer}`, 'bot');
                setTimeout(() => renderOptions([{ text: t.btn_back, action: 'restart' }]), 1000);
            }
            else if (opt.action === 'human') {
                askName(t, () => {
                    const waNumber = "351968224687";
                    const text = `Olá! Sou ${quoteData.name}. Gostaria de saber mais sobre os serviços da Etransfers.`;
                    const encodedText = encodeURIComponent(text);
                    window.open(`https://wa.me/${waNumber}?text=${encodedText}`, '_blank');
                    renderMainMenu(t);
                });
            }
            else if (opt.action === 'restart') {
                initChat();
            }
        }, 500);
    }

    function askName(t, callback) {
        if (quoteData.name) {
            callback();
            return;
        }
        chatState = 'name';
        renderMessage(t.chat_ask_name, 'bot');

        const container = createOptionsContainer();
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'chat-input-text';
        input.placeholder = t.ph_name;

        const btn = document.createElement('button');
        btn.className = 'chat-option-btn';
        btn.innerText = 'OK';

        const confirm = () => {
            const val = input.value.trim();
            if (val) {
                quoteData.name = val;
                renderMessage(val, 'user');
                clearOptions();
                callback();
            }
        };
        btn.onclick = confirm;
        input.onkeypress = (e) => { if (e.key === 'Enter') confirm(); };

        container.appendChild(input);
        container.appendChild(btn);
        const els = getChatElements();
        if (els.messages) els.messages.scrollTop = els.messages.scrollHeight;
        input.focus();
    }

    function askDestination(t, callback) {
        chatState = 'custom_dest';
        renderMessage(t.chat_ask_custom_dest || "Destino?", 'bot');

        const container = createOptionsContainer();
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'chat-input-text';
        input.placeholder = "Destino...";

        const btn = document.createElement('button');
        btn.className = 'chat-option-btn';
        btn.innerText = 'OK';

        const confirm = () => {
            const val = input.value.trim();
            if (val) {
                quoteData.dest = val;
                renderMessage(val, 'user');
                clearOptions();
                callback();
            }
        };
        btn.onclick = confirm;
        input.onkeypress = (e) => { if (e.key === 'Enter') confirm(); };

        container.appendChild(input);
        container.appendChild(btn);
        const els = getChatElements();
        if (els.messages) els.messages.scrollTop = els.messages.scrollHeight;
        input.focus();
    }

    function askDate(t) {
        chatState = 'date';
        renderMessage(t.chat_ask_date_cal, 'bot');

        const container = createOptionsContainer();
        const input = document.createElement('input');
        input.type = 'date';
        input.className = 'chat-date-input';

        const btn = document.createElement('button');
        btn.className = 'chat-option-btn';
        btn.innerText = t.chat_btn_confirm;

        btn.onclick = () => {
            if (input.value) {
                quoteData.date = input.value;
                renderMessage(quoteData.date, 'user');
                clearOptions();
                askPax(t);
            }
        };

        container.appendChild(input);
        container.appendChild(btn);
        const els = getChatElements();
        if (els.messages) els.messages.scrollTop = els.messages.scrollHeight;
    }

    function askPax(t) {
        chatState = 'pax';
        renderMessage(t.chat_ask_pax_num, 'bot');

        const container = createOptionsContainer();
        const select = document.createElement('select');
        select.className = 'chat-pax-select';
        for (let i = 1; i <= 8; i++) {
            const opt = document.createElement('option');
            opt.value = i;
            opt.innerText = i;
            select.appendChild(opt);
        }

        const btn = document.createElement('button');
        btn.className = 'chat-option-btn';
        btn.innerText = t.chat_btn_confirm;

        btn.onclick = () => {
            quoteData.pax = select.value;
            renderMessage(quoteData.pax, 'user');
            clearOptions();
            finishChat(t);
        };

        container.appendChild(select);
        container.appendChild(btn);
        const els = getChatElements();
        if (els.messages) els.messages.scrollTop = els.messages.scrollHeight;
    }

    function finishChat(t) {
        chatState = 'final';
        renderMessage(t.chat_final, 'bot');

        const waNumber = "351968224687";
        const text = `${t.wa_start} ${quoteData.name}. ${t.wa_want_quote}\n${t.wa_service}: ${quoteData.service}\n${t.wa_dest}: ${quoteData.dest}\n${t.wa_date}: ${quoteData.date}\n${t.wa_pax}: ${quoteData.pax}`;
        const encodedText = encodeURIComponent(text);
        const waLink = `https://wa.me/${waNumber}?text=${encodedText}`;

        const finishBtn = document.createElement('a');
        finishBtn.href = waLink;
        finishBtn.target = "_blank";
        finishBtn.className = "btn btn-primary";
        finishBtn.innerText = t.chat_btn_whatsapp;
        finishBtn.style.marginTop = "10px";
        finishBtn.style.display = "inline-block";

        const container = document.createElement('div');
        container.style.textAlign = "center";
        container.appendChild(finishBtn);
        const els = getChatElements();
        els.messages.appendChild(container);
        els.messages.scrollTop = els.messages.scrollHeight;

        renderOptions([{ text: t.btn_back, action: 'restart' }]);
    }
})();



// =========================================
// EXIT INTENT LOGIC
// =========================================
// Exit Intent Logic (Updated)
document.addEventListener('DOMContentLoaded', () => {
    const exitModal = document.getElementById('exit-intent-modal');
    const exitCloseBtn = document.querySelector('.exit-modal-close');
    const exitWaBtn = document.getElementById('exit-wa-btn');

    if (!exitModal) {
        return;
    }

    // Configure WhatsApp Link with localized message
    const setupWaLink = () => {
        if (!exitWaBtn) return;

        const lang = localStorage.getItem('selectedLang') || 'pt';
        const waNumber = "351968224687";

        const msgMap = {
            pt: "Olá! Estava visitando o site ETransfers e tenho algumas dúvidas. Poderiam me ajudar?",
            en: "Hello! I was visiting the ETransfers website and I have some questions. Could you help me?",
            es: "¡Hola! Estaba visitando el sitio web de ETransfers y tengo algunas dudas. ¿Podrían ayudarme?",
            fr: "Bonjour ! Je visitais le site ETransfers et j'ai quelques questions. Pourriez-vous m'aider ?"
        };

        const msg = msgMap[lang] || msgMap.pt;
        const encodedText = encodeURIComponent(msg);
        exitWaBtn.href = `https://wa.me/${waNumber}?text=${encodedText}`;
    };

    // Show Modal Function
    const showExitModal = () => {
        try {
            // Check if already shown in this session/storage
            if (!localStorage.getItem('exitIntentShown')) {
                setupWaLink(); // Update link before showing
                exitModal.classList.add('active');
                localStorage.setItem('exitIntentShown', 'true');
            }
        } catch (e) {
            // If localStorage is disabled (private mode), just show the modal
            // or fail silently. We'll choose to show it to be safe.
            setupWaLink();
            exitModal.classList.add('active');
        }
    };

    // Close Modal Function
    const closeExitModal = () => {
        exitModal.classList.remove('active');
    };

    // Event Listener for Mouse Out (Better for Exit Intent)
    document.addEventListener('mouseout', (e) => {
        // If relatedTarget is null, it means we left the window
        if (!e.relatedTarget && e.clientY <= 0) {
            showExitModal();
        }
    });

    // Close listeners
    if (exitCloseBtn) {
        exitCloseBtn.addEventListener('click', closeExitModal);
    }

    // Close on overlay click
    exitModal.addEventListener('click', (e) => {
        if (e.target === exitModal) {
            closeExitModal();
        }
    });
});
