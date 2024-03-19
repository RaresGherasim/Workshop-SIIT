class Player {
    constructor(image,name){
        this.image = image;
        this.name = name;
        this.score = 0;
    }
    move(){
        this.score += randomNum();
    }
}