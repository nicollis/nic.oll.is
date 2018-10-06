import Project from './Project'

export default class Android extends Project {
  dotColor = 'bg-java'
  dateColor = 'color-java'
  languageBadge = {title: 'Kotlin', style: 'normal', class: 'bg-java'}
  javaLanguageBadge = {title: 'Java', style: 'normal', class: 'bg-java'}
  platformBadge = {title: 'Android', style: 'primary', class: ''}
  tech = []

  constructor(object) {
    super(object);

    this.setLanguages(object)
    this.buildTech(object)
    this.errorChecking()
  }

  setLanguages(object) {
    if (object.kotlin !== false) {
      this.tech.push(this.languageBadge)
    }

    if (object.java)
      this.tech.push(this.javaLanguageBadge)

    this.tech.push(this.platformBadge)
  }

  buildTech(object) {
    if (object.tech) {
      this.tech = this.tech.concat(
        object.tech.map(tech => {
          return { title: tech, style: 'info' }
        })
      );
    }
  }
}