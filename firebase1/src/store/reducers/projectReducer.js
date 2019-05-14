const initState = {
  projects: [
    {
      id: 1,
      title: "abcde",
      content: "lkdshfjk sdfhsoifdh fasjfd sndf iusndfiundsf dfuin"
    },
    { id: 2, title: "12345", content: "l123 123 213 2432 54 543 54 423 4 2" },
    {
      id: 3,
      title: "abc123",
      content: "adfwed23 d3 3f f34f w 3 f4 f43 f43 f wf 4 "
    }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("created project error ", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
