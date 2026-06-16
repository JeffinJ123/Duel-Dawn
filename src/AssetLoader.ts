import * as PIXI from "pixi.js";

export class AssetLoader {
  static bundleName = "core";
  static isRegistered = false; // flag kept for check if same asseet is loaded more than once

  static async load(): Promise<void> {
    if (!this.isRegistered) {
      PIXI.Assets.addBundle(this.bundleName, {
        // SymbolSheet: "/src/assets/symbols/symbols.png",

        WILD: `${import.meta.env.BASE_URL}assets/symbols/wild.png`,
        J: `${import.meta.env.BASE_URL}assets/symbols/jack.png`,
        A: `${import.meta.env.BASE_URL}assets/symbols/gun.png`,
        K: `${import.meta.env.BASE_URL}assets/symbols/shotgun.png`,
        Q: `${import.meta.env.BASE_URL}assets/symbols/cash.png`,
        SCATTER: `${import.meta.env.BASE_URL}assets/symbols/scatter.png`,

        reelFrame: `${import.meta.env.BASE_URL}assets/reelFrame/reelFrameDuel.png`,

        baseBG: `${import.meta.env.BASE_URL}assets/backgrounds/basegame.png`,
        freeBG: `${import.meta.env.BASE_URL}assets/backgrounds/freegame.png`,

      });
      this.isRegistered = true;
    }

    await PIXI.Assets.loadBundle(this.bundleName);
  }
}

