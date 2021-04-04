function getParagraph(){
    var result1 = document.getElementById("input1").value;
    var result2 = document.getElementById("input2").value;
    var result3 = document.getElementById("input3").value;
    var result4 = document.getElementById("input4").value;
    var result5 = document.getElementById("input5").value;
    var result6 = document.getElementById("input6").value;
    var output = result1.concat(result2);
    var output2 = output.concat(result3);
    var output3 = output2.concat(result4);
    var output4 = output3.concat(result5);
    var output5 = output4.concat(result6);
    var finaloutput = document.getElementById("tag1").innerHTML = output5;
}

function getParagraph2(){
    var result7 = document.getElementById("input7").value;
    var result8 = document.getElementById("input8").value;
    var result9 = document.getElementById("input9").value;
    var result10 = document.getElementById("input10").value;
    var result11= document.getElementById("input11").value;
    var result12= document.getElementById("input12").value;
    var output6 = result7.concat(result8);
    var output7 = output6.concat(result9);
    var output8 = output7.concat(result10);
    var output9 = output8.concat(result11);
    var output10 = output9.concat(result12);
    var realoutput = document.getElementById("tag2").innerHTML = output10;
}