import author from '../../img/author.svg'

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
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}
 
export default Main;