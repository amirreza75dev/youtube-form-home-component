import './search.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';
import SearchPost from './searchPost';
const Search = () => {
    return ( 
        <div className="search">
            <div className="filter"> <p>فیلتر</p> <span><FilterListOffIcon/></span> </div>
            <hr/>
            <div className="introduction">
                <img src="https://preview.redd.it/dh5otp8kcf741.png?width=640&crop=smart&auto=webp&s=d795f12b5e3eea1ef4d7ceb8244fca98e2384dbf" alt=""/>
                <div className="intro-det">
                    <h1>برنامه نویس وب</h1>
                    <p><span>ا میلیون</span><span>. 628 ویدیو</span></p>
                    <p>دریافت اخرین اموزش های وب در این صفحه </p>
                </div>
                <div className="subscribe">
                    <button>ثبت نام</button> <NotificationsNoneIcon />
                </div>
               


            </div>
            <hr/>

            <div className="search-post">
                <SearchPost 
                    image = "https://media.istockphoto.com/photos/forest-wooden-table-background-summer-sunny-meadow-with-green-grass-picture-id1353553203?b=1&k=20&m=1353553203&s=170667a&w=0&h=QTyTGI9tWQluIlkmwW0s7Q4z7R_IT8egpzzHjW3cSas="
                    title = "اموزش ساخت تیک تاک"
                    avatar = "https://preview.redd.it/dh5otp8kcf741.png?width=640&crop=smart&auto=webp&s=d795f12b5e3eea1ef4d7ceb8244fca98e2384dbf"
                    name = "برنامه نویس ارشد"
                    des = "  در این مجموعه اموزش یاد خواهید گرفت تا یک اپ را بسازید"
                    time = "5 روز پیش"
                    view = "5 میلیون"
                
                />
                                <SearchPost 
                    image = "https://i.pinimg.com/550x/4a/6f/59/4a6f59296f90c11d77744720ca10d1af.jpg"
                    title = "اموزش ساخت تیک تاک"
                    avatar = "https://preview.redd.it/dh5otp8kcf741.png?width=640&crop=smart&auto=webp&s=d795f12b5e3eea1ef4d7ceb8244fca98e2384dbf"
                    name = "برنامه نویس ارشد"
                    des = "  در این مجموعه اموزش یاد خواهید گرفت تا یک اپ را بسازید"
                    time = "5 روز پیش"
                    view = "5 میلیون"
                
                />
                                <SearchPost 
                    image = "	https://img.freepik.com/free-vector/abstract-banner-background-with-red-shapes_1361-3348.jpg?w=2000"
                    title = "اموزش ساخت تیک تاک"
                    avatar = "https://preview.redd.it/dh5otp8kcf741.png?width=640&crop=smart&auto=webp&s=d795f12b5e3eea1ef4d7ceb8244fca98e2384dbf"
                    name = "برنامه نویس ارشد"
                    des = "  در این مجموعه اموزش یاد خواهید گرفت تا یک اپ را بسازید"
                    time = "5 روز پیش"
                    view = "5 میلیون"
                
                />
                                <SearchPost 
                    image = "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkkTbD-D396kebyrG7lrKbsCv_qpCHFvkzZg&usqp=CAU"
                    title = "اموزش ساخت تیک تاک"
                    avatar = "https://preview.redd.it/dh5otp8kcf741.png?width=640&crop=smart&auto=webp&s=d795f12b5e3eea1ef4d7ceb8244fca98e2384dbf"
                    name = "برنامه نویس ارشد"
                    des = "  در این مجموعه اموزش یاد خواهید گرفت تا یک اپ را بسازید"
                    time = "5 روز پیش"
                    view = "5 میلیون"
                
                />





            </div>
        </div>
     );
}
 
export default Search;