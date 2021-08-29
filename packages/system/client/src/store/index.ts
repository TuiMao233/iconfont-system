import { App, inject, InjectionKey } from 'vue'
import _store from './store'

export const STORE_KEY: InjectionKey<typeof _store> = Symbol('state')

export const useStore = () => inject(STORE_KEY)!

const install = (app: App) => {
  app.provide(STORE_KEY, _store)
}

export default Object.assign(_store, { install })
