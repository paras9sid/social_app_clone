<<<<<<< Updated upstream


function App() {
  return (
    <div className="App">
     <h1>Hello world!!</h1>
=======
// import { useEffect, useState } from 'react';
// import { getPosts } from '../api';
// import { Home, Login } from '../pages';
// import { Loader, Navbar } from './';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// const About = () => {
//   return <h1>About</h1>;
// };

// const UserInfo = () => {
//   return <h1>User</h1>;
// };

// const Page404 = () => {
//   return <h1>404</h1>;
// };
// function App() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const response = await getPosts();
//       // console.log('response', response);
//       if (response.success) {
//         setPosts(response.data.posts);
//       }
//       setLoading(false);
//     };

//     fetchPosts();
//   }, []);

//   if (loading) {
//     return <Loader />;
//   }

//   return (
//     <div className="App">
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/">
//             <Home posts={posts} />
//           </Route>
//           <Route exact path="/login">
//             <Login />
//           </Route>
//           <Route exact path="/about">
//             <About />
//           </Route>
//           <Route path="/user/adasadad">
//             <UserInfo />
//           </Route>
//           <Route>
//             <Page404 />
//           </Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks';
import { Home, Login, Signup, Settings, UserProfile } from '../pages';
import { Loader, Navbar } from './';

function PrivateRoute({ children, ...rest }) {
  const auth = useAuth();

  return (
    <Route
      {...rest}
      render={() => {
        if (auth.user) {
          return children;
        }

        return <Redirect to="/login" />;
      }}
    />
  );
}

const Page404 = () => {
  return <h1>404</h1>;
};

function App() {
  const auth = useAuth();

  console.log('auth', auth);
  if (auth.loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/register">
            <Signup />
          </Route>

          <PrivateRoute exact path="/settings">
            <Settings />
          </PrivateRoute>

          <PrivateRoute exact path="/user/:userId">
            <UserProfile />
          </PrivateRoute>

          <Route>
            <Page404 />
          </Route>
        </Routes>
      </Router>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
