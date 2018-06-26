const { expect } = intern.getPlugin("chai");
const { registerSuite } = intern.getInterface("object");

registerSuite("is-webp-extended", {
  async "it should work"() {
    await this.remote
      .get("test.html")
      .findById("input")
      .type("fixture.webp")
      .end()
      .sleep(1000);

    const isWebPText = await this.remote
      .findById("isWebP")
      .getVisibleText();

    const isAnimatedWebPText = await this.remote
      .findById("isAnimatedWebP")
      .getVisibleText();

    expect(isWebPText).to.be.eq("true");
    expect(isAnimatedWebPText).to.be.eq("true");
  },
});
