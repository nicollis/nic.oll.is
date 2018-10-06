import { iOSProject, WebProject, RailsProject } from '../../models/projects'

export default [
  new iOSProject({ 
    title: 'Swift Playgrounds',
    detail: 'A small collection of playgrounds broken into projects while experimenting with swift',
    date: 'Dec 17 2017',
    link: 'https://github.com/nicollis/Swift-Playgrounds',
    tech: [ 'CoreData']
  }),
  new WebProject({
    title: 'Mobile Flashcards',
    detail: 'A small flashcard app written in React Native for the React Nanodegree Program',
    date: 'Oct 14 2017',
    link: 'https://github.com/nicollis/Cards',
    hosting: ['React Native']
  }),
  new WebProject({
    title: 'Readable',
    detail: 'A Reddit clone built with React & Redux for Udacity\'s React Nano Degree Program',
    date: 'Sep 16 2017',
    link: 'https://github.com/nicollis/Readable',
    api: ['REST'],
    hosting: ['Firebase']
  }),
  new WebProject({
    title: 'MyReads',
    detail: 'GoodReads Clone made in React for Udacity\'s React Nano Degree Program',
    date: 'Jul 08 2017',
    link: 'https://github.com/nicollis/MyReads',
    redux: false,
    api: ['REST'],
    hosting: ['Heroku']
  }),
  new WebProject({
    title: 'ClusterForecast',
    detail: 'A small React project pulling in ClusterTruck\'s API and a Weather API to predict demand on their kitchen of any given day.',
    date: 'Jun 12 2017',
    link: 'https://github.com/nicollis/ClusterForecast',
    redux: false,
    api: ['REST'],
    hosting: ['Heroku']
  }),
  new RailsProject({
    title: 'Otter',
    detail: 'A simple twitter clone created as a playground for Rails 5. Testing out webpack and slim. Enabled GraphQL API for testing its implementation in Rails.',
    date: 'May 19 2017',
    link: 'https://github.com/nicollis/otter',
    frontEnd: 'Slim',
    tech: [ 'PostgreSQL' ],
    api: [ 'GraphQL' ],
    hosting: [ 'Heroku', 'AWS S3' ]
  }),
  new iOSProject({
    title: 'Pitch Perfect',
    detail: 'App experimenting with controls avaliable for sound modulation via the AVAudioEngine in iOS.',
    date: 'May 1 2017',
    link: 'https://github.com/nicollis/pitch-perfect',
    tech: [ 'AVAudioEngine' ]
  })
]