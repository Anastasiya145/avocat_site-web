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
            <p className="hero-signature">
              Laura Loizel <span>Avocate</span>
            </p>
          </div>
          <div
            className="hero-art reveal reveal-right"
            aria-label="Monogramme du cabinet Laura Loizel"
          >
            <div className="art-corner art-corner-top" />
            <div className="monogram-card">
              <span>LL</span>
              <small>ROUEN · FRANCE</small>
            </div>
            <div className="art-caption">
              <span>Conseil &amp; défense</span>
              <span>À vos côtés</span>
            </div>
          </div>
          <a className="scroll-cue" href="#cabinet">
            <span />
            Faire défiler
          </a>
        </section>

        <section className="intro-section section-pad" id="cabinet">
          <div className="page-width intro-grid">
            <p className="eyebrow section-index">
              01 <span className="eyebrow-line" />
              Le cabinet
            </p>
            <div className="intro-content reveal">
              <h2>
                Le droit, avec <em>justesse</em> et discernement.
              </h2>
              <div className="intro-bottom">
                <p>
                  Chaque situation mérite une attention singulière. J'apporte
                  une réponse précise et lisible, en privilégiant le dialogue et
                  la recherche de solutions durables.
                </p>
                <a className="text-link" href="#contact">
                  Rencontrer Maître Loizel{" "}
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="intro-image reveal reveal-delay-1">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
                alt="Espace de travail lumineux du cabinet"
              />
              <span className="image-note">
                Un cabinet à taille humaine, au coeur de Rouen
              </span>
            </div>
          </div>
        </section>

        <section className="expertise-section section-pad" id="expertises">
          <div className="page-width">
            <div className="section-heading reveal">
              <p className="eyebrow">
                <span className="eyebrow-line" />
                Domaines d'intervention
              </p>
              <h2>
                Des réponses concrètes,
                <br />
                <em>un engagement constant.</em>
              </h2>
            </div>
            <div className="expertise-list">
              <article className="expertise-item reveal">
                <span className="item-number">01</span>
                <h3>Écoute &amp; conseil</h3>
                <p>Prendre le temps de comprendre chaque situation.</p>
                <a
                  href="#contact"
                  aria-label="En savoir plus sur l'écoute et le conseil"
                >
                  &rarr;
                </a>
              </article>
              <article className="expertise-item reveal reveal-delay-1">
                <span className="item-number">02</span>
                <h3>Accompagnement</h3>
                <p>Construire une démarche claire, à chaque étape.</p>
                <a
                  href="#contact"
                  aria-label="En savoir plus sur l'accompagnement"
                >
                  &rarr;
                </a>
              </article>
              <article className="expertise-item reveal reveal-delay-2">
                <span className="item-number">03</span>
                <h3>Défense de vos intérêts</h3>
                <p>Vous représenter avec exigence et détermination.</p>
                <a
                  href="#contact"
                  aria-label="En savoir plus sur la défense de vos intérêts"
                >
                  &rarr;
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="quote-section">
          <div className="page-width quote-inner reveal">
            <span className="quote-mark">“</span>
            <blockquote>
              Comprendre avant d'agir.
              <br />
              <em>Défendre avec conviction.</em>
            </blockquote>
            <p>
              Maître Laura Loizel <span>Avocate au barreau de Rouen</span>
            </p>
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
