import './Companies.css'
import vim from '../../assets/vim.png'
import apple from '../../assets/apple.png'
import sam from '../../assets/sam.png'
import  pg from '../../assets/pg.png'
import cisco from '../../assets/cisco.png'
const Companies = () => {
  return (
    <div className='companies'>
        <h1>Trusted by over 15,000 companies and millions of learners around the world</h1>
        <div className="img-container">
          <img src={vim} alt="vimeo" />
          <img src={sam} alt="samsung" />
          <img src={pg} alt="p&g" />
          <img src={cisco} alt="cisco" />
          <img src={apple} alt="apple" />
        </div>

    </div>
  )
}

export default Companies