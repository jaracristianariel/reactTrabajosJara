import React from "react";

const Futer = () => {
    return(
        <div className="container-fluid footer">
            <div className="container py-5">
                <hr/>
                <div className="row">
                    <div className="col-md-6 text-white">
                        <h3>Leather Jacket</h3>
                    </div>
                    <div className="col-md-6 text-end">
                        <p>
                            <a href={"http://"} target={"_blank"}><img src={"img/face.png"} alt={"facebook"} width={50}/></a>
                            <a href={"http://"} target={"_blank"}><img src={"img/ig.png"} alt={"instagram"} width={50}/></a>
                            <a href={"http://"} target={"_blank"}><img src={"img/tw.png"} alt={"twitter"} width={50}/></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Futer;