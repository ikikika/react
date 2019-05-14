import { getFirestore } from "redux-firestore";

export const createProject = project => {
  return (dispatch, getState) => {
    // make async call to db
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "afn",
        authorLastName: "aln",
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERR", err });
      });
  };
};
