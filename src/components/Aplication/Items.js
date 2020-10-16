import React from "react";

class Items extends React.Component {
    render() {
        const { title, expand, onClick,label } = this.props;

        return (
            <div>
                <dt className={expand ? 'title is-expanded' : 'title'} onClick={onClick}>
                    {title}
                </dt>
                <dd className={expand ? 'content is-expanded' : 'content'} onClick={onClick}>
                    <p>   {label}
                    </p>
                </dd>

            </div>
        );

    }
}
export default Items;