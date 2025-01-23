
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextprovider from "./context/UserContextprovider";

const App = () => {
  return (
    <>
      <UserContextprovider>
        <h1 className="text-white text-5xl text-center">
          Context API Project
        </h1>
        <Login />
        <Profile />
      </UserContextprovider>
    </>
  );
};

export default App;
