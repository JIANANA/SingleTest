import Vue from 'vue'
import MyTest from '../views/MyTest.vue'

// 挂载元素并返回已渲染的文本工具函数
function getRenderedTest (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData: propsData }).$mount()
  return vm.$el.textContent
}
describe('My-test', () => {
  it('renders correctly with different props', () => {
    expect(getRenderedTest(MyTest, {
      msg: 'Hello'
    })).toBe('Hello')
    expect(getRenderedTest(MyTest, {
      msg: 'Bye'
    })).toBe('Bye')
  })
})
