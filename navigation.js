import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import Discirp from './discription';
import BakedHoney from './screens/BakedHoney';
import RoastChicken from './screens/RoastChicken';
import Chorizo from './screens/Chorizo';
import Home from './App';




const AppNavigator = createStackNavigator(


{
    Home,
    Chorizo,
    RoastChicken,
    BakedHoney
},
    {
        headerMode: 'none',
        navigationOptions: {
          headerVisible: false,
          header: null,
          headerForceInset: { top: 'never', bottom: 'never' },
        },
      },
    
    
    
    );
    
    
export default createAppContainer(AppNavigator);