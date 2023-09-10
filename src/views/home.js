import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Copy of Togthr template</title>
        <meta property="og:title" content="Copy of Togthr template" />
      </Helmet>
      <section id="front_page" className="home-hero">
        <video
          src="https://player.vimeo.com/external/372327090.sd.mp4?s=93ccaf56573ea5211cad864def4fc090517c54d1&amp;profile_id=164&amp;oauth2_token_id=57447761"
          loop
          muted
          poster="/hero-bg.png"
          preload="auto"
          autoPlay
          playsInline
          className="home-video"
        ></video>
        <div className="home-hero-content">
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
              off your awesome impact to all your friends.
            </p>
          </div>
          <Link to="/login" className="home-navlink button">
            <span>
              <span>Get started today</span>
              <br></br>
            </span>
          </Link>
          <img alt="image" src="/logo-200h.png" className="home-image" />
        </div>
      </section>
      <section className="home-note">
        <h2 className="home-caption1">
          The most comprehensive platform for volunteering, offering a wide
          range of opportunities to make a meaningful impact and connect with
          fellow changemakers.
        </h2>
      </section>
      <section className="home-statistics">
        <div className="home-content">
          <div className="home-stat">
            <h3 className="home-header01">7%</h3>
            <span className="home-caption2">
              Of formal volunteering has decreased in the last year.
            </span>
          </div>
          <div className="home-stat1">
            <h3 className="home-header02">50%</h3>
            <span className="home-caption3">
              Of nonprofit CEOs surveyed in mid-2022 said recruiting enough
              volunteers was still &quot;a big problem.&quot;
            </span>
          </div>
          <div className="home-stat2">
            <h3 className="home-header03">78%</h3>
            <span className="home-caption4">
              Of goverment-run organizations report they need more volunteers.
            </span>
          </div>
        </div>
      </section>
      <section className="home-get-started">
        <div className="home-header-container1">
          <div className="home-header04">
            <h2 className="home-heading1">
              This company will offer a diverse array of opportunities, spanning
              from labor-intensive tasks to cutting-edge ventures, all designed
              to provide valuable experiences and foster positive change.
            </h2>
            <p className="home-caption5">
              Through web crawling technology, we diligently scour the digital
              landscape to uncover and curate an extensive list of volunteering
              opportunities available in your local area.
            </p>
          </div>
          <div className="home-button">
            <Link to="/login" className="home-button1 button">
              <span>Get started today</span>
            </Link>
          </div>
        </div>
        <img
          alt="image"
          src="https://thegrowers-exchange.com/cdn/shop/products/strawberry_1200x.jpg?v=1577218604"
          className="home-image1"
        />
      </section>
      <section className="home-growth">
        <div className="home-content01">
          <div className="home-header05">
            <div className="home-header06">
              <h2 className="home-heading2">
                <span>
                  Volunteering optimized for
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text08">outreach.</span>
                <br></br>
              </h2>
            </div>
            <p className="home-caption6">Is it really this easy?</p>
            <p className="home-caption7">
              Yes! Our goal with this website is to promote and encourage
              volunteering.
            </p>
          </div>
          <div className="home-testimonial">
            <div className="home-content02">
              <span className="home-text10">Testimonial</span>
              <p className="home-text11">
                &quot;As the creator, and an avid and only user of this
                not-working app, I have to say, it&apos;s really taking a long
                time to make this dang thing. Hopefully no one reads this&quot;
              </p>
            </div>
            <div className="home-information">
              <div className="home-author">
                <img
                  alt="image"
                  src="https://media.licdn.com/dms/image/D5603AQEnxmgfd-v2Tw/profile-displayphoto-shrink_800_800/0/1694321642401?e=2147483647&amp;v=beta&amp;t=MBbLd5R1fAj-pXCn8PL4YgzXwnKNQkrzVpyC2dKW4GA"
                  className="home-icon"
                />
                <span className="home-name">Grigory Shatalin</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-images">
          <div className="home-square"></div>
          <img
            alt="image"
            src="https://outreach-international.org/wp-content/uploads/2019/01/pic-4-1.jpg"
            className="home-image2"
          />
        </div>
      </section>
      <section className="home-experience">
        <div className="home-images1">
          <div className="home-square1"></div>
          <img alt="image" src="/h-1400w.jpg" className="home-image3" />
        </div>
        <div className="home-content03">
          <div className="home-header07">
            <div className="home-header-container2">
              <div className="home-header08">
                <h2 className="home-heading3">
                  <span>Connecting to </span>
                  <span className="home-text13">instagram</span>
                </h2>
              </div>
              <p className="home-caption8">
                We don&apos;t want all your hard work to be for nothing!
              </p>
            </div>
            <div className="home-checkmarks">
              <div className="home-check">
                <div className="home-mark">
                  <svg viewBox="0 0 1024 1024" className="home-icon01">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text14">
                  Collect certain medals to display after volunteering
                </span>
              </div>
              <div className="home-check1">
                <div className="home-mark1">
                  <svg viewBox="0 0 1024 1024" className="home-icon03">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text15">
                  Bronze, Silver and Gold flair on your profile!
                </span>
              </div>
              <div className="home-check2">
                <div className="home-mark2">
                  <svg viewBox="0 0 1024 1024" className="home-icon05">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text16">
                  Easy to use verification system to log your hours
                </span>
              </div>
              <div className="home-check3">
                <div className="home-mark3">
                  <svg viewBox="0 0 1024 1024" className="home-icon07">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text17">
                  Encourage your friends to collect medals too!
                </span>
              </div>
            </div>
          </div>
          <div className="home-testimonial1">
            <div className="home-content04">
              <span className="home-text18">Testimonial</span>
              <p className="home-text19">
                &quot;My name is willem magee and I forgot to fill out my
                testimonial before going to bed so now my friend is filling it
                out for me. No photos of me exist on the internet so I put the
                next best thing.
              </p>
            </div>
            <div className="home-information1">
              <div className="home-author1">
                <img
                  alt="image"
                  src="https://media.istockphoto.com/id/533837393/photo/clown.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=2uitATXPXAq-nNzSYgT1heMsuep3_nSRZqviBAbmhbE="
                  className="home-icon09"
                />
                <span className="home-name1">Willem Magee</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-create">
        <div className="home-content05">
          <div className="home-header09">
            <h2 className="home-heading4">
              <span>Start helping your </span>
              <span className="home-text21">community</span>
              <span> now!</span>
              <br></br>
            </h2>
          </div>
          <Link to="/login" className="home-navlink01 button">
            <span>
              <span>Get started today</span>
              <br></br>
            </span>
          </Link>
        </div>
      </section>
      <section className="home-faq">
        <div className="home-header10">
          <h2 className="home-heading5">
            <span>Frequently asked </span>
            <span className="home-text28">questions</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
        </div>
        <div className="home-content06">
          <div className="home-column">
            <div className="home-element">
              <h3 className="home-header11">How much does it cost?</h3>
              <p className="home-content07">
                nothing. nada. rien. nichts. niente. nada. niets. ничего.
                什么都没有. 何もない. لا شيء. कुछ नहीं. 아무것도 없다. τίποτα.
                hiçbir şey. ingenting. ingenting. ei mitään. ingenting. semmi.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="home-element1">
              <h3 className="home-header12">
                How do I convert hours into instagram medals?
              </h3>
              <p className="home-content08">
                We are talking to instagram to adopt our medal system.
                Currently, we are left on delivered.
              </p>
            </div>
            <div className="home-element2">
              <h3 className="home-header13">Why should I volunteer?</h3>
              <p className="home-content09">
                Morally? I mean because there is an impact of value, local
                communities are supported (not &quot;saved&quot;), and progress
                towards long-lasting change is established. Also, I want you too
                because I spent a lot of time developing this project :)
              </p>
            </div>
          </div>
          <div className="home-column1">
            <div className="home-element3">
              <h3 className="home-header14">
                Does everyone see that I volunteer?
              </h3>
              <p className="home-content10">
                Through instagram, yes. The medals shoud show up after our
                verification goes through. (if instagram ever dms us back)
              </p>
            </div>
            <div className="home-element4">
              <h3 className="home-header15">
                Why can&apos;t I use other volunteer finding websites?
              </h3>
              <p className="home-content11">
                You can. This one has medals which is kinda cool though. Also
                this one is better !!
              </p>
            </div>
            <div className="home-element5">
              <h3 className="home-header16">
                What do you do when you run out of questions for a prototype
                website you are designing.
              </h3>
              <p className="home-content12">
                Great question. What I do is think about stuff that I would be
                curious about if I was a potential user to this website.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="home-footer">
        <div className="home-content13">
          <div className="home-main">
            <div className="home-branding">
              <img alt="image" src="/logo-200h.png" className="home-image4" />
              <span className="home-text30">
                VolunteerMe is a subsidiary of SusEnterprises
              </span>
            </div>
            <div className="home-links">
              <div className="home-column2">
                <span className="home-header17">Company</span>
                <div className="home-list">
                  <Link to="/" className="home-navlink02">
                    About
                  </Link>
                  <Link to="/" className="home-navlink03">
                    Services
                  </Link>
                  <Link to="/" className="home-navlink04">
                    How
                  </Link>
                  <Link to="/" className="home-navlink05">
                    <span className="home-text31">Why</span>
                    <br></br>
                  </Link>
                </div>
              </div>
              <div className="home-column3">
                <span className="home-header18">Extern</span>
                <div className="home-list1">
                  <Link to="/" className="home-navlink06">
                    News
                  </Link>
                  <Link to="/" className="home-navlink07">
                    Articles
                  </Link>
                  <Link to="/" className="home-navlink08">
                    Blog
                  </Link>
                  <Link to="/" className="home-navlink09">
                    Privacy
                  </Link>
                  <Link to="/" className="home-navlink10">
                    Terms
                  </Link>
                  <Link to="/" className="home-navlink11">
                    Legal
                  </Link>
                  <Link to="/" className="home-navlink12">
                    Press
                  </Link>
                </div>
              </div>
              <div className="home-column4">
                <span className="home-header19">Social</span>
                <div className="home-list2">
                  <Link to="/" className="home-navlink13">
                    LinkedIn
                  </Link>
                  <Link to="/" className="home-navlink14">
                    Twitter
                  </Link>
                  <Link to="/" className="home-navlink15">
                    Instagram
                  </Link>
                  <Link to="/" className="home-navlink16">
                    Facebook
                  </Link>
                  <Link to="/" className="home-navlink17">
                    TikTok
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="home-bottom">
            <span className="home-text33">
              @ 2023 Willem MaGee &amp; Grigory Shatalin - All rights reserved
            </span>
            <a
              href="#front_page"
              data-role="scroll-top"
              className="home-link button"
            >
              <img alt="image" src="/arrow.svg" className="home-image5" />
            </a>
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
