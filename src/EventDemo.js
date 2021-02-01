export function EventComp() {
    function clickHandle(params) {
        console.log("event handle yo");
        alert("yo bitch! science");
    }
    return (
      <div className="App">
          <div>
              <h1>Event handling</h1>
              <button onClick={clickHandle}>submit</button>
          </div>
          
          
      </div>
    );
  }