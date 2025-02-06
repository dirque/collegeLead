import Questions from "./GotAnyQs";
const Contact =()=>{
    return(
        <section>
            <div>
                <h2>
                    Get In Touch
                </h2>
            </div>
            <div>
                <form>
                    <div>
                        <label >
                        Name
                        </label>
                        <input type="text" placeholder="Enter your name" />
                    </div>
                    <div>
                        <label >
                        Email
                        </label>
                        <input type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                        <label >
                        Question
                        </label>
                        <textarea placeholder="Enter question or feedback" />
                    </div>
                    <div>
                        {/*
                            map area
                        */}
                    </div>
                    <div>
                        <button>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <Questions/>
        </section>
    );
}
export default Contact;