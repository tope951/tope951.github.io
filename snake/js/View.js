class View {
  constructor() {

  }

  /**
   * @param {*} matrice
   */
  afficherLeJeu(matrice, couleur) {
    couleur = this.chargerCouleurParDefaut(couleur);
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var fond = new Image();
    var teteSerp = new Image();
    var corpsSerp = new Image();
    var fruit = new Image();
    fond.onload = () => {
      this.afficherFond(matrice, ctx, fond);
      teteSerp.onload = () => {
        this.afficherTete(matrice, ctx, teteSerp);
      }
      corpsSerp.onload = () => {
        this.afficherCorp(matrice, ctx, corpsSerp);
      }
      fruit.onload = () => {
        this.afficherFruit(matrice, ctx, fruit);
      }
      teteSerp.src = './styles/ressources/headsnake-' + couleur + '.png';
      corpsSerp.src = './styles/ressources/bodysnake-' + couleur + '.png';
      fruit.src = './styles/ressources/food.png';
    }
    fond.src = './styles/ressources/boardgame.png';
  }

  /**
   * @param {*} matrice 
   * @param {*} ctx 
   * @param {*} fruit 
   */
  afficherFruit(matrice, ctx, fruit) {
    for (var i = 0; i < matrice.length; i++) {
      for (var j = 0; j < matrice.length; j++) {
        if (matrice[j][i] == "F") {
          ctx.drawImage(fruit, (i + 3) * 30, (j + 3) * 30, 30, 30);
        }
      }
    }
  }

  /**
   * @param {*} matrice 
   * @param {*} ctx 
   * @param {*} corpsSerp 
   */
  afficherCorp(matrice, ctx, corpsSerp) {
    for (var i = 0; i < matrice.length; i++) {
      for (var j = 0; j < matrice.length; j++) {
        if (matrice[j][i] == "S") {
          ctx.drawImage(corpsSerp, (i + 3) * 30, (j + 3) * 30, 30, 30);
        }
      }
    }
  }

  /**
   * @param {*} matrice 
   * @param {*} ctx 
   * @param {*} teteSerp 
   */
  afficherTete(matrice, ctx, teteSerp) {

    for (var i = 0; i < matrice.length; i++) {
      for (var j = 0; j < matrice.length; j++) {
        if (matrice[j][i] == "T") {
          ctx.drawImage(teteSerp, (i + 3) * 30, (j + 3) * 30, 30, 30);
        }
      }
    }
  }

  /**
   * @param {*} matrice 
   * @param {*} ctx 
   * @param {*} fond 
   */
  afficherFond(matrice, ctx, fond) {
    for (var i = 0; i < matrice.length; i++) {
      for (var j = 0; j < matrice.length; j++) {
        ctx.drawImage(fond, (i + 3) * 30, (j + 3) * 30, 30, 30);
      }
    }
  }

  /**
   * @param {*} couleur 
   */
  chargerCouleurParDefaut(couleur) {
    if (!couleur) {
      couleur = "vert";
    }
    return couleur;
  }

  /**
 * @param {*} matrice
 */
  actualiserLeJeu(matrice, couleur) {
    var ctx;
    var fond;
    var teteSerp;
    var corpsSerp;
    var fruit;
    ({ ctx, fond, teteSerp, corpsSerp, fruit, couleur } = this.chargerRessources(couleur));
    this.afficherFond(matrice, ctx, fond);
    this.afficherTete(matrice, ctx, teteSerp);
    this.afficherCorp(matrice, ctx, corpsSerp);
    this.afficherFruit(matrice, ctx, fruit);
  }

  /**
   * @param {*} couleur 
   */
  chargerRessources(couleur) {
    couleur = this.chargerCouleurParDefaut(couleur);
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var fond = new Image();
    fond.src = './styles/ressources/boardgame.png';
    var teteSerp = new Image();
    teteSerp.src = './styles/ressources/headsnake-' + couleur + '.png';
    var corpsSerp = new Image();
    corpsSerp.src = './styles/ressources/bodysnake-' + couleur + '.png';
    var fruit = new Image();
    fruit.src = './styles/ressources/food.png';
    return { ctx, fond, teteSerp, corpsSerp, fruit, couleur };
  }


  /**
   * @param {*} matrice 
   */
  afficherEcranFin(matrice) {
    var { ctx, fond } = this.chargerRessourcesFin();

    for (var i = 0; i < matrice.length; i++) {
      for (var j = 0; j < matrice.length; j++) {
        ctx.drawImage(fond, (i + 3) * 30, (j + 3) * 30, 30, 30);
      }
    }
    ctx.fillStyle = "white";
    ctx.font = "40px '8bit'";
    ctx.fillText("Game Over", 200, 200);

  }


  chargerRessourcesFin() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var fond = new Image();
    fond.src = '.styles/ressources/boardgame.png';
    return { ctx, fond };
  }

  /**
   * @param {*} score
   */
  actualiserLeScore(score) {
    document.getElementById('affScore').innerHTML = "Score actuel : " + score
  }


  /**
   * @param {*} score
   */
  actualiserLeScoreMax(score) {
    document.getElementById('affScoreMax').innerHTML = "Score max : " + score;
  }

  /**
   * @param {*} idSelected 
   * @param {*} idUnselected1 
   * @param {*} idUnselected2 
   */
  animation(idSelected, idUnselected1, idUnselected2) {
    document.getElementById(idSelected).className = 'iconsSkin selected';
    document.getElementById(idUnselected1).className = 'iconsSkin unSelected';
    document.getElementById(idUnselected2).className = 'iconsSkin unSelected';
  }


  /**
  * @param {*} idSelected 
  * @param {*} idUnselected1 
  * @param {*} idUnselected2 
  */
  animationButton(idSelected, idUnselected1, idUnselected2) {
    switch (idSelected) {
      case "facile":
        document.getElementById(idSelected).className = 'smallbtn successSelected';
        document.getElementById(idUnselected1).className = 'smallbtn secondary';
        document.getElementById(idUnselected2).className = 'smallbtn danger';
        break;
      case "normal":
        document.getElementById(idSelected).className = 'smallbtn secondarySelected';
        document.getElementById(idUnselected1).className = 'smallbtn success';
        document.getElementById(idUnselected2).className = 'smallbtn danger';
        break;
      case "difficile":
        document.getElementById(idSelected).className = 'smallbtn dangerSelected';
        document.getElementById(idUnselected1).className = 'smallbtn success';
        document.getElementById(idUnselected2).className = 'smallbtn secondary';
        break;
      default:
        break;
    }

  }
}
