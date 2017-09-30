module scenes {
  export class Play extends objects.Scene {
    // PRIVATE INSTANCE VARIABLES
    private _assetManager:createjs.LoadQueue;

    private _plane:objects.Plane;
    private _ocean:objects.Ocean;


    // PUBLIC PROPERTIES

    // CONSTRUCTORS
    constructor(assetManager:createjs.LoadQueue, currentScene:number) {
      super();
      this._assetManager = assetManager;
      this._currentScene = currentScene;
      this.Start();
    }
    // PRIVATE METHODS

    // PUBLIC METHODS
    public Start():void {
      this._plane = new objects.Plane(this._assetManager);
      this._ocean = new objects.Ocean(this._assetManager);
      this.Main();
    }

    public Update():number {
      this._plane.Update();
      this._ocean.Update();
      return this._currentScene;
    }

    public Main():void {
      this.addChild(this._ocean);
      this.addChild(this._plane);

    }
  }
}
