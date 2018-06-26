const path = require("path");
const { expect } = intern.getPlugin("chai");
const { registerSuite } = intern.getInterface("object");

registerSuite("is-webp-extended", {
  async "it should handle non-webp image"() {
    await this.remote
      .get("test.html")
      .findById("input")
      .type(path.join(__dirname, "fixtures/non-webp.png"))
      .end()
      .sleep(1000);

    const isWebPText = await this.remote
      .findById("isWebP")
      .getVisibleText();

    const isAnimatedWebPText = await this.remote
      .findById("isAnimatedWebP")
      .getVisibleText();

    expect(isWebPText).to.be.eq("false", "isWebPText should be false");
    expect(isAnimatedWebPText).to.be.eq("false", "isAnimatedWebPText should be false");
  },

  async "it should handle lossy webp image"() {
    await this.remote
      .get("test.html")
      .findById("input")
      .type(path.join(__dirname, "fixtures/lossy.webp"))
      .end()
      .sleep(1000);

    const isWebPText = await this.remote
      .findById("isWebP")
      .getVisibleText();

    const isAnimatedWebPText = await this.remote
      .findById("isAnimatedWebP")
      .getVisibleText();

    expect(isWebPText).to.be.eq("true", "isWebPText should be true");
    expect(isAnimatedWebPText).to.be.eq("false", "isAnimatedWebPText should be false");
  },

  async "it should handle lossless webp image"() {
    await this.remote
      .get("test.html")
      .findById("input")
      .type(path.join(__dirname, "fixtures/lossless.webp"))
      .end()
      .sleep(1000);

    const isWebPText = await this.remote
      .findById("isWebP")
      .getVisibleText();

    const isAnimatedWebPText = await this.remote
      .findById("isAnimatedWebP")
      .getVisibleText();

    expect(isWebPText).to.be.eq("true", "isWebPText should be true");
    expect(isAnimatedWebPText).to.be.eq("false", "isAnimatedWebPText should be false");
  },

  async "it should handle animated webp image"() {
    await this.remote
      .get("test.html")
      .findById("input")
      .type(path.join(__dirname, "fixtures/animated.webp"))
      .end()
      .sleep(1000);

    const isWebPText = await this.remote
      .findById("isWebP")
      .getVisibleText();

    const isAnimatedWebPText = await this.remote
      .findById("isAnimatedWebP")
      .getVisibleText();

    expect(isWebPText).to.be.eq("true", "isWebPText should be true");
    expect(isAnimatedWebPText).to.be.eq("true", "isAnimatedWebPText should be true");
  },

  async "it should handle extended webp image"() {
    await this.remote
      .get("test.html")
      .findById("input")
      .type(path.join(__dirname, "fixtures/exif-jeju.webp"))
      .end()
      .sleep(1000);

    const isWebPText = await this.remote
      .findById("isWebP")
      .getVisibleText();

    const isAnimatedWebPText = await this.remote
      .findById("isAnimatedWebP")
      .getVisibleText();

    expect(isWebPText).to.be.eq("true", "isWebPText should be true");
    expect(isAnimatedWebPText).to.be.eq("false", "isAnimatedWebPText should be false");
  },
});
