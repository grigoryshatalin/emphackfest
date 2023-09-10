import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import IconContainer from '../components/icon-container'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Togthr template</title>
        <meta property="og:title" content="Togthr template" />
      </Helmet>
      <section className="home-hero">
        <video
          src="https://media.istockphoto.com/id/1319903165/video/people-hoeing-the-soil-hands-planting-green-seedling-community-gardening-urban-gardening.mp4?s=mp4-640x640-is&amp;k=20&amp;c=ZQd7nJ-KpUEjNq28kW6AcenxofLa1C0hCNyzw5PB8c8="
          loop
          muted
          poster="/hero-bg.png"
          preload="auto"
          autoPlay
          playsInline
          className="home-video"
        ></video>
        <div className="home-hero-content">
          <img
            alt="image"
            src="/logos/volunteermelogo2-900h.png"
            className="home-image"
          />
          <div className="home-header-container">
            <div className="home-header">
              <h1 className="home-heading">
                <span>Volunteering has never been this </span>
                <span className="home-text01">easy</span>
                <br></br>
              </h1>
            </div>
            <p className="home-caption">
              Imagine a world where you can easily discover a bunch of cool
              volunteer gigs, all neatly organized in one spot, so you can show
              off your awesome impact to your friends.
            </p>
          </div>
          <button className="home-button button">
            <span>
              <span>Get started today</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <div data-thq="thq-mobile-menu" className="home-mobile-menu">
        <div
          data-thq="thq-mobile-menu-nav"
          data-role="Nav"
          className="home-nav"
        >
          <div className="home-container1">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="home-image1"
            />
            <div data-thq="thq-close-menu" className="home-menu-close">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <nav
            data-thq="thq-mobile-menu-nav-links"
            data-role="Nav"
            className="home-nav1"
          >
            <span className="home-text06">About</span>
            <a href="#growth" className="home-link">
              Features
            </a>
            <span className="home-text07">Team</span>
            <span className="home-text08">Blog</span>
          </nav>
          <div className="home-container2">
            <button className="home-login button">Login</button>
            <button className="button">Register</button>
          </div>
        </div>
        <div className="home-icon-group">
          <svg viewBox="0 0 950.8571428571428 1024" className="home-icon02">
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
          <svg viewBox="0 0 877.7142857142857 1024" className="home-icon04">
            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
          </svg>
          <svg viewBox="0 0 602.2582857142856 1024" className="home-icon06">
            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
          </svg>
        </div>
      </div>
      <section className="home-note">
        <h2 className="home-caption01">
          The most comprehensive platform for volunteering, offering a wide
          range of opportunities to make a meaningful impact and connect with
          fellow changemakers.
        </h2>
      </section>
      <section className="home-statistics">
        <div className="home-content">
          <div className="home-stat">
            <h3 className="home-header01">
              <span>7%</span>
              <br></br>
            </h3>
            <span className="home-caption02">
              Of formal volunteering has decreased in the last year.
            </span>
          </div>
          <div className="home-stat1">
            <h3 className="home-header02">50%</h3>
            <span className="home-caption03">
              Of nonprofit CEOs surveyed in mid-2022 said recruiting enough
              volunteers was still “a big problem.”
            </span>
          </div>
          <div className="home-stat2">
            <h3 className="home-header03">78%</h3>
            <span className="home-caption04">
              Of government-run organizations report they need more volunteers.
            </span>
          </div>
        </div>
      </section>
      <section id="GetStarted" className="home-get-started">
        <div className="home-header-container1">
          <div className="home-header04">
            <h2 className="home-heading1">
              Companies will offer a diverse array of opportunities, spanning
              from labor-intensive tasks to cutting-edge ventures, all designed
              to provide valuable experiences and foster positive change
            </h2>
            <p className="home-caption05">
              Through web crawling technology, we diligently scour the digital
              landscape to uncover and curate an extensive list of volunteering
              opportunities available in your local area
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="home-button1">
            <button className="home-button2 button">
              <span>Get started today</span>
            </button>
          </div>
        </div>
        <img
          alt="image"
          src="/strawberry-volunteers-plants_20211005_161030753-800w.jpg"
          className="home-image2"
        />
      </section>
      <section id="growth" className="home-growth">
        <div className="home-content01">
          <div className="home-header05">
            <div className="home-header06">
              <h2 className="home-heading2">
                <span>
                  Multiverse optimized for
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text13">growth.</span>
                <br></br>
              </h2>
            </div>
            <p className="home-caption06">Features go here</p>
            <p className="home-caption07">
              Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="home-testimonial">
            <div className="home-content02">
              <span className="home-text15">Testimonial</span>
              <p className="home-text16">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </p>
            </div>
            <div className="home-information">
              <div className="home-author">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjcxMDU2MzMz&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-icon08"
                />
                <span className="home-name">Andrew Gonzales</span>
              </div>
              <img alt="image" src="/logoipsum.svg" className="home-from" />
            </div>
          </div>
        </div>
        <div className="home-images">
          <div className="home-square"></div>
          <img alt="image" src="/growth-1400w.png" className="home-image3" />
        </div>
      </section>
      <section className="home-experience">
        <div className="home-images1">
          <div className="home-square1"></div>
          <img
            alt="image"
            src="/experience-1400w.png"
            className="home-image4"
          />
        </div>
        <div className="home-content03">
          <div className="home-header07">
            <div className="home-header-container2">
              <div className="home-header08">
                <h2 className="home-heading3">
                  <span>A worlds class </span>
                  <span className="home-text18">experience</span>
                </h2>
              </div>
              <p className="home-caption08">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod.
              </p>
            </div>
            <div className="home-checkmarks">
              <div className="home-check">
                <div className="home-mark">
                  <svg viewBox="0 0 1024 1024" className="home-icon09">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text19">
                  Duis aute irure dolor in reprehenderit
                </span>
              </div>
              <div className="home-check1">
                <div className="home-mark1">
                  <svg viewBox="0 0 1024 1024" className="home-icon11">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text20">Lorem ipsum dolor sit amet</span>
              </div>
              <div className="home-check2">
                <div className="home-mark2">
                  <svg viewBox="0 0 1024 1024" className="home-icon13">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text21">
                  Voluptate velit esse cillum dolore eu fugiat nulla
                </span>
              </div>
              <div className="home-check3">
                <div className="home-mark3">
                  <svg viewBox="0 0 1024 1024" className="home-icon15">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text22">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                </span>
              </div>
            </div>
          </div>
          <div className="home-testimonial1">
            <div className="home-content04">
              <span className="home-text23">Testimonial</span>
              <p className="home-text24">
                “Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.”
              </p>
            </div>
            <div className="home-information1">
              <div className="home-author1">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY3MTA1NjMzMw&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-icon17"
                />
                <span className="home-name1">Cory Smith</span>
              </div>
              <img alt="image" src="/logoipsum-2.svg" className="home-from1" />
            </div>
          </div>
        </div>
      </section>
      <section className="home-create">
        <div className="home-content05">
          <div className="home-header09">
            <h2 className="home-heading4">
              <span>
                Create your own
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text26">environment</span>
              <span> now!</span>
              <br></br>
            </h2>
          </div>
          <button className="home-button3 button">
            <span>
              <span>Get started today</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="home-data">
        <div className="home-header-container3">
          <div className="home-header10">
            <div className="home-row">
              <h2 className="home-heading5">
                <span>
                  Understand your data to manage all in one
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text33">platform</span>
                <br></br>
              </h2>
            </div>
          </div>
          <p className="home-caption09">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
        </div>
        <div className="home-content06">
          <div className="home-image5">
            <img alt="image" src="/data-1400w.png" className="home-image6" />
          </div>
          <div className="home-accordion">
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="home-header11">Management</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="icon-container-root-class-name"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="home-header12">Integrations</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="icon-container-root-class-name1"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="home-header13">Customer Solutions</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="icon-container-root-class-name2"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="home-header14">Recruiting</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="icon-container-root-class-name3"></IconContainer>
            </div>
            <div>
              <Script
                html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
              ></Script>
            </div>
          </div>
        </div>
      </section>
      <section className="home-customer">
        <div className="home-header15">
          <h2 className="home-heading6">
            <span>
              User validation is an essential phase of the
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text36">product development process</span>
            <br></br>
          </h2>
        </div>
        <div className="home-quotes">
          <div className="home-quote">
            <p className="home-quote1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-author2">
              <span className="home-name2">Joanna Smith</span>
              <span className="home-location">Briville</span>
            </div>
          </div>
          <div className="home-quote2">
            <p className="home-quote3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-author3">
              <span className="home-name3">Joanna Smith</span>
              <span className="home-location1">Briville</span>
            </div>
          </div>
          <div className="home-quote4">
            <p className="home-quote5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-author4">
              <span className="home-name4">Joanna Smith</span>
              <span className="home-location2">Briville</span>
            </div>
          </div>
          <div className="home-quote6">
            <p className="home-quote7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-author5">
              <span className="home-name5">Joanna Smith</span>
              <span className="home-location3">Briville</span>
            </div>
          </div>
        </div>
        <div className="home-controls">
          <button className="home-previous button">
            <svg viewBox="0 0 1024 1024" className="home-icon18">
              <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
            </svg>
          </button>
          <button className="home-next button">
            <svg viewBox="0 0 1024 1024" className="home-icon20">
              <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </button>
          <button className="button home-button4">
            <span>
              <span>View all cases</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="home-faq">
        <div className="home-header16">
          <h2 className="home-heading7">
            <span>Frequently asked </span>
            <span className="home-text42">questions</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
        </div>
        <div className="home-content15">
          <div className="home-column">
            <div className="home-element04">
              <h3 className="home-header17">
                Lorem ipsum dolor sit ametetur elit?
              </h3>
              <p className="home-content16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="home-element05">
              <h3 className="home-header18">
                Excepteur sint occaecat cupidatat non sunt in culpa qui officia
                deserunt mollit anim id est laborum?
              </h3>
              <p className="home-content17">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="home-element06">
              <h3 className="home-header19">
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </h3>
              <p className="home-content18">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="home-column1">
            <div className="home-element07">
              <h3 className="home-header20">
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </h3>
              <p className="home-content19">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="home-element08">
              <h3 className="home-header21">
                Lorem ipsum dolor sit ametetur elit?
              </h3>
              <p className="home-content20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="home-element09">
              <h3 className="home-header22">Incididunt ut labore et dolore?</h3>
              <p className="home-content21">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="home-footer">
        <div className="home-content22">
          <div className="home-main">
            <div className="home-branding">
              <img
                alt="image"
                src="/logos/volunteermelogo2-900h.png"
                className="home-image7"
              />
              <span className="home-text44">
                VolunteerMe is a subsidiary of SusEnterprises.
              </span>
            </div>
            <div className="home-links">
              <div className="home-column2">
                <span className="home-header23">Company</span>
                <div className="home-list">
                  <Link to="/" className="home-navlink">
                    About
                  </Link>
                  <Link to="/" className="home-navlink01">
                    Services
                  </Link>
                  <Link to="/" className="home-navlink02">
                    How
                  </Link>
                  <Link to="/" className="home-navlink03">
                    <span className="home-text45">Why</span>
                    <br></br>
                  </Link>
                </div>
              </div>
              <div className="home-column3">
                <span className="home-header24">Extern</span>
                <div className="home-list1">
                  <Link to="/" className="home-navlink04">
                    News
                  </Link>
                  <Link to="/" className="home-navlink05">
                    Articles
                  </Link>
                  <Link to="/" className="home-navlink06">
                    Blog
                  </Link>
                  <Link to="/" className="home-navlink07">
                    Privacy
                  </Link>
                  <Link to="/" className="home-navlink08">
                    Terms
                  </Link>
                  <Link to="/" className="home-navlink09">
                    Legal
                  </Link>
                  <Link to="/" className="home-navlink10">
                    Press
                  </Link>
                </div>
              </div>
              <div className="home-column4">
                <span className="home-header25">Social</span>
                <div className="home-list2">
                  <Link to="/" className="home-navlink11">
                    LinkedIn
                  </Link>
                  <Link to="/" className="home-navlink12">
                    Twitter
                  </Link>
                  <Link to="/" className="home-navlink13">
                    Instagram
                  </Link>
                  <Link to="/" className="home-navlink14">
                    Facebook
                  </Link>
                  <Link to="/" className="home-navlink15">
                    TikTok
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="home-bottom">
            <span className="home-text47">
              © 2023 Willem MaGee &amp; Grigory Shatalin- All rights reserved
            </span>
            <button data-role="scroll-top" className="home-button5 button">
              <img alt="image" src="/arrow.svg" className="home-image8" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <Script
          html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
        ></Script>
      </div>
    </div>
  )
}

export default Home
