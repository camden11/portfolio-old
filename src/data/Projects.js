export default {
  trailtag: {
    name: "TrailTag",
    href: "/work/trailtag",
    header: "Development and interface design for the mobile application for a new wearable safety device.",
    dates: "January 2017 - April 2017",
    categories: ["Mobile Development", "UX Design"],
    techUsed: ["Javascript", "React Native", "Redux"],
    links: [
      { name: "Scout Website", href:"https://web.northeastern.edu/scout/" }
    ],
    backgroundColor: "#3D8D82",
    textColor: "#D5DEF4",
    next: "/work/hubspot",
    previous: "/work/openlines"
  },
  hubspot: {
    name: "HubSpot",
    href: "/work/hubspot",
    header: "Front end engineering for Hubspot’s Content Management System." ,
    dates: "July 2017 - Present",
    categories: ["Professional Experience", "Front End Development"],
    techUsed: ["Javascript", "React", "Redux"],
    links: [{ name: "HubSpot Website", href: "https://www.hubspot.com/"}],
    backgroundColor: "#FEAC7B",
    textColor: "#272727",
    next: "/work/idea",
    previous: "/work/trailtag"
  },
  idea: {
    name: "Idea",
    href: "/work/idea",
    header: "Web development for Northeastern's student-run venture accelerator.",
    dates: "July 2017 - Present",
    categories: ["UI/UX Design", "Full Stack Development"],
    techUsed: ["Wordpress", "PHP"],
    links: [{ name: "Idea", href: "https://www.northeastern.edu/idea/" }],
    backgroundColor: "#E4E4E4",
    textColor: "#E5A040",
    next: "/work/alignable",
    previous: "/work/hubspot"
  },
  alignable: {
    name: "Alignable",
    href: "/work/alignable",
    header: "Full stack development for the Social Network for Small Business.",
    dates: "January 2016 - June 2016",
    categories: ["Professional Experience", "Full Stack Development"],
    techUsed: ["Ruby on Rails", "Javascript", "Sql"],
    links: [{ name: "Alignable", href: "https://www.alignable.com" }],
    backgroundColor: "#6C5E7E",
    textColor: "#9DDDCD",
    next: "/work/trash2treasure",
    previous: "/work/idea"
  },
  trash2treasure: {
    name: "Trash2Treasure",
    href: "/work/trash2treasure",
    header: "Design and development of an online checkout app for Northeastern's Trash2Treasure sale.",
    dates: "July 2016 - September 2016",
    categories: ["Full Stack Development", "UI/UX Design"],
    techUsed: ["Ruby on Rails", "Sql"],
    links: [
      {
        name: "Web app",
        href: "https://pacific-ravine-67111.herokuapp.com/"
      },
      {
        name: "Github repo",
        href: "https://github.com/camden11/trash2treasure"
      },
      {
        name: "NU T2T site",
        href: "https://nutrash2treasure.wordpress.com/about/"
      }
    ],
    backgroundColor: "#9F565F",
    textColor: "#E4E4E4",
    next: "/work/openlines",
    previous: "/work/alignable"
  },
  openlines: {
    name: "Open Lines",
    href: "/work/openlines",
    header: "A research project that examines how pedestrians interact with their environment.",
    dates: "March 2016 - December 2016",
    categories: ["Research", "Development"],
    techUsed: ["Processing", "Java", "OpenCV"],
    links: [
      {
        name: "Project page",
        href: "http://www.informationinaction.com/openlines/"
      }
    ],
    backgroundColor: "#272727",
    textColor: "#ffffff",
    next: "/work/trailtag",
    previous: "/work/trash2treasure"
  },

}

export const allProjects = [
  'trailtag',
  'hubspot',
  'idea',
  'alignable',
  'trash2treasure',
  'openlines'
];
