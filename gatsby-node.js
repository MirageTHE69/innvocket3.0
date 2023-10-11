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
