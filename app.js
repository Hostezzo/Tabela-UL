const teams = [
  {
    "id": "manchester-united",
    "name": "Manchester United",
    "manager": "IV",
    "abbr": "MUN",
    "class": "united",
    "players": [
      "João ST",
      "Atlas",
      "Noah",
      "Junin",
      "misty",
      "fenomeno",
      "oap",
      "Rayancarlos2",
      "ImmortalKon",
      "OS_huevas",
      "Coffee",
      "Thoby",
      "jota",
      "papai"
    ]
  },
  {
    "id": "tottenham",
    "name": "Tottenham",
    "manager": "Mob999",
    "abbr": "TOT",
    "class": "tottenham",
    "players": [
      "Japor",
      "Ast",
      "Sal",
      "ray",
      "Gemeos",
      "miguel lol",
      "bispo",
      "jk",
      "Fz",
      "Insomnia",
      "riddace",
      "Alma",
      "Grego",
      "zin"
    ]
  },
  {
    "id": "arsenal",
    "name": "Arsenal",
    "manager": "TZ",
    "abbr": "ARS",
    "class": "arsenal",
    "players": [
      "alas",
      "szz",
      "Blank",
      "Abami",
      "Gam",
      "Alucard",
      "dubis",
      "Lin",
      "Jeremias",
      "seeker",
      "Zoopa",
      "Paozin",
      "kaizer",
      "Nobruuh"
    ]
  },
  {
    "id": "chelsea",
    "name": "Chelsea",
    "manager": "Raio Mcqueen",
    "abbr": "CHE",
    "class": "chelsea",
    "players": [
      "Vasco",
      "ghstznx",
      "mob",
      "Shadowzy",
      "Elric",
      "Kitows",
      "Babel",
      "The_KingX",
      "Seishi",
      "Terminus",
      "Poke",
      "ernzona153",
      "Coriacoes",
      "yuutsu"
    ]
  },
  {
    "id": "manchester-city",
    "name": "Manchester City",
    "manager": "Sagax",
    "abbr": "MCI",
    "class": "city",
    "players": [
      "folao",
      "rain",
      "Simplest",
      "aki",
      "new eclipse",
      "ztato",
      "Dark",
      "notyourbread",
      "Megu",
      "wize",
      "maria zazali",
      "mufffy",
      "XY",
      "Beer"
    ]
  },
  {
    "id": "liverpool",
    "name": "Liverpool",
    "manager": "NewRed",
    "abbr": "LIV",
    "class": "liverpool",
    "players": [
      "GUGA",
      "chosen",
      "yikip",
      "7zin",
      "aru",
      "burned",
      "heartbroken",
      "oliv",
      "syn",
      "Eclipse",
      "unuleandrox",
      "4myt",
      "erickforever",
      "Chocottone"
    ]
  }
];
const rounds = [
  {
    "round": 1,
    "matches": [
      {
        "home": "manchester-united",
        "away": "liverpool",
        "homeGoals": null,
        "awayGoals": null
      },
      {
        "home": "tottenham",
        "away": "manchester-city",
        "homeGoals": null,
        "awayGoals": null
      },
      {
        "home": "arsenal",
        "away": "chelsea",
        "homeGoals": null,
        "awayGoals": null
      }
    ]
  },
  {
    "round": 2,
    "matches": [
      {
        "home": "manchester-united",
        "away": "manchester-city",
        "homeGoals": null,
        "awayGoals": null
      },
      {
        "home": "liverpool",
        "away": "chelsea",
        "homeGoals": null,
        "awayGoals": null
      },
      {
        "home": "tottenham",
        "away": "arsenal",
        "homeGoals": null,
        "awayGoals": null
      }
    ]
  },
  {
    "round": 3,
    "matches": [
      {
        "home": "manchester-united",
        "away": "chelsea",
        "homeGoals": null,
        "awayGoals": null
      },
      {
        "home": "manchester-city",
        "away": "arsenal",
        "homeGoals": null,
        "awayGoals": null
      },
      {
        "home": "liverpool",
        "away": "tottenham",
        "homeGoals": null,
        "awayGoals": null
      }
    ]
  },
  {
    "round": 4,
    "matches": [
      {
        "home": "manchester-united",
        "away": "arsenal",
        "homeGoals": null,
        "awayGoals": null
      },
      {
        "home": "chelsea",
        "away": "tottenham",
        "homeGoals": null,
        "awayGoals": null
      },
      {
        "home": "manchester-city",
        "away": "liverpool",
        "homeGoals": null,
        "awayGoals": null
      }
    ]
  },
  {
    "round": 5,
    "matches": [
      {
        "home": "manchester-united",
        "away": "tottenham",
        "homeGoals": null,
        "awayGoals": null
      },
      {
        "home": "arsenal",
        "away": "liverpool",
        "homeGoals": null,
        "awayGoals": null
      },
      {
        "home": "chelsea",
        "away": "manchester-city",
        "homeGoals": null,
        "awayGoals": null
      }
    ]
  },
  {
    "round": 6,
    "matches": [
      {
        "home": "liverpool",
        "away": "manchester-united",
        "homeGoals": null,
        "awayGoals": null
      },
      {
        "home": "manchester-city",
        "away": "tottenham",
        "homeGoals": null,
        "awayGoals": null
      },
      {
        "home": "chelsea",
        "away": "arsenal",
        "homeGoals": null,
        "awayGoals": null
      }
    ]
  },
  {
    "round": 7,
    "matches": [
      {
        "home": "manchester-city",
        "away": "manchester-united",
        "homeGoals": null,
        "awayGoals": null
      },
      {
        "home": "chelsea",
        "away": "liverpool",
        "homeGoals": null,
        "awayGoals": null
      },
      {
        "home": "arsenal",
        "away": "tottenham",
        "homeGoals": null,
        "awayGoals": null
      }
    ]
  },
  {
    "round": 8,
    "matches": [
      {
        "home": "chelsea",
        "away": "manchester-united",
        "homeGoals": null,
        "awayGoals": null
      },
      {
        "home": "arsenal",
        "away": "manchester-city",
        "homeGoals": null,
        "awayGoals": null
      },
      {
        "home": "tottenham",
        "away": "liverpool",
        "homeGoals": null,
        "awayGoals": null
      }
    ]
  },
  {
    "round": 9,
    "matches": [
      {
        "home": "arsenal",
        "away": "manchester-united",
        "homeGoals": null,
        "awayGoals": null
      },
      {
        "home": "tottenham",
        "away": "chelsea",
        "homeGoals": null,
        "awayGoals": null
      },
      {
        "home": "liverpool",
        "away": "manchester-city",
        "homeGoals": null,
        "awayGoals": null
      }
    ]
  },
  {
    "round": 10,
    "matches": [
      {
        "home": "tottenham",
        "away": "manchester-united",
        "homeGoals": null,
        "awayGoals": null
      },
      {
        "home": "liverpool",
        "away": "arsenal",
        "homeGoals": null,
        "awayGoals": null
      },
      {
        "home": "manchester-city",
        "away": "chelsea",
        "homeGoals": null,
        "awayGoals": null
      }
    ]
  }
];

const byId = Object.fromEntries(teams.map(t => [t.id, t]));

function makeStats() {
  return Object.fromEntries(teams.map(t => [t.id, {
    id:t.id, played:0, wins:0, draws:0, losses:0, gf:0, ga:0, points:0
  }]));
}

function calculateStandings() {
  const stats = makeStats();
  rounds.forEach(round => round.matches.forEach(m => {
    if (m.homeGoals === null || m.awayGoals === null) return;
    const h = stats[m.home], a = stats[m.away];
    const hg = Number(m.homeGoals), ag = Number(m.awayGoals);
    h.played++; a.played++; h.gf += hg; h.ga += ag; a.gf += ag; a.ga += hg;
    if (hg > ag) { h.wins++; h.points += 3; a.losses++; }
    else if (hg < ag) { a.wins++; a.points += 3; h.losses++; }
    else { h.draws++; a.draws++; h.points++; a.points++; }
  }));
  return Object.values(stats).sort((a,b) =>
    b.points-a.points || (b.gf-b.ga)-(a.gf-a.ga) || b.gf-a.gf || a.id.localeCompare(b.id)
  );
}

function badge(team, cls="badge") {
  return `<span class="${cls} ${team.class}">${team.abbr}</span>`;
}

function renderStandings() {
  const body = document.querySelector("#standings tbody");
  const rows = calculateStandings();
  body.innerHTML = rows.map((s,i) => {
    const t = byId[s.id], gd = s.gf-s.ga;
    return `<tr>
      <td class="rank">${i+1}</td>
      <td><div class="team-name">${badge(t)}<span>${t.name}</span></div></td>
      <td>${s.played}</td><td>${s.wins}</td><td>${s.draws}</td><td>${s.losses}</td>
      <td>${s.gf}</td><td>${s.ga}</td><td>${gd > 0 ? "+" : ""}${gd}</td><td class="pts">${s.points}</td>
    </tr>`;
  }).join("");
}

function renderRounds() {
  document.querySelector("#rounds").innerHTML = rounds.map(r => `
    <article class="round-card">
      <div class="round-head">
        <span class="round-number">Rodada ${r.round}</span>
        <span class="round-meta">3 jogos</span>
      </div>
      ${r.matches.map(m => {
        const h=byId[m.home], a=byId[m.away];
        const score = m.homeGoals === null ? "—" : `${m.homeGoals} × ${m.awayGoals}`;
        return `<div class="match">
          <span class="home">${h.name}</span>
          <span class="score">${score}</span>
          <span class="away">${a.name}</span>
        </div>`;
      }).join("")}
    </article>
  `).join("");
}

function renderTeams() {
  document.querySelector("#teams").innerHTML = teams.map(t => `
    <article class="team-card">
      <div class="team-top">
        ${badge(t,"team-logo")}
        <div>
          <div class="team-title">${t.name}</div>
          <div class="manager">Manager: ${t.manager}</div>
        </div>
        <span class="count">${t.players.length}/14</span>
      </div>
      <ol class="roster">${t.players.map(p => `<li>${p}</li>`).join("")}</ol>
    </article>
  `).join("");
}

renderStandings();
renderRounds();
renderTeams();
