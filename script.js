function lyrics() {
    for (i=99;i>=1;i--) {
            document.getElementById("bottles").innerHTML+="<br />" +i+ "  bottles of beer on the wall, "+i+" bottles of beer. Take one down and pass it around "+(i-1)+" bottles of beer on the wall";
     }
}