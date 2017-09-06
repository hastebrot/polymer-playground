describe("simple element with behavior", () => {
    let SimpleElement;
    before(() => {
        SimpleElement = Polymer({
            is: "simple-element",
        })
    })

    it("should create simple-element", () => {
        // when:
        const element = new SimpleElement()

        // then:
        expect(element.is).to.equal("simple-element")
    })
})