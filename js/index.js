//Alfa 0.0.0.0.1

var app = new Vue({
    el: "#app",
    data: 
    {
        player: player
    },
    methods:
    {
        gameLoop(){
            gameLoop(this);
        },
        format(number){
            return format(number);
        },
        showTab(name){
            showTab(name);
        },
        save(){
            save();
        },
        load(){
            load();
        },
    },
    mounted (){
        //load();
        hideAll();
        setInterval(this.gameLoop,30); // starts interval for gameLoop - tick event 
        console.log("start");
    }
});