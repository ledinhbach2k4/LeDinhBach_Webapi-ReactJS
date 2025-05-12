import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Website</h3>
          <p>Đổi mới tương lai, từng bước một.</p>
        </div>
        <div className="footer-section">
          <h4>Liên Kết Nhanh</h4>
          <ul>
            <li><a href="/about" className="footer-link">Về Chúng Tôi</a></li>
            <li><a href="/services" className="footer-link">Dịch Vụ</a></li>
            <li><a href="/contact" className="footer-link">Liên Hệ</a></li>
            <li><a href="/privacy" className="footer-link">Chính Sách Bảo Mật</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Liên Hệ Với Chúng Tôi</h4>
          <p>Email: <a href="mailto:info@yourcompany.com" className="footer-link">info@yourcompany.com</a></p>
          <p>Điện thoại: <a href="tel:+1234567890" className="footer-link">+1 (234) 567-890</a></p>
        </div>
        <div className="footer-section">
          <h4>Theo Dõi Chúng Tôi</h4>
          <div className="social-links">
            <a href="https://facebook.com" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Công Ty Của Bạn. Bản quyền thuộc về chúng tôi.</p>
      </div>
    </footer>
  );
}

export default Footer;