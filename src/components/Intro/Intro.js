import React from 'react';
import './Intro.css'

class  Intro  extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="serv">
                                <span className="icon">
                                    <i className='fa fa-book' />
                                </span>
                            <div className="desc">
                                <h3>PROFESSIONAL COURSES  </h3>
                                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3  ">
                        <div className="serv">
                                            <span className="icon">
                                                <i className='fas fa-user-graduate'/>
                                            </span>
                            <div className="desc">
                                <h3>EXPERIENCED INSTRUCTOR</h3>
                                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 ">
                        <div className="serv">
                                            <span className="icon">
                                               <i className="fa fa-file"/>

                                            </span>
                            <div className="desc">
                                <h3>PRACTICAL TRAINING</h3>
                                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 ">
                        <div className="serv">
                                            <span className="icon">
                                               <i className='fas fa-certificate'/>
                                            </span>
                            <div className="desc">
                                <h3>VALIDATED CERTIFICATE </h3>
                                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Intro;
