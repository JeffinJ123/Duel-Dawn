import * as PIXI from "pixi.js";

export class AssetLoader {
  static bundleName = "core";
  static isRegistered = false; // flag kept for check if same asseet is loaded more than once

  static async load(): Promise<void> {
    if (!this.isRegistered) {
      PIXI.Assets.addBundle(this.bundleName, {
        // SymbolSheet: "/src/assets/symbols/symbols.png",

        WILD: "/src/assets/symbols/wild.png",
        J: "/src/assets/symbols/jack.png",
        A: "/src/assets/symbols/gun.png",
        K: "/src/assets/symbols/shotgun.png",
        Q: "/src/assets/symbols/cash.png",
        SCATTER: "/src/assets/symbols/scatter.png",


        reelFrame: "/src/assets/reelFrame/reelFrameDuel.png",


        baseBG: "/src/assets/backgrounds/basegame.png",
        freeBG: "/src/assets/backgrounds/freegame.png",

      });
      this.isRegistered = true;
    }

    await PIXI.Assets.loadBundle(this.bundleName);
  }
}

