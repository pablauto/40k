function calculaDanoCAC(){
    document.getElementById("dadoAC").id
    if (id=="dadoAC1")
    var Dano = (cac1 + "dado1d6")
    else if (id=="dadoAC2")
    var Dano = (cac2 + "dado1d6")
    else
    var Dano = (cac3 + "dado1d6")
}
function calculaDanoAD(){
    var Dano = (ad1 + "dado1d6") 
    document.getElementById("Nome1").id
}


function enterTropa1(){
    var nome = document.getElementById("Nome1").value;
    var resPont = parseInt(document.getElementById("resPont").value);
    var pHab = parseInt(document.getElementById("habPont").value);
    var pInt = parseInt(document.getElementById("intPont").value);

    var checkbox = document.getElementById("baseA1").checked;
      if (checkbox == true) {
        checkbox = 1;
      }
      else
      checkbox = 0;
    var checkbox2 = document.getElementById("baseA2").checked;
      if (checkbox2 == true) {
          checkbox2 = 1;
        }
        else
        checkbox2 = 0;
    var checkbox3 = document.getElementById("baseA3").checked;
      if (checkbox3 == true) {
          checkbox3 = 1;
        }
        else
        checkbox3 = 0;
        var checkboxD = document.getElementById("baseD1").checked;
      if (checkboxD == true) {
        checkboxD = 1;
      }
      else
      checkboxD = 0;
    var checkboxD2 = document.getElementById("baseD2").checked;
      if (checkboxD2 == true) {
          checkboxD2 = 1;
        }
        else
        checkboxD2 = 0;
    var checkboxD3 = document.getElementById("baseD3").checked;
      if (checkboxD3 == true) {
          checkboxD3 = 1;
        }
        else
        checkboxD3 = 0;
        

    if ((nome == "Homens da Guarda") || (nome == "homens da guarda"))
    document.getElementById("vida1").value = 20,
    document.getElementById("cac1").value = 0,
    document.getElementById("ad1").value = 0+pHab+checkbox+checkbox2+checkbox3,
    document.getElementById("armadura1").value = 0+resPont+checkboxD+checkboxD2+checkboxD3,
    document.getElementById("movimento1").value = 3,
    document.getElementById("alcance1").value = 3,
    document.getElementById("especial1").value ="Morrer pelo Imperador"
    else if (nome == "-"){
      document.getElementById("vida1").value = 0,
      document.getElementById("cac1").value = 0,
      document.getElementById("ad1").value = 0,
      document.getElementById("armadura1").value = 0,
      document.getElementById("movimento1").value = "0",
      document.getElementById("alcance1").value = 0,
      document.getElementById("especial1").value ="-"}
    else if (nome == "Infantaria Pesada"){
    document.getElementById("vida1").value = 15,
    document.getElementById("cac1").value = 0,
    document.getElementById("ad1").value = 1+pHab+checkbox+checkbox2+checkbox3,
    document.getElementById("armadura1").value = 1+resPont+checkboxD+checkboxD2+checkboxD3,
    document.getElementById("movimento1").value = "3 lento",
    document.getElementById("alcance1").value = 6,
    document.getElementById("especial1").value ="Supressão -2 movimento"}
    else if (nome == "Cavalaria"){
        document.getElementById("vida1").value = 20,
        document.getElementById("cac1").value = 0+pHab+checkbox+checkbox2+checkbox3,
        document.getElementById("ad1").value = 0,
        document.getElementById("armadura1").value = 0+resPont+checkboxD+checkboxD2+checkboxD3,
        document.getElementById("movimento1").value = 6,
        document.getElementById("alcance1").value = 1,
        document.getElementById("especial1").value = "-"}
    else if (nome == "Infantaria Melta"){
        document.getElementById("vida1").value = 15,
        document.getElementById("cac1").value = 0,
        document.getElementById("ad1").value = 1+pHab+checkbox+checkbox2+checkbox3,
        document.getElementById("armadura1").value = 1+resPont+checkboxD+checkboxD2+checkboxD3,
        document.getElementById("movimento1").value = "3 lento",
        document.getElementById("alcance1").value = 6,
        document.getElementById("especial1").value ="Armadura -4"}
    else if (nome == "Vindicare Assassin" || nome=="vindicare assasin"){
    document.getElementById("vida1").value = 12,
    document.getElementById("cac1").value = 0,
    document.getElementById("ad1").value = 2+pHab+checkbox+checkbox2+checkbox3,
    document.getElementById("armadura1").value = 0+resPont+checkboxD+checkboxD2+checkboxD3,
    document.getElementById("movimento1").value = 3,
    document.getElementById("alcance1").value = 9,
    document.getElementById("especial1").value =""}
    else if (nome == "Tempestus Scions"){
        document.getElementById("vida1").value = 20,
        document.getElementById("cac1").value = 0,
        document.getElementById("ad1").value = 1+pHab+checkbox+checkbox2+checkbox3,
        document.getElementById("armadura1").value = 1+resPont+checkboxD+checkboxD2+checkboxD3,
        document.getElementById("movimento1").value = 3,
        document.getElementById("alcance1").value = 3,
        document.getElementById("especial1").value =""}
    else if (nome == "Karsin" || nome=="karskin"){
    document.getElementById("vida1").value = 20,
    document.getElementById("cac1").value = 1,
    document.getElementById("ad1").value = 1+pHab+checkbox+checkbox2+checkbox3,
    document.getElementById("armadura1").value = 1+resPont+checkboxD+checkboxD2+checkboxD3,
    document.getElementById("movimento1").value = 3,
    document.getElementById("alcance1").value = 3,
    document.getElementById("especial1").value =""}
    else if (nome == "Ogryn" || nome=="ogryn"){
    document.getElementById("vida1").value = 20,
    document.getElementById("cac1").value = 2+pHab+checkbox+checkbox2+checkbox3,
    document.getElementById("ad1").value = 2+pHab+checkbox+checkbox2+checkbox3,
    document.getElementById("armadura1").value = 2+resPont+checkboxD+checkboxD2+checkboxD3,
    document.getElementById("movimento1").value = 4,
    document.getElementById("alcance1").value = 6,
    document.getElementById("especial1").value ="Armadura -2"}
    else if (nome == "chimera" || nome=="Chimera"){
    document.getElementById("vida1").value = 15,
    document.getElementById("cac1").value = "-",
    document.getElementById("ad1").value = 0+pInt,
    document.getElementById("armadura1").value = 4+resPont,
    document.getElementById("movimento1").value = 6,
    document.getElementById("alcance1").value = 3,
    document.getElementById("especial1").value ="Guarnecer Tropas"}
    else if (nome == "Scout Sentinel"){
    document.getElementById("vida1").value = 15,
    document.getElementById("cac1").value = "-",
    document.getElementById("ad1").value = 1+pInt,
    document.getElementById("armadura1").value = 2+resPont,
    document.getElementById("movimento1").value = 6,
    document.getElementById("alcance1").value = 3,
    document.getElementById("especial1").value ="Capturar Bases"}
    else if (nome == "Bane Wolf" || nome=="bane wolf"){
    document.getElementById("vida1").value = 15,
    document.getElementById("cac1").value = "-",
    document.getElementById("ad1").value = 1+pInt,
    document.getElementById("armadura1").value = 4+resPont,
    document.getElementById("movimento1").value = 3,
    document.getElementById("alcance1").value = 6,
    document.getElementById("especial1").value ="Armadura -4"}
    else if (nome == "HellHound" || nome=="hellhound"){
    document.getElementById("vida1").value = 15,
    document.getElementById("cac1").value = 0+pInt,
    document.getElementById("ad1").value = 1+pInt,
    document.getElementById("armadura1").value = 4+resPont,
    document.getElementById("movimento1").value = 3,
    document.getElementById("alcance1").value = 3,
    document.getElementById("especial1").value ="Ataque duplo"}
    else if (nome == "Leman Russ Tank" || nome=="leman russ tank"){
    document.getElementById("vida1").value = 15,
    document.getElementById("cac1").value = "-",
    document.getElementById("ad1").value = 2+pInt,
    document.getElementById("armadura1").value = 4+resPont,
    document.getElementById("movimento1").value = 3,
    document.getElementById("alcance1").value = 6,
    document.getElementById("especial1").value ="Armadura -2"}
    else if (nome == "Leman Russ Demolisher" || nome=="demolisher"){
    document.getElementById("vida1").value = 20,
    document.getElementById("cac1").value = 0,
    document.getElementById("ad1").value = 3+pInt,
    document.getElementById("armadura1").value = 4+resPont,
    document.getElementById("movimento1").value = 3,
    document.getElementById("alcance1").value = 6,
    document.getElementById("especial1").value ="Armadura -4"}
    else if (nome == "Basilisk" || nome=="basilisk"){
    document.getElementById("vida1").value = 15,
    document.getElementById("cac1").value = 0,
    document.getElementById("ad1").value = 2+pInt,
    document.getElementById("armadura1").value = 4+resPont,
    document.getElementById("movimento1").value = 3,
    document.getElementById("alcance1").value = 10,
    document.getElementById("especial1").value ="Lento"}
    else {  
        document.getElementById("especial1").value ="NADA" 
    }
}
function enterTropa2(){
    var nome2 = document.getElementById("Nome2").value;
    var resPont = parseInt(document.getElementById("resPont").value);
    var pHab = parseInt(document.getElementById("habPont").value);
    var pInt = parseInt(document.getElementById("intPont").value);

    var checkbox = document.getElementById("baseA1").checked;
    if (checkbox == true) {
      checkbox = 1;
    }
    else
    checkbox = 0;
  var checkbox2 = document.getElementById("baseA2").checked;
    if (checkbox2 == true) {
        checkbox2 = 1;
      }
      else
      checkbox2 = 0;
  var checkbox3 = document.getElementById("baseA3").checked;
    if (checkbox3 == true) {
        checkbox3 = 1;
      }
      else
      checkbox3 = 0;
      var checkboxD = document.getElementById("baseD1").checked;
    if (checkboxD == true) {
      checkboxD = 1;
    }
    else
    checkboxD = 0;
  var checkboxD2 = document.getElementById("baseD2").checked;
    if (checkboxD2 == true) {
        checkboxD2 = 1;
      }
      else
      checkboxD2 = 0;
  var checkboxD3 = document.getElementById("baseD3").checked;
    if (checkboxD3 == true) {
        checkboxD3 = 1;
      }
      else
      checkboxD3 = 0;

    if ((nome2 == "Homens da Guarda") || (nome2 == "homens da guarda"))
    document.getElementById("vida2").value = 20,
    document.getElementById("cac2").value = 0,
    document.getElementById("ad2").value = 0+pHab+checkbox+checkbox2+checkbox3,
    document.getElementById("armadura2").value = 0+resPont+checkboxD+checkboxD2+checkboxD3,
    document.getElementById("movimento2").value = 3,
    document.getElementById("alcance2").value = 3,
    document.getElementById("especial2").value ="Morrer pelo Imperador"
    else if (nome == "-"){
      document.getElementById("vida2").value = 0,
      document.getElementById("cac2").value = 0,
      document.getElementById("ad2").value = 0,
      document.getElementById("armadura2").value = 0,
      document.getElementById("movimento2").value = "0",
      document.getElementById("alcance2").value = 0,
      document.getElementById("especial2").value ="-"}
    else if ((nome2 == "Infantaria Pesada") || (nome2 == "infantaria pesada")){
        document.getElementById("vida2").value = 15,
        document.getElementById("cac2").value = 0,
        document.getElementById("ad2").value = 1+pHab+checkbox+checkbox2+checkbox3,
        document.getElementById("armadura2").value = 1+resPont+checkboxD+checkboxD2+checkboxD3,
        document.getElementById("movimento2").value = "3 lento",
        document.getElementById("alcance2").value = 6,
        document.getElementById("especial2").value ="Supressão -2 movimento"}
    else if ((nome2 == "cavalaria") || (nome2 == "Cavalaria")){
        document.getElementById("vida2").value = 20,
        document.getElementById("cac2").value = 0+pHab+checkbox+checkbox2+checkbox3,
        document.getElementById("ad2").value = 0,
        document.getElementById("armadura2").value = 0+resPont+checkboxD+checkboxD2+checkboxD3,
        document.getElementById("movimento2").value = 6,
        document.getElementById("alcance2").value = 1,
        document.getElementById("especial2").value = "-"}
    else if (nome2 == "Infantaria Melta"){
        document.getElementById("vida2").value = 15,
        document.getElementById("cac2").value = 0,
        document.getElementById("ad2").value = 1+pHab+checkbox+checkbox2+checkbox3,
        document.getElementById("armadura2").value = 1+resPont+checkboxD+checkboxD2+checkboxD3,
        document.getElementById("movimento2").value = "3 lento",
        document.getElementById("alcance2").value = 6,
        document.getElementById("especial2").value ="Armadura -4"}
    else if (nome2 == "Vindicare Assassin" || nome2 =="vindicare assasin"){
        document.getElementById("vida2").value = 12,
        document.getElementById("cac2").value = 0,
        document.getElementById("ad2").value = 2+pHab+checkbox+checkbox2+checkbox3,
        document.getElementById("armadura2").value = 0+resPont+checkboxD+checkboxD2+checkboxD3,
        document.getElementById("movimento2").value = 3,
        document.getElementById("alcance2").value = 9,
        document.getElementById("especial2").value =""}
        else if (nome2 == "Tempestus Scions"){
            document.getElementById("vida2").value = 20,
            document.getElementById("cac2").value = 0,
            document.getElementById("ad2").value = 1+pHab+checkbox+checkbox2+checkbox3,
            document.getElementById("armadura2").value = 1+resPont+checkboxD+checkboxD2+checkboxD3,
            document.getElementById("movimento2").value = 3,
            document.getElementById("alcance2").value = 3,
            document.getElementById("especial2").value =""}
    else if (nome2 == "Karsin" || nome2 =="karskin"){
        document.getElementById("vida2").value = 20,
        document.getElementById("cac2").value = 1,
        document.getElementById("ad2").value = 1+pHab+checkbox+checkbox2+checkbox3,
        document.getElementById("armadura2").value = 1+resPont+checkboxD+checkboxD2+checkboxD3,
        document.getElementById("movimento2").value = 3,
        document.getElementById("alcance2").value = 3,
        document.getElementById("especial2").value =""}
    else if (nome2 == "Ogryn" || nome2 =="ogryn"){
        document.getElementById("vida2").value = 20,
        document.getElementById("cac2").value = 2+pHab+checkbox+checkbox2+checkbox3,
        document.getElementById("ad2").value = 2+pHab+checkbox+checkbox2+checkbox3,
        document.getElementById("armadura2").value = 2+resPont+checkboxD+checkboxD2+checkboxD3,
        document.getElementById("movimento2").value = 4,
        document.getElementById("alcance2").value = 6,
        document.getElementById("especial2").value ="Armadura -2"}
    else if (nome2 == "chimera" || nome2 =="Chimera"){
        document.getElementById("vida2").value = 15,
        document.getElementById("cac2").value = "-",
        document.getElementById("ad2").value = 0+pInt,
        document.getElementById("armadura2").value = 4+resPont,
        document.getElementById("movimento2").value = 6,
        document.getElementById("alcance2").value = 3,
        document.getElementById("especial2").value ="Guarnecer Tropas"}
    else if (nome2 == "Scout Sentinel" || nome2 =="scout sentinel"){
        document.getElementById("vida2").value = 15,
        document.getElementById("cac2").value = "-",
        document.getElementById("ad2").value = 1+pInt,
        document.getElementById("armadura2").value = 2+resPont,
        document.getElementById("movimento2").value = 6,
        document.getElementById("alcance2").value = 3,
        document.getElementById("especial2").value ="Capturar Bases"}
    else if (nome2 == "Bane Wolf" || nome2 =="bane wolf"){
        document.getElementById("vida2").value = 15,
        document.getElementById("cac2").value = "-",
        document.getElementById("ad2").value = 1+pInt,
        document.getElementById("armadura2").value = 4+resPont,
        document.getElementById("movimento2").value = 3,
        document.getElementById("alcance2").value = 6,
        document.getElementById("especial2").value ="Armadura -4"}
    else if (nome2 == "HellHound" || nome2 =="hellhound"){
        document.getElementById("vida2").value = 15,
        document.getElementById("cac2").value = 0+pInt,
        document.getElementById("ad2").value = 1+pInt,
        document.getElementById("armadura2").value = 4+resPont,
        document.getElementById("movimento2").value = 3,
        document.getElementById("alcance2").value = 3,
        document.getElementById("especial2").value ="Ataque duplo"}
    else if (nome2 == "Leman Russ Tank" || nome2 =="leman russ tank"){
        document.getElementById("vida2").value = 15,
        document.getElementById("cac2").value = "-",
        document.getElementById("ad2").value = 2+pInt,
        document.getElementById("armadura2").value = 4+resPont,
        document.getElementById("movimento2").value = 3,
        document.getElementById("alcance2").value = 6,
        document.getElementById("especial2").value ="Armadura -2"}
    else if (nome2 == "Leman Russ Demolisher" || nome2 =="demolisher"){
        document.getElementById("vida2").value = 20,
        document.getElementById("cac2").value = 0,
        document.getElementById("ad2").value = 3+pInt,
        document.getElementById("armadura2").value = 4+resPont,
        document.getElementById("movimento2").value = 3,
        document.getElementById("alcance2").value = 6,
        document.getElementById("especial2").value ="Armadura -4"}
    else if (nome2 == "Basilisk" || nome2 =="basilisk"){
        document.getElementById("vida2").value = 15,
        document.getElementById("cac2").value = 0,
        document.getElementById("ad2").value = 2+pInt,
        document.getElementById("armadura2").value = 4+resPont,
        document.getElementById("movimento2").value = 3,
        document.getElementById("alcance2").value = 10,
        document.getElementById("especial2").value ="Lento"}
    else {
    document.getElementById("especial2").value ="NADA"
    }
}
function enterTropa3(){
    var nome3 = document.getElementById("Nome3").value;
    var pRes = parseInt(document.getElementById("resPont").value);
    var pHab = parseInt(document.getElementById("habPont").value);
    var pInt = parseInt(document.getElementById("intPont").value);

  var checkbox = document.getElementById("baseA1").checked;
    if (checkbox == true) {
      checkbox = 1;
    }
    else
    checkbox = 0;
  var checkbox2 = document.getElementById("baseA2").checked;
    if (checkbox2 == true) {
        checkbox2 = 1;
      }
      else
      checkbox2 = 0;
  var checkbox3 = document.getElementById("baseA3").checked;
    if (checkbox3 == true) {
        checkbox3 = 1;
      }
      else
      checkbox3 = 0;
      var checkboxD = document.getElementById("baseD1").checked;
    if (checkboxD == true) {
      checkboxD = 1;
    }
    else
    checkboxD = 0;
  var checkboxD2 = document.getElementById("baseD2").checked;
    if (checkboxD2 == true) {
        checkboxD2 = 1;
      }
      else
      checkboxD2 = 0;
  var checkboxD3 = document.getElementById("baseD3").checked;
    if (checkboxD3 == true) {
        checkboxD3 = 1;
      }
      else
      checkboxD3 = 0;

    if ((nome3 == "Homens da Guarda") || (nome3 == "homens da guarda"))
    document.getElementById("vida3").value = 20,
    document.getElementById("moral3").value = 5+pRes,
    document.getElementById("cac3").value = 0,
    document.getElementById("ad3").value = 1+pHab,
    document.getElementById("armadura3").value = 0,
    document.getElementById("movimento3").value = 3,
    document.getElementById("alcance3").value = 3,
    document.getElementById("especial3").value ="Morrer pelo Imperador"
    else if ((nome3 == "Infantaria Pesada") || (nome3 == "infantaria pesada")){
    document.getElementById("vida3").value = 15,
    document.getElementById("moral3").value = 5+pRes,
    document.getElementById("cac3").value = 0,
    document.getElementById("ad3").value = 1+pHab,
    document.getElementById("armadura3").value = 1,
    document.getElementById("movimento3").value = "3 lento",
    document.getElementById("alcance3").value = 6,
    document.getElementById("especial3").value ="Supressão -2 movimento"}
    else if ((nome3 == "cavalaria") || (nome3 == "Cavalaria")){
        document.getElementById("vida3").value = 15,
        document.getElementById("moral3").value = 5+pRes,
        document.getElementById("cac3").value = 1,
        document.getElementById("ad3").value = 0+pHab,
        document.getElementById("armadura3").value = 0,
        document.getElementById("movimento3").value = 6,
        document.getElementById("alcance3").value = 1,
        document.getElementById("especial3").value =""}
    else if ((nome3 == "Infantaria Especial") || (nome3 == "infantaria especial")){
    document.getElementById("vida3").value = 15,
    document.getElementById("moral3").value = 5+pRes,
    document.getElementById("cac3").value = 0,
    document.getElementById("ad3").value = 1+pHab,
    document.getElementById("armadura3").value = 1,
    document.getElementById("movimento3").value = "3 lento",
    document.getElementById("alcance3").value = 6,
    document.getElementById("especial3").value ="Armadura -3"}
    else if (nome3 == "Vindicare Assassin" || nome3 =="vindicare assasin"){
    document.getElementById("vida3").value = 15,
    document.getElementById("moral3").value = 5+pRes,
    document.getElementById("cac3").value = 0,
    document.getElementById("ad3").value = 1+pHab,
    document.getElementById("armadura3").value = 0,
    document.getElementById("movimento3").value = 3,
    document.getElementById("alcance3").value = 9,
    document.getElementById("especial3").value =""}
    else if (nome3 == "Karsin" || nome3 =="karskin"){
    document.getElementById("vida3").value = 20,
    document.getElementById("moral3").value = 6+pRes,
    document.getElementById("cac3").value = 1,
    document.getElementById("ad3").value = 1+pHab,
    document.getElementById("armadura3").value = 1,
    document.getElementById("movimento3").value = 3,
    document.getElementById("alcance3").value = 3,
    document.getElementById("especial3").value =""}
    else if (nome3 == "Ogryn" || nome3 =="ogryn"){
    document.getElementById("vida3").value = 20,
    document.getElementById("moral3").value = 6+pRes,
    document.getElementById("cac3").value = 2,
    document.getElementById("ad3").value = 2+pHab,
    document.getElementById("armadura3").value = 2,
    document.getElementById("movimento3").value = 4,
    document.getElementById("alcance3").value = 6,
    document.getElementById("especial3").value =""}
    else if (nome3 == "chimera" || nome3 =="Chimera"){
    document.getElementById("vida3").value = 20,
    document.getElementById("moral3").value = "-",
    document.getElementById("cac3").value = 0,
    document.getElementById("ad3").value = 1+pInt,
    document.getElementById("armadura3").value = 3,
    document.getElementById("movimento3").value = 6,
    document.getElementById("alcance3").value = 3,
    document.getElementById("especial3").value ="Cura +2 do lado"}
    else if (nome3 == "Scout Sentinel" || nome3 =="scout sentinel"){
    document.getElementById("vida3").value = 15,
    document.getElementById("moral3").value = "-",
    document.getElementById("cac3").value = 0,
    document.getElementById("ad3").value = 1+pInt,
    document.getElementById("armadura3").value = 3,
    document.getElementById("movimento3").value = 6,
    document.getElementById("alcance3").value = 3,
    document.getElementById("especial3").value =""}
    else if (nome3 == "Bane Wolf" || nome3 =="bane wolf"){
    document.getElementById("vida3").value = 20,
    document.getElementById("moral3").value = "-",
    document.getElementById("cac3").value = 0,
    document.getElementById("ad3").value = 1+pInt,
    document.getElementById("armadura3").value = 3,
    document.getElementById("movimento3").value = 6,
    document.getElementById("alcance3").value = 3,
    document.getElementById("especial3").value ="Armadura -3"}
    else if (nome3 == "HellHound" || nome3 =="hellhound"){
    document.getElementById("vida3").value = 20,
    document.getElementById("moral3").value = "-",
    document.getElementById("cac3").value = 0,
    document.getElementById("ad3").value = 1+pInt,
    document.getElementById("armadura3").value = 3,
    document.getElementById("movimento3").value = 6,
    document.getElementById("alcance3").value = 3,
    document.getElementById("especial3").value ="Moral -1"}
    else if (nome3 == "Leman Russ Tank" || nome3 =="leman russ tank"){
    document.getElementById("vida3").value = 20,
    document.getElementById("moral3").value = "-",
    document.getElementById("cac3").value = 0,
    document.getElementById("ad3").value = 1+pInt,
    document.getElementById("armadura3").value = 3,
    document.getElementById("movimento3").value = 6,
    document.getElementById("alcance3").value = 6,
    document.getElementById("especial3").value =""}
    else if (nome3 == "Leman Russ Demolisher" || nome3 =="demolisher"){
    document.getElementById("vida3").value = 20,
    document.getElementById("moral3").value = "-",
    document.getElementById("cac3").value = 0,
    document.getElementById("ad3").value = 2+pInt,
    document.getElementById("armadura3").value = 4,
    document.getElementById("movimento3").value = 6,
    document.getElementById("alcance3").value = 6,
    document.getElementById("especial3").value ="Armadura -3"}
    else if (nome3 == "Basilisk" || nome3 =="basilisk"){
    document.getElementById("vida3").value = 20,
    document.getElementById("moral3").value = "-",
    document.getElementById("cac3").value = 0,
    document.getElementById("ad3").value = 1+pInt,
    document.getElementById("armadura3").value = 2,
    document.getElementById("movimento3").value = 6,
    document.getElementById("alcance3").value = 6,
    document.getElementById("especial3").value =""}
    else {
    document.getElementById("especial3").value ="Escreve direito caralho"
    }
}