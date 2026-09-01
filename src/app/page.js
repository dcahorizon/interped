'use client';

import React from 'react';
import { Container, Row, Col, Navbar, Nav, Card, Button, Form } from 'react-bootstrap';
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
          <h2 className="text-center mb-5 fw-bold text-dark">Nuestros Planes de Internet</h2>

          {/* Tecnología Radioenlace */}
          <h3 className="text-secondary mb-4 border-bottom pb-2">Tecnología Radioenlace</h3>
          <Row className="mb-5">
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0 text-center border-top border-primary border-4">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="fw-bold text-primary">Radioenlace Básico</Card.Title>
                    <Card.Subtitle className="mb-3 text-muted">Ideal para hogares</Card.Subtitle>
                    <h2 className="display-5 fw-bold text-dark">$20</h2>
                    <p className="fs-4 text-custom-green fw-semibold">30 Mbps</p>
                  </div>
                  <Button variant="outline-primary" href="#contacto">Contratar</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0 text-center border-top border-primary border-4 bg-white shadow">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="fw-bold text-primary">Radioenlace Estándar</Card.Title>
                    <Card.Subtitle className="mb-3 text-muted">Más popular</Card.Subtitle>
                    <h2 className="display-5 fw-bold text-dark">$25</h2>
                    <p className="fs-4 text-custom-green fw-semibold">40 Mbps</p>
                  </div>
                  <Button variant="primary" href="#contacto">Contratar</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0 text-center border-top border-primary border-4">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="fw-bold text-primary">Radioenlace Avanzado</Card.Title>
                    <Card.Subtitle className="mb-3 text-muted">Máxima potencia</Card.Subtitle>
                    <h2 className="display-5 fw-bold text-dark">$30</h2>
                    <p className="fs-4 text-custom-green fw-semibold">50 Mbps</p>
                  </div>
                  <Button variant="outline-primary" href="#contacto">Contratar</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Tecnología Fibra Óptica */}
          <h3 className="text-secondary mb-4 border-bottom pb-2">Tecnología Fibra Óptica</h3>
          <Row className="mb-5">
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0 text-center border-top border-danger border-4">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="fw-bold text-danger">Fibra Básica</Card.Title>
                    <Card.Subtitle className="mb-3 text-muted">Simétrico</Card.Subtitle>
                    <h2 className="display-5 fw-bold text-dark">$20</h2>
                    <p className="fs-4 text-danger fw-semibold">200 Mbps</p>
                  </div>
                  <Button variant="outline-danger" href="#contacto">Contratar</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0 text-center border-top border-danger border-4">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="fw-bold text-danger">Fibra Estándar</Card.Title>
                    <Card.Subtitle className="mb-3 text-muted">Alta velocidad</Card.Subtitle>
                    <h2 className="display-5 fw-bold text-dark">$25</h2>
                    <p className="fs-4 text-danger fw-semibold">400 Mbps</p>
                  </div>
                  <Button variant="outline-danger" href="#contacto">Contratar</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0 text-center border-top border-danger border-4">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="fw-bold text-danger">Fibra Pro</Card.Title>
                    <Card.Subtitle className="mb-3 text-muted">Experiencia total</Card.Subtitle>
                    <h2 className="display-5 fw-bold text-dark">$30</h2>
                    <p className="fs-4 text-danger fw-semibold">600 Mbps</p>
                  </div>
                  <Button variant="danger" href="#contacto">Contratar</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* Sección de Contacto */}
        <section id="contacto" className="py-5 bg-white shadow-sm my-5 border-top border-bottom">
          <Container>
            <h2 className="text-center mb-4 fw-bold text-dark">Contáctanos</h2>
            <p className="text-center text-muted mb-5">
              ¿Listo para dar el salto de velocidad? Escríbenos y nos pondremos en contacto contigo.
            </p>
            <Row className="justify-content-center">
              <Col md={8}>
                <Form className="p-4 rounded shadow-sm bg-light">
                  <Form.Group className="mb-3" controlId="formNombre">
                    <Form.Label className="fw-semibold">Nombre Completo</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu nombre" required />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label className="fw-semibold">Correo Electrónico</Form.Label>
                    <Form.Control type="email" placeholder="nombre@ejemplo.com" required />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formTelefono">
                    <Form.Label className="fw-semibold">Teléfono / WhatsApp</Form.Label>
                    <Form.Control type="tel" placeholder="0999999999" required />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formMensaje">
                    <Form.Label className="fw-semibold">Mensaje o Plan de Interés</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Cuéntanos qué plan te interesa..." required />
                  </Form.Group>
                  <Button variant="custom-green" type="submit" className="w-100 fw-bold py-2">
                    Enviar Mensaje
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>
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
                <strong>Dirección:</strong> Av. Principal e Intersección, Ecuador
              </p>
              <p className="text-white-50 small mb-2">
                <strong>Teléfono:</strong> +593 99 999 9999
              </p>
              <p className="text-white-50 small mb-2">
                <strong>Correo:</strong> contacto@interped.ec
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