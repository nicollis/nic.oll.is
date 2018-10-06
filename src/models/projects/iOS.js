import Project from './Project'

export default class iOS extends Project {
  dotColor = 'bg-swift'
  dateColor = 'color-swift'
  languageBadge = {title: 'Swift', style: 'normal', class: 'bg-swift'}
  platformBadge = {title: 'iOS', style: 'primary', class: ''}

  constructor(object) {
    super(object);
    this.tech = [this.languageBadge, this.platformBadge]

    if (object.tech) {
      this.tech = this.tech.concat(
        object.tech.map(tech => {
          return { title: tech, style: 'info' }
        })
      );
    }

    this.errorChecking()
  }
}