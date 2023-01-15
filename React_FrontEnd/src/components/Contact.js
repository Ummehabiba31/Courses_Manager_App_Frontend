import React, { useEffect } from "react";


const Contact = () => {

    useEffect(() => {
        document.title = "Contact || Course Manager";
       }, []);

    return(
        <div class="container-fluid bg-light text-dark p-5 " >
           
           
            <p><strong>Email: </strong>umme.habiba8931@gmail.comn</p>
            <p><strong>Phone: </strong>1-3474845394 </p>
           
            
           
            
        
            

        </div>
    );
}

export default Contact;