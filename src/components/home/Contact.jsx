export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      
      <div className="contact-info">
        
        <p className="contact-label">CONTACT US</p> <h2>Let's Talk</h2>
        <p className="contact-text">
          
          Have a question, suggestion, or need help? We'd love to hear from
          you.
        </p>
        <div className="contact-details">
          
          <div>
            <span>Email</span> <p>support@shop.com</p>
          </div>
          <div>
            
            <span>Phone</span> <p>+20 100 123 4567</p>
          </div>
          <div>
            
            <span>Location</span> <p>Egypt</p>
          </div>
        </div>
      </div>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        
        <div className="form-group">
          
          <label>Name</label> <input type="text" placeholder="Your name" />
        </div>
        <div className="form-group">
          
          <label>Email</label>
          <input type="email" placeholder="Your email" />
        </div>
        <div className="form-group">
          
          <label>Message</label>
          <textarea
            placeholder="Write your message..."
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="contact-btn">
          
          Send Message
        </button>
      </form>
    </section>
  );
}
