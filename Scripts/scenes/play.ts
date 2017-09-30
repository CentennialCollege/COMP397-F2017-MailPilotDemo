module scenes {
  export class Play extends objects.Scene {
    // PRIVATE INSTANCE VARIABLES
    private _assetManager:createjs.LoadQueue;

    private _plane:objects.Plane;
    private _ocean:objects.Ocean;
    private _island:objects.Island;


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
      this._island = new objects.Island(this._assetManager);
      this.Main();
    }

    public Update():number {
      this._plane.Update();
      this._ocean.Update();
      this._island.Update();
      return this._currentScene;
    }

    public Main():void {
      this.addChild(this._ocean);
      this.addChild(this._island);
      this.addChild(this._plane);

    }
  }
}
