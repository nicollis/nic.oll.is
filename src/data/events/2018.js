import { iOSProject, AndroidProject } from '../../models/projects'

export default [
  new iOSProject({ 
    title: 'Custom filters with Core Image Kernel Language',
    detail: 'Published on Big Nerd Ranch\'s Blog',
    date: 'November 6 2018',
    link: 'https://bignerdranch.com/blog/creating-custom-filters-using-core-image-kernel-language/',
    tech: [ 'CIKernel' ],
    eventType: 'blog'
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
    title: 'Interview Coding Questions',
    detail: 'Published on Program Practical\'s Youtube',
    date: 'April 15 2018',
    link: 'https://www.youtube.com/watch?v=fMqi-ZSZhPE',
    eventType: 'video',
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

  new iOSProject({ 
    title: 'Localizing UI\'s with Right-to-Left Languages',
    detail: 'Published on Program Practical\'s Youtube',
    date: 'April 3 2018',
    link: 'https://youtu.be/F7ktdqwk-_o',
    eventType: 'video',
  }),
]
