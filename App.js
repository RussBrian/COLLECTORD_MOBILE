import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./src/navegation/tab.navegation"; 

const App = ()=>{
  return (
    <NavigationContainer>
      <TabNavigation/>
    </NavigationContainer>
  )
}
export default App;