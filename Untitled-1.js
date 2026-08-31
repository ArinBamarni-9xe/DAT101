<!DOCTYPE html>
<html lang="no">
<head>
  <meta charset="UTF-8">
  <title>Min første JS-teller</title>
  
  <!-- CSS: Gjøre at det ser litt pent ut -->
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin-top: 50px;
      background-color: #f4f4f9;
    }

    .container {
      background: white;
      padding: 30px;
      border-radius: 10px;
      display: inline-block;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>

  <!-- HTML: Elementene på siden -->
  <div class="container">
    <h1>Klikk-teller</h1>
    <p>Antall klikk: <strong id="antall-visning">0</strong></p>
    <button id="min-knapp">Trykk på meg!</button>
  </div>

  <!-- JAVASCRIPT: Logikken og funksjonaliteten -->
  <script>
    // 1. CONST: Vi henter HTML-elementene. Disse referansene skal ALDRI endres.
    const knappElement = document.querySelector("#min-knapp");
    const visningElement = document.querySelector("#antall-visning");

    // 2. LET: Vi oppretter en variabel for antall klikk. Denne SKAL endres over tid.
    let antallKlikk = 0;

    // 3. Hva som skal skje når noen klikker på knappen
    knappElement.addEventListener("click", function() {
      // Øk tallet med 1 (dette fungerer kun fordi variabelen er 'let')
      antallKlikk = antallKlikk + 1;

      // Oppdater teksten på nettsiden med det nye tallet
      visningElement.textContent = antallKlikk;
    });
  </script>

</body>
</html>