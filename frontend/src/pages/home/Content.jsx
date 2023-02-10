import React from "react";
import { about1, about2, about3, about4, about5} from "../../assets";

const Content = () => {
    return (
      <div>
        <section className="servicescontent">
          <div className="servicescontent-heading">
            <h2>"Know-Your-Neighborhood"</h2>
            <p>
            You may find all kinds of information about the area on our website, 
        including details about nearby companies, crucial phone numbers, and 
        resident resources.
            </p>
          </div>
  
          <div className="boxcontent-container">
            <div className="boxcontent">
            <img src={about1} alt='not found'/>
              <font>Log-In to our secure website</font>
              <p>
                To begin the process, please Log-In to our secure system.
          
              </p>
            </div>
  
            <div className="boxcontent">
            <img src={about2} alt='not found'/>
              <font>Donate</font>
              <p>
                for anyone who want to help and support us, can donates by
                transfering money or food.please Contact Us more details
                information if required.
              </p>
            </div>
  
            <div className="boxcontent">
            <img src={about3} alt='not found'/>
              <font>Menu</font>
              <p>
                Menu are provided for member that has been register, the member available to choose menu base on images that display
              </p>
            </div>
  
            <div className="boxcontent">
            <img src={about4} alt='not found'/>
              <font>Order delivery</font>
              <p>
                the food that has been choice and order, will packing and delivery
                into youre address by our drivers team.
              </p>
            </div>
  
            <div className="boxcontent">
            <img src={about5} alt='not found'/>
              <font>Drivers</font>
              <p>
                just stay well at home, our drivers teams will bring food to youre
                home
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Content;