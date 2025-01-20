import React from "react";
import InformationBar from "../Components/InformationBar";

const Information = () => {
  return (
    <div className="content-wrapper">
      <div className="fourteen-forty">
        <div className="layout row">
          <InformationBar />

          <div className="col-md-9">
            <main id="content">
              <ul className="breadcrumb">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Information</li>
                <li>About Us</li>
              </ul>

              <section id="box-information" className="card">
                <div className="card-body">
                  <b>High-End Hacking Services since 2015</b>
                  <br />
                  <br />
                  Shirovka Hackers came up as the world’s most reliable hacking
                  platform where you will meet skilled and reliable team of IT
                  cybersecurity experts, hackers, certified pentesters and
                  digital investigators providing best hacking services.
                  <br />
                  <br />
                  <ol>
                    <li>
                      Information Gathering, OSINT Analysis, Cyber
                      Reconnaissance.
                    </li>
                    <li>
                      Web Application Analysis, Vulnerability Analysis, Digital
                      Forensics.
                    </li>
                    <li>
                      Anti-Forensics OS Setup, OS Security Hardening, Web-Server
                      Setup.
                    </li>
                    <li>
                      Penetration Testing, Advanced Web Attacks, Social
                      Engineering.&nbsp;&nbsp;&nbsp;&nbsp;
                    </li>
                    <li>
                      Email Hacking, Social Media Hacking, Web-Server Hacking.
                    </li>
                    <li>
                      Phishing Attacks, DDoS Attacks, Cryptography,
                      Steganography, etc.
                    </li>
                    <li>Hacking Gadget and Tools</li>
                    <li>
                      Cloned Credit card /Virtual Online Card
                      <br />
                    </li>
                    <li>Bank Logs</li>
                    <li>
                      paypal logs and many more
                      <br />
                    </li>
                  </ol>
                  <br />
                  We offer free consultant and determine the best way to help
                  you. We are an effective and reliable team of IT cybersecurity
                  experts, hackers, certified pen-testers and private digital
                  investigators. We are focused on quality over quantity and we
                  aim to deliver high-end hacking projects around the world.
                  <br />
                  <br />{" "}
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
