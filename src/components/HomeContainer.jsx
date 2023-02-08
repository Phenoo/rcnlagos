import Navigation from './Navigation'

const HomeContainer = ({ title, text, subtitle, button, bgImg }) => {
  return (
    <div className='main-home' style={{backgroundImage: `url(${bgImg})`}} >
      <div className="overlay">
        <Navigation />
        <section className='home'>
          <div className="home-text">
            <h6 className='headline'>
              {title}
            </h6>
            <h2 className='tophead'>
              {text}
            </h2>
            <br />
            <h4>
              {subtitle}
            </h4>
            <br />
            <button className='button'>
              {button}
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomeContainer