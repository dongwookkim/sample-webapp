import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

/**
 * Service to call HTTP request via Axios
 */
const ApiService = {
  init() {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.headers.Pragma = 'no-cache'
    Vue.axios.interceptors.response.use(
      response => response,
      error => {
        const { response } = error

        if (response && response.status === 401) {
          // login
        }

        return Promise.reject(error.response)
      }
    )
  },

  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[VRD] ApiService ${JSON.stringify(error)}`)
    })
  },

  /**
   * Send the GET HTTP request
   * @param resource
   * @returns {*}
   */
  get(resource) {
    return Vue.axios.get(resource)
  },

  /**
   * Set the POST HTTP request
   * @param resource
   * @param params
   * @returns {*}
   */
  post(resource, params, config = {}) {
    return Vue.axios.post(`${resource}`, params, config)
  },

  /**
   * Send the UPDATE HTTP request
   * @param resource
   * @param slug
   * @param params
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params)
  },

  /**
   * Send the PUT HTTP request
   * @param resource
   * @param params
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  put(resource, params) {
    return Vue.axios.put(`${resource}`, params)
  },

  /**
   * Send the DELETE HTTP request
   * @param resource
   * @returns {*}
   */
  delete(resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[API] ApiService ${error}`)
    })
  }
}

export default ApiService
