// @ts-check
/// <reference path="declaration/dolphin-platform-js.d.ts" />

export class Binder {
  /**
   * @param {dolphin.BeanManager} beanManager
   */
  constructor(beanManager) {
    this.listeners = new Map()
    beanManager.onBeanUpdate(this._onBeanUpdateHandler.bind(this))
    beanManager.onArrayUpdate(this._onArrayUpdateHandler.bind(this))
  }

  bind(element, rootPath, value) {
  }

  unbind(element, rootPath, value) {
  }

  /**
   * @param {*} bean
   * @param {string} propertyName
   * @param {*} newValue
   * @param {*} oldValue
   */
  _onBeanUpdateHandler(bean, propertyName, newValue, oldValue) {
  }

  /**
   * @param {*} bean
   * @param {string} propertyName
   * @param {number} index
   * @param {number} count
   * @param {*} newElements
   */
  _onArrayUpdateHandler(bean, propertyName, index, count, newElements) {
  }
}
