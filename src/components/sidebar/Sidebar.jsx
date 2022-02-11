import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
       <p>
           Dan Joe, being a big knowledge seeker and a graphic designer has got a stunning
            About me page that immediately shows if he is ready for the new projects including web & print design, as well as branding.
       </p>
       
        </div>

        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul class="sidebarLIst">
           <li class="sidebarListItem">Life</li>
           <li class="sidebarListItem">Music</li>
           <li class="sidebarListItem">Style</li>
           <li class="sidebarListItem">Sport</li>
           <li class="sidebarListItem">Tech</li>
           <li class="sidebarListItem">Cinema</li>
           
          </ul>
        </div>
        <div class="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div class="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>

    </div>

        
  
  );
}   
