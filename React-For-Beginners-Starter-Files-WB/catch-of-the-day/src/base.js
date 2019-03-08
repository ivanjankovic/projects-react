import Rebase from 're-base'
import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDrHZpAAcA4FaGSaDlX_uR3A4mOAFFCWLg",
  authDomain: "catchoftheday-react-course-wb.firebaseapp.com",
  databaseURL: "https://catchoftheday-react-course-wb.firebaseio.com",
};

const firebaseApp = firebase.initializeApp(config);
const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

// default export
export default base;