
export const formConfigs = {
  'site-pro': {
    title: 'Création de site web — Cahier des charges',
    description: 'Remplissez ce formulaire détaillé. Comptez 5 à 7 minutes. Même sans connaissances techniques, vous pouvez le compléter facilement.',
    projectTypeLabel: 'Type de site',
    projectTypes: [
      'Site Vitrine (Présentation)',
      'Site E-commerce (Vente en ligne)',
      'Blog / Média',
      'Portfolio / CV',
      'Landing Page (Page de vente)',
      'Autre'
    ],
    sections: {
      activity: {
        label: 'Secteur d’activité *',
        sectors: ['Commerce', 'Services', 'Industrie', 'Microfinance / Banque', 'Éducation / Formation', 'Tech / Startup', 'Autre']
      },
      existing: {
        textsPlaceholder: 'Ex. Présentation, services, tarifs, coordonnées…'
      },
      goals: {
        label: 'Objectif principal *',
        mainOptions: ['Présenter l’entreprise', 'Générer des prospects (formulaire)', 'Vendre en ligne', 'Réserver / Prendre rendez‑vous', 'Support / FAQ'],
        ctaPlaceholder: 'Ex. Demander un devis, WhatsApp, Téléphoner'
      },
      features: {
        pagesLabel: 'Pages souhaitées',
        pagesPlaceholder: 'Ex. Accueil, À propos, Services, Tarifs, Références, Contact',
        featuresLabel: 'Fonctionnalités',
        featuresPlaceholder: 'Ex. Formulaire contact, WhatsApp, Blog, e‑commerce, réservation'
      },
      hosting: {
        intro: "« Le site a besoin d'une adresse (nom de domaine) et d'un hébergement (l'endroit où sont stockés les fichiers). Nous pouvons tout gérer pour vous. »",
        options: ['L\'achat / la configuration du nom de domaine', 'L\'hébergement du site', 'Les adresses emails professionnelles'],
        quantityLabel: "Combien d'adresses emails professionnelles prévoyez-vous ?",
        quantityOptions: ['1–2', '3–5', 'Plus de 5', 'Aucune pour le moment']
      },
      budget: {
        options: ['Moins de 50 000 XAF', '50 000 – 100 000 XAF', '100 000 – 250 000 XAF', '250 000 – 500 000 XAF', 'Plus de 500 000 XAF', 'Je ne sais pas']
      },
      timeline: {
        options: ['Le plus vite possible (< 2 semaines)', 'Dans le mois', 'Dans 2–3 mois', 'Pas de délai précis'],
        availabilityOptions: ['Oui, très disponible', 'Moyennement disponible', 'Peu disponible (je préfère que vous gériez un maximum)']
      },
      support: {
        options: ['Maintenance technique', 'Petites modifications régulières', 'Référencement naturel (SEO)', 'Gestion réseaux sociaux', 'Campagnes publicitaires', 'Création de contenus', 'Formation', 'Autre']
      }
    }
  },
  'erp-saas': {
    title: 'Conception Logiciel, ERP & SaaS — Cahier des charges',
    description: 'Ce formulaire est adapté pour les projets d\'applications métier, logiciels de gestion et SaaS. Détaillez vos processus pour un chiffrage précis.',
    projectTypeLabel: 'Type de solution recherchée *',
    projectTypes: [
      'ERP (Gestion intégrée : Stock, Facture, RH...)',
      'CRM (Gestion Relation Client)',
      'SaaS (Logiciel à commercialiser)',
      'Application Mobile Métier (Terrain)',
      'Portail Client / Extranet',
      'Intégration API / Automatisation',
      'Autre'
    ],
    sections: {
      activity: {
        label: 'Secteur métier concerné *',
        sectors: ['Commerce / Distribution', 'Logistique / Transport', 'BTP / Construction', 'Santé / Médical', 'Finance / Comptabilité', 'RH / Paie', 'Industrie / Production', 'Autre']
      },
      existing: {
        textsPlaceholder: 'Ex. Nous utilisons Excel actuellement, ou un vieux logiciel (Sage, Ciel...) que nous voulons remplacer.'
      },
      goals: {
        label: 'Enjeu principal du projet *',
        mainOptions: ['Gagner du temps (Automatisation)', 'Centraliser les données (Fin des fichiers épars)', 'Réduire les erreurs de saisie', 'Commercialiser un nouveau service (Startup)', 'Suivre l\'activité en temps réel', 'Mieux collaborer à distance'],
        ctaPlaceholder: 'Ex. Tableaux de bord, Rapports automatiques, Alertes SMS'
      },
      features: {
        pagesLabel: 'Modules ou Départements à informatiser',
        pagesPlaceholder: 'Ex. Gestion Commerciale, Stocks, Comptabilité, RH, Planning, Parc automobile...',
        featuresLabel: 'Fonctionnalités Techniques Clés',
        featuresPlaceholder: 'Ex. Mode hors-ligne (sans internet), Impression tickets, Scan code-barres, Gestion droits utilisateurs avancée...'
      },
      hosting: {
        intro: "« Une application métier demande une infrastructure robuste et sécurisée. Nous configurons des serveurs VPS ou Cloud adaptés. »",
        options: ['Configuration Serveur (VPS / Cloud)', 'Nom de domaine', 'Système de Sauvegardes Automatiques', 'Certificat SSL & Sécurité', 'Maintenance Serveur'],
        quantityLabel: "Combien d'utilisateurs utiliseront le logiciel ?",
        quantityOptions: ['1–5 (Petite équipe)', '5–20 (PME)', '20–100 (Grande structure)', 'Plus de 100', 'Illimité (Grand public)']
      },
      budget: {
        options: ['Moins de 500 000 XAF', '500 000 – 1 000 000 XAF', '1 – 3 Millions XAF', '3 – 5 Millions XAF', 'Plus de 5 Millions XAF', 'Je ne sais pas (Besoin de conseils)']
      },
      timeline: {
        options: ['Urgent (< 1 mois)', 'Projet à court terme (1-3 mois)', 'Projet moyen terme (3-6 mois)', 'Long terme (> 6 mois)', 'Pas de date fixée'],
        availabilityOptions: ['Oui, nous avons un chef de projet dédié', 'Moyennement, nous validerons au fur et à mesure', 'Peu, nous voulons une solution clé en main']
      },
      support: {
        options: ['Maintenance corrective (Bugs)', 'Maintenance évolutive (Ajout fonctionnalités)', 'Hébergement & Infogérance', 'Formation des utilisateurs', 'Support téléphonique / WhatsApp', 'Autre']
      }
    }
  },
  'ia-automation': {
    title: 'Otolid & Solutions IA — Cahier des charges',
    description: 'Otolid est votre assistant WhatsApp intelligent. Il répond automatiquement à vos clients 24/7. Configurez votre besoin pour une installation ou une solution sur mesure.',
    projectTypeLabel: 'Solution IA souhaitée *',
    projectTypes: [
      'Licence Otolid (Logiciel d\'automatisation WhatsApp)',
      'Otolid + Configuration & Formation',
      'Chatbot IA sur mesure (Site web / Messenger)',
      'Automatisation de processus métier (Zapier / Make)',
      'Analyse de données / IA Prédictive',
      'Autre'
    ],
    sections: {
      activity: {
        label: 'Secteur d’activité *',
        sectors: ['E-commerce / Vente en ligne', 'Service Client / SAV', 'Agence Marketing / Communication', 'Immobilier', 'Formation / Coaching', 'Santé', 'Autre']
      },
      existing: {
        textsPlaceholder: 'Ex. Nous utilisons WhatsApp Business avec 50 messages par jour. Nous perdons trop de temps à répondre aux mêmes questions.'
      },
      goals: {
        label: 'Objectif principal de l\'automatisation *',
        mainOptions: ['Répondre automatiquement 24/7 (Auto-répondeur)', 'Gagner du temps sur le support client', 'Envoyer des campagnes de masse (Marketing)', 'Qualifier des prospects automatiquement', 'Vendre directement par chat'],
        ctaPlaceholder: 'Ex. Lien vers catalogue, Prise de RDV, Envoi de devis PDF'
      },
      features: {
        pagesLabel: 'Fonctionnalités Otolid recherchées',
        pagesPlaceholder: 'Ex. Réponses IA (ChatGPT), Envoi de masse, Extraction contacts groupes, Multi-comptes...',
        featuresLabel: 'Besoins techniques spécifiques',
        featuresPlaceholder: 'Ex. Intégration avec mon CRM, Connexion Google Sheets, Webhook...'
      },
      hosting: {
        intro: "« Otolid est une application Desktop (Windows). Pour les autres solutions IA, nous définissons l'hébergement ensemble. »",
        options: ['Installation sur PC Windows (Otolid)', 'Hébergement Cloud (Serveur 24/7)', 'Formation à l\'utilisation', 'Support technique prioritaire'],
        quantityLabel: "Volume de messages estimé par jour",
        quantityOptions: ['Moins de 50', '50 – 200', '200 – 1000', 'Plus de 1000 (Gros volume)']
      },
      budget: {
        options: ['Moins de 50 000 XAF (Licence simple)', '50 000 – 200 000 XAF', '200 000 – 500 000 XAF', 'Plus de 500 000 XAF (Projet sur mesure)', 'Je ne sais pas']
      },
      timeline: {
        options: ['Immédiat (Je veux tester Otolid)', 'Dans la semaine', 'Dans le mois', 'Projet de réflexion'],
        availabilityOptions: ['Je suis prêt à installer le logiciel', 'J\'ai besoin d\'une démo d\'abord', 'Je veux qu\'on l\'installe pour moi']
      },
      support: {
        options: ['Mises à jour Otolid', 'Formation équipes', 'Configuration de scénarios de vente', 'Support technique 7j/7', 'Autre']
      }
    }
  },
  'microfinance': {
    title: 'Kazimo — Core Banking Microfinance',
    description: 'Kazimo est une plateforme modulaire pour EMF/IMF en Afrique : Core Banking, Portefeuille numérique, Gestion Agents et IA. Configurez votre solution.',
    projectTypeLabel: 'Votre besoin actuel *',
    projectTypes: [
      'Core Banking complet (Gestion Clients, Comptes, Prêts)',
      'Module "Pay" (Portefeuille numérique / Mobile Money)',
      'Module "Connect" (Gestion réseau d\'agents)',
      'Migration depuis un autre logiciel',
      'Lancement d\'une nouvelle institution',
      'Autre'
    ],
    sections: {
      activity: {
        label: 'Type d’institution *',
        sectors: ['EMF / IMF (Microfinance)', 'Coopérative / Crédit Union', 'Banque Communautaire', 'Institution de Paiement', 'Autre']
      },
      existing: {
        textsPlaceholder: 'Ex. Nous utilisons Excel actuellement, ou un logiciel (Perfect, Amplitude...) que nous voulons remplacer. Nombre d\'agences : 5.'
      },
      goals: {
        label: 'Objectifs prioritaires *',
        mainOptions: ['Digitaliser les opérations (Zéro papier)', 'Lancer une application mobile client', 'Intégrer le Mobile Money (Dépôt/Retrait)', 'Conformité COBAC / Réglementaire', 'Suivi temps réel des agences'],
        ctaPlaceholder: 'Ex. Démo du module Prêts, Application Agent terrain, Reporting COBAC'
      },
      features: {
        pagesLabel: 'Modules Kazimo requis',
        pagesPlaceholder: 'Ex. Gestion Épargne/Crédit, Comptabilité, App Mobile Client, USSD, Gestion Agents...',
        featuresLabel: 'Intégrations spécifiques',
        featuresPlaceholder: 'Ex. Orange Money / MTN MoMo, GIMAC, SMS Banking, Biométrie...'
      },
      hosting: {
        intro: "« Kazimo peut être déployé en Cloud (SaaS) pour réduire vos coûts ou sur vos serveurs locaux pour une maîtrise totale. »",
        options: ['Hébergement Cloud Sécurisé (Recommandé)', 'Installation Serveur Local (On-Premise)', 'Formation des agents', 'Migration des données existantes'],
        quantityLabel: "Taille de votre institution",
        quantityOptions: ['< 1 000 clients', '1 000 – 10 000 clients', '10 000 – 50 000 clients', '> 50 000 clients']
      },
      budget: {
        options: ['Moins de 5 Millions XAF', '5 – 10 Millions XAF', '10 – 20 Millions XAF', 'Plus de 20 Millions XAF', 'Budget à définir après démo']
      },
      timeline: {
        options: ['Urgent (< 3 mois)', 'Projet à moyen terme (3-6 mois)', 'Projet longue durée (> 6 mois)', 'Phase d\'étude'],
        availabilityOptions: ['Décideur (DG / DSI)', 'Opérationnel (Chef Agence / Compta)', 'Consultant externe']
      },
      support: {
        options: ['Support technique 24/7', 'Mises à jour réglementaires', 'Maintenance corrective', 'Formation continue', 'Autre']
      }
    }
  },
  'wemoni': {
    title: 'Wemonii — Investissement & Franchise',
    description: 'Participez à l\'essor du Mobile Money en Afrique. Investissez dans des GAB ou lancez votre franchise (dès 10 000 XAF / ~$16).',
    projectTypeLabel: 'Votre profil Wemonii *',
    projectTypes: [
      'Investisseur Particulier (Dès 10 000 XAF)',
      'Investisseur Institutionnel / Family Office',
      'Candidat Franchisé (Entrepreneur GAB)',
      'Partenaire Stratégique (EMF, Télécom)',
      'Autre'
    ],
    tabs: [
      {
        id: 'investir',
        label: 'Investir',
        content: `
### Étape 4 – Touchez vos revenus et suivez vos placements
- **Revenus versés périodiquement** selon les termes du projet.
- **Visualisez l’historique** des versements.
- Pour les investissements à revenu variable : dashboard opérationnel (activité, flux, performance).

### Qu’est-ce que j’achète quand j’investis sur Wemonii ?
Sur Wemonii, vous financez un projet de franchise GAB Mobile Money porté par un entrepreneur :
- Vous prêtez des fonds (ou souscrivez à des titres / contrats) à un véhicule ou à un porteur de projet via nos partenaires EMF (**Mustard Seed Investment Credit**, **Africa First Finance**, **Alco Fund**).
- En contrepartie, vous percevez :
  - Soit un **revenu fixe** (taux défini à l’avance),
  - Soit un **revenu variable** (proportionnel aux performances du GAB).
- Les détails (taux, durée, garanties, mode de rémunération) sont précisés dans la Note d’opération propre à chaque projet.

### Vendre ses participations
Nous travaillons à offrir des solutions de liquidité :
- **Marché secondaire interne** (en développement) : possibilité de céder vos participations à d’autres investisseurs membres de Wemonii, sous réserve de la demande.
- **Rachat ou refinancement** possible par certains porteurs de projets ou partenaires financiers, au cas par cas.
- À ce stade, vos investissements doivent être considérés comme **peu liquides** : investissez uniquement des montants dont vous n’avez pas besoin immédiatement.

### Protection de nos investisseurs
Nous mettons en place :
- Une **sélection rigoureuse** des projets et porteurs.
- Des **garanties adaptées** (nantissement de biens, nantissement des GAB, caution personnelle).
- Une **structure juridique** portée / encadrée par nos partenaires EMF accrédités.
- Une **information détaillée** projet par projet (note d’opération, scénarios, risques).
        `
      },
      {
        id: 'se-financer',
        label: 'Se financer',
        content: `
### Se financer avec Wemonii
Porteurs de projets : financez vos franchises GAB Mobile Money grâce à la communauté Wemonii.
Wemonii met en relation :
- Des entrepreneurs disposant de sites stratégiques et d’un apport initial.
- Une communauté d’investisseurs prête à financer des franchises GAB Mobile Money.

### Pour qui ?
- Entrepreneurs souhaitant devenir franchisés Mobile Wallet.
- Commerçants avec des emplacements à fort trafic.
- Groupes ou institutions locales souhaitant développer un parc de GAB.
- Diaspora investissant dans leur pays d’origine via des partenaires locaux.

### Conditions d’éligibilité
**1. Apport initial du porteur de projet**
- Apport exigé : généralement **25 % à 35 % du coût du projet** (minimum 67 000 000 XAF pour une franchise, à ajuster selon les packs).
- Apport sous forme de cash, d’actifs ou de garanties mobilisables.

**2. Sites stratégiques**
- Emplacements à fort potentiel (zones à fort trafic, marchés, axes routiers, centres commerciaux, universités, gares, etc.).
- Étude de potentiel (flux, environnement concurrentiel, infrastructures).

**3. Profil du porteur**
- Sérieux, transparence, capacité de gestion.
- Acceptation des mécanismes de garanties (nantissement, caution personnelle, etc.).

### Le processus de financement
1. **Candidature** : Vous soumettez votre projet via Wemonii (profil, sites, stratégie, besoins financiers).
2. **Analyse & Structuration** : Analyse des emplacements, du business plan et du profil. Structuration du financement avec nos partenaires (Mustard Seed, Africa First Finance, Alco Fund).
3. **Mise en place des garanties** : Nantissement de biens / GAB, Caution personnelle.
4. **Campagne sur Wemonii** : Votre projet est mis en ligne. Les investisseurs souscrivent (revenu fixe ou variable).
5. **Financement & Déploiement** : Fonds débloqués via EMF. Achat, installation et mise en service par Mobile Wallet.
6. **Exploitation & Reporting** : Exploitation gérée par Mobile Wallet. Vous suivez vos performances.
        `
      },
      {
        id: 'qui-sommes-nous',
        label: 'Qui sommes-nous ?',
        content: `
### Notre histoire
Wemonii est née d’un constat simple :
**L’Afrique est leader mondial du Mobile Money, mais l’infrastructure physique (points cash-in / cash-out) reste insuffisante, inégale et souvent peu fiable.**

Après plusieurs années de développement de solutions d’ATM Mobile Money via Mobile Wallet, nous avons décidé d’ouvrir cette opportunité au plus grand nombre, en permettant :
- Aux **entrepreneurs** : de devenir franchisés GAB Mobile Money.
- Aux **investisseurs** : de participer au financement de cette infrastructure, à partir de 10 000 XAF.

Wemonii se positionne comme un pont entre l’économie réelle (GAB, flux Mobile Money) et le financement participatif.

### Notre expertise
- Expertise terrain dans le déploiement et l’exploitation de GAB Mobile Money via Mobile Wallet.
- Compréhension approfondie de l’écosystème Mobile Money africain.
- Structuration financière et réglementaire via nos partenaires EMF accrédités : **Mustard Seed Investment Credit**, **Africa First Finance**, **Alco Fund**.
- Capacité à analyser les emplacements, les business plans et la fiabilité des porteurs de projets.
- Plateforme digitale sécurisée pour la mise en relation, la gestion des campagnes et le suivi des investissements.
        `
      },
      {
        id: 'sinformer',
        label: 'S’informer',
        content: `
### Blog
Des articles pour comprendre :
- Le business des GAB Mobile Money.
- L’écosystème Mobile Money en Afrique.
- La rentabilité potentielle des franchises.
- Les bonnes pratiques d’investissement participatif.

### Nos garanties
Page dédiée qui reprend et détaille :
- Nantissement de biens.
- Nantissement des GAB.
- Caution personnelle.
- Autres garanties spécifiques.
        `
      }
    ],
    sections: {
      activity: {
        label: 'Statut actuel *',
        sectors: ['Salarié / Cadre', 'Entrepreneur / Indépendant', 'Etudiant', 'Retraité', 'Entreprise / Société', 'Diaspora', 'Autre']
      },
      existing: {
        textsPlaceholder: 'Ex. Je suis novice en investissement, ou : Je possède déjà 2 boutiques et je veux installer un GAB.'
      },
      goals: {
        label: 'Vos objectifs avec Wemonii *',
        mainOptions: ['Diversifier mon patrimoine', 'Générer des revenus passifs (Rente)', 'Lancer mon business (Franchise)', 'Soutenir l\'inclusion financière', 'Préparer ma retraite'],
        ctaPlaceholder: 'Ex. Rentabilité 15%, Revenus mensuels, GAB dans ma ville'
      },
      features: {
        pagesLabel: 'Mode de revenus / Modèle',
        pagesPlaceholder: 'Ex. Revenu Fixe (Garanti), Revenu Variable (Performance), Mixte...',
        featuresLabel: 'Intérêts spécifiques',
        featuresPlaceholder: 'Ex. GAB Solaires, Zones rurales, Opérateurs spécifiques (Orange/MTN)...'
      },
      hosting: {
        intro: "« Wemonii sécurise vos opérations via des partenaires agréés (Mustard Seed, Alco Fund). »",
        options: ['Création Compte Investisseur', 'Dossier Franchise', 'Accompagnement Juridique', 'Formation Gestion GAB'],
        quantityLabel: "Horizon d'investissement / Projet",
        quantityOptions: ['Court terme (< 1 an)', 'Moyen terme (1-3 ans)', 'Long terme (> 3 ans)', 'Indéfini']
      },
      budget: {
        options: [
          '10 000 – 100 000 XAF (~$16 – $160)',
          '100 000 – 500 000 XAF (~$160 – $800)',
          '500 000 – 2 Millions XAF (~$800 – $3,200)',
          '2 – 10 Millions XAF (~$3,200 – $16,000)',
          'Plus de 10 Millions XAF (>$16,000)',
          'Je ne sais pas'
        ]
      },
      timeline: {
        options: ['Immédiat', 'Dans le mois', 'Dans 3 mois', 'Juste pour information'],
        availabilityOptions: ['Prêt à investir / entreprendre', 'Besoin de plus d\'infos', 'En phase de réflexion']
      },
      support: {
        options: ['Newsletter Opportunités', 'Webinaires Investisseurs', 'Formation Franchisé', 'Support VIP', 'Autre']
      }
    }
  }
}

export type ServiceId = keyof typeof formConfigs
