/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 09:02:16
 * @LastEditTime: 2020-12-24 13:26:35
 * @Description: 全局数据管理
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { reactive, readonly } from 'vue'

const state = reactive({
  group: [],
  fonts: []
})

const actions = {}

const getters = reactive({})

export default {
  state: readonly(state),
  getters: readonly(getters),
  actions
}
