import * as $ from '../../models/tech'

let specializations =  {
  ml: {
    title: 'Machine Learning',
    classifications: [
      {
        name: 'Tools',
        icons: [
            $.Python,
            $.R,
            $.CPP,
            $.Postgres,
            $.AWS,
            $.GoogleCloud,
            $.Docker
        ]
      },
      {
        name: 'Frameworks',
        icons: [
            $.ScikitLearn,
            $.TensorFlow,
            $.Pytorch,
            $.Jupyter,
            $.Dask,
            $.NLTK,
            $.Matplotlib,
            $.HuggingFace,
        ]
      },
      {
        name: 'Specializations',
        icons: [
            $.ComputerVision,
            $.CoreML,
            $.TFMicro,
            $.Regression,
            $.MLOps
        ]
      }
    ]
  },
  mobile: {
    title: 'Mobile',
    classifications: [
      {
        name: 'Platforms',
        icons: [
          $.Apple,
          $.Android,
          $.ReactNative
        ]
      },
      {
        name: 'Languages',
        icons: [
            $.Swift,
            $.Kotlin,
            $.ObjC,
            $.CPP
        ]
      },
      {
        name: 'Specializations',
        icons: [
            $.Metal,
            $.CoreML,
            $.TFLite,
            $.CreateML
        ]
      }
    ]
  },
  web: {
    title: 'Web',
    classifications: [
      {
        name: 'Frameworks',
        icons: [
            $.Rails,
            $.Vue,
            $.React,
        ]
      },
      {
        name: 'Languages',
        icons: [
            $.Python,
            $.Ruby,
            $.Javascript,
            $.Go,
            $.Postgres,
        ]
      },
      {
        name: 'Specializations',
        icons: [
            $.A11y,
            $.DevOps,
            $.AWS,
            $.GoogleCloud
        ]
      }
    ]
  }
}

export default specializations;