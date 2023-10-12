// gatsby-node.js
const path = require("path")

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  // Replace with your actual project data or fetch it from an API.
  const projects = [
    {
      title: "Hackvengers",
      stack: ["Mern stack", "UI/UX"],
      brief:
        "The objective was to orchestrate a college hackathon that would spur innovation and teamwork among students across diverse technological realms. Hackvengers aimed to provide a vibrant platform where students could exhibit their coding prowess, learn from peers, and work on real-world problems.",
      problem:
        "The primary challenge was to cater to a broad spectrum of participants - from seasoned coders to novices. It was imperative to ensure a conducive and competitive ambiance for all, fostering a rich learning and sharing experience.",
      process:
        "A significant part of the process entailed designing a user-friendly website to disseminate information, register teams, and highlight the different tech tracks. Coordinated efforts with college authorities, securing sponsorships, and overseeing the logistical arrangements were crucial steps to ensure the hackathon's smooth execution. Pre-event publicity, organizing workshops, and ensuring robust judging criteria were part of the meticulous planning.",
      results:
        "The hackathon saw enthusiastic participation across all tech tracks, leading to a plethora of innovative projects. The event received positive acclaim from participants, sponsors, and college authorities alike. The success of the hackathon not only showcased the burgeoning talent within the college but also fostered a culture of innovation and collaboration, aligning with the objectives set forth at the outset.",
      imgUrls: [
        "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696884325/Images/innvocket/Hackvengers_Web_Ui_mqto7d.png",
        "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696884326/Images/innvocket/Hackvengers_Web_Ui-2_aqmedz.png",
        "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696884326/Images/innvocket/Hackvengers_Web_Ui-1_buu2eu.png",
        "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696985625/Images/innvocket/Hackvengers_Web_Ui_kiwz2b.png",
      ],
      background: 'custom-gradient2'
    },

    {
      title: "Vidhya Verse",
      stack: ["MERN stack", "UI/UX"],
      brief:
        "The client, Vidyaverse, needed a dynamic website that reflects their holistic approach to education. The goal was to create an engaging online platform that is easy to navigate while encapsulating the institution’s values and programs.",
      problem:
        "One of the major challenges was integrating a user-friendly interface that caters to both tech-savvy and non-tech-savvy visitors while ensuring the website remains responsive and visually appealing across various devices.",
      process:
        "Our process began with a thorough research and brainstorming sessions to understand the client’s needs. We then developed wireframes and prototypes, followed by developing the website using responsive design principles. Regular feedback sessions with the client ensured the website evolved to meet their expectations.",
      results:
        "The resulting website was well-received by the client and their community. It saw an increase in user engagement by 40% and helped streamline the institution's online presence, providing a cohesive platform for both prospective and current students to explore their programs",
      imgUrls: [
        "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696884324/Images/innvocket/Desktop_-_6_vdxwct.png",
        "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696884324/Images/innvocket/Desktop_-_7_hwaivk.png",
        "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696884323/Images/innvocket/Desktop_-_3_cjndda.png",
        "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696884323/Images/innvocket/Desktop_-_3_cjndda.png",
      ],
   
    },
    // Add more projects as needed

    {
      title: "Hackvengers",
      stack: ["Mern stack", "UI/UX"],
      brief:
        "The objective was to orchestrate a college hackathon that would spur innovation and teamwork among students across diverse technological realms. Hackvengers aimed to provide a vibrant platform where students could exhibit their coding prowess, learn from peers, and work on real-world problems.",
      problem:
        "The primary challenge was to cater to a broad spectrum of participants - from seasoned coders to novices. It was imperative to ensure a conducive and competitive ambiance for all, fostering a rich learning and sharing experience.",
      process:
        "A significant part of the process entailed designing a user-friendly website to disseminate information, register teams, and highlight the different tech tracks. Coordinated efforts with college authorities, securing sponsorships, and overseeing the logistical arrangements were crucial steps to ensure the hackathon's smooth execution. Pre-event publicity, organizing workshops, and ensuring robust judging criteria were part of the meticulous planning.",
      results:
        "The hackathon saw enthusiastic participation across all tech tracks, leading to a plethora of innovative projects. The event received positive acclaim from participants, sponsors, and college authorities alike. The success of the hackathon not only showcased the burgeoning talent within the college but also fostered a culture of innovation and collaboration, aligning with the objectives set forth at the outset.",
      imgUrls: [
        "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696884325/Images/innvocket/Hackvengers_Web_Ui_mqto7d.png",
        "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696884326/Images/innvocket/Hackvengers_Web_Ui-2_aqmedz.png",
        "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696884326/Images/innvocket/Hackvengers_Web_Ui-1_buu2eu.png",
        "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696985625/Images/innvocket/Hackvengers_Web_Ui_kiwz2b.png",
      ],
    },

    {
      title: "Hackvengers",
      stack: ["Mern stack", "UI/UX"],
      brief:
        "The objective was to orchestrate a college hackathon that would spur innovation and teamwork among students across diverse technological realms. Hackvengers aimed to provide a vibrant platform where students could exhibit their coding prowess, learn from peers, and work on real-world problems.",
      problem:
        "The primary challenge was to cater to a broad spectrum of participants - from seasoned coders to novices. It was imperative to ensure a conducive and competitive ambiance for all, fostering a rich learning and sharing experience.",
      process:
        "A significant part of the process entailed designing a user-friendly website to disseminate information, register teams, and highlight the different tech tracks. Coordinated efforts with college authorities, securing sponsorships, and overseeing the logistical arrangements were crucial steps to ensure the hackathon's smooth execution. Pre-event publicity, organizing workshops, and ensuring robust judging criteria were part of the meticulous planning.",
      results:
        "The hackathon saw enthusiastic participation across all tech tracks, leading to a plethora of innovative projects. The event received positive acclaim from participants, sponsors, and college authorities alike. The success of the hackathon not only showcased the burgeoning talent within the college but also fostered a culture of innovation and collaboration, aligning with the objectives set forth at the outset.",
      imgUrls: [
        "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696884325/Images/innvocket/Hackvengers_Web_Ui_mqto7d.png",
        "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696884326/Images/innvocket/Hackvengers_Web_Ui-2_aqmedz.png",
        "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696884326/Images/innvocket/Hackvengers_Web_Ui-1_buu2eu.png",
        "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696985625/Images/innvocket/Hackvengers_Web_Ui_kiwz2b.png",
      ],
    },
    {
      "title": "PU Connect",
      "stack": ["Mobile App Development", "Flutter", "MongoDB"],
      "brief": "Establishing a platform for college students to network, share knowledge, and find job opportunities within a dedicated, student-centric environment.",
      "problem": "Bridging the gap between students, potential employers, and a community of learners and professionals to foster career growth and academic collaboration.",
      "process": "Designed a user-friendly app interface for seamless navigation. Incorporated job boards, a Q&A section, and chat functionality to foster communication and collaboration. Engaged with colleges and employers for job postings and community building.",
      "results": "Achieved an active user base of students and professionals sharing knowledge, connecting for job opportunities, and creating a supportive community for academic and career advancement.",
      "imgUrls": [
        "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696884320/Images/innvocket/iPhone_14_-_26_emxcbw.png",
        "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696884321/Images/innvocket/iPhone_14_-_29_fk6xml.png",
        "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696884321/Images/innvocket/iPhone_14_-_28_rphd2e.png",
        "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696984020/Images/innvocket/iPhone_14_-_30_nou20n.png"
      ]
    }
  ]
  projects.forEach((project, index) => {
    createPage({
      path: `/projectdetailpage/${project.title
        .toLowerCase()
        .replace(/\s/g, "-")}`,
      component: path.resolve("./src/pages/projectdetailPage.js"),
      context: {
        project, // Pass the current project to the page
      },
    })
  })
}
