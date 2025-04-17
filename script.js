let scoreJoueur = 0;
    let scoreOrdi = 0;
    let niveau = 'facile';

    function choisirNiveau(niv) {
      niveau = niv;
      document.querySelector('.niveau-selection').style.display = 'none';
      document.querySelector('.boutons-jeu').style.display = 'block';
      document.getElementById('resultat').innerText = `Niveau choisi : ${niveau.toUpperCase()}`;
    }

    function jouer(choixJoueur) {
      const choixPossibles = ['pierre', 'papier', 'ciseaux'];
      let choixOrdi;

      
      if (niveau === 'facile') {
        choixOrdi = choixPossibles[Math.floor(Math.random() * 3)];
      } else if (niveau === 'moyen') {
      
        choixOrdi = Math.random() < 0.3 ? choixPossibles[Math.floor(Math.random() * 3)] : contrer(choixJoueur);
      } else if (niveau === 'difficile') {
  
        choixOrdi = Math.random() < 0.6 ? contrer(choixJoueur) : choixPossibles[Math.floor(Math.random() * 3)];
      }

      let resultat = "";
      if (choixJoueur === choixOrdi) {
        resultat = "Égalité ! 😐";
      } else if (
        (choixJoueur === 'pierre' && choixOrdi === 'ciseaux') ||
        (choixJoueur === 'papier' && choixOrdi === 'pierre') ||
        (choixJoueur === 'ciseaux' && choixOrdi === 'papier')
      ) {
        resultat = "Tu as gagné ! 🎉";
        scoreJoueur++;
      } else {
        resultat = "Tu perds ! 😢";
        scoreOrdi++;
      }

      document.getElementById("resultat").innerText = `Tu as choisi ${choixJoueur} - L'ordi a choisi ${choixOrdi}. ${resultat}`;
      document.getElementById("scoreJoueur").innerText = scoreJoueur;
      document.getElementById("scoreOrdi").innerText = scoreOrdi;
    }

    function contrer(choix) {
      if (choix === 'pierre') return 'papier';
      if (choix === 'papier') return 'ciseaux';
      return 'pierre';
    }

    function resetScores() {
      scoreJoueur = 0;
      scoreOrdi = 0;
      document.getElementById("scoreJoueur").innerText = scoreJoueur;
      document.getElementById("scoreOrdi").innerText = scoreOrdi;
      document.getElementById("resultat").innerText = "Scores remis à zéro ! Choisis ton niveau pour recommencer.";
      document.querySelector('.niveau-selection').style.display = 'block';
      document.querySelector('.boutons-jeu').style.display = 'none';
    }