describe("simple element with behavior", () => {
  let SimpleElement
  let observerEvent
  before(() => {
    // given:
    SimpleElement = Polymer({
      is: "simple-element",
      properties: {
        model: {
          type: Object,
          value: {}
        }
      },
      observers: ["_observer(model.*)"],
      _observer: function(event) {
        observerEvent = event
      }
    })
  })

  it("should create simple-element", () => {
    // when:
    const element = new SimpleElement()

    // then:
    expect(element.is).to.equal("simple-element")
  })

  it("should call observer", () => {
    // when:
    const element = new SimpleElement()

    // then:
    expect(observerEvent).to.deep.equal({ path: "model", value: {}, base: {} })
  })
})