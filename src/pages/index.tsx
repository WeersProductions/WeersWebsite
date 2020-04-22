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
import IconFFMPEG from "../components/Icons/IconFFMPEG"

import {filter} from "../components/FilterList"

interface IndexPageProps { }

const filterAcademic: string = "Academic"
const filterCompanies: string = "Companies"
const filterHobbies: string = "Hobbies"

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
      },
      filterKeyWord: filterHobbies
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
      },
      filterKeyWord: filterHobbies
    },
    {
      title: "Automatic home video editing on music",
      text: "Research on automatic analyzing, ranking and editing of both videos and photos in rhythm of the supplied music.",
      list: ["Generates an aftermovie within 5 minutes.",
      "Tries to use the most stable, colorful and simple content while still cutting in rhythm of the music.",
       "Uses graph theory to estimate a best combination of videos and rhythm."],
      startDate: new Date(2019, 4, 15),
      endDate: new Date(2019, 7, 30),
      showDay: true,
      website: {
        display: "Paper",
        link: "https://essay.utwente.nl/78691/1/weers_BA_EEMCS.pdf"
      },
      usedList: {
        items: [<IconFFMPEG key="FFMPEG"/>, <IconPython key="Python" />, <IconCPlusPlus key="C++"/>],
      },
      filterKeyWord: filterAcademic
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
      filterKeyWord: filterCompanies
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
      filterKeyWord: filterAcademic
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
      },
      filterKeyWord: filterHobbies
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
      },
      filterKeyWord: filterCompanies
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
      },
      filterKeyWord: filterHobbies
    },
    {
      title: "Bachelor's degree Technical Computer Science",
      text: "I graduated my study Technical Computer Science with an average of 8.3 out of 10. I really enjoyed this study and the projects that were included.",
      startDate: new Date(2019, 11, 8),
      showDay: true,
      company: {
        display: "University of Twente",
        link: "https://www.utwente.nl/en/"
      },
      filterKeyWord: filterAcademic
    },
    {
      title: "Data science master",
      text: "I will start with data science, a track of the Computer Science master.",
      startDate: new Date(2020, 7, 8),
      showDay: false,
      company: {
        display: "University of Twente",
        link: "https://www.utwente.nl/en/"
      },
      filterKeyWord: filterAcademic
    },
    {
      title: "Apple: Software Engineer Intern",
      text: "As part of the Siri team in Cambridge, United Kingdom, I got to work on really exciting stuff!",
      startDate: new Date(2020, 2, 3),
      endDate: new Date(2020, 7, 3),
      showDay: true,
      company: {
        display: "Apple Inc.",
        link: "https://www.apple.com"
      },
      filterKeyWord: filterCompanies
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
      },
      filterKeyWord: filterHobbies
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
      },
      filterKeyWord: filterHobbies
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
      },
      filterKeyWord: filterHobbies
    },
    {
      title: "Klokhuis gamemaker award",
      text: "Using game maker studio from a Dutch tv programme, I made a lot of games. One of my final games created using this studio, won the big adventure game reward. After this I was very motivated to continue building games and started with Unity3D and GameMaker Studio.",
      startDate: new Date(2010, 5, 1),
      filterKeyWord: filterHobbies
    },
    {
      title: "My very first birthday!",
      text: "",
      startDate: new Date(1998, 8, 23),
      showDay: true,
      filterKeyWord: ""
    }
  ],
}



interface indexPageState {
  filters: filter[]
}

export default class IndexPage extends React.Component<IndexPageProps, indexPageState> {

  constructor(props: IndexPageProps) {
    super(props);
    this.state = {filters: [{name:filterAcademic, checked: true}, {name:filterCompanies, checked: true}, {name:filterHobbies, checked: true}]};
    this.onFilterChange = this.onFilterChange.bind(this);
  }

  public onFilterChange(change: filter) {
    let newFilters = this.state.filters.map((filter) => {
      if (filter.name === change.name) {
        return change;
      } else {
        return filter;
      }
    });
    this.setState({filters: newFilters});
  }

  public render() {
    var timelineItems = tlProps.items.filter((item) => {
      let filter = this.state.filters.find((value) => {
        return value.name === item.filterKeyWord;
      });
      return filter?.checked;
    });

    timelineItems = timelineItems.sort((a,b)=>b.startDate.getTime()-a.startDate.getTime());

    return (
      <Container>
        <Header filters={this.state.filters} onFilterChange={this.onFilterChange}/>
        <Timeline items={timelineItems} />
      </Container>
    )
  }
}
