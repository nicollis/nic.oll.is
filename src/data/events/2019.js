import { MLProject } from '../../models/projects'

export default [
  new MLProject({
    title: 'TensorFlow Dev Summit 2019',
    detail: 'TensorFlow kicked off their 3rd annual summit last week with a lot of new developments and releases.',
    date: 'March 11 2019',
    link: 'https://www.bignerdranch.com/blog/tensorflow-developer-summit-2019/',
    tech: ['TensorFlow', 'Keras'],
    eventType: 'blog'
  }),
  new MLProject({
    title: 'macOS Machine Learning in 2019',
    detail: 'As we start 2019, let\'s review what machine learning on macOS looks like now and how it might improve.',
    date: 'Januaray 17 2019',
    link: 'https://www.bignerdranch.com/blog/macos-machine-learning-in-2019/',
    tech: ['PlaidML', 'Keras'],
    eventType: 'blog'
  }),
  new MLProject({
    title: 'Digit Recognizer',
    detail: 'Solutions to Kaggle\'s MNSIT computer vision problem scoring in the top 12%',
    date: 'Januaray 10 2019',
    link: 'https://github.com/nicollis/Digit-Recognizer',
    tech: ['PlaidML', 'Scikit-Learn']
  }),

]
