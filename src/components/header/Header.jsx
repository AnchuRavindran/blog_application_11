import "./header.css"

export default function Header() {
  return (
    <div className='header'> 
    <div className="headerTitles">
    <span className="headerTitlesm">React & Node</span>
    <span className="headerTitlelg">Blog</span>
    </div>
    <img
    className="headerImg"
     src="https://images.pexels.com/photos/2748716/pexels-photo-2748716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
     alt="headerimg"
      />
      </div>
  );
}
