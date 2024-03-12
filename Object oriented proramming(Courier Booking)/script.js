class courier {
    constructor(weight, source, destination, bookedBy){
        this.weight = weight;
        this.source = source;
        this.destination = destination;
        this.bookedBy = bookedBy;
    }

    bookcourier(){
        this.price = this.weight > 20 ? 200 : 100;
        return `The courier price is ${this.price}`;
    }

    showcourier(){
        return `the courier is from ${this.source}  to ${this.destination} and booked By ${this.bookedBy};`
    }
}

let choice = -1;

do {
    let mycourier = new courier(25, "vijayawada", "kodad", "karthik");
    console.log("choose One : \n1. Book Courier\n2. see details\n3. quit");
    choice = parseInt(prompt("enter the choice :"));

    switch (choice) {
        case 1: 
        console.log(mycourier.bookcourier());   
            break;
            case 2:
                console.log(mycourier.showcourier()); 
             break;
             case 3:
                console.log("Thanks for stopping By!"); 
        default: console.log("Invalid Inpuut!"); 
            break;
    }
} while (choice > 0 && choice < 3);