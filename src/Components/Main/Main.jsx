import './main.css'
import author from '../../img/author.svg'
import newsImg1 from '../../img/1.svg'
import newsImg2 from '../../img/2.svg'
import newsImg3 from '../../img/3.svg'
import actions from '../../img/actions.svg'

const Main = () => {
    return (<section className="main">
        <div className="container">
            <div className="news-list">
                <div className="news-block">
                    <div className="news">
                        <div className="authors">
                            <div className="auth-logo">
                                <img src={author} alt="" />
                            </div>
                            <p> Authors name
                                <a href="#!"> in </a>
                                Topics Name ·
                                <a href="#!"> 7 july</a>
                            </p>
                        </div>
                        <div className="text">
                            <h1 class="title">
                                <a href="index2.html">
                                    7 Practical CSS Tips
                                </a>
                            </h1>
                            <p>
                                You not only learn more Python by implementing what you already know but, 
                                in the end, you can see how all your hard work pays off.
                            </p>
                        </div>

                        <div class="button-actions">
                        <div class="button-line">
                            <button class="btn">
                                <a href="#!">Java Script</a>
                            </button>
                            <p>
                                <a href="#!">12 min read </a>
                                ·
                                <a href="#!"> Selected for you</a>
                            </p>
                        </div>
                        <div class="actions">
                            <img src={actions} alt="" />
                        </div>
                        
                    </div>
                    </div>

                    <div className="img">
                        <img src={newsImg1} alt="" />
                    </div>

                </div>

                <div class="divider">
                    <span class="divider"> </span>
                </div>
            </div>

            <div className="news-list">
                <div className="news-block">
                    <div className="news">
                        <div className="authors">
                            <div className="auth-logo">
                                <img src={author} alt="" />
                            </div>
                            <p> Authors name
                                <a href="#!"> in </a>
                                Topics Name ·
                                <a href="#!"> 7 july</a>
                            </p>
                        </div>
                        <div className="text">
                            <h1 class="title">
                                <a href="#!">
                                    7 Practical CSS Tips
                                </a>
                            </h1>
                            <p>
                                Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 
                                new projects that I classified as beginner, intermediate, and advanced. <br />You’ll find links to the full 
                                scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python 
                                skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...
                            </p>
                        </div>

                        <div class="button-actions">
                        <div class="button-line">
                            <button class="btn">
                                <a href="#!">Java Script</a>
                            </button>
                            <p>
                                <a href="#!">12 min read </a>
                                ·
                                <a href="#!"> Selected for you</a>
                            </p>
                        </div>
                        <div class="actions">
                            <img src={actions} alt="" />
                        </div>
                        
                    </div>
                    </div>

                    <div className="img">
                        <img src={newsImg2} alt="" />
                    </div>

                </div>
                
                <div class="divider">
                    <span class="divider"> </span>
                </div>
            </div>

            <div className="news-list">
                <div className="news-block">
                    <div className="news">
                        <div className="authors">
                            <div className="auth-logo">
                                <img src={author} alt="" />
                            </div>
                            <p> Authors name
                                <a href="#!"> in </a>
                                Topics Name ·
                                <a href="#!"> 7 july</a>
                            </p>
                        </div>
                        <div className="text">
                            <h1 class="title">
                                <a href="index2.html">
                                    7 Practical CSS Tips
                                </a>
                            </h1>
                            <p>
                            Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 
                            new projects that I classified as beginner, intermediate, and advanced. <br />You’ll find links to the full 
                            scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python 
                            skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...
                            </p>
                        </div>

                        <div class="button-actions">
                        <div class="button-line">
                            <button class="btn">
                                <a href="#!">Java Script</a>
                            </button>
                            <p>
                                <a href="#!">12 min read </a>
                                ·
                                <a href="#!"> Selected for you</a>
                            </p>
                        </div>
                        <div class="actions">
                            <img src={actions} alt="" />
                        </div>
                        
                    </div>
                    </div>

                    <div className="img">
                        <img src={newsImg3} alt="" />
                    </div>

                </div>
                
                <div class="divider">
                    <span class="divider"> </span>
                </div>
            </div>
        </div>
    </section>);
}
 
export default Main;