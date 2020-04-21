import { MLProject, WebProject } from '../../models/projects'

export default [
    new MLProject({
       title: 'Validating Proof of Concepts before Data Collection',
       detail: 'How we can validate an idea before collecting real world data',
       date: 'April 14, 2020',
       link: 'https://www.bignerdranch.com/blog/validating-proof-of-concepts-before-data-collection/',
        tech: ['Turi Create', 'Computer Vision'],
       eventType: 'blog'
    }),
    new MLProject({
       title: 'The Scope of Machine Learning',
       detail: 'Lets try to pin a definition of the what projects fall under machine learning',
       date: 'February 25, 2020',
       link: 'https://www.bignerdranch.com/blog/the-scope-of-machine-learning/',
       eventType: 'blog'
    }),
    new MLProject({
       title: 'Working with SQL in Python',
       detail: 'Lets review talking with a database in our ML code',
       date: 'February 11, 2020',
       link: 'https://www.bignerdranch.com/blog/working-with-sql-in-python/',
        tech: ['SQL'],
       eventType: 'blog'
    }),
]
