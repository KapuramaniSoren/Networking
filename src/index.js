import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Adder from "./mycode/adder"
// import Trigger from './Nextstack-React js/trigger'
// import Arrays from './mycode/arrays';
// // import ArraysProject from "./mycode/arraysProject"
// import TodoProject  from "./Nextstack-React js/TodoProject"
// import Fetch from "./mycode/API/fetch"
// import Post from "./mycode/API/post"
// import Fetchaxios from "./mycode/API/fetchaxios"
// import Axiosmethod from "./mycode/API/Axiosmethod"
// // import Layout from "./MUI/Layout"
// import Lifecycle from "./mycode/lifecycle"
// import MaterialComp from './mycode/materialcomp';
// import MaterialDialog from './mycode/materialDialog';
import Router from './mycode/routing/route'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
