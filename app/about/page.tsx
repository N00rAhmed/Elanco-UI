import Image from "next/image";
import styles from "./page.module.css";
import Logo from "next/image";
import NavBar from "../navbar/page";
import './about.css';
export default function Login() {
  return (
    <main>
        <div>
          <NavBar/>
          </div>
        <div className="info-container">
            <h1>About Us</h1>
            <h4>We are committed to the well-being of our furry, feathered, and scaled companions. At Elanco, we understand the deep bond between humans and animals, which is why we've dedicated ourselves to providing innovative solutions for tracking and improving animal health. With a rich history of expertise and a passion for advancing veterinary science, we strive to empower pet owners, farmers, and veterinarians alike with the tools they need to monitor and enhance the health of their beloved animals. From cutting-edge technology to personalized care, Elanco is your trusted partner in ensuring the longevity and happiness of every animal in your care. Join us in our mission to create a world where every animal can thrive.</h4>
            <br/>
        </div>

        <div className="info-light-left">
          <h4>We've created a comprehensive platform to track and compare the health statistics of three distinct dogs. Our goal is to provide a clear and concise summary of each dog's data, allowing users to easily assess and compare vital health metrics. Whether you're a concerned pet parent or a veterinarian looking for reference points, our intuitive interface presents information in a format that facilitates quick and informed decisions about your dog's well-being. By offering this comparative analysis, we empower users to gauge their own dog's health status against these benchmarks, fostering a proactive approach to pet care.</h4>
        </div>
        
        <div className="image-container">
          <Image className="image" src="/images/dog4.jpg" alt="dog4" width={441.6} height={294.6}/>
        </div>

        <div className="image-container2">
          <Image className="image" src="/images/dog5.jpg" alt="dog5" width={208} height={312}/>
        </div>

        <div className="info-blue-left">
          <h2>Our promise</h2>
          <h4>Our Promise: We will rigorously innovate to benefit our customers and improve the health of animals.</h4>
        </div>



    </main>
  );
}
