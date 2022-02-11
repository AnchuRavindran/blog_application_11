import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar";
export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" action="">
            <label htmlFor="">Profile Picture</label>
          <div className="settingsPP">
              <img 
              src="https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""
               />
               <label htmlFor="fileInput">
               <i className="settingsPPIcon far fa-user-circle"></i>
               </label>
               <input type="file" id="fileInput" style={{display:"none"}} />

          </div>
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Anchu" />
                <label htmlFor="">Email</label>
                <input type="email" placeholder="abc@gmail.com" />
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Anchu" />
                <button className="settingsSubmit">Update</button>

        </form>
         </div>
      <Sidebar/>
     
     
      </div>
  )
}
