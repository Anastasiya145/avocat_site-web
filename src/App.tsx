import { type FormEvent, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [messageReady, setMessageReady] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessageReady(true);
  };

  return (
    <>
      <header className="site-header">
        <a
          className="wordmark"
          href="#accueil"
          onClick={closeMenu}
          aria-label="Laura Loizel, accueil"
        >
          <span className="wordmark-monogram" aria-hidden="true">
            <span>L</span>
            <span>L</span>
          </span>
          <span className="wordmark-name">
            Laura Loizel<small>Avocate · Rouen</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav
          className={menuOpen ? "main-nav is-open" : "main-nav"}
          aria-label="Navigation principale"
        >
          <a href="#cabinet" onClick={closeMenu}>
            Le cabinet
          </a>
          <a href="#parcours" onClick={closeMenu}>
            Parcours
          </a>
          <a href="#expertises" onClick={closeMenu}>
            Expertises
          </a>
          <a href="#honoraires" onClick={closeMenu}>
            Honoraires
          </a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Contact <span aria-hidden="true">&rarr;</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero page-width" id="accueil">
          <div className="hero-copy reveal reveal-left">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              Cabinet d'avocat · Rouen
            </p>
            <h1>
              Une écoute attentive.
              <br />
              <em>Une parole claire.</em>
            </h1>
            <p className="hero-intro">
              Vous accompagner avec exigence, humanité et engagement, à chaque
              étape de votre parcours.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#contact">
                Parlons de votre situation{" "}
                <span aria-hidden="true">&rarr;</span>
              </a>
              <a className="text-link" href="#expertises">
                Découvrir le cabinet
              </a>
            </div>
          </div>
          <div className="hero-art reveal reveal-right">
            <img
              className="hero-portrait"
              src={`${import.meta.env.BASE_URL}photo_avocat.jpg`}
              alt="Maître Laura Loizel, avocate à Rouen"
            />
            {/* <div className="art-corner art-corner-top" /> */}
          </div>
        </section>

        <section className="intro-section section-pad" id="lavocate">
          <div className="page-width intro-grid">
            <div className="intro-title reveal">
              <p className="eyebrow">
                01 <span className="eyebrow-line" /> L'avocate
              </p>
              <h2>Le droit commence par un échange.</h2>
            </div>
            <div className="intro-content reveal">
              <h3 className="intro-subtitle">Laura Loizel, avocate à Rouen.</h3>
              <p>
                Chaque situation mérite d’être exposée avec attention. Le
                premier contact permet de présenter votre demande et de
                convenir, si nécessaire, d’un rendez-vous au cabinet.
              </p>
              <p>
                Le cabinet est situé au 85 bis rue Jeanne d’Arc, à Rouen. Les
                échanges sont abordés dans le respect de la confidentialité.
              </p>
            </div>
          </div>
          <div className="page-width career-grid" id="parcours">
            <div className="career-heading reveal">
              <p className="eyebrow">
                <span className="eyebrow-line" />
                Parcours &amp; expérience
              </p>
              <h2>Un parcours à partager.</h2>
              <p>
                Les informations ci-dessous sont provisoires et seront
                complétées avec Laura Loizel avant publication.
              </p>
            </div>
            <ol className="career-list">
              <li className="career-item reveal">
                <span className="career-number">01</span>
                <div>
                  <span className="career-kind">Formation universitaire</span>
                  <h3>Bac +5 en droit</h3>
                  <p>Diplôme, établissement et dates à confirmer.</p>
                </div>
              </li>
              <li className="career-item reveal reveal-delay-1">
                <span className="career-number">02</span>
                <div>
                  <span className="career-kind">Formation complémentaire</span>
                  <h3>Formation à préciser</h3>
                  <p>Intitulé et établissement à compléter.</p>
                </div>
              </li>
              <li className="career-item reveal reveal-delay-2">
                <span className="career-number">03</span>
                <div>
                  <span className="career-kind">Formation professionnelle</span>
                  <h3>Parcours professionnel à compléter</h3>
                  <p>
                    Formations et étapes du parcours à valider avec le cabinet.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="expertise-section section-pad" id="expertises">
          <div className="page-width expertise-grid">
            <div className="expertise-heading reveal">
              <p className="eyebrow">
                02 <span className="eyebrow-line" /> Domaines d'intervention
              </p>
              <h2>Votre situation, le point de départ.</h2>
              <p>
                Contenu éditorial provisoire. Les domaines seront précisés avec
                l'avocate avant la mise en ligne.
              </p>
            </div>
            <div className="expertise-list">
              <article className="expertise-item reveal">
                <span className="item-number">01</span>
                <div>
                  <h3>Domaines d’intervention à préciser</h3>
                  <p>Matières et périmètre d’intervention à valider.</p>
                </div>
                <span className="expertise-mark" aria-hidden="true">−</span>
              </article>
              <article className="expertise-item reveal reveal-delay-1">
                <span className="item-number">02</span>
                <div>
                  <h3>Situations accompagnées à préciser</h3>
                  <p>Présentation des demandes accueillies à compléter.</p>
                </div>
                <span className="expertise-mark" aria-hidden="true">−</span>
              </article>
              <article className="expertise-item reveal reveal-delay-2">
                <span className="item-number">03</span>
                <div>
                  <h3>Modalités d’intervention à préciser</h3>
                  <p>Nature de l’accompagnement à confirmer.</p>
                </div>
                <span className="expertise-mark" aria-hidden="true">−</span>
              </article>
            </div>
          </div>
        </section>

        <section className="process-section section-pad">
          <div className="page-width">
            <div className="process-heading reveal">
              <div>
                <p className="eyebrow">03 / Le premier rendez-vous</p>
                <h2>Avancer, étape par étape.</h2>
              </div>
              <p>
                Un cadre simple pour aborder votre demande. Ces indications
                restent à valider avec le cabinet.
              </p>
            </div>
            <ol className="process-list">
              <li className="process-step reveal">
                <span className="process-number">01</span>
                <h3>Prendre contact</h3>
                <p>
                  Présentez brièvement votre demande par téléphone ou via le
                  formulaire. Évitez de transmettre des documents sensibles à ce
                  stade.
                </p>
              </li>
              <li className="process-step reveal reveal-delay-1">
                <span className="process-number">02</span>
                <h3>Préparer l’échange</h3>
                <p>
                  Un rendez-vous peut être convenu pour préciser votre
                  situation, vos questions et les documents utiles à l’examen de
                  votre demande.
                </p>
              </li>
              <li className="process-step reveal reveal-delay-2">
                <span className="process-number">03</span>
                <h3>Envisager la suite</h3>
                <p>
                  Les modalités d’un éventuel accompagnement et les honoraires
                  sont à discuter avant tout engagement.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section className="cabinet-section section-pad" id="cabinet">
          <div className="page-width">
            <div className="cabinet-heading reveal">
              <div>
                <p className="eyebrow">
                  04 <span className="eyebrow-line" /> Le cabinet
                </p>
                <h2>Au cœur de Rouen.</h2>
              </div>
              <p>
                85 bis rue Jeanne d’Arc, 76000 Rouen.
                <br />
                Le cabinet vous reçoit sur rendez-vous.
              </p>
            </div>
            <div className="cabinet-gallery">
              <figure className="cabinet-photo cabinet-photo-main reveal">
                <img
                  src={`${import.meta.env.BASE_URL}cabinet.jpg`}
                  alt="Bibliothèque juridique et espace de réunion du cabinet"
                  loading="lazy"
                />
                <figcaption>
                  <span>Le cabinet</span>
                  <small>85 bis rue Jeanne d’Arc, à Rouen</small>
                </figcaption>
              </figure>
              <figure className="cabinet-photo reveal reveal-delay-1">
                <img
                  src={`${import.meta.env.BASE_URL}cabinet.jpg`}
                  alt="Espace d’accueil professionnel, illustration"
                  loading="lazy"
                />
                <figcaption>
                  <span>Espace de rendez-vous</span>
                  <small>Accueil sur rendez-vous</small>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="fees-section section-pad" id="honoraires">
          <div className="page-width fees-grid">
            <div className="reveal">
              <p className="eyebrow">
                <span className="eyebrow-line" />
                Une relation de confiance
              </p>
              <h2>
                Des honoraires
                <br />
                <em>en toute transparence.</em>
              </h2>
            </div>
            <div className="fees-copy reveal reveal-delay-1">
              <p>
                Les honoraires sont définis ensemble dès le premier rendez-vous,
                selon la nature et la complexité de votre dossier. Une
                convention précise les modalités de l'accompagnement.
              </p>
              <a className="text-link" href="#contact">
                Poser une question <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="page-width contact-grid">
            <div className="contact-copy reveal">
              <p className="eyebrow">
                <span className="eyebrow-line" />
                05 / Contact
              </p>
              <h2>Parlons de votre situation.</h2>
              <p>
                Pour une demande de rendez-vous ou une première prise de
                contact.
              </p>
              <div className="contact-info">
                <h3>Laura LOIZEL</h3>
                <p className="contact-role">Avocate au Barreau de ROUEN</p>
                <address>85 bis rue Jeanne d’Arc, 76000 ROUEN</address>
                <a href="tel:+33235893535">02 35 89 35 35</a>
                <a href="mailto:ll@loizel-avocat.fr">ll@loizel-avocat.fr</a>
                <p className="contact-appointment">
                  Réception au cabinet sur rendez-vous.
                </p>
              </div>
              <div className="map-card">
                <iframe
                  title="Carte du cabinet Laura Loizel à Rouen"
                  src="https://maps.google.com/maps?q=85%20bis%20rue%20Jeanne%20d%27Arc%2C%2076000%20Rouen&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  className="map-link"
                  href="https://maps.google.com/?q=85+bis+rue+Jeanne+d%27Arc%2C+76000+Rouen"
                  target="_blank"
                  rel="noreferrer"
                >
                  Voir l’itinéraire <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <form
              className="contact-form reveal reveal-delay-1"
              onSubmit={handleContactSubmit}
            >
              <h3>Écrire au cabinet</h3>
              <div className="form-row">
                <label>
                  Nom et prénom *
                  <input
                    name="name"
                    autoComplete="name"
                    placeholder="Votre nom"
                    required
                  />
                </label>
                <label>
                  Adresse e-mail *
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="votre@email.fr"
                    required
                  />
                </label>
              </div>
              <label>
                Téléphone (facultatif)
                <input
                  type="tel"
                  name="telephone"
                  autoComplete="tel"
                  placeholder="Votre numéro de téléphone"
                />
              </label>
              <label>
                Votre message *
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Présentez brièvement votre demande..."
                  required
                />
              </label>
              <label className="consent-label">
                <input type="checkbox" name="consent" required />
                <span>
                  J’accepte que les informations saisies soient utilisées pour
                  traiter ma demande. J’ai pris connaissance de la politique de
                  confidentialité. *
                </span>
              </label>
              <p className="privacy-note">
                Merci de ne pas inclure de pièces ou d’informations sensibles.
                L’envoi de ce formulaire ne vaut ni consultation juridique ni
                acceptation d’une mission par l’avocate.
              </p>
              <button className="button button-light" type="submit">
                Envoyer ma demande <span aria-hidden="true">&rarr;</span>
              </button>
              <small className="required-note">* Champs obligatoires</small>
              {messageReady && (
                <p className="form-feedback" role="status">
                  Le formulaire doit être relié au cabinet avant de pouvoir
                  transmettre votre demande.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-inner reveal">
          <a
            className="footer-brand"
            href="#accueil"
            aria-label="Laura Loizel, accueil"
          >
            <span className="wordmark-monogram" aria-hidden="true">
              <span>L</span>
              <span>L</span>
            </span>
            <span className="footer-brand-name">
              Laura Loizel<small>Avocate au barreau de Rouen</small>
            </span>
          </a>
          <div className="footer-details">
            <p>85 bis rue Jeanne d’Arc · 76000 Rouen</p>
            <p>SIRET 13053872100015 · Entreprise individuelle</p>
            <p>Case palais 105</p>
          </div>
          <div className="footer-legal">
            <p className="developer-credit">
              Site réalisé par{" "}
              <a
                href="https://fr.linkedin.com/in/anastasiya-ivanova-494567109"
                target="_blank"
                rel="noreferrer"
              >
                Anastasiya Ivanova
              </a>
            </p>
            <p>
              © {new Date().getFullYear()} Laura Loizel · Tous droits réservés
            </p>
            <a href="#accueil">
              Retour en haut <span aria-hidden="true">&uarr;</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
