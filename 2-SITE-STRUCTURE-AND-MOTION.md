# Supplies and Works – Structure du site, éléments interactifs et animations

Document de cadrage destiné à l’IA qui construit le site et à toi pour valider l’idée. Langue du site : **anglais d’abord** (version française prévue ensuite).

---

## 1. Principes directeurs

1. **Global et africain à la fois.** Le Cameroun est montré avec fierté, jamais caché. Message : *Built in Africa. Delivered worldwide.*
2. **Le cloud est la vitrine.** Le Cloud Studio (avec la sauvegarde des données on-premise vers le cloud) est mis en avant partout.
3. **Build · Run · Protect.** Ce cadre de lecture revient dans le hero, les services, le processus et le footer.
4. **Preuves avant promesses.** Badibo et Kira (produits en production avec clients payants) et la certification AWS Solutions Architect sont mis en avant. Aucun chiffre inventé : tout est en `[PLACEHOLDER]`.
5. **L’infrastructure physique reste locale.** Elle a sa page « Africa & Local Services », séparée de l’offre internationale.
6. **Vivant mais performant.** Beaucoup d’interactions, mais chargées à la demande et désactivables (reduced motion).

---

## 2. Plan du site (24 pages)

| # | Page | URL | Rôle |
|---|---|---|---|
| 1 | Home | `/` | Conversion et orientation |
| 2 | About | `/about` | Qui nous sommes, mission, valeurs |
| 3 | Built in Africa | `/built-in-africa` | Histoire, fierté, avantage fuseau horaire |
| 4 | Team | `/team` | Référents par studio |
| 5 | Services (aperçu) | `/services` | Hub des 5 studios |
| 6 | Cloud Engineering | `/services/cloud-engineering` | Page vitrine cloud |
| 7 | Backup & Disaster Recovery | `/services/backup-disaster-recovery` | Offre phare on-premise vers cloud |
| 8 | Software Development | `/services/software-development` | Web, mobile, desktop |
| 9 | Web Design & Development | `/services/web-design` | Sites web |
| 10 | AI & Automation | `/services/ai-automation` | Audit, roadmap, implémentation |
| 11 | Creative Studio | `/services/creative-studio` | Graphisme, motion, branding |
| 12 | Africa & Local Services | `/africa-local-services` | Réseau, serveurs, infrastructure |
| 13 | Products (aperçu) | `/products` | Hub des produits |
| 14 | Badibo | `/products/badibo` | SaaS gestion de restaurant |
| 15 | Kira | `/products/kira` | SaaS gestion de boutique |
| 16 | CMS & Stock Manager | `/products/more-tools` | Produits de niche |
| 17 | Work | `/work` | Index des études de cas |
| 18 | Case study (modèle) | `/work/[slug]` | Gabarit réutilisable |
| 19 | How we work | `/how-we-work` | Processus, Build · Run · Protect |
| 20 | Engagement models | `/engagement-models` | Projet, abonnement, équipe dédiée |
| 21 | Insights | `/insights` | Blog et ressources |
| 22 | Careers | `/careers` | Recrutement |
| 23 | Contact / Book a call | `/contact` | Conversion principale |
| 24 | Legal | `/privacy` et `/terms` | Confidentialité et conditions (deux gabarits) |

Pages techniques en plus : 404 animée, crédits images (`/credits`).

### Navigation

- **Header** : logo (placeholder) · Services (méga-menu) · Products (méga-menu) · Work · Built in Africa · Insights · bouton **Book a call** (jaune) · switch langue · switch thème.
- **Comportement** : le header se masque au scroll vers le bas, réapparaît au scroll vers le haut, devient translucide avec flou.
- **Mobile** : menu plein écran avec liens géants et animation d’ouverture en rideau.
- **Footer** : voir section 4.

---

## 3. Système de design (à faire extraire par l’IA)

### Couleurs

- Palette de base : **à extraire du portfolio jeansamist** (fonds, surfaces, textes, accents).
- Couleur d’accent principale : **jaune du logo** de Supplies and Works.
- Tokens CSS : `--bg`, `--surface`, `--surface-2`, `--text`, `--text-muted`, `--accent` (jaune), `--accent-ink` (texte sur jaune), `--border`, `--success`, `--danger`. Versions clair et sombre.
- Règles : jaune réservé aux CTA, états actifs, chiffres clés, soulignements, survols. Contraste AA obligatoire.

### Typographie

- Une police d’affichage expressive pour les titres, une police neutre pour le texte.
- Titres très grands (clamp fluide), interlignage serré, mots-clés surlignés en jaune.

### Formes et matière

- Coins arrondis généreux sur les cartes et images.
- Grain léger sur les fonds sombres.
- Images traitées de façon homogène : léger voile de teinte, passage en couleur au survol.

### Motif africain

- Carte de l’Afrique en points lumineux, avec un nœud lumineux sur le Cameroun reliés à des villes du monde. Sobre et moderne.

### Mouvement (tokens)

- Durées : 0,2 s (micro), 0,5 s (éléments), 0,9 s (sections).
- Courbes : ease-out expo pour les apparitions, ease-in-out pour les transitions de page.
- Tout est désactivé ou remplacé par de simples fondus si `prefers-reduced-motion`.

---

## 4. Composants globaux et éléments interactifs

### 4.1 Loader de marque

Écran d’entrée avec le logo placeholder, un compteur de 0 à 100 et un rideau jaune qui se lève. Affiché une fois par session, 1,5 s maximum.

### 4.2 Curseur personnalisé (desktop)

- États : point par défaut, anneau agrandi sur les liens, bulle « View » sur les images, « Drag » sur les carrousels.
- Désactivé sur tactile.

### 4.3 Transitions de page

Rideau jaune qui balaie l’écran entre deux pages, avec le nom de la page qui apparaît brièvement.

### 4.4 Hero (Home) : la scène réseau

- **Fond interactif** : globe ou carte en points avec le Cameroun comme nœud d’origine. Des lignes lumineuses partent vers des villes (Toronto, New York, Montréal, Paris, Londres, Nairobi, etc.). Elles s’animent en continu.
- **Réaction au curseur** : les points proches du curseur s’écartent ou s’illuminent ; sur mobile, réaction au toucher et à l’inclinaison.
- **Titre animé** : « We design, build and run the technology your business depends on. » Le mot **Build / Run / Protect** change en roulant, avec un surlignage jaune.
- **Boutons magnétiques** : *Book a call* et *See our work* attirent légèrement le curseur.
- **Bandeau défilant** sous le hero : technologies (AWS, Azure, Google Cloud, React, Node, etc.) en marquee, avec pause au survol.
- **Indicateur de scroll** animé.
- **Performance** : la scène est chargée après le texte, nombre de particules réduit sur mobile.

### 4.5 Révélations au scroll

- Titres : apparition ligne par ligne avec masque.
- Paragraphes d’intro : texte qui se colore **mot par mot** pendant le scroll.
- Images : révélation par masque avec léger parallax.
- Cartes : apparition échelonnée.
- Barre de progression de lecture en haut, en jaune.

### 4.6 Section « Studios » (Home et Services)

Défilement **horizontal épinglé** : le scroll vertical fait avancer cinq grandes cartes (Cloud, Product & Engineering, AI & Automation, Creative, Africa & Local). Chaque carte révèle son image, ses mots-clés et un bouton au survol. Sur mobile : cartes empilées verticalement.

### 4.7 Section « Build · Run · Protect »

Trois colonnes qui s’épinglent l’une après l’autre. Au scroll, une ligne jaune relie les trois piliers et chaque pilier affiche ses services.

### 4.8 Compteurs

Chiffres qui s’incrémentent à l’entrée dans l’écran. Valeurs réelles à fournir : `[X]` clients payants Badibo et Kira, `[X]` projets livrés, `[X]` pays servis, `[X]` années d’expérience.

### 4.9 Produits (Badibo, Kira)

- Maquettes d’interface qui s’inclinent en 3D selon le curseur.
- Fonctionnalités qui s’illuminent une à une au scroll.
- Démonstration par onglets (par exemple « Menu », « Orders », « Reports »).

### 4.10 Cartes de projets (Work)

Grille avec filtre animé (par studio ou par secteur). Au survol : l’image change de couleur, une pastille jaune affiche le résultat clé.

### 4.11 Pages services : éléments spécifiques

- **Cloud / Backup** : schéma animé on-premise vers cloud (flux de données), compteur « RPO / RTO » à compléter, accordéon FAQ.
- **Software** : carrousel des types d’applications (web, mobile, desktop) avec mockups.
- **Web design** : avant/après glissable.
- **AI & Automation** : parcours interactif *Audit → Roadmap → Implémentation → Support* avec étapes cliquables.
- **Creative** : galerie masonry avec lightbox, lecteur de motion.
- **Africa & Local** : carte du Cameroun avec zones de service.

### 4.12 Calculateur d’intérêt (page Contact)

Mini-sélecteur de besoins (cases animées : Cloud, Software, AI, Design, Network) qui pré-remplit le formulaire.

### 4.13 Footer interactif

- **Bandeau CTA** : « Have a project in mind? » avec bouton magnétique *Book a call*.
- **Wordmark géant** « Supplies and Works » dont les lettres réagissent au curseur (déformation ou poids de police variable) ; sur mobile, animation automatique lente.
- **Horloge double** : heure actuelle à Yaoundé et heure locale du visiteur, avec une phrase du type « We overlap for X hours ».
- **Marquee** : « Build · Run · Protect » en boucle.
- **Colonnes de liens** : Services, Products, Company, Contact, Legal.
- **Pastille « Built in Africa »** avec petit drapeau animé.
- **Formulaire newsletter** avec état de succès animé.
- **Bouton retour en haut** : cercle jaune avec anneau de progression du scroll.

### 4.14 Autres micro-interactions

- Boutons : remplissage jaune qui monte au survol.
- Liens : soulignement qui se dessine.
- Cartes : légère inclinaison 3D et reflet qui suit le curseur.
- Formulaires : labels flottants, validation animée.
- Toggle thème avec transition circulaire.
- Easter egg : code Konami qui déclenche une pluie de points jaunes (optionnel).

---

## 5. Gabarit de page (structure à respecter)

Chaque page interne suit la même ossature pour garder de la cohérence :

1. **Hero de page** : titre, sous-titre, fil d’Ariane, image ou scène légère.
2. **Introduction** : texte qui se révèle mot par mot.
3. **Corps** : 2 à 4 sections de contenu spécifiques (cf. fichier de copy).
4. **Preuve** : chiffres, références, témoignage placeholder, logos placeholder.
5. **FAQ** : accordéon (sur les pages services).
6. **CTA final** : bandeau jaune « Let’s talk ».
7. **Footer.**

### Page Home : ordre des sections

1. Hero interactif
2. Bandeau technologies
3. Introduction mot par mot (« Who we are »)
4. Studios en défilement horizontal
5. Build · Run · Protect
6. Cloud en avant : « Your data, protected » (backup on-premise vers cloud)
7. Produits (Badibo, Kira) avec mockups 3D
8. Chiffres clés
9. Built in Africa (carte et fuseau horaire)
10. Études de cas (carrousel)
11. Processus en 4 étapes
12. Témoignages (placeholder)
13. FAQ courte
14. CTA final puis footer interactif

---

## 6. Briefing images Unsplash (par page)

Règles : photos authentiques et variées ; personnes africaines et lieux africains en priorité ; éviter les clichés de bureau. Mots-clés de recherche à utiliser :

| Page | Mots-clés Unsplash |
|---|---|
| Home | `Africa technology`, `Yaoundé`, `African developer laptop`, `Douala skyline`, `fiber network night` |
| About | `African team meeting`, `African entrepreneur`, `coworking Africa` |
| Built in Africa | `Cameroon landscape`, `Yaoundé city`, `African market`, `Africa night lights`, `African students coding` |
| Team | `African professional portrait`, `team laptop collaboration` |
| Services hub | `data center`, `code screen`, `creative studio design`, `network cables` |
| Cloud Engineering | `cloud servers`, `data center corridor`, `dashboard analytics` |
| Backup & DR | `server room backup`, `hard drives`, `secure data`, `lock digital` |
| Software Development | `developer coding`, `mobile app design`, `desktop software` |
| Web Design | `website design workspace`, `UI design sketches`, `responsive devices` |
| AI & Automation | `automation robot arm`, `AI neural abstract`, `workflow whiteboard` |
| Creative Studio | `graphic designer desk`, `branding mockup`, `video production` |
| Africa & Local | `network engineer cables`, `server rack`, `office installation`, `technician repair` |
| Badibo | `restaurant kitchen`, `African restaurant`, `chef tablet`, `food service` |
| Kira | `boutique shop`, `African fashion store`, `retail counter`, `point of sale` |
| More tools | `inventory warehouse`, `content management laptop` |
| Work | `project dashboard`, `team celebrating`, `office workshop` |
| How we work | `sticky notes planning`, `agile board`, `handshake remote video call` |
| Engagement | `contract signing`, `team remote video` |
| Insights | `reading laptop notebook`, `conference talk` |
| Careers | `young African developers`, `team lunch`, `learning workshop` |
| Contact | `phone video call`, `map Africa`, `coffee laptop` |

Contraintes : crédit des photographes (page `/credits`), `alt` descriptif, `srcset`, chargement différé, URLs centralisées dans un fichier de configuration.

---

## 7. Règles techniques résumées

- Next.js + TypeScript + Tailwind, génération statique.
- GSAP et ScrollTrigger pour le scroll, Lenis pour le défilement fluide, Three.js ou canvas uniquement pour le hero.
- Contenu dans des fichiers de données typés, pas dans les composants.
- SEO complet (titres, meta, Open Graph, JSON-LD, sitemap).
- Accessibilité complète et `prefers-reduced-motion`.
- Objectif Lighthouse 90+ sur mobile.
- Structure prête pour le français (`/fr`).

---

## 8. Éléments à fournir avant le lancement

- Logo réel (SVG) et jaune exact en hexadécimal.
- URLs des trois projets de référence.
- Liste des 10 membres de l’équipe et rôles.
- Chiffres réels de Badibo et Kira et 3 à 5 études de cas.
- Coordonnées de contact, adresse, liens réseaux sociaux.
- Informations légales exactes (forme juridique, numéro d’immatriculation).
- Décision finale sur le nom de marque pour l’international.
