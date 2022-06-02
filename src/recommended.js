import "./recommended.css"
const Recommended = ({image,name,views,Avatar,time,title}) => {
    return ( 
        <div className="rec-video">
            <img src={image} alt=""/>
            <div className="video-detail-avatar">
                <Avatar className="video-avatar" />
                <div className="video-det">
                    <h3>{title}</h3>
                    <p>{name}</p>
                    <p> {views} . {time}</p>

                </div>
            </div>

        </div>

     );
}
 
export default Recommended;