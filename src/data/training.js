import * as $ from '../models/tech'
import Udacity from '../images/udacity.png'
import BigNerdRanch from '../images/BigNerdRanch.png'

export default [
  {
    logo: BigNerdRanch,
    title: "Advanced iOS",
    link: "/20181106-oe-syllabus-advanced-ios.pdf",
    company: "Big Nerd Ranch",
    description: "Advance course from Big Nerd Ranch, teaching advanced topics in iOS development including debugging, maximizing performance, animations, and understanding iOS, Swift, and Obj-C under the hood, and more.",
    tech: [
      $.Swift,
      $.Apple,
      $.ObjC,
      $.C
    ]
  },
  {
    logo: BigNerdRanch,
    title: "Android Essentials w/ Kotlin",
    link: "/20181106-oe-syllabus-android-essentials-with-kotlin.pdf",
    company: "Big Nerd Ranch",
    description: "Learned the Kotlin language and built Android applications that took advantage of many core framework and features like tablet support, networking, databases, accessibility, and localization.",
    tech: [
      $.Android,
      $.Kotlin
    ]
  },
  {
    logo: Udacity,
    title: "React Nanodegree",
    link: "/reactnd-syllabus-3.0-.pdf",
    company: "Udacity",
    description: "Extensive courses by React Training (React Fundamentals, React and Redux, and React Native), plus expert project reviews.",
    tech: [
      $.React,
      $.ReactRouter,
      $.Redux,
      $.Javascript
    ]
  },
]
