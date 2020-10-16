import React from "react";

class BoxBody extends React.Component {
    render() {
        return (
            <div className="card-body">

                <div className="desc">
                <span  className="left_icon"><i className={this.props.cs_name}/>  </span>
                    <h2>{this.props.title}</h2>
                    <p className="body-content"><a href="#" className="view-more">{this.props.text}</a></p>
                </div>
            </div>
        )
    }
}

export default BoxBody;