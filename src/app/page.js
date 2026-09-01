'use client';

import React from 'react';
import { Container, Row, Col, Navbar, Nav, Card, Button, Form, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Asegúrate de importar tus estilos globales si no se importan automáticamente en layout.js
// import './globals.css'; 

export default function Home() {
  // Array con los items para la marquesina
  const marqueeItems = [
    "🚀 ¡Promoción especial en Fibra Óptica simétrica!",
    "💡 Contáctanos hoy y obtén instalación y de 1 a 3 meses gratis en planes seleccionados.",
    "🛠️ Soporte técnico y atención al cliente 24/7 Asistente Virtual",
    "⚡ La velocidad que necesitas al mejor precio con Interped."
  ];

  return (
    <div className="d-flex flex-column min-vh-100 bg-light position-relative">
      {/* Barra de Navegación */}
      <Navbar bg="white" variant="light" expand="lg" sticky="top" className="shadow-sm py-3">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              src="/logo.svg"
              alt="Interped"
              height="45"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="fw-semibold align-items-lg-center">
              <Nav.Link href="#planes" className="text-dark px-3">Planes</Nav.Link>
              <Nav.Link href="#contacto" className="text-dark px-3">Contacto</Nav.Link>

              {/* Botón de Soporte (Verde) */}
              <Button
                href="https://wa.me/593987777125?text=Hola,%20necesito%20soporte%20técnico"
                target="_blank"
                rel="noopener noreferrer"
                variant="success"
                className="ms-lg-3 my-2 my-lg-0 bg-custom-green border-0 text-white fw-bold px-3 py-2 d-inline-flex align-items-center justify-content-center shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="me-2">
                  <path d="M4 12a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1v-1a6 6 0 1 0-12 0v1h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2v-5z" fill="#00d2ff" />
                  <rect x="2" y="11" width="3" height="6" rx="1.5" fill="#ffaa00" />
                  <rect x="19" y="11" width="3" height="6" rx="1.5" fill="#ffaa00" />
                </svg>
                Soporte
              </Button>

              {/* Botón de Promoción (Azul) */}
              <Button
                href="https://wa.me/593988845855?text=Hola,%20quiero%20mis%203%20meses%20gratis"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="ms-lg-2 my-2 my-lg-0 border-0 text-white fw-bold px-3 py-2 d-inline-flex align-items-center justify-content-center shadow-sm"
                style={{ backgroundColor: '#0066cc' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="me-2">
                  <rect x="3" y="10" width="18" height="11" rx="2" fill="#ff3b30" />
                  <rect x="2" y="6" width="20" height="4" rx="1" fill="#c91c14" />
                  <rect x="10.5" y="6" width="3" height="15" fill="#ffcc00" />
                  <rect x="2" y="13" width="20" height="3" fill="#ffcc00" />
                  <path d="M12 6C10 3 6 4 8 6C10 8 12 6 12 6Z" fill="#ffcc00" />
                  <path d="M12 6C14 3 18 4 16 6C14 8 12 6 12 6Z" fill="#ffcc00" />
                </svg>
                Quiero mis 3 meses gratis
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Barra de Marquesina (Ticker) entre el Navbar y el Hero */}
      <div
        className="text-white overflow-hidden d-flex align-items-center border-bottom border-secondary position-relative shadow-sm"
        style={{ height: '40px' }}
      >
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            white-space: nowrap;
            animation: marquee 30s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((text, index) => (
            <span key={index} className="mx-4 fw-medium text-secondary d-flex align-items-center">
              {text} <span className="text-custom-green ms-4">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Sección Hero / Bienvenida */}
      <header className="bg-custom-dark text-white py-5 shadow-sm position-relative overflow-hidden" style={{
        backgroundImage: 'linear-gradient(rgba(10, 15, 29, 0.7), rgba(18, 34, 64, 0.8)), url("/fondo.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Capa SVG con nodos estilo destello/flash en tonos blancos y sutiles */}
        <svg className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none" style={{ zIndex: 1, opacity: 0.65 }} viewBox="0 0 1200 600" preserveAspectRatio="none">
          <defs>
            <filter id="flashGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Líneas de conexión sutiles en blanco translúcido */}
          <g stroke="rgba(255, 255, 255, 0.18)" strokeWidth="1" strokeDasharray="4 6" fill="none">
            <path d="M 120 120 L 320 220 L 580 140 L 820 260 L 1020 180" />
            <path d="M 180 420 L 380 340 L 620 420 L 880 320 L 1080 390" />
            <path d="M 320 220 L 380 340" />
            <path d="M 580 140 L 620 420" />
            <path d="M 820 260 L 880 320" />
          </g>

          {/* Nodos tipo flash / destellos blancos y opacos sin colores */}
          <g filter="url(#flashGlow)" fill="rgba(255, 255, 255, 0.6)">
            <circle cx="120" cy="120" r="3">
              <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="320" cy="220" r="4">
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="580" cy="140" r="3.5">
              <animate attributeName="opacity" values="0.2;0.7;0.2" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="820" cy="260" r="4">
              <animate attributeName="opacity" values="0.3;0.85;0.3" dur="2.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="1020" cy="180" r="3">
              <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="180" cy="420" r="3.5">
              <animate attributeName="opacity" values="0.25;0.9;0.25" dur="3.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="380" cy="340" r="4">
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.6s" repeatCount="indefinite" />
            </circle>
            <circle cx="620" cy="420" r="3">
              <animate attributeName="opacity" values="0.2;0.75;0.2" dur="4.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="880" cy="320" r="4.5">
              <animate attributeName="opacity" values="0.3;0.95;0.3" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="1080" cy="390" r="3">
              <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3.8s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>

        <Container className="py-2 position-relative" style={{ zIndex: 2 }}>
          <Row className="align-items-center justify-content-center g-4">
            <Col lg={8} className="text-center">
              <div className="d-inline-block bg-success bg-opacity-25 text-custom-green px-3 py-2 rounded-pill mb-3 fw-bold border border-success shadow-sm">
                🚀 ¡YA ESTAMOS EN PEDERNALES!
              </div>
              <h1 className="display-4 fw-bold lh-base">
                Conexión de <span className="text-custom-green">Alta Velocidad</span> con Interped
              </h1>
              <p className="lead mt-3 text-white-50">
                Fibra óptica rápida, estable y segura para tu hogar o negocio. Experimenta el flujo total de la ciudad conectada.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center mt-4">
                <Button
                  variant="primary"
                  size="lg"
                  href="https://wa.me/593988845855?text=Hola,%20quiero%20mis%203%20meses%20gratis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fw-bold px-4 border-0 shadow-sm"
                  style={{ backgroundColor: '#0066cc' }}
                >
                  🎁 Quiero mis 3 meses gratis
                </Button>
                <Button variant="success" size="lg" href="#planes" className="fw-bold px-4 bg-custom-green border-0 shadow-sm">
                  Ver Planes
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Contenido Principal */}
      <main className="flex-grow-1 my-5">
        <Container id="planes">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark display-5">Nuestros Planes de Internet</h2>
            <p className="text-muted">Elige la tecnología que mejor se adapte a tu hogar o negocio en Pedernales.</p>
          </div>

          {/* Pestañas (Tabs) con estados activos claros */}
          <Tabs
            defaultActiveKey="fibra"
            id="tecnologias-tabs"
            className="mb-5 justify-content-center border-0 custom-tabs"
            fill
          >
            {/* PESTAÑA 1: FIBRA ÓPTICA */}
            <Tab eventKey="fibra" title={<span className="fw-bold px-3 py-2 text-success">⚡ Fibra Óptica (Simétrica)</span>}>
              <Row className="justify-content-center g-4 pt-3">
                {/* Fibra Básica ($20 - Sin Zapping) */}
                <Col lg={4} md={6}>
                  <Card className="h-100 shadow-sm rounded-4 text-center border border-2 border-success bg-white">
                    <Card.Body className="d-flex flex-column justify-content-between p-4">
                      <div>
                        <div className="text-uppercase small fw-bold text-muted mb-2">Para empezar</div>
                        <Card.Title className="fw-bold text-dark fs-3">Fibra Básica</Card.Title>
                        <p className="text-muted small mb-4">Ideal para streaming y teletrabajo básico</p>

                        <div className="bg-light rounded-4 py-3 mb-4">
                          <span className="fs-1 fw-bold text-dark">$20</span>
                          <span className="text-muted small"> / mes</span>
                          <div className="fs-3 fw-bold text-success mt-2">200 Mbps</div>
                          <span className="badge bg-success bg-opacity-10 text-success mt-1">Simétrico</span>
                        </div>

                        <ul className="list-unstyled text-start small text-muted mb-4 px-2">
                          <li className="mb-2">✔ Conexión 100% fibra óptica</li>
                          <li className="mb-2">✔ Sin límites de descarga</li>
                          <li className="mb-2">✔ Soporte técnico prioritario</li>
                        </ul>
                      </div>
                      <Button variant="outline-success" href="#contacto" className="w-100 fw-bold rounded-pill py-2">
                        Contratar Fibra Básica
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Fibra Estándar ($25 - TARJETA OSCURA / TEXTO BLANCO) */}
                <Col lg={4} md={6}>
                  <Card className="h-100 shadow-lg rounded-4 text-center border-2 border-success bg-dark text-white position-relative overflow-hidden" style={{ transform: 'scale(1.04)', zIndex: 2 }}>
                    <div className="bg-success text-white py-1 small fw-bold text-uppercase tracking-wider">
                      🔥 El más recomendado
                    </div>

                    {/* Insignia Zapping (Ubicación más abajo para no tocar la franja superior) */}
                    <div className="position-absolute end-0 d-flex flex-column align-items-center p-1" style={{ top: '42px', right: '1rem', zIndex: 3, minWidth: '45px' }}>
                      <div className="rounded-circle overflow-hidden mb-1" style={{ width: '30px', height: '30px' }}>
                        <img src="/zapping.png" alt="Zapping" className="w-100 h-100 object-fit-cover" />
                      </div>
                      <span className="text-white fw-bold" style={{ fontSize: '9px', letterSpacing: '0.5px' }}>ZAPPING</span>
                    </div>

                    <Card.Body className="d-flex flex-column justify-content-between p-4 pt-3">
                      <div>
                        <div className="text-uppercase small fw-bold text-success mb-2">Hogar Conectado</div>
                        <Card.Title className="fw-bold text-white fs-3">Fibra Estándar</Card.Title>
                        <p className="text-white-50 small mb-4">Para múltiples dispositivos y juegos online</p>

                        <div className="bg-secondary bg-opacity-25 rounded-4 py-3 mb-4 border border-secondary">
                          <span className="fs-1 fw-bold text-white">$25</span>
                          <span className="text-white-50 small"> / mes</span>
                          <div className="fs-3 fw-bold text-custom-green mt-2">400 Mbps</div>
                          <span className="badge bg-success text-white mt-1">Simétrico</span>
                        </div>

                        <ul className="list-unstyled text-start small text-white-50 mb-4 px-2">
                          <li className="mb-2"><span className="text-success">✔</span> Velocidad ultra rápida</li>
                          <li className="mb-2"><span className="text-success">✔</span> Ideal para 4K y gaming</li>
                          <li className="mb-2"><span className="text-success">✔</span> Router Wi-Fi de alta gama incluido</li>
                          <li className="mb-2"><span className="text-success">✔</span> Incluye TV en vivo con Zapping</li>
                        </ul>
                      </div>
                      <Button variant="success" href="#contacto" className="w-100 fw-bold rounded-pill py-2 shadow-sm bg-custom-green border-0">
                        Contratar Fibra Estándar
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Fibra Pro ($30 - TARJETA BLANCA / TEXTO OSCURO) */}
                <Col lg={4} md={6}>
                  <Card className="h-100 shadow-sm rounded-4 text-center border border-2 border-success bg-white position-relative">

                    {/* Insignia Zapping (Ubicación más abajo) */}
                    <div className="position-absolute end-0 d-flex flex-column align-items-center p-1" style={{ top: '20px', right: '1rem', zIndex: 3, minWidth: '45px' }}>
                      <div className="rounded-circle overflow-hidden mb-1" style={{ width: '30px', height: '30px' }}>
                        <img src="/zapping.png" alt="Zapping" className="w-100 h-100 object-fit-cover" />
                      </div>
                      <span className="text-dark fw-bold" style={{ fontSize: '9px', letterSpacing: '0.5px' }}>ZAPPING</span>
                    </div>

                    <Card.Body className="d-flex flex-column justify-content-between p-4">
                      <div>
                        <div className="text-uppercase small fw-bold text-muted mb-2">Máximo Rendimiento</div>
                        <Card.Title className="fw-bold text-dark fs-3">Fibra Pro</Card.Title>
                        <p className="text-muted small mb-4">Para creadores, empresas y hogares exigentes</p>

                        <div className="bg-light rounded-4 py-3 mb-4">
                          <span className="fs-1 fw-bold text-dark">$30</span>
                          <span className="text-muted small"> / mes</span>
                          <div className="fs-3 fw-bold text-success mt-2">600 Mbps</div>
                          <span className="badge bg-success bg-opacity-10 text-success mt-1">Simétrico</span>
                        </div>

                        <ul className="list-unstyled text-start small text-muted mb-4 px-2">
                          <li className="mb-2">✔ Ancho de banda extremo</li>
                          <li className="mb-2">✔ Conexión ultra estable</li>
                          <li className="mb-2">✔ Atención VIP preferencial</li>
                          <li className="mb-2">✔ Incluye TV en vivo con Zapping</li>
                        </ul>
                      </div>
                      <Button variant="outline-success" href="#contacto" className="w-100 fw-bold rounded-pill py-2">
                        Contratar Fibra Pro
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Tab>

            {/* PESTAÑA 2: RADIOENLACE */}
            <Tab eventKey="radioenlace" title={<span className="fw-bold px-3 py-2 text-primary">📡 Radioenlace (Zona Inalámbrica)</span>}>
              <Row className="justify-content-center g-4 pt-3">
                {/* Radio Básico ($20 - Sin Zapping) */}
                <Col lg={4} md={6}>
                  <Card className="h-100 shadow-sm rounded-4 text-center border border-2 border-primary bg-white">
                    <Card.Body className="d-flex flex-column justify-content-between p-4">
                      <div>
                        <div className="text-uppercase small fw-bold text-muted mb-2">Acceso Inalámbrico</div>
                        <Card.Title className="fw-bold text-dark fs-3">Radio Básico</Card.Title>
                        <p className="text-muted small mb-4">Para zonas de difícil acceso</p>

                        <div className="bg-light rounded-4 py-3 mb-4">
                          <span className="fs-1 fw-bold text-dark">$20</span>
                          <span className="text-muted small"> / mes</span>
                          <div className="fs-3 fw-bold text-primary mt-2">30 Mbps</div>
                        </div>

                        <ul className="list-unstyled text-start small text-muted mb-4 px-2">
                          <li className="mb-2">✔ Instalación rápida con antena</li>
                          <li className="mb-2">✔ Cobertura garantizada</li>
                          <li className="mb-2">✔ Soporte técnico incluido</li>
                        </ul>
                      </div>
                      <Button variant="outline-primary" href="#contacto" className="w-100 fw-bold rounded-pill py-2">
                        Elegir Radio Básico
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Radio Estándar ($25 - TARJETA OSCURA / TEXTO BLANCO) */}
                <Col lg={4} md={6}>
                  <Card className="h-100 shadow-lg rounded-4 text-center border-2 border-primary bg-dark text-white position-relative overflow-hidden" style={{ transform: 'scale(1.04)', zIndex: 2 }}>
                    <div className="text-white py-1 small fw-bold text-uppercase tracking-wider" style={{ backgroundColor: '#0066cc' }}>
                      ⭐ Más Popular
                    </div>

                    {/* Insignia Zapping (Ubicación más abajo) */}
                    <div className="position-absolute end-0 d-flex flex-column align-items-center p-1" style={{ top: '42px', right: '1rem', zIndex: 3, minWidth: '45px' }}>
                      <div className="rounded-circle overflow-hidden mb-1" style={{ width: '30px', height: '30px' }}>
                        <img src="/zapping.png" alt="Zapping" className="w-100 h-100 object-fit-cover" />
                      </div>
                      <span className="text-white fw-bold" style={{ fontSize: '9px', letterSpacing: '0.5px' }}>ZAPPING</span>
                    </div>

                    <Card.Body className="d-flex flex-column justify-content-between p-4 pt-3">
                      <div>
                        <div className="text-uppercase small fw-bold text-primary mb-2">Inalámbrico Plus</div>
                        <Card.Title className="fw-bold text-white fs-3">Radio Estándar</Card.Title>
                        <p className="text-white-50 small mb-4">El equilibrio perfecto para el hogar</p>

                        <div className="bg-secondary bg-opacity-25 rounded-4 py-3 mb-4 border border-secondary">
                          <span className="fs-1 fw-bold text-white">$25</span>
                          <span className="text-white-50 small"> / mes</span>
                          <div className="fs-3 fw-bold text-info mt-2">40 Mbps</div>
                        </div>

                        <ul className="list-unstyled text-start small text-white-50 mb-4 px-2">
                          <li className="mb-2"><span className="text-primary">✔</span> Mejor estabilidad inalámbrica</li>
                          <li className="mb-2"><span className="text-primary">✔</span> Ideal para redes sociales y clases</li>
                          <li className="mb-2"><span className="text-primary">✔</span> Monitoreo constante de señal</li>
                          <li className="mb-2"><span className="text-primary">✔</span> Incluye TV en vivo con Zapping</li>
                        </ul>
                      </div>
                      <Button variant="primary" href="#contacto" className="w-100 fw-bold rounded-pill py-2 shadow-sm border-0" style={{ backgroundColor: '#0066cc' }}>
                        Elegir Radio Estándar
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Radio Avanzado ($30 - TARJETA BLANCA / TEXTO OSCURO) */}
                <Col lg={4} md={6}>
                  <Card className="h-100 shadow-sm rounded-4 text-center border border-2 border-primary bg-white position-relative">

                    {/* Insignia Zapping (Ubicación más abajo) */}
                    <div className="position-absolute end-0 d-flex flex-column align-items-center p-1" style={{ top: '20px', right: '1rem', zIndex: 3, minWidth: '45px' }}>
                      <div className="rounded-circle overflow-hidden mb-1" style={{ width: '30px', height: '30px' }}>
                        <img src="/zapping.png" alt="Zapping" className="w-100 h-100 object-fit-cover" />
                      </div>
                      <span className="text-dark fw-bold" style={{ fontSize: '9px', letterSpacing: '0.5px' }}>ZAPPING</span>
                    </div>

                    <Card.Body className="d-flex flex-column justify-content-between p-4">
                      <div>
                        <div className="text-uppercase small fw-bold text-muted mb-2">Potencia Inalámbrica</div>
                        <Card.Title className="fw-bold text-dark fs-3">Radio Avanzado</Card.Title>
                        <p className="text-muted small mb-4">Máxima velocidad por aire</p>

                        <div className="bg-light rounded-4 py-3 mb-4">
                          <span className="fs-1 fw-bold text-dark">$30</span>
                          <span className="text-muted small"> / mes</span>
                          <div className="fs-3 fw-bold text-primary mt-2">50 Mbps</div>
                        </div>

                        <ul className="list-unstyled text-start small text-muted mb-4 px-2">
                          <li className="mb-2">✔ Alto rendimiento por aire</li>
                          <li className="mb-2">✔ Mayor capacidad simultánea</li>
                          <li className="mb-2">✔ Soporte técnico preferencial</li>
                          <li className="mb-2">✔ Incluye TV en vivo con Zapping</li>
                        </ul>
                      </div>
                      <Button variant="outline-primary" href="#contacto" className="w-100 fw-bold rounded-pill py-2">
                        Elegir Radio Avanzado
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Tab>
          </Tabs>

          {/* Zona de Proveedor de Streaming (Zapping en Gris) */}
          <div className="mt-5 pt-4 border-top text-center">
            <p className="text-uppercase small fw-bold text-muted mb-3 tracking-wider">
              Planes desde $25 incluyen plataforma de televisión en vivo
            </p>
            <div className="d-flex justify-content-center align-items-center py-2">
              <span className="text-secondary fw-bold fs-3 text-uppercase opacity-50" style={{ letterSpacing: '6px' }}>
                Zapping
              </span>
            </div>
            <p className="text-muted small mt-1">Disfruta de tus canales favoritos de TV en directo con la mejor calidad digital.</p>
          </div>
        </Container>
      </main>

      {/* Pie de Página Dividido en 3 Secciones */}
      <footer className="bg-custom-dark text-white py-5 mt-auto">
        <Container>
          <Row className="g-4">
            {/* Sección 1: Links de Interés */}
            <Col md={4}>
              <h5 className="fw-bold text-custom-green mb-3">Links de Interés</h5>
              <ul className="list-unstyled small">
                <li className="mb-3">
                  <a
                    href="https://www.arcotel.gob.ec/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none d-flex align-items-center"
                  >
                    <strong>ARCOTEL (Sitio Oficial)</strong>
                  </a>
                </li>
                <li className="mb-2"><a href="#planes" className="text-white-50 text-decoration-none">Nuestros Planes</a></li>
                <li className="mb-2"><a href="#contacto" className="text-white-50 text-decoration-none">Soporte y Atención</a></li>
              </ul>
            </Col>

            {/* Sección 2: Transparencia regulatoria (PDFs) */}
            <Col md={4}>
              <h5 className="fw-bold text-custom-green mb-3">Transparencia regulatoria (PDFs)</h5>
              <ul className="list-unstyled small">
                <li><a href="/docs/archivo1.pdf" target="_blank" className="text-white-50 text-decoration-none">1. Título Habilitante</a></li>
                <li><a href="/docs/archivo2.pdf" target="_blank" className="text-white-50 text-decoration-none">2. Tarifas Homologadas</a></li>
                <li><a href="/docs/archivo3.pdf" target="_blank" className="text-white-50 text-decoration-none">3. Cobertura del Servicio</a></li>
                <li><a href="/docs/archivo4.pdf" target="_blank" className="text-white-50 text-decoration-none">4. Calidad del Servicio</a></li>
                <li><a href="/docs/archivo5.pdf" target="_blank" className="text-white-50 text-decoration-none">5. Derechos y Obligaciones</a></li>
                <li><a href="/docs/archivo6.pdf" target="_blank" className="text-white-50 text-decoration-none">6. Contrato de Adhesión</a></li>
                <li><a href="/docs/archivo7.pdf" target="_blank" className="text-white-50 text-decoration-none">7. Planes de Contingencia</a></li>
                <li><a href="/docs/archivo8.pdf" target="_blank" className="text-white-50 text-decoration-none">8. Procedimiento de Reclamos</a></li>
                <li><a href="/docs/archivo9.pdf" target="_blank" className="text-white-50 text-decoration-none">9. Indicadores de Calidad</a></li>
                <li><a href="/docs/archivo10.pdf" target="_blank" className="text-white-50 text-decoration-none">10. Neutralidad de Red</a></li>
                <li><a href="/docs/archivo11.pdf" target="_blank" className="text-white-50 text-decoration-none">11. Política de Privacidad</a></li>
                <li><a href="/docs/archivo12.pdf" target="_blank" className="text-white-50 text-decoration-none">12. Registro de Abonados</a></li>
                <li><a href="/docs/archivo13.pdf" target="_blank" className="text-white-50 text-decoration-none">13. Tarifas de Reinstalación</a></li>
              </ul>
            </Col>

            {/* Sección 3: Datos de Contacto */}
            <Col md={4}>
              <h5 className="fw-bold text-custom-green mb-3">Datos de Contacto</h5>
              <p className="text-white-50 small mb-2">
                <strong>Dirección:</strong> Pedernales, Ecuador
              </p>
              <p className="text-white-50 small mb-2">
                <strong>Teléfono:</strong> +593987777125
              </p>
              <p className="text-white-50 small mb-2">
                <strong>Correo:</strong> contacto@interped.com.ec
              </p>
              <p className="text-white-50 small mb-0">
                <strong>Horario:</strong> Lunes a Sábado, 08:00 - 18:00
              </p>
            </Col>
          </Row>

          <hr className="border-secondary my-4" />

          <Row>
            <Col className="text-center text-white-50 small" suppressHydrationWarning={true}>
              &copy; {new Date().getFullYear()} Interped. Todos los derechos reservados.
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Botón Flotante de WhatsApp */}
      <a
        href="https://wa.me/593987777125?text=Hola,%20necesito%20ayuda"
        target="_blank"
        rel="noopener noreferrer"
        className="position-fixed bottom-0 end-0 m-4 btn btn-success rounded-circle shadow-lg d-flex align-items-center justify-content-center bg-custom-green border-0"
        style={{ width: '60px', height: '60px', zIndex: 1050 }}
        title="Chatea con nosotros"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.348.1-.104.133-.197.2-.329.065-.132.034-.248-.015-.348-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.17-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      </a>
    </div>
  );
}