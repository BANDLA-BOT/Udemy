import './Learning.css'
import hands from '../../assets/hands.png'
import certificate from '../../assets/certificate.png'
import org from '../../assets/org.png'
import gr from '../../assets/gr.png'
import learn from '../../assets/learn.png'
const Learning = () => {
  return (
    <div>

      <div className="learning-secction">
        <div className="left">
          {/* <h1>Learnig focused on your goals</h1> */}
          <div className="learning-cards">
            <img src={hands} alt="" />
            <div className='hands-on'>
              <h2>Hands-on training</h2>
              <p>Upskill effectively with AI-powered coding exercises, praticaal tests, skills assessments, labs, and workspaces.</p>
            </div>
          </div>
           <div className="learning-cards">
            <img src={certificate} alt="" />
            <div className='hands-on'>
              <h2>Hands-on training</h2>
              <p>Upskill effectively with AI-powered coding exercises, praticaal tests, skills assessments, labs, and workspaces.</p>
            </div>
          </div>   <div className="learning-cards">
            <img src={org} alt="" />
            <div className='hands-on'>
              <h2>Hands-on training</h2>
              <p>Upskill effectively with AI-powered coding exercises, praticaal tests, skills assessments, labs, and workspaces.</p>
            </div>
          </div>   <div className="learning-cards">
            <img src={gr} alt="" />
            <div className='hands-on'>
              <h2>Hands-on training</h2>
              <p>Upskill effectively with AI-powered coding exercises, praticaal tests, skills assessments, labs, and workspaces.</p>
            </div>
          </div>
        
        </div>
        <div className="right">
            <img src={learn} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Learning