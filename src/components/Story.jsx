export default function Story({ news }) {
  function handleDelete(e) {
    // Prevent removal if clicking on the wrapper
    if (e.target === e.currentTarget) {
      return; 
    }

    // Only remove when clicking on the close button (the 'x')
    if (e.target.tagName === 'SPAN') {
      e.currentTarget.remove(); 
    }
  }

  const imageUrl = news.image_url || 'https://placehold.co/600x400?text=News+Story';

  return (
    <div className="feed" onClick={handleDelete}>
      <div className="close">
        <span style={{ cursor: 'pointer' }}>x</span>
      </div>
      <div className="all_content">
        <div className="main_container">
          <div className="image_container">
          <img className="image" src={imageUrl} alt={news.title} />
          </div>
          <div className="info">
            <a className= "title" href={news.link} target="_blank">{news.title}</a>
            <p className="creator" >By: {news.creator}</p>
          </div>  
        </div>
        <div className="description">
          <p>{news.description}</p>
        </div>
      </div>
    </div>
  );
}
