const Deals = () => {
  return (
    <div>
      <div className='Deals' id='Pricing'>
        <div className='deals-header'>
          <h1 className='title'>Get awesome features, without extra charges</h1>
          <p className='card-text deal-text'>
            The rise of mobile devices transforms the way we consume information
            entirely and the world's most elevant channels such as Facebook.
          </p>
          <p className='deal-btn-box'>
            <span className='btn small-btn deal-btn'>Monthly</span>{' '}
            <span className='annually'> Annually </span>
          </p>
        </div>
        <div className='offers'>
          <div className='first-offer offer-card'>
            <div className='offer-header'>
              <h1 className='offer-title'>$0</h1>
              <span>/ month</span>
              <h4>Business Class</h4>
              <p className='offer-text'>For small teams or office</p>
            </div>
            <div className='offer-body'>
              <ul className='offer-list'>
                <li>Drag & Drop Builder</li>
                <li>1,000's of Templates</li>
                <li>Blog Support Tools</li>
                <li>eCommerce Store</li>
              </ul>
              <a href='/#' className='btn small-btn offer-btn'>
                Start free trail
              </a>
            </div>
          </div>
          <div className='second-offer offer-card'>
            <div className='offer-header'>
              <h1 className='offer-title'>$99</h1>
              <span>/ month</span>
              <h4>Pro Master</h4>
              <p className='offer-text'>For Best opportunities</p>
            </div>
            <div className='offer-body'>
              <ul className='offer-list'>
                <li>Drag & Drop Builder</li>
                <li>1,000's of Templates</li>
                <li>Blog Support Tools</li>
                <li>eCommerce Store</li>
              </ul>
              <a href='/#' className='btn small-btn offer-btn'>
                Subscribe Now
              </a>
              <p className='trail'>Or Start 14 days trail</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
