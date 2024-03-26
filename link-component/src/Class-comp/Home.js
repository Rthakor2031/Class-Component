import React from 'react'
import About from './About';
class Home extends React.Component{
    
    render()
    {
        return <div>
            <About/>
             {/* <div style={{color:'white'}}>
                <nav>
                    <ul>
                        <li><a href='#Home'>Home</a></li>
                        <li><a href='#About'>About</a></li>
                        <li><a href='#Services'>Services</a></li>
                        <li><a href='#Contact'>Contact</a></li>
                    </ul>
                </nav>
            </div> */}
        </div>
    }
}

export default Home;