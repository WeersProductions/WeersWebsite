import * as React from "react"
import * as styles from "./Index.module.scss"
import Container from "../components/Container"

import { timelineProps, Timeline } from "../components/Timeline"
import Header from "../components/Header"
import IconPython from "../components/Icons/IconPython"
import IconReact from "../components/Icons/IconReact"
import IconJava from "../components/Icons/IconJava"
import IconVBNet from "../components/Icons/IconVBNet"
import IconAndroid from "../components/Icons/IconAndroid"
import IconiOS from "../components/Icons/IconIphone"
import IconHoloLens from "../components/Icons/IconHoloLens"
import IconMagicLeap from "../components/Icons/IconMagicLeap"
import IconCPlusPlus from "../components/Icons/IconCPlusPlus"
import IconCSharp from "../components/Icons/IconCSharp"
import IconUnity from "../components/Icons/IconUnity"
import IconBlender from "../components/Icons/IconBlender"
import IconTypescript from "../components/Icons/IconTypescript"
import IconPugJS from "../components/Icons/IconPugJS"

interface IndexPageProps { }

const tlProps: timelineProps = {
  items: [
    {
      title: "This website",
      text: "Made to get to know more about web development.",
      startDate: new Date(2019, 9, 10),
      endDate: new Date(2019, 9, 19),
      showDay: true,
      usedList: {
        items: [
          <IconReact key="React" />,
          <IconTypescript key="Typescript" />
        ],
      },
      website: {
        link: "https://github.com/WeersProductions/WeersWebsite",
        display: "GitHub Repository"
      }
    },
    {
      title: "SNiC website",
      text: "National Computer Science Symposium website. People can login, favorite talks, enroll for talks and get all the information required for the congress itself.",
      startDate: new Date(2019, 7,31),
      notEndedYet: true,
      website: {
        link: "https://www.resilit.snic.nl/",
        display: "resilit.snic.nl"
      },
      company: {
        display: "SNiC",
        link: "https://www.snic.nl/"
      },
      usedList: {
        items: [
          <IconPugJS key="PugJS"/>
        ]
      }
    },
    {
      title: "Junior developer",
      text:
        "I wrote software that automatically generates test reports based on the selected machine component. Engineers will enter their test results and the measurements will be checked on correctness.",
      startDate: new Date(2016, 6, 0),
      endDate: new Date(2016, 8, 0),
      showDay: false,
      location: "Oldenzaal, Netherlands",
      company: {
        display: "Parker Hannifin",
        link: "https://www.parker.com"
      },
      usedList: {
        items: [<IconVBNet key="VB.net" />],
      },
    },
    {
      title: "Teaching Assistant",
      text: "Helping students with Java and associated math problems.",
      startDate: new Date(2017, 9, 0),
      endDate: new Date(2018, 2, 0),
      usedList: {
        items: [<IconJava key="Java" />],
      },
      location: "Enschede",
      company: {
        display: "University of Twente",
        link: "https://www.utwente.nl/en/"
      },
    },
    {
      title: "Menu Manager for Unity",
      text: "A library that takes control of menus, pages and popups in Unity.",
      startDate: new Date(2017, 9, 19),
      endDate: new Date(2019, 2, 17),
      usedList: {
        items: [
        <IconUnity key="Unity" />,
        <IconCSharp key="C#" />
      ],
      },
      website: {
        display: "Github Repository",
        link: "https://github.com/WeersProductions/MenuManager"
      }
    },
    {
      title: "Software Development Intern",
      text:
        "Joined Jaunt's Research & Development team as a software engineering intern. ",
      startDate: new Date(2018, 3, 0),
      endDate: new Date(2018, 8, 0),
      location: "Silicon Valley, California",
      company: {
        display: "JauntXR",
        link: "https://www.jauntxr.com/"
      },
      list: [
        "Developed software for new VR and AR technology",
        "Worked as a member of Jaunt's R&D team focusing on volumetric capture technology",
        "Worked alongside CTO & Founder Athur van Hoff",
        "Solely developed a Unity SDK and presented it to the company",
        "Demoed Jaunt's newest products for potential customers and investors",
        "Worked for one of the leading AR andVR companies in Silicon Valley"
      ],
      usedList: {
        items: [
          <IconCPlusPlus key="CPlusPlus" />,
          <IconCSharp key="C#" />,
          <IconUnity key="Unity" />,
          <IconAndroid key="Android" />,
          <IconiOS key="iOS" />,
          <IconHoloLens key="HoloLens" />,
          <IconMagicLeap key="MagicLeap" />,
        ],
      },
      website: {
        link: "https://blog.jauntxr.com/the-jaunt-internship-program-b898cc8c0573",
        display: "My JauntXR blog post"
      }
    },
    {
      title: "CEO",
      text:
        "Founded my own game-development company to release 'Rule Your School', a game for Steam.",
      startDate: new Date(2016, 7, 1),
      notEndedYet: true,
      website: {
        display: "weersproductions.com",
        link: "https://www.weersproductions.com"
      },
      usedList: {
        items: [
          <IconCSharp key="C#" />,
          <IconUnity key="Unity" />,
          <IconBlender key="Blender" />,
        ]
      }
    },
    {
      title: "Bachelor's degree Technical Computer Science",
      text: "I will finish my bachelor degree at this moment. My average grade is an 8.3 out of 10 at this moment.",
      startDate: new Date(2019, 11, 8),
      showDay: true,
      company: {
        display: "University of Twente",
        link: "https://www.utwente.nl/en/"
      }
    },
    {
      title: "Line Runner",
      text: "Built a small game for Windows Phone and Android",
      website: {
        display: "Trailer",
        link: "https://www.youtube.com/watch?v=whx4XGFnwpY"
      },
      startDate: new Date(2015, 4, 1),
      endDate: new Date(2015, 5, 1),
      usedList: {
        items: [
          <IconUnity key="Unity" />,
          <IconCSharp key="C#" />
        ]
      }
    },
    {
      title: "Pellet Adventure",
      text: "A 2d platformer with physics, character customization and dozens of levels to play. Built for Windows Phone, Android tablets and Android phones.",
      website: {
        display: "Trailer",
        link: "https://www.youtube.com/watch?v=vLVNEmtTtaY"
      },
      startDate: new Date(2015, 1, 1),
      endDate: new Date(2015, 4, 1),
      usedList: {
        items: [
          <IconUnity key="Unity" />,
          <IconCSharp key="C#" />
        ]
      }
    },
    {
      title: "Chain Calculator",
      text: "Built a smart calculator for Windows Phone and Windows Store.",
      website: {
        display: "Windows store",
        link: "https://www.microsoft.com/en-us/p/chain-calculator/9nblgggzj2ww?activetab=pivot:overviewtab"
      },
      startDate: new Date(2014, 9, 15),
      endDate: new Date(2014, 11, 15),
      usedList: {
        items: [
          <IconVBNet key="VB.net" />,
        ]
      }
    },
    {
      title: "Klokhuis gamemaker award",
      text: "Using game maker studio from a Dutch tv programme, I made a lot of games. One of my final games created using this studio, won the big adventure game reward. After this I was very motivated to continue building games and started with Unity3D and GameMaker Studio.",
      startDate: new Date(2010, 5, 1)
    },
    {
      title: "My very first birthday!",
      text: "",
      startDate: new Date(1998, 8, 23),
      showDay: true
    }
  ],
}

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    return (
      <Container>
        <Header />
        <Timeline items={tlProps.items} />
      </Container>
    )
  }
}
