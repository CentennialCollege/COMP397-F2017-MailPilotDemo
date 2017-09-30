module objects {
  export class Ocean extends createjs.Bitmap {
    // PRIVATE INSTANCE VARIABLES
    private _verticalSpeed:number;
    // PUBLIC PROPERTIES

    // CONSTRUCTORS
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager.getResult("ocean"));

      this.Start();
    }
    // PRIVATE METHODS
    private _reset():void {
      this.y = -960;
    }

    private _checkBounds():void {
      if(this.y >= 0) {
        this._reset();
      }
    }


    // PUBLIC METHODS
    public Start():void {
      this._reset();
    }

    public Update():void {
      this.y += 5;
      this._checkBounds();
    }
  }
}
