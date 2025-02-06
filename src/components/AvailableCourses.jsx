import Card from "./Card.jsx";
function Courses()
{
    const CourseData=[
        {
            image:"/c1.png",    
            title:"Intro to Programming",
            description:"Learn the fundamentals of computer programming with hands-on projects." ,
            buttonTxt:"Read More",
        },
        {
            image:"c2.png",
            title:"Literature Studies",
            description:"Explore classical and modern literature to enhance your critical thinking.",
            buttonTxt:"Read More",
        },
        {
            image:"/course3.png",
            title:"Basic Chemistry",
            description:"Understand the principles of chemistry with practical lab sessions.",
            buttonTxt:"Read More",
        },

    ];

    return(
        <section>
            
            <h3>Available Courses</h3>
            <div>
               
                
                {CourseData.map((item,index)=>(
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
export default Courses;