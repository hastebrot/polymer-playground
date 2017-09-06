// https://www.polymer-project.org/2.0/docs/devguide/observers#observing-path-changes

describe("simple element with behavior", () => {
  let SimpleElement
  let lastTextValue
  let lastModelValue
  before(() => {
    // given:
    SimpleElement = Polymer({
      is: "simple-element",
      properties: {
        text: {
          type: String,
          value: function() { return "foo" },
          observer: "_textChanged",
        },
        model: {
          type: Object,
          value: function() { return {} }
        }
      },
      observers: ["_textChanged(text)", "_modelChanged(model.*)"],
      changeProperties: function() {
        console.log("changeProperties()")
        this.text = "bar"
        this.set("model", { key: "value" })
      },
      _textChanged: function(newValue, oldValue) {
        console.log("_textChanged(")
        lastTextValue = newValue
      },
      _modelChanged: function(event) {
        console.log("_modelChanged()")
        lastTextValue = event.newValue
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
    element.changeProperties()

    // then:
    expect(lastModelValue).to.deep.equal({ path: "model", value: {}, base: {} })
    expect(lastTextValue).to.deep.equal({ path: "text", value: {}, base: {} })
  })
})