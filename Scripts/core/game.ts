// IIFE - Immediately Invoked Function Expression
(function(){
  let stage:createjs.Stage;
  let canvas:any;
  let assetManager:createjs.LoadQueue;
  let assetManifest = [
    {id: "ocean", src:"../../Assets/images/ocean.gif"},
    {id: "engine", src:"../../Assets/audio/engine.ogg"},
    {id: "thunder", src:"../../Assets/audio/thunder.ogg"},
    {id: "yay", src:"../../Assets/audio/yay.ogg"}
  ];

  let textureAtlasData = {

      "images": [
        "../../Assets/spritesheets/textureatlas.png"
      ],

      "frames": [
          [1, 1, 9, 9, 0, 0, 0],
          [12, 1, 226, 178, 0, 0, 0],
          [1, 181, 62, 63, 0, 0, 0],
          [65, 181, 65, 65, 0, 0, 0],
          [1, 248, 150, 50, 0, 0, 0],
          [1, 300, 150, 50, 0, 0, 0],
      ],

      "animations": {
          "bullet": { "frames": [0] },
          "cloud": { "frames": [1] },
          "island": { "frames": [2] },
          "plane": { "frames": [3] },
          "restartButton": { "frames": [4] },
          "startButton": { "frames": [5] }
      }
    };

  let textureAtlas: createjs.SpriteSheet;

  let currentScene: objects.Scene;
  let currentState:number;

  function Init() {
    assetManager = new createjs.LoadQueue();
    assetManager.installPlugin(createjs.Sound);
    assetManager.on("complete", Start);
    assetManager.loadManifest(assetManifest);

    textureAtlas = new createjs.SpriteSheet(textureAtlasData);
  }

  function Start() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", Update);

    currentState = config.START;
    Main();
  }

  function Update() {
    let newState = currentScene.Update();
    if(newState != currentState) {
      currentState = newState;
      Main();
    }
    stage.update();
  }

  function Main() {

    stage.removeAllChildren();

    switch(currentState) {
      case config.START:
      currentScene = new scenes.Start(assetManager, textureAtlas, currentState);
      break;

      case config.PLAY:
      currentScene = new scenes.Play(assetManager, textureAtlas, currentState);
      break;

      case config.END:
      currentScene = new scenes.End(assetManager, textureAtlas, currentState);
      break;
    }

    stage.addChild(currentScene);
  }

  window.onload = Init;

})();
