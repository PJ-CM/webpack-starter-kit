import React, { Component } from "react";

export class Aloha extends Component {
    render() {
        return (
            <div>
                <nav className="Menu">
                    {this.props.menu.map(link => (
                        <a href={link[1]} key={link[0]}>
                            {link[0]}
                        </a>
                    ))}
                </nav>
                <h1>Webpack + {this.props.name}</h1>
                <p>Aloha, Webpack con {this.props.name} !!</p>
                <img src={this.props.logo} />
                {console.log(this.props)}
            </div>
        );
    }
}
