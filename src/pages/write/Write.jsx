import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg" src="https://images.pexels.com/photos/2318554/pexels-photo-2318554.jpeg?cs=srgb&dl=pexels-skinny-alien-2318554.jpg&fm=jpg" alt="" />

        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i class="fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>

            </div>
            <div className="writeFormGroup">
                    <textarea placeholder="Tell your story" name="" id="" cols="30" rows="10"></textarea>


            </div>
            <button className="writeSubmit" type="submit">
          Publish
        </button>
        </form>
    </div>
  )
}

