import "./styles.css";
import { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// export default function App() {

// handleDateChange = (e) => {
//     e.preventDefault();
//   }

//   return (
//     <DatePicker
//     isClearable
//     showMonthDropdown
//     showYearDropdown
//     scrollableMonthYearDropdown
//     dropdownMode='select'
//     dateFormat='dd/MM/yyyy'
//     maxDate={new Date()}
//     className="edit"
//     selected={date}
//     placeholderText="Select Date 'DD/MM/YYYY'"
//     // readOnly={true}
//     onChange={date => setDate(date)} />
//   );
//  }

export default function App() {
  const [date, getDate] = useState(new Date());
  const [luckyno, setnumber] = useState();
  const [messageid, setmessage] = useState(0);
  var message = [
    "",
    "Yay!! your BirthDate is Lucky",
    "Sorry!! Your Birth Date is Not Lucky, Please enter another Number or Date"
  ];
  var list1;
  function datehandler(event) {
    getDate(event.target.value.split("-"));
  }
  function LuckyNumber(event) {
    setnumber(parseInt(event.target.value), 10);
  }

  function CalculateLuckyDate(event) {
    event.preventDefault();
    let sum =
      parseInt(date[0], 10) + parseInt(date[1], 10) + parseInt(date[2], 10);
    if (luckyno > 0) {
      if (sum % luckyno == 0) setmessage(1);
      else setmessage(2);
    } else setmessage(0);
  }
  return (
    <div className="App">
      <h1 className="heading">Is Your Birthday Lucky??</h1>

      <form onSubmit={CalculateLuckyDate}>
        <h2>
          Select Your Birth Date:
          <input type="date" onChange={datehandler} required />
        </h2>
        <h2>
          Enter Lucky Number:
          <input
            type="number"
            placeholder="Enter Your Lucky Number"
            min="1"
            required
            onChange={LuckyNumber}
          />
        </h2>
        <h1></h1>
        <input type="submit" value="Check" />
      </form>
      <h1>{message[messageid]}</h1>
      {messageid === 2 ? <img src="/image/sad.svg" alt=":(" /> : null}
      {messageid === 1 ? <img src="/image/party.svg" alt=":)" /> : null}

      <div class="footer">
        @Connect:
        <a class="link" href="https://www.linkedin.com/in/bhavya-pant09/">
          Linkedin
        </a>
        <a class="link" href="https://github.com/BhavyaPant-bly">
          Github
        </a>
        <a class="link" href="https://www.instagram.com/dodo.8121/">
          Instagram
        </a>
        <br />
        <br />
        <small>
          Privacy Policy:
          <br /> We do not store your data. Chillax!!
        </small>
      </div>
    </div>
  );
}
