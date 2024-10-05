import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./src/navegation/stack.navigation";

const App = ()=>{
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  )
}
export default App;