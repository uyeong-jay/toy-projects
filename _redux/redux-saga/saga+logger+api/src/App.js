import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

export default function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Detail} />
    </>
  );
}
