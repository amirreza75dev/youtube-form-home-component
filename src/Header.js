import './Header.css'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MicOffOutlinedIcon from '@mui/icons-material/MicOffOutlined';
import {Link} from 'react-router-dom'
import { useState } from 'react';
const Header = ({toggle,setToggle}) => {
    const [value,setValue] = useState("")
    
    return ( 
        <div className="header">
                        <div className="header-right">
                            <Link to="/form"> <img src="/blue.png" alt=""/></Link>
                             <AddAlertOutlinedIcon />
                              <VideoCameraFrontOutlinedIcon />
                

                        </div>


            <div className="header-center">
                <div className="header-mic">
                    <MicOffOutlinedIcon className="mic-logo" />
                </div>
                <div className="header-input">
                    <Link to = {`/search/${value}`}><button className="header-search"><SearchOutlinedIcon /></button></Link>
                    <input value={value} onChange={(e)=> setValue(e.target.value)} type="text" placeholder ="جستجو کنید"/>

                    
                </div>


            </div>


            <div className="header-left">
                       <Link to = "/"><img src="/youtube.svg"  /></Link> 
                       <div className="menu-icon"> <MenuOutlinedIcon   onClick = {()=>setToggle(!toggle)} /> </div>



                          </div>


        </div>
     );
}
 
export default Header;