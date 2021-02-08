class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.Reset = createButton('Reset');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(displayWidth/2-300, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(displayWidth/2-100,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(displayWidth/2-50,500);
        this.button.style('width', '100px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.Reset.position(displayWidth-545,670);
        this.Reset.style('width', '80px');
        this.Reset.style('height', '30px');
        this.Reset.style('background', 'lightpink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(displayWidth/2-250,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

        this.Reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        });
    }
}