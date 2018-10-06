import { iOSProject, AndroidProject } from '../../models/projects'

export default [
      new iOSProject({ 
          title: 'CarVisory',
          detail: 'Details will be out once the project is in beta',
          inProgress: true,
          date: 'April 01 2018',
          link: 'http://itisamystery.com'
        }),

      new iOSProject({ 
        title: 'iOS Playgrounds',
        detail: 'An group of playgrounds of small examples of experimenting with iOS development',
        inProgress: true,
        date: 'Jan 20 2018',
        link: 'https://github.com/nicollis/iOS-Playgrounds',
        tech: [ 'CoreML', 'ARKit' ]
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