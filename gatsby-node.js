// gatsby-node.js
const path = require("path")

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  const services = [
    {
      title: "Web development",
      subtitle: "React js , html ",
      service: "Website Development",
      description:
        "Our website development services cater to your unique needs, be it a personal blog, business site, e-commerce platform, or complex web app. We provide custom web design for visually appealing, user-friendly sites that align with your brand. Our development team uses the latest tech for robust, fast, secure websites. For e-commerce, we create stores that enhance sales and the shopping experience. We seamlessly integrate user-friendly CMS for easy content management. Every site is built with responsive design for a seamless experience on all devices.",
      techStack:
        "Our web development uses a versatile tech stack. Frontend: HTML, CSS, JavaScript, and popular frameworks like React, Angular, and Vue.js. Backend: Node.js, Python, Ruby on Rails, and PHP. Databases: MySQL, PostgreSQL, and MongoDB. We integrate CMS like WordPress, Drupal, and Joomla for easy content management. E-commerce? We've got WooCommerce, Shopify, and Magento. Tailored for your success.",
      imageSrc: "../images/web.png",
    },
    {
      title: "Mobile App development",
      subtitle: "React js , html ",
      service: "Mobile App Development",
      description:
        "We create custom mobile apps for your business or personal needs. Our apps are designed for performance and user-friendliness, with a focus on brand alignment. We use the latest tech to ensure robust and secure apps. E-commerce and content management integration are available, and all our apps are responsive for a seamless mobile experience.",
      techStack:
        "Frontend: HTML, CSS, JavaScript, React Native. Backend: Node.js, Ruby on Rails. Databases: MySQL, MongoDB. CMS: WordPress, Drupal. E-commerce: WooCommerce, Shopify.",
      imageSrc: "../images/android.png",
    },
    {
      title: "Software Development",
      service: "Software Development",
      description:
        "We offer custom software development services to turn your ideas into functional and user-friendly applications. Our experienced team covers the entire software development lifecycle, from design and development to testing and deployment. Our goal is to create software solutions that are efficient, reliable, and tailored to your specific needs.",
      techStack:
        "Our software development utilizes a versatile tech stack. We use a variety of programming languages, including Java, Python, C++, and more. We follow best practices in software engineering to ensure robust and secure applications. We work closely with you to deliver software that aligns with your business objectives and requirements.",
      imageSrc: "../images/Mern.png",
    },

    {
      title: "UI/UX Service",
      subtitle: "User-Centered Design",
      service: "UI/UX Design",
      description:
        "We specialize in creating user-centered UI/UX designs that enhance the overall user experience of your digital products. Our design team is dedicated to delivering visually appealing and highly functional interfaces that align with your brand and user expectations.",
      techStack:
        "Our UI/UX design process involves wireframing, prototyping, and user testing. We utilize industry-standard design tools like Figma, Adobe XD, and Sketch to craft intuitive and aesthetically pleasing designs. Our goal is to create designs that resonate with your target audience and drive user engagement.",
      imageSrc: "../images/figma.png", // Import the UI/UX icon in a similar way as you did for other icons
    },
    {
      title: "Django Development",
      service: "Django Development",
      description:
        "We specialize in Django web app development. Our team creates custom, secure, and scalable web applications, whether it's a CMS, e-commerce platform, or dynamic web app. We use Django for the backend, Python for coding, and popular frontend technologies for a seamless user experience.",
      techStack:
        "Tech stack includes Django, Python, HTML, CSS, JavaScript, and PostgreSQL for databases. We integrate user-friendly CMS solutions for easy content management.",
      imageSrc: "../images/python.png",
    },
    {
      title: "Product Development",
      service: "Product Development",
      description:
        "Our product development services are tailored to bring your innovative ideas to life. We help you from concept to market-ready product, providing design, prototyping, development, and testing services. Our goal is to create products that are user-centered, scalable, and market-competitive.",
      techStack:
        "Our product development leverages a range of technologies. We use CAD software for design, 3D printing for rapid prototyping, and a mix of programming languages for software development. We ensure robust and secure products and work closely with you to meet your specific product requirements.",
      imageSrc: "../images/code.png",
    },
  ]

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
      background: "custom-gradient2",
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
      title: "PU Connect",
      stack: ["Mobile App Development", "Flutter", "MongoDB"],
      brief:
        "Establishing a platform for college students to network, share knowledge, and find job opportunities within a dedicated, student-centric environment.",
      problem:
        "Bridging the gap between students, potential employers, and a community of learners and professionals to foster career growth and academic collaboration.",
      process:
        "Designed a user-friendly app interface for seamless navigation. Incorporated job boards, a Q&A section, and chat functionality to foster communication and collaboration. Engaged with colleges and employers for job postings and community building.",
      results:
        "Achieved an active user base of students and professionals sharing knowledge, connecting for job opportunities, and creating a supportive community for academic and career advancement.",
      imgUrls: [
        "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696884320/Images/innvocket/iPhone_14_-_26_emxcbw.png",
        "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696884321/Images/innvocket/iPhone_14_-_29_fk6xml.png",
        "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696884321/Images/innvocket/iPhone_14_-_28_rphd2e.png",
        "https://res.cloudinary.com/dxeb4jubk/image/upload/v1696984020/Images/innvocket/iPhone_14_-_30_nou20n.png",
      ],
    },
  ]
  console.log("createPages called")
  projects.forEach((project, index) => {
    createPage({
      path: `/projectdetailpage/${index}`,
      component: path.resolve("./src/pages/projectdetailPage.js"),
      context: {
        project,
        index,
        totalProjects: projects.length,
      },
    })
  })
  console.log("createPages finished") // Debugging log

  // Create pages for services
  services.forEach((service, index) => {
    createPage({
      path: `/servicedetail/${index}`,
      component: path.resolve("./src/pages/serviceDetail.js"),
      context: {
        service, // Pass the service data as context to the ServiceDetail component
        index,
        totalServices: services.length,
      },
    })
  })

  console.log("createPages finished")
}
