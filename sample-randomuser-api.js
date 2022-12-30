/* Veuillez tout d'abord 😁😁😁
vous assurer que l'API est bien public !!! */

// Tout d'abord on commence par récupérer les données depuis l'API

fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data) => {
    // Ici on crée la structure du tableau HTML
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    table.appendChild(thead);
    table.appendChild(tbody);

    // Ici on ajoute des en-têtes de colonne au tableau
    const tr = document.createElement("tr");
    const thNom = document.createElement("th");
    const thEmail = document.createElement("th");
    thNom.textContent = "Nom";
    tr.appendChild(thNom);
    const thPrenom = document.createElement("th");
    thPrenom.textContent = "Prénom";
    tr.appendChild(thPrenom);
    thead.appendChild(tr);
    thEmail.textContent = "Email";
    tr.appendChild(thEmail);
    thead.appendChild(tr);

    // Ici on ajoute des lignes de données
    data.results.forEach((utilisateur) => {
      const tr = document.createElement("tr");
      const tdNom = document.createElement("td");
      tdNom.textContent = `${utilisateur.name.last}, ${utilisateur.name.first}`;
      tr.appendChild(tdNom);
      const tdPrenom = document.createElement("td");
      tdPrenom.textContent = utilisateur.name.first;
      tr.appendChild(tdPrenom);
      tbody.appendChild(tr);

      const tdEmail = document.createElement("td");
      tdEmail.textContent = utilisateur.email;
      tr.appendChild(tdEmail);
      tbody.appendChild(tr);
    });

    // Ici on ajoute le tableau à la page html (fin de la partie 😁)
    document.body.appendChild(table);
  });
