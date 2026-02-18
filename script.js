function calculateTaylor() {

    let inflation = parseFloat(document.getElementById("inflation").value);
    let targetInflation = parseFloat(document.getElementById("targetInflation").value);
    let outputGap = parseFloat(document.getElementById("outputGap").value);
    let neutralRate = parseFloat(document.getElementById("neutralRate").value);

    if (isNaN(inflation) || isNaN(targetInflation) || isNaN(outputGap) || isNaN(neutralRate)) {
        document.getElementById("result").innerHTML = "Input Required";
        document.getElementById("policy").innerHTML = "";
        return;
    }

    let rate = neutralRate
        + inflation
        + 0.5 * (inflation - targetInflation)
        + 0.5 * outputGap;

    document.getElementById("result").innerHTML = rate.toFixed(2) + "%";

    let stance = "";

    if (inflation > targetInflation && outputGap > 0) {
        stance = "Strong tightening signal: Inflation above target and positive output gap.";
    }
    else if (inflation < targetInflation && outputGap < 0) {
        stance = "Easing bias: Below-target inflation and negative output gap.";
    }
    else {
        stance = "Neutral to moderate adjustment implied by macro conditions.";
    }

    document.getElementById("policy").innerHTML = stance;
}
