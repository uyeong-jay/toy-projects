import { UsersProvider } from "./components/UsersContext";
import Users from "./components/Users";

const App = () => {
  return (
    <UsersProvider>
      <Users />
    </UsersProvider>
  );
};

export default App;
