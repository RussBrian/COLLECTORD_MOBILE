import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./src/navegation/stack.navigation";
import { CustomModal } from "./src/components/CustomModal"

const App = ()=>{
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  )
}
export default App;