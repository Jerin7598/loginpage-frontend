

import {BrowserRouter,Routes,Route} from 'react-router-dom';

import App from './App';
import Manager from './Manager';
import Sample from './Sample';


function Routese() {

    return (
        
        <BrowserRouter>
        
        <Routes>
            
            <Route path='/' element={<App></App>}>

                
                </Route>
                <Route path='/manager' element={<Manager></Manager>}></Route>
                    <Route path='/sample' element={<Sample></Sample>}></Route>
                   
                    
                </Routes>
                </BrowserRouter>
                
        );
}

export default Routese;