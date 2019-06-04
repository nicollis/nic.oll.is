export default class Project {
  dotColor;
  dateColor;
  languageBadge;
  platformBadge;

  constructor( {
    title,
    detail,
    inProgress,
    date,
    link,
    tech,
    eventType
  }
  ) {
    this.eventType = eventType || 'project';

    if (this.eventType === 'blog') {
      this.eventIcon = 'pencil-alt';
    } else if (this.eventType === 'video') {
      this.eventIcon = 'video';
    } else {
      this.eventIcon = 'box-open';
    }

    this.date = new Date(date);

    this.title = title;
    this.details = detail;
    this.link = link;
    this.tech = tech;

    this.completedYear = (inProgress) ? 'in-progress' : null || this.date.getFullYear().toString();
    this.dateTag = (inProgress) ? this.date.toLocaleDateString(
        'en-us',
        {month: 'long'}
      ) :
      this.date.toLocaleDateString(
        'en-us',
        {month: 'short', day: '2-digit'}
      );
  }

  toJson() {
    this.errorChecking()
    return {
      title: this.title,
      details: this.details,
      completedYear: this.completedYear,
      dateTag: this.dateTag,
      link: this.link,
      dotColor: this.dotColor,
      dateColor: this.dateColor,
      tech: this.tech
    }
  };

  errorChecking() {
    if (
      this.title === undefined ||
      this.details === undefined ||
      this.completedYear === undefined ||
      this.dateTag === undefined ||
      this.link === undefined
    ) {
      throw new TypeError("Base Object structure is not correct: Must have Title, Detail, Date, Link")
    }

    if (
      this.dotColor === undefined ||
      this.dateColor === undefined
    ) {
      throw new TypeError("Must define Dot and Date Color")
    }

    if (
      this.languageBadge === undefined ||
      this.platformBadge === undefined
    ) {
      throw new TypeError("Must define Lanague and Platform Badge")
    }
  }
}
