import "./VisualPage.css";

function VisualPage() {
  return (
    <div className="visualpage">
      <div className="visualpage_left">
        <div className="visualpage_text">
          <div className="visualpage_name">
            <span className="visualpage_border"></span>
            <span>Hello, I'm</span>
          </div>
          <p class="glitch">
            <span aria-hidden="true">Woo Young</span>
            Woo Young
            <span aria-hidden="true">Woo Young</span>
          </p>
          <h1 className="visualpage_effect">Front and Developer</h1>
          <div className="visualpage_button">DOWNLOAD CV</div>
        </div>
      </div>
      <div className="visualpage_right">
        <img src="./images/person1.png" className="visualpage_img"></img>
      </div>
    </div>
  );
}

export default VisualPage;
