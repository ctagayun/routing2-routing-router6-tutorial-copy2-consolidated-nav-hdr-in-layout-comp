import * as React from "react";
import { Routes, Route, Outlet, NavLink, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>

      {/* Using Route component as  container for navigation.
         Note: "path" attribute of Route component is directly match
        "to" attribute of Link component*/}
      <Routes>
        {/*Create Index Route as default for the / route*/}
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
const NoMatch = () => {
  return <p>There's nothing here: 404!</p>;
};

//Consolidate this under Layout Component
// const Navigation = () => {
//   return (
//     <nav
//       style={{
//         borderBottom: 'solid 1px',
//         paddingBottom: '1rem',
//       }}
//     >
//       {/* Note that "to" attribute of Link component directly points
//           to the "path" attribute of Route component */}
//       <Link to="/home">Home</Link>
//       <Link to="/users">Users</Link>
//       <Link to="/about">About</Link>
//     </nav>
//   );
// };

const Home = () => {
  return (
    <>
      <main style={{ padding: "1rem 0" }}>
        <h2>Welcome to the homepage!</h2>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
};

const About = () => {
  return (
    <>
      <main>
        <h2>About Page</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
    </>
  );
};

const Users = () => {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Users Page</h2>
    </main>
  );
};

/*
  First let's create styling component called "Layout"
  In essence, the Outlet component in the Layout component inserts the 
  matching child route (here: Home or Users component) of the parent route 
  (here: Layout component).
*/
// const Layout = () => {
//   return (
//     <main style={{ padding: '1rem 0' }}>
//       <Outlet />
//     </main>
//   );
// };

//Move all App components implementation detail (headline, navigation)
//to layout component

const Layout = () => {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <>
      <h1>React Router</h1>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <NavLink to="/home" style={style}>
          Home
        </NavLink>
        <NavLink to="/users" style={style}>
          Users
        </NavLink>
        <NavLink to="/about" style={style}>
          About
        </NavLink>
      </nav>

      <main style={{ padding: "1rem 0" }}>
        <Outlet />
      </main>
    </>
  );
};

export default App;
