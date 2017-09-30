module objects {
  export class Plane extends createjs.Bitmap {
    // PRIVATE INSTANCE VARIABLES

    // PUBLIC PROPERTIES

    // CONSTRUCTORS
    constructor(assetManager:createjs.LoadQueue) {
      super(assetManager.getResult("plane"));
      this.Start();
    }
    // PRIVATE METHODS

    // PUBLIC METHODS
    public Start() {
      this.regX = this.getBounds().width * 0.5;
      this.regY = this.getBounds().height * 0.5;
      this.x = 320;
      this.y = 430;
    }

    public Update() {

    }
  }
}
