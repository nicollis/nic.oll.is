import Web from './Web'

export default class Rails extends Web {
  dotColor = 'bg-coral'
  dateColor = 'color-coral'

  languageBadge = {title: 'Rails', style: 'danger'}
  platformBadge = {title: '', style: 'primary'}

  tech = []

  constructor(object) {
    super(object);

    this.setLanguages(object)
    this.buildTech(object)
    this.errorChecking()
  }

  // Assumes Rails is API based unless frontEnd is given
  setLanguages(object) {
    this.tech.push(this.languageBadge)

    if (object.frontEnd) {
      this.platformBadge.title = object.frontEnd
      this.tech.push(this.platformBadge)
    }
  }
}