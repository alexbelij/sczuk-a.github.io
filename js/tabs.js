
function showTab (name){
    var tabs = document.getElementsByClassName("tab");
    var tab;

     for(var i = 0; i < tabs.length ; i++){
        tab = tabs.item(i);
        if ( tab.id === name){
            tab.style.display = "block";
        }
        else {
            tab.style.display = "none";
        }
     }

}