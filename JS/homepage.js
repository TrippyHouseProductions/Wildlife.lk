//this loads the json to the html and saves them to the localStorage
const body = {};
const depbody = {};
const introbody = {};
const leopardbody = {};
const kumanabody = {};

fetch("JSON/homepage.json")
  .then((Response) => Response.json())
  .then((data) => {
    body.indexSubtitle = data.indexSubtitle;
    body.indexTitle = data.indexTitle;
    body.eventsTitle = data.eventsTitle;
    body.wilpattuTitle = data.wilpattuTitle;
    body.wilpattuText = data.wilpattuText;
    body.kumanaTitle = data.kumanaTitle;
    body.kumanaText = data.kumanaText;
    body.wondersTitle = data.wondersTitle;
    body.wondersText = data.wondersText;
    body.conserveTitle = data.conserveTitle;
    body.conserveText = data.conserveText;
    localStorage.setItem("homepage", JSON.stringify(data));
  });

fetch("JSON/introduction.json")
  .then((Response) => Response.json())
  .then((data) => {
    introbody.subtitle = data.subtitle;
    introbody.title = data.title;
    introbody.section1Title = data.section1Title;
    introbody.section1Text = data.section1Text;
    introbody.section2Title = data.section2Title;
    introbody.section2Text = data.section2Text;
    introbody.section3Title = data.section3Title;
    introbody.section3Text = data.section3Text;
    introbody.section4Title = data.section4Title;
    introbody.section4Text = data.section4Text;
    localStorage.setItem("introduction", JSON.stringify(data));
  });

fetch("JSON/department.json")
  .then((Response) => Response.json())
  .then((data) => {
    depbody.subtitle = data.subtitle;
    depbody.title = data.title;
    depbody.section1Title = data.section1Title;
    depbody.section1Text = data.section1Text;
    depbody.section2Title = data.section2Title;
    depbody.protectedAreas = data.protectedAreas;
    depbody.section3Title = data.section3Title;
    localStorage.setItem("department", JSON.stringify(data));
  });

fetch("JSON/leopard.json")
  .then((Response) => Response.json())
  .then((data) => {
    leopardbody.subtitle = data.subtitle;
    leopardbody.title = data.title;
    leopardbody.section1Title = data.section1Title;
    leopardbody.section1Text = data.section1Text;
    leopardbody.section2Title = data.section2Title;
    leopardbody.section3Title = data.section3Title;
    leopardbody.section3Text = data.section3Text;
    leopardbody.section4Title = data.section4Title;
    leopardbody.section4Text = data.section4Text;
    leopardbody.section5Title = data.section5Title;
    leopardbody.section5Text = data.section3Text;
    leopardbody.section6Title = data.section6Title;
    leopardbody.section6Text = data.section6Text;
    leopardbody.section7Title = data.section7Title;
    leopardbody.section7Text = data.section7Text;
    leopardbody.section8Title = data.section8Title;
    leopardbody.section8Text = data.section8Text;
    leopardbody.section9Title = data.section9Title;
    leopardbody.section9Text = data.section9Text;
    leopardbody.section10Title = data.section10Title;
    leopardbody.section10Text = data.section10Text;
    leopardbody.section11Title = data.section11Title;
    leopardbody.section11Text = data.section10Text;
    leopardbody.section12Title = data.section12Title;
    leopardbody.section12Text = data.section12Text;
    leopardbody.section13Title = data.section13Title;
    leopardbody.section13Text = data.section13Text;
    localStorage.setItem("leopard", JSON.stringify(data));
  });

fetch("JSON/kumana.json")
  .then((Response) => Response.json())
  .then((data) => {
    kumanabody.subtitle = data.subtitle;
    kumanabody.title = data.title;
    localStorage.setItem("kumana", JSON.stringify(data));
  });