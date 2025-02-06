import Card from "./Card.jsx";
import React from "react";
function Student()
{
    const StudentData=[
        {
            image:"/sTUDENT.jpg",    
            title:"History and Culture",
            description:"Explore the rich tapestry of history and culture through ancient ruins and museums.",
            buttonTxt:"Read More",
        },
        {
            image:"/Student2.jpg",
            title:"Entertainment",
            description:"Dive into the world of entertainment with live shows and thrilling performances..",
            buttonTxt:"Read More",
        },
        {
            image:"/Student3.png",
            title:"Nature & Nightlife",
            description:"Experience the tranquility of nature and vibrant nightlife in scenic locations.",
            buttonTxt:"Read More",
        },

    ];
    return (
        <section>
          <h2>Student Life</h2>
          <div>
            {StudentData.map((item, index) => (
              <Card 
                key={index} 
                image={item.image} 
                title={item.title} 
                description={item.description} 
                buttonTxt={item.buttonTxt} 
              />
            ))}
          </div>
        </section>
      );
    };
  
    
    export default Student; 
    