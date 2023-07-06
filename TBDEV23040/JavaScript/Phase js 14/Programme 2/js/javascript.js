min = Math.ceil(0);
max = Math.floor(100);
var rand = Math.floor(Math.random() * (max - min) + min ); 



function verif(){
    var veri = document.getElementById("textBox1").value;

    if(veri > rand){
        document.getElementById("label1").innerHTML = "<b>Trop grand</b>";
    }
    else{
        if (veri<rand){
            document.getElementById("label1").innerHTML = "<b>Trop petit</b>";
        }
        else{
            document.getElementById("label1").innerHTML = "<b>Bravo, tu as trouvé</b>";

        }
    }

}