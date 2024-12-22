<<<<<<< HEAD
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/router/rootNavigator";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ApplicationProvider>
=======
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/navigation/Routes";
import { UserProvider } from "./src/context/UserContext";
import { TaskProvider } from "./src/context/TaskContext";

const App = () => {
  return (
    <UserProvider>
      <TaskProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </TaskProvider>
    </UserProvider>
>>>>>>> 8741683 (first commit)
  );
};

export default App;
