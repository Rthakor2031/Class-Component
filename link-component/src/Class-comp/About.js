import React from 'react'
import Service from './Service';
class About extends React.Component{
    
    render()
    {
        return <div>
            <Service/>
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

export default About;