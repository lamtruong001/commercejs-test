function Accordion () {
  return (
  <div>
    <details open>
      <summary>
        Product details
      </summary>
      <div className= "rounded box">
      <strong>Dimensions:</strong> L: 20 x W: 20 cm H: 35 cm
      <br/>
        <strong>Materials:</strong> High quality sustainable polymer
        <br/>
        <strong>Colours:</strong> Matte Black, but more colour ways comming soon!
        <br/>
        <strong>Product warranty:</strong> 2 years
      </div>
    </details>

    <details>
      <summary>
        Reviews
      </summary>
      <div className="space-y-4 box">
        <div className= "inline-block relative">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <img className="absolute top-0 left-0 bg-cover object-fit object-cover" src="https://picsum.photos/id/646/200/200" alt="Profile picture"/>  
          </div>
          <div className= "inline-block">
              <em>"I couldn't believe how well is this piece of decoration made. Absolutely one of my favourite design pieces so far!"</em>
              <br/>
              <strong>Naomi Campbell</strong>
            </div>
        </div>
      </div>
    </details>

    <details>
      <summary>
        Return policy
      </summary>
      <div class = "box">
      Return through DHL by dropping off your return in over 1,500 locations nationwide.
      You can print a label by clicking the create return link.
      Your return will be processed in approximately 14 working days.
      </div>
    </details>
  </div>
  
);
  }

export default Accordion;

