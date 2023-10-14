import * as React from "react"
import HeaderSection from "../components/HeaderSection"
import Layout from "../components/layout"
import Card from "../components/main/stacks"
import { Link } from "gatsby"
// ... (the rest of your imports)

// Import your image here
import WebIcon from "../images/web.png"
import MernIcon from "../images/Mern.png"
import PythonIcon from "../images/python.png"
import CodeIcon from "../images/code.png"
import AndroidIcon from "../images/android.png"
import FigmaIcon from "../images/figma.png"

function Stack() {
  const Data = [
    {
      title: "Web development",
      subtitle: "React js , html ",
      service: "Website Development",
      whatWeDo:
        "Our website development services cater to your unique needs, be it a personal blog, business site, e-commerce platform, or complex web app. We provide custom web design for visually appealing, user-friendly sites that align with your brand. Our development team uses the latest tech for robust, fast, secure websites. For e-commerce, we create stores that enhance sales and the shopping experience. We seamlessly integrate user-friendly CMS for easy content management. Every site is built with responsive design for a seamless experience on all devices.",
      stack:
        "Our web development uses a versatile tech stack. Frontend: HTML, CSS, JavaScript, and popular frameworks like React, Angular, and Vue.js. Backend: Node.js, Python, Ruby on Rails, and PHP. Databases: MySQL, PostgreSQL, and MongoDB. We integrate CMS like WordPress, Drupal, and Joomla for easy content management. E-commerce? We've got WooCommerce, Shopify, and Magento. Tailored for your success.",
      imageSrc: WebIcon,
    },
    {
      title: "Mobile App development",
      subtitle: "kotlin, java ,flutter ",

      service: "Mobile App Development",
      description:
        "We create custom mobile apps for your business or personal needs. Our apps are designed for performance and user-friendliness, with a focus on brand alignment. We use the latest tech to ensure robust and secure apps. E-commerce and content management integration are available, and all our apps are responsive for a seamless mobile experience.",
      techStack:
        "Frontend: HTML, CSS, JavaScript, React Native. Backend: Node.js, Ruby on Rails. Databases: MySQL, MongoDB. CMS: WordPress, Drupal. E-commerce: WooCommerce, Shopify.",
      imageSrc: AndroidIcon,
    },

    {
      title: "Software Development",
      subtitle: "All type of stack ",
      service: "Software Development",
      description:
        "We offer custom software development services to turn your ideas into functional and user-friendly applications. Our experienced team covers the entire software development lifecycle, from design and development to testing and deployment. Our goal is to create software solutions that are efficient, reliable, and tailored to your specific needs.",
      techStack:
        "Our software development utilizes a versatile tech stack. We use a variety of programming languages, including Java, Python, C++, and more. We follow best practices in software engineering to ensure robust and secure applications. We work closely with you to deliver software that aligns with your business objectives and requirements.",
      imageSrc: MernIcon,
    },

    {
      title: "UI/UX Service",
      subtitle: "User-Centered Design",
      service: "UI/UX Design",
      description:
        "We specialize in creating user-centered UI/UX designs that enhance the overall user experience of your digital products. Our design team is dedicated to delivering visually appealing and highly functional interfaces that align with your brand and user expectations.",
      techStack:
        "Our UI/UX design process involves wireframing, prototyping, and user testing. We utilize industry-standard design tools like Figma, Adobe XD, and Sketch to craft intuitive and aesthetically pleasing designs. Our goal is to create designs that resonate with your target audience and drive user engagement.",
      imageSrc: FigmaIcon, // Import the UI/UX icon in a similar way as you did for other icons
    },

    {
      title: "Django Development",
      subtitle: "python",
      service: "Django Development",
      description:
        "We specialize in Django web app development. Our team creates custom, secure, and scalable web applications, whether it's a CMS, e-commerce platform, or dynamic web app. We use Django for the backend, Python for coding, and popular frontend technologies for a seamless user experience.",
      techStack:
        "Tech stack includes Django, Python, HTML, CSS, JavaScript, and PostgreSQL for databases. We integrate user-friendly CMS solutions for easy content management.",
      imageSrc: PythonIcon,
    },

    {
      title: "Product Development",
      service: "Product Development",
      description:
        "Our product development services are tailored to bring your innovative ideas to life. We help you from concept to market-ready product, providing design, prototyping, development, and testing services. Our goal is to create products that are user-centered, scalable, and market-competitive.",
      techStack:
        "Our product development leverages a range of technologies. We use CAD software for design, 3D printing for rapid prototyping, and a mix of programming languages for software development. We ensure robust and secure products and work closely with you to meet your specific product requirements.",
      imageSrc: CodeIcon,
    },
  ]

  return (
    <Layout>
      <div className="bg-[#101418] font-leagueGothic h-screen">
        <HeaderSection
          title="Services"
          subtext="Recommended tools and resources."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
          {Data.map((data, index) => (
            <Link
              to={`/servicedetail/${index}`}
              state={{ serviceData: data }}
              key={index}
            >
              <Card
                key={index}
                title={data.title}
                subtitle={data.subtitle}
                imageSrc={data.imageSrc}
              />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Stack
