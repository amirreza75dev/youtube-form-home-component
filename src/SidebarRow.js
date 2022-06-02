const SidebarRow = ({title, Icon,selected}) => {
    return ( 
        <div className= {`sidebar-row ${selected && "selected"}`}>
            <Icon className= "sidebar-icon"/>
            <p>{title}</p>
        </div>
     );
}
 
export default SidebarRow;