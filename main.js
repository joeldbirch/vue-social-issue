import Vue from 'vue'
import VueSocial from '@blocklevel/vue-social'

Vue.social.auth = {
  google: 'http://127.0.0.1:8000/auth/google'
}

Vue.use(VueSocial)
