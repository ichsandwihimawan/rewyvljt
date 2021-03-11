import React from "react";
import { Link } from "gatsby";

import StarIcon from "../../assets/images/star-icon.png";
import ServiceIcon1 from "../../assets/images/services/service-icon1.png";
import ServiceIcon2 from "../../assets/images/services/service-icon2.png";
import ServiceIcon3 from "../../assets/images/services/service-icon3.png";
import ServiceIcon4 from "../../assets/images/services/service-icon4.png";
import ServiceIcon5 from "../../assets/images/services/service-icon5.png";
import ServiceIcon6 from "../../assets/images/services/service-icon6.png";

const Services = () => {
  return (
    <section className="services-area pt-100 pb-70 bg-f1f8fb">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={StarIcon} alt="image" />
            Our Services
          </span>
          <h2>SUSTAINABLE BRILLIANT IDEAS AND SOLUTIONS</h2>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-services-item-box">
              <div className="icon">
                <img src={ServiceIcon1} alt="Service Icon" />
              </div>
              <h3>
                <Link to="/service-details">Direct Training Services</Link>
              </h3>
              <p>
                Get a professional & reliable training MODULE for your business
                data needs. Direct learning from your mentor, Enjoy stress-free
                decision making!
              </p>

              <Link to="/service-details" className="read-more-btn">
                Read More <i className="flaticon-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-services-item-box">
              <div className="icon">
                <img src={ServiceIcon2} alt="Service Icon" />
              </div>
              <h3>
                <Link to="/service-details">DIGITAL MARKETING</Link>
              </h3>
              <p>
                Digital Agent We have created a cloud based tool to help do all
                the development of your business data.
              </p>

              <br />

              <Link to="/service-details" className="read-more-btn">
                Read More <i className="flaticon-right"></i>
              </Link>
              <br />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-services-item-box">
              <div className="icon">
                <img src={ServiceIcon3} alt="Service Icon" />
              </div>
              <h3>
                <Link to="/service-details">
                  Business Data Analysis Services
                </Link>
              </h3>
              <p>
                World leading reliable research & AI-based Business Data Core
                Analysis solutions for you. processing Big Data and business
                data products.
              </p>

              <Link to="/service-details" className="read-more-btn">
                Read More <i className="flaticon-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-services-item-box">
              <div className="icon">
                <img src={ServiceIcon4} alt="Service Icon" />
              </div>
              <h3>
                <Link to="/service-details">
                  IT SECURITY LEVELS ARE SUPERIOR
                </Link>
              </h3>
              <p>
                Platform yang kami kembangkan di rancang dengan tingkat keamanan
                berlapis tinggi. Menggunakan layanan dari Platform AWS
                Amazon.com Cloudflare serta Google.
              </p>

              <Link to="/service-details" className="read-more-btn">
                Read More <i className="flaticon-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-services-item-box">
              <div className="icon">
                <img src={ServiceIcon5} alt="Service Icon" />
              </div>
              <h3>
                <Link to="/service-details">HUMAN RESOURCES</Link>
              </h3>
              <p>
                Our resources are sure to be able to provide the best service
                for you. The totality of human resources in providing services
                to users is a commitment that we continue to maintain.
              </p>

              <Link to="/service-details" className="read-more-btn">
                Read More <i className="flaticon-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-services-item-box">
              <div className="icon">
                <img src={ServiceIcon6} alt="Service Icon" />
              </div>
              <h3>
                <Link to="/service-details">REWARD</Link>
              </h3>
              <p>
                The platform developer is committed to giving gifts to each
                member, appreciation us to commit to building business data with
                us.
              </p>

              <Link to="/service-details" className="read-more-btn">
                Read More <i className="flaticon-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
