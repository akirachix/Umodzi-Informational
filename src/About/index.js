import "./index.css";
const Abouts = () => {
  return (
    <div className="about-text">
      <div className="about-us">
        <h3>ABOUT US</h3>
      </div>
      <div className="hr">
        <hr></hr>
      </div>

      <div className="who">
        <div className="us">
          <h2>Who are we?</h2>
        </div>
        <div className="team">
          <p>
            We are team of developers with innovative<br></br>
            solutions to everyday problems.At GanzaPay we<br></br>
            believe there is a better way to do money transaction.<br></br>A
            more valuable way were we consider every users<br></br>
            needs. We have user friendly website that enables<br></br>
            uses to navigate the app without any problems.<br></br>
            We strive to simplify the way mobile apps feel to<br></br>
            our users by using visual ques.
          </p>
        </div>

        <h2 className="ourmission">Mission</h2>
        <div className="mission">
          <p>
            Our Mission is to become the most reliable<br></br>
            parther for promoting access to mobile money<br></br>for all{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Abouts;
