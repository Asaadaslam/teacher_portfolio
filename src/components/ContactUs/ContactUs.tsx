// "use client";
// import React, { useState } from "react";
// import styles from "./ContactUs.module.css";
// import { caveat, inter } from "@/font";
// import { IoIosMail } from "react-icons/io";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { sendEmail } from "@/utils/emailService";

// function ContactUs() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   const templateParams = {
//     to_name: 'Muhammad Asaad',
//     from_name: name,
//     from_email: email,
//     message: message,
//   };

//   try {
//     await sendEmail(templateParams)
//       alert('Email sent successfully!');
//       setName('');
//       setEmail('');
//       setMessage('');
//   }  
//     catch (error) {
//         console.error('EmailJs Error:', error);
//         alert('Failed to send email. Please try again later.');
//   }
//   }
//   return (
//     <>
//       <section id="contact" className={`${styles.contactUs} ${inter.className}`}>
//         <h1 className={caveat.className}>
//           <span>C</span>ontact <span>M</span>e
//         </h1>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//           eiusmod tempor incididunt ut <br />
//           labore et dolore magna aliqua.
//         </p>

//         <div className={styles.contactUsBottomDiv}>
//           <div className={styles.contactLeftDiv}>
//             <div className={styles.contactLeftDivIcon}>
//               <IoIosMail size={24} color={"var(--logo-color)"} />
//               <div className={styles.contactLeftDivText}>
//                 <h6>Have a Question?</h6>
//                 <h6>I am here to help you</h6>
//                 <h6>Email me at muhammadasaad30gmail.com</h6>
//               </div>
//             </div>

//             <div className={styles.contactLeftDivIcon}>
//               <FaMapMarkerAlt size={24} color={"var(--logo-color)"} />
//               <div className={styles.contactLeftDivText}>
//                 <h6>Current Location</h6>
//                 <h6>Karachi Pakistan</h6>
//                 <h6>Serving Client World</h6>
//               </div>
//             </div>
//           </div>
//           <div className={styles.contactRightDiv}>
//             <form onSubmit={handleSubmit}>
//               <div className={styles.topInputDiv}>
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className={styles.inputDetails}
//                   name="name" value={name} onChange={(e) => setName(e.target.value)}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Your Email  "
//                   className={styles.inputDetails}
//                   name="email" value={email} onChange={(e) => setEmail(e.target.value)}
//                 />
                
//               </div>
//               <input
//                 type="text"
//                 placeholder="Subject"
//                 className={styles.inputDetails}
//               />
//               <textarea
//                 placeholder="Your Message"
//                 className={styles.inputDetails}
//                 style={{ height: "224px" }}
//                 name="message" value={message} onChange={(e) => setMessage(e.target.value)}
//               ></textarea>
//               <input
//                 type="Submit"
//                 className={styles.InputBtn}
//                 value={"Send message"}
//               />
//             </form>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default ContactUs;


// components/ContactUs.tsx   (or wherever your file is)
"use client";
import React, { useState } from "react";
import styles from "./ContactUs.module.css";
import { sendEmail } from "@/utils/emailService";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      to_name: 'Muhammad Asaad',
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    try {
      await sendEmail(templateParams);
      alert('Message sent successfully! I will reply within 24 hours.');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error('EmailJs Error:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Get In Touch</h1>
          <p>Have questions or want to collaborate? I&apos;d love to hear from you</p>
        </div>

        <div className={styles.content}>
          {/* Left - Contact Information */}
          <div className={styles.contactInfo}>
            <div className={styles.infoHeader}>
              <h2>Contact Information</h2>
              <p>Feel free to reach out through any of these channels.<br />I typically respond within 24 hours.</p>
            </div>

            {/* Email Card */}
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper} style={{ backgroundColor: '#3b82f6' }}>
                <IoIosMail size={28} color="white" />
              </div>
              <div>
                <h4>Email</h4>
                <p>megan.jessica@email.com</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper} style={{ backgroundColor: '#ec4899' }}>
                <FaPhoneAlt size={26} color="white" />
              </div>
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            {/* Location Card */}
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper} style={{ backgroundColor: '#10b981' }}>
                <FaMapMarkerAlt size={26} color="white" />
              </div>
              <div>
                <h4>Location</h4>
                <p>Riverside High School, CA</p>
              </div>
            </div>

            {/* Office Hours Card */}
            <div className={styles.officeHoursCard}>
              <h3>Office Hours</h3>
              <div className={styles.hours}>
                <div>
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 4:00 PM</span>
                </div>
                <div>
                  <span>Saturday:</span>
                  <span>By Appointment</span>
                </div>
                <div>
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Send a Message Form */}
          <div className={styles.messageForm}>
            <h2>Send a Message</h2>

            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <textarea
                  placeholder="Your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  required
                />
              </div>

              <button type="submit" className={styles.sendButton}>
                Send Message ✈️
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;