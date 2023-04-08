const whatFilter = [
  { title: 'Travail à domicile' },
  { title: 'A temps partiel' },
  { title: 'Embauche immédiatement' },
  { title: 'Distance' },
  { title: 'A plein temps' },
  { title: 'Télétravail à domicile' },
  { title: 'Entrepôt' },
  { title: 'Google' },
  { title: 'Receptioniste' },
  { title: 'Brasséries du Tchad' },
];

const whereFilter = [
  { title: 'Ndjaména, Tchad' },
  { title: 'San Francisco, USA' },
  { title: 'Abéché, Tchad' },
  { title: 'Yaoundé, Cameroun' },
  { title: 'Sarh, Tchad' },
  { title: 'Paris, France' },
  { title: 'Los Angeles, USA' },
  { title: 'Tokyo, Japon' },
  { title: 'Moundou, Tchad' },
  { title: 'Dakar, Sénégal' },
  { title: 'Peu importe le lieu' },
];

const datePostedFilter = [
  { title: 'Dernières 24 heures' },
  { title: '3 derniers jours' },
  { title: '7 derniers jours' },
  { title: '14 derniers jours' },
  { title: 'Peu importe la date' },
];

const jobTypeFilter = [
  { title: 'À plein temps' },
  { title: 'Stage' },
  { title: 'Contrat' },
];

const industryFilter = [
  { title: 'Opérations et gestion commerciales' },
  { title: 'Construction' },
  { title: 'Education' },
  { title: 'Finances & Comptabilité' },
  { title: 'Nourriture et boissons' },
  { title: 'Soins de santé' },
  { title: 'Fabrication et services publics' },
  { title: 'Marketing, publicité et relations publiques' },
  { title: 'Ventes' },
  { title: 'Technologie' },
  { title: 'Transportation' },
];

module.exports = {
  whatFilter, whereFilter, datePostedFilter, jobTypeFilter, industryFilter,
};
