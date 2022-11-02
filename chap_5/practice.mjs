let mc = ["Makima","Poochta","Nezuko","Eren","Falco","Mikasa","Claudia"];
let notFound = true;

while(notFound && mc.length > 0){
    if(mc[0] === "Mikasa"){
        console.log("Mikasa in chat");
        notFound = false;
    }
    else{
        mc.shift();
    }
}
