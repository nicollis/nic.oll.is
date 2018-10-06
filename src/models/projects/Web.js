import Project from './Project'

export default class Web extends Project {
  dotColor = 'bg-js'
  dateColor = 'color-js'

  languageBadge = {title: 'JS', style: 'normal', class: 'bg-js'}

  platformBadge = {title: 'React', style: 'primary', class: ''}
  reduxPlatformBadge = {title: 'Redux', style: 'info', class: ''}
  vuePlatformBadge = {title: 'Vue', style: 'primary', class: ''}

  tech = []

  constructor(object) {
    super(object);

    this.setLanguages(object)
    this.buildTech(object)
    this.errorChecking()
  }

  // Defaults to React w/ Redux
  setLanguages(object) {
    this.tech.push(this.languageBadge)

    if (object.react !== false) {
      this.tech.push(this.platformBadge)
    }
    if (object.redux !== false) {
      this.tech.push(this.reduxPlatformBadge)
    }

    if (object.vue)
      this.tech.push(this.vuePlatformBadge)
  }

  buildTech(object) {
    if (object.tech) {
      this.tech = this.tech.concat(
        object.tech.map(tech => {
          return { title: tech, style: 'info' }
        })
      );
    }

    if (object.api) {
      this.tech = this.tech.concat(
        object.api.map(tech => {
          return { title: tech, style: 'success' }
        })
      );
    }

    if (object.hosting) {
      this.tech = this.tech.concat(
        object.hosting.map(tech => {
          return { title: tech, style: 'normal' }
        })
      );
    }
  }
}