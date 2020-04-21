import Project from './Project'

export default class ML extends Project {
  dotColor = 'bg-ml'
  dateColor = 'color-ml'
  languageBadge = {title: 'Python', style: 'info', class: 'bg-python'}
  platformBadge = {title: 'Jupyter', style: 'primary', class: 'bg-ml'}

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
