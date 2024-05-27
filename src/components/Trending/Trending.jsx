import './Trending.css'
const Trending = () => {
  return (
    <div className='trending'>

      <header>Trending Now</header>
      <hr className='trending-hr'/>
      
      <section>
        
          <div>
            <h1>ChatGPT is a top Skill</h1>
            <p>See ChatGPT courses</p>
            <span>2,824,234 learners</span>
            <button>Show all trending skills</button>

          </div>

          <div>

            <h2>Development</h2>
            <p>Python</p>
            <span>43,868,186 learners</span>
            <p>Web Development</p>
            <span>13,004,712 learners</span>
            <p>Data Sciences</p>
            <span>7,038,312 learners</span>
          </div>

          <div>

              <h2>Design</h2>
              <p>Blender</p>
              <span>2,597,063 learners</span>
              <p>Graphic Design</p>
              <span>2,597,063 learners</span> 
              <p>User Experience(UX) Design</p>
              <span>2,597,063 learners</span>

          </div>


          <div>

              <h2>Business</h2>
              <p>PMI Project Management Professional (PMP)</p>
              <span>2,597,063 learners</span>
              <p>Micosoft Power BI</p>
              <span>2,597,063 learners</span>
              <p>Project Management</p>
              <span>2,597,063 learners</span>
          

          </div>

      </section>
    </div>
  )
}

export default Trending