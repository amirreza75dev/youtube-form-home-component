const SearchPost = ({image,title, avatar,des,name,time,view}) => {
    return ( 
        <div className="post">
            <img src={image} alt=""/>
            <div className="post-des">
                <h1>{title}</h1>
                <p> <span>{time}</span> <span> .{view}</span></p>
                <div className="post-avatar">
                    <img src={avatar} alt=""/>
                    <p>{name}</p>
                </div>
                <p>{des}</p>



            </div>



        </div>
     );
}
 
export default SearchPost;