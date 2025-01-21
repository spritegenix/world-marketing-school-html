const footer = document.querySelector('.footer');
const newsletter = document.querySelector('#newsletter');
window.onload = function () {
  newsletter.innerHTML = `
    <section class="newslatter_section" >
          <div class="container">
            <div class="newslatter_box" style="background-image: url('assets/images/shape/shape_img_6.svg');">
              <div class="row justify-content-center">
                <div class="col col-lg-6">
                  <div class="section_heading text-center">
                    <h2 class="heading_text text-white">
                      Subscribe Now for Exclusive Updates and Offers
                    </h2>
                    <p class="heading_description mb-0 text-white">
                      Stay informed about the latest courses, discounts, and expert tips to enhance your learning journey.
                    </p>
                  </div>
                  <form action="#">
                    <div class="form_item m-0">
                      <input type="email" name="email" placeholder="Your Email">
                      <button type="submit" class="btn btn_dark">
                        <span>
                          <small>Subsctibe</small>
                          <small>Subsctibe</small>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
`;

  footer.innerHTML = `
      <footer class="site_footer">
        <div class="footer_widget_area pb-0">
          <div class="container">
            <div class="row">
              <div class="col col-lg-3 col-md-6 col-sm-6">
                <div class="footer_widget">
                  <div class="site_logo">
                    <a class="site_link" href="index.html">
                      <img src="assets/images/logo.png" alt="Collab - Online Learning Platform">
                    </a>
                  </div>
                  <p>
                    At World Marketing School, we empower individuals with the skills and knowledge needed to excel in the digital age through innovative courses in Digital Marketing, Programming, and Graphic Design.
                  </p>
                  <ul class="d-lg-none social_links unordered_list">
                    <li>
                      <a href="#!"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-youtube"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="fab fa-linkedin-in"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col col-lg-6">
                <div class="row">
                  <div class="col col-md-4 col-sm-4">
                    <div class="footer_widget ">
                      <h3 class="footer_widget_title">Links</h3>
                      <ul class="page_list unordered_list_block ">
                        <li>
                          <a href="about.html">
                            <span class="item_icon"><i class="fas fa-caret-right"></i></span>
                            <span class="item_text">About</span>
                          </a>
                        </li>
                        <li>
                          <a href="course.html">
                            <span class="item_icon"><i class="fas fa-caret-right"></i></span>
                            <span class="item_text">Courses</span>
                          </a>
                        </li>
                        <li>
                          <a href="blog.html">
                            <span class="item_icon"><i class="fas fa-caret-right"></i></span>
                            <span class="item_text">Blogs</span>
                          </a>
                        </li>
                        <li>
                          <a href="contact.html">
                            <span class="item_icon"><i class="fas fa-caret-right"></i></span>
                            <span class="item_text">Contact</span>
                          </a>
                        </li>
                     
                      </ul>
                    </div>
                  </div>
                  <div class="col col-md-4 col-sm-4">
                    <div class="footer_widget">
                      <h3 class="footer_widget_title">Class</h3>
                      <ul class="page_list unordered_list_block">
                        <li>
                          <a href="digitalMarketing.html">
                            <span class="item_icon"><i class="fas fa-caret-right"></i></span>
                            <span class="item_text">Digital Marketing</span>
                          </a>
                        </li>
                        <li>
                          <a href="programming.html">
                            <span class="item_icon"><i class="fas fa-caret-right"></i></span>
                            <span class="item_text">Programming</span>
                          </a>
                        </li>
                        <li>
                          <a href="graphicDesign.html">
                            <span class="item_icon"><i class="fas fa-caret-right"></i></span>
                            <span class="item_text">Graphic Design</span>
                          </a>
                        </li>
                      
                      </ul>
                    </div>
                  </div>
                  <div class="col col-md-4 col-sm-4">
                    <div class="footer_widget">
                      <h3 class="footer_widget_title">Support</h3>
                      <ul class="page_list unordered_list_block">
                        
                        <li>
                          <a href="faq.html">
                            <span class="item_icon"><i class="fas fa-caret-right"></i></span>
                            <span class="item_text">FAQ</span>
                          </a>
                        </li>
                    
                        <li>
                          <a href="#!">
                            <span class="item_icon"><i class="fas fa-caret-right"></i></span>
                            <span class="item_text">Terms & Conditions</span>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <span class="item_icon"><i class="fas fa-caret-right"></i></span>
                            <span class="item_text">Private Policy</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <ul class="d-none social_links unordered_list d-lg-flex justify-content-center pt-lg-5 gap-5">
                  <li>
                    <a href="#!"><i class="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="#!"><i class="fab fa-youtube"></i></a>
                  </li>
                  <li>
                    <a href="#!"><i class="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#!"><i class="fab fa-linkedin-in"></i></a>
                  </li>
                </ul>
              </div>
              <div class="col col-lg-3 col-md-6 col-sm-6">
                <div class="footer_widget">
                  <h3 class="footer_widget_title">Latest Posts</h3>
                  <ul class="blog_small_group unordered_list_block">
                  
                    <li>
                      <a class="blog_small" href="the-best-programming-languages-to-learn%20in-2025.html">
                        <span class="item_image">
                          <img src="assets/images/blog/learn_programming_languages.webp" alt="Programming Blog">
                        </span>
                        <span class="item_content">
                          <span class="item_author"><i class="fas fa-user-alt"></i> by Admin</span>
                          <strong class="item_title">The Best Programming Languages to Learn in 2025</strong>
                          <small class="item_post_date">December 20, 2025</small>
                        </span>
                      </a>
                    </li>
                      <li>
                      <a class="blog_small" href="top-digital-marketing-tips-to-boost-your-business.html">
                        <span class="item_image">
                          <img src="assets/images/blog/digital_marketing_tips.webp" alt="Digital Marketing Blog">
                        </span>
                        <span class="item_content">
                          <span class="item_author"><i class="fas fa-user-alt"></i> by Admin</span>
                          <strong class="item_title">Top Digital Marketing Tips to Boost Your Business</strong>
                          <small class="item_post_date">January 10, 2025</small>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div class="copyright_widget">
          <div class="container">
            <p class="copyright_text text-center mb-0">
              <a href="#!">World Marketing School</a> © 2024. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>`;
};
