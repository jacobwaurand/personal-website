import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/vue-fontawesome'

// Import the icons you want to use globally
import { faUser, faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { DefineComponent } from 'vue'

library.add(faUser, faCoffee, faEnvelope)

export default {
  install(app: { component: (arg0: string, arg1: DefineComponent<FontAwesomeIconProps>) => void }) {
    app.component('font-awesome-icon', FontAwesomeIcon)
  }
}