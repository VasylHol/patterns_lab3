interface Icoordinates {
  x: number;
  y: number;
  z: number;
}
class Dron {
  private coordinates: Icoordinates;
  private luggage: boolean;
  constructor() {
    this.coordinates = Object.assign({}, { x: 0, y: 0, z: 0 });
    this.luggage = true;
  }
}

class Commands {
  protected dron: any;
  constructor(dron: any) {
    this.dron = dron;
  }
  move(commands: string) {
    const arrayOfCommands = commands.split("");
    let command: string = "";
    for (let i = 0; i < arrayOfCommands.length; i++) {
      if (isNaN(Number(arrayOfCommands[i]))) {
        command = arrayOfCommands[i];
        console.log(command);
      } else {
        let ourNumber = Number(arrayOfCommands[i]);
        switch (command) {
          case "U":
            this.dron.coordinates.y += ourNumber;
            break;
          case "D":
            this.dron.coordinates.y -= ourNumber;
            break;
          case "L":
            this.dron.coordinates.x -= ourNumber;
            break;
          case "R":
            this.dron.coordinates.x += ourNumber;
            break;
          case "F":
            this.dron.coordinates.z += ourNumber;
            break;
          case "B":
            this.dron.coordinates.z -= ourNumber;
            break;
        }
      }
    }
  }
  logPosition() {
    console.log("Current position is :", this.dron.coordinates);
  }
}

class DropCommand extends Commands {
  drop() {
    this.dron.luggage = false;
    console.log("luggage was droped");
  }
}

const firstDron = new Dron();
const controller = new Commands(firstDron);
const controller2 = new DropCommand(firstDron);
controller.move("U3D2L4");
controller.logPosition();
controller2.drop();
