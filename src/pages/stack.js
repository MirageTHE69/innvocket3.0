import * as React from "react"
import HeaderSection from "../components/HeaderSection"
import Layout from "../components/layout"
import Card from "../components/main/stacks"

// Import your image here
import FigmaImage from "../images/figma.png"
import TeamIcon from "../images/team.png"
import CodeIcon from "../images/code.png"
import FigmaIcon from "../images/figma.png"
import AndroidIcon from "../images/android.png"
import WebIcon from "../images/web.png"
import MernICon from "../images/Mern.png"

function Stack() {
  const Data = [
    {
      title: "FIGMA",
      subtitle: "Interface Design",
      imageSrc: FigmaImage, // Use the imported image here
    },
    {
      title: "Code",
      subtitle: "Interface Design",
      imageSrc: CodeIcon, // Use the imported image here
    },
    {
      title: "Android",
      subtitle: "Interface Design",
      imageSrc: AndroidIcon, // Use the imported image here
    },
    {
      title: "Web",
      subtitle: "Interface Design",
      imageSrc: WebIcon, // Use the imported image here
    },
    {
      title: "FIGMA",
      subtitle: "Interface Design",
      imageSrc: FigmaImage, // Use the imported image here
    },
    {
      title: "Mern stack",
      subtitle: "Interface Design",
      imageSrc: MernICon, // Use the imported image here
    },
    {
      title: "FIGMA",
      subtitle: "Interface Design",
      imageSrc: FigmaImage, // Use the imported image here
    },
    {
      title: "FIGMA",
      subtitle: "Interface Design",
      imageSrc: FigmaImage, // Use the imported image here
    },
    // Add more experiences as needed
  ]

  return (
    <Layout>
      <div className=" h-screen  bg-[#101418] font-leagueGothic ">
        <HeaderSection
          title="STACK"
          subtext="Recommended tools and resources."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  h-[430vh] lg:h-[130vh]  md:h-[430vh]  bg-[#101418] p-4 ">
          {Data.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              subtitle={data.subtitle}
              imageSrc={data.imageSrc}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Stack
