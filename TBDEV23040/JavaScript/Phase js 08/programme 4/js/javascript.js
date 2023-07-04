var N = window.prompt("Combien de multiples?");
var X = window.prompt("Quel nombre");

for (i=1; i<=N; ++i){
    document.write(i + " x " + X + " = " + (i*X) + "<br>");
}