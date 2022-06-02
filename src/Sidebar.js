import './sidebar.css'
import SidebarRow from './SidebarRow'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined';
const Siedbar = ({toggle}) => {
    console.log(toggle);

    return ( 
        <div className={toggle ? "sidebar show-silde" : "sidebar"}>
            <SidebarRow selected title = "خانه" Icon = {HomeOutlinedIcon} />
            <SidebarRow title = "پربادیدترین ها" Icon = {WhatshotOutlinedIcon} />
            <SidebarRow title = "عضویت ها" Icon = {SubscriptionsOutlinedIcon} />
            <hr/>
            <SidebarRow title = "کتابخانه" Icon = {LibraryBooksOutlinedIcon} />
            <SidebarRow title = "تاریخچه" Icon = {HistoryToggleOffOutlinedIcon} />
            <SidebarRow title = " ویدیو ها" Icon = {OndemandVideoOutlinedIcon} />
            <SidebarRow title = "  مشاهده در ساعت دیگر  " Icon = {AvTimerOutlinedIcon} />
            <hr/>
                
        </div>
     );
}
 
export default Siedbar;