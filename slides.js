/* ---------- Écrans « Les brèves du sport » ----------
   Affichés entre deux tirages en mode Auto 5 min.
   Pour changer un écran, il suffit de modifier les données ci-dessous. */

const SLIDES = [
  {
    tag: "Football", context: "Ligue 1 · 6e journée",
    title: "Brest cartonne,<br>Paris assure",
    lead: "Festival breton face à Angers, le PSG reste solide contre Le Mans.",
    scores: [
      ["Brest", 5, 1, "Angers"], ["PSG", 3, 1, "Le Mans"],
      ["Lens", 2, 1, "Lyon"], ["Monaco", 2, 2, "Toulouse"],
      ["Nice", 2, 1, "Strasbourg"], ["Lille", 1, 0, "Le Havre"],
    ],
  },
  {
    tag: "Rugby", context: "Top 14 · 6e journée",
    title: "Toulouse s’accroche<br>à la première place",
    lead: "Bousculé par Bayonne, le Stade Toulousain gagne avec le bonus offensif.",
    scores: [
      ["Toulouse", 45, 34, "Bayonne"], ["Pau", 35, 26, "Castres"],
      ["Stade Français", 30, 22, "Montpellier"], ["Toulon", 29, 15, "Racing 92"],
      ["Clermont", 22, 23, "Bordeaux-B."], ["Lyon", 16, 28, "La Rochelle"],
    ],
    note: "Prochaine journée · samedi 24 et dimanche 25 octobre",
  },
  {
    tag: "Tennis", context: "ATP 250 · Lyon-Décines",
    title: "Le tennis ATP<br>revient à Lyon",
    lead: "Nouveau Grand Prix Auvergne-Rhône-Alpes, sur dur en salle à la LDLC Arena.",
    dates: { from: 18, to: 25, month: "Octobre" },
    infos: [
      ["Lieu", "LDLC Arena, Décines"],
      ["Surface", "Dur, en salle"],
      ["Billets", "dès 6,50 €"],
      ["Ensuite", "Paris Masters"],
    ],
  },
  {
    tag: "Courses hippiques", context: "ParisLongchamp · 4 octobre",
    title: "Daryz, le doublé<br>dans l’Arc",
    lead: "Déjà vainqueur l’an passé, le cheval de Francis-Henri Graffard remet ça et entre dans l’histoire.",
    podium: ["Daryz", "Bay City Roller", "Diamond Necklace"],
  },
  {
    tag: "Curling", context: "Grand Chelem · Victoria, Canada",
    title: "Les pierres glissent<br>à Victoria",
    lead: "Le Grand Chelem de curling bat son plein jusqu’à dimanche, l’Europe enchaîne fin octobre.",
    schedule: [
      ["Quarts de finale femmes", "sam. 17 oct."],
      ["Finale femmes", "dim. 18 oct. · 21 h"],
      ["Finale hommes", "nuit de dim. à lun. · 1 h"],
      ["Championnats d’Europe, Ostrava", "27 oct. › 1er nov.", true],
    ],
  },
  {
    tag: "Basket", context: "NBA · nuit du 7 au 8 novembre",
    title: "Les Spurs<br>carburent",
    lead: "Large victoire à Portland, San Antonio compte 8 succès en 10 matchs.",
    scores: [
      ["Portland", 103, 125, "San Antonio"], ["Oklahoma City", 114, 75, "Washington"],
      ["Cleveland", 97, 109, "New York"], ["Golden State", 126, 119, "Orlando"],
      ["Phoenix", 102, 99, "Houston"], ["Atlanta", 124, 121, "Brooklyn"],
    ],
    note: "En tête à 8-2 · San Antonio, Oklahoma City, les Lakers et Philadelphie",
  },
];

function renderSlide(s) {
  let body = "";

  if (s.scores) {
    body = `<div class="sl-scores">${s.scores.map(([home, a, b, away]) => `
      <div class="sl-pill sl-match">
        <span class="home">${home}</span>
        <span class="sl-dot blue">${a}</span><span class="sl-dot yellow">${b}</span>
        <span class="away">${away}</span>
      </div>`).join("")}</div>`;
  } else if (s.dates) {
    body = `<div class="sl-event">
      <div class="sl-dates">
        <span class="sl-dot big blue">${s.dates.from}</span><span class="sl-chev">›</span>
        <span class="sl-dot big yellow">${s.dates.to}</span><span class="sl-month">${s.dates.month}</span>
      </div>
      <div class="sl-list">${s.infos.map(([k, v]) => `
        <div class="sl-pill sl-info"><span>${k}</span><span class="val">${v}</span></div>`).join("")}</div>
    </div>`;
  } else if (s.podium) {
    body = `<div class="sl-list">${s.podium.map((name, i) => `
      <div class="sl-pill sl-rank"><span class="sl-dot ${i === 0 ? "yellow" : "blue"}">${i + 1}</span>${name}</div>`).join("")}</div>`;
  } else if (s.schedule) {
    body = `<div class="sl-list">${s.schedule.map(([k, v, hi]) => `
      <div class="sl-pill sl-info sl-sched ${hi ? "hi" : ""}"><span>${k}</span><span class="val">${v}</span></div>`).join("")}</div>`;
  }

  return `
    <div class="sl-deco"><i class="c-blue"></i><i class="c-yellow"></i><i class="c-red"></i></div>
    <div class="sl-head">
      <span class="sl-tag">${s.tag}</span><span class="sl-context">${s.context}</span>
      <span class="sl-brand">Les brèves du sport</span>
    </div>
    <h1 class="sl-title">${s.title}</h1>
    <p class="sl-lead">${s.lead}</p>
    <div class="sl-body">${body}${s.note ? `<div class="sl-note">${s.note}</div>` : ""}</div>`;
}
