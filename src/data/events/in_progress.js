import { MLProject } from '../../models/projects'

export default [
  new MLProject({
    inProgress: true,
    title: 'Computer Vision Training',
    detail: '3 month training program from Udacity on Computer Vision',
    date: 'March 26 2019',
    link: 'https://github.com/nicollis/ML-Playgrounds',
    tech: ['PyTrouch']
  }),
  new MLProject({
    inProgress: true,
    title: 'ML Playgrounds',
    detail: 'A group of experements and learning in Machine Learning',
    date: 'December 15 2018',
    link: 'https://github.com/nicollis/ML-Playgrounds',
    tech: ['Scikit-Learn', 'Turi Create', 'TensorFlow']
  }),

]
