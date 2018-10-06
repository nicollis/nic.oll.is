import { iOSProject, AndroidProject } from '../../models/projects'

export default [
  new AndroidProject({
    title: 'Bookie',
    detail: 'Internal tablet application at BNR that controls the conference rooms schedule',
    inProgress: true,
    date: 'Sept 30 2018',
    link: 'https://bignerdranch.com/'
  }),

  new AndroidProject({
    title: 'PhotoGallery',
    detail: 'Working with networking on Android',
    date: 'Sept 22 2018',
    link: 'https://github.com/nicollis/android-programming/tree/master/PhotoGallery'
  }),

  new AndroidProject({
    title: 'CriminalIntent',
    detail: 'Project based on learning about programming for android on all screen sizes, langauges, and more.',
    date: 'Sept 20 2018',
    link: 'https://github.com/nicollis/android-programming/tree/master/CriminalIntent'
  }),

  new AndroidProject({
    title: 'GeoQuiz',
    detail: 'Entry project to learning Android with Kotlin',
    date: 'Sept 17 2018',
    link: 'https://github.com/nicollis/android-programming/tree/master/GeoQuiz'
  }),

  new iOSProject({ 
    title: 'iOS Playgrounds',
    detail: 'An group of playgrounds of small examples of experimenting with iOS development',
    date: 'April 14 2018',
    link: 'https://github.com/nicollis/iOS-Playgrounds',
    tech: [ 'CoreML', 'ARKit' ]
  }),

  new iOSProject({
    title: 'Photorama',
    detail: 'Multithreaded networked application with filters include a custom built kernal language',
    date: 'April 12 2018',
    link: 'https://github.com/nicollis/iOS-Playgrounds/tree/master/Core%20Image/Photorama',
    tech: [ 'CoreImage', 'CIKernal Langauge', 'Face Detection']
  }),

  new iOSProject({
    title: 'Wordalysis',
    detail: 'Application testing multithreaded word counting',
    date: 'April 7 2018',
    link: 'https://github.com/nicollis/iOS-Playgrounds/tree/master/General/Wordalysis',
    tech: ['GCD']
  }),

  new iOSProject({
    title: 'RanchForecast',
    detail: 'Learing how to do Unit testing with iOS',
    date: 'April 6 2018',
    link: 'https://github.com/nicollis/iOS-Playgrounds/tree/master/General/RanchForecast',
    tech: ['XCTest']
  }),
  
  new AndroidProject({
    title: 'Grow with Google',
    detail: 'A scholarship to learn Android Development from Google and Udacity',
    date: 'April 13 2018',
    kotlin: false,
    java: true,
    link: 'https://www.udacity.com/grow-with-google',
  }),
]