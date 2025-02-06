const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Brand Section */}
          <div>
            <h2 className="text-xl font-bold">CollegeConnect</h2>
            <p className="mt-2 text-gray-400">
              Your gateway to top universities. Find the best programs, apply easily, and connect with the right people.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="mt-2 text-gray-400 space-y-2">
              <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="/faqs" className="hover:text-blue-400">FAQs</a></li>
              <li><a href="/services" className="hover:text-blue-400">Our Services</a></li>
            </ul>
          </div>
  
          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <ul className="mt-2 text-gray-400 space-y-2">
              <li>Email: <a href="mailto:info@collegeconnect.com" className="hover:text-blue-400">info@collegeconnect.com</a></li>
              <li>Phone: <a href="tel:+123456789" className="hover:text-blue-400">+1 234 567 89</a></li>
            </ul>
          </div>
  
          {/* Social Media & CTA */}
          <div>
            <h3 className="font-semibold text-lg">Follow Us</h3>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="hover:text-blue-400"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-blue-400"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="hover:text-blue-400"><i className="fab fa-youtube"></i></a>
            </div>
            <p className="mt-4">
              Need guidance? <a href="/get-started" className="text-blue-400 font-semibold">Get Started Today</a>
            </p>
          </div>
  
        </div>
  
        {/* Bottom Section */}
        <div className="text-center mt-6 border-t border-gray-700 pt-4 text-gray-500">
          © {new Date().getFullYear()} CollegeConnect. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  