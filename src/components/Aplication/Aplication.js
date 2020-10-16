import React from 'react';
import './Aplication.scss';
import Items from "./Items";
import BoxBody from "./BoxBody";
import './Box.css';
class Application extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            block1: true,
            block2: false,
            block3: false,
        };
    } 
    toggle = (index) => () => {
        this.setState({ [`block${index}`]: !this.state[`block${index}`] });  
    }

    render() {
        const accordionList = [{ 
            title: 'Why choose us? ',
            text: ' Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.     '
          }, 
          { 
            title: 'What we do?',
            text:  "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.Separated they live in Bookmarksgrove right Separated they live in Bookmarksgrove right"  
          }, 
          { 
            title: 'Offer Services',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.' 
          }
        ];
   
        return (<div className='container'>
                <article className="card">
                    <BoxBody title={'Learn Courses Online'} text={'VIEW MORE'} cs_name={'flaticon-market'}/>
                    <BoxBody title={'Online Library Store'} text={'VIEW MORE'} cs_name={'flaticon-open-book'}/>
                    <BoxBody title={'50% off in all selected Courses'} text={'VIEW MORE'} cs_name={' '}/>
                    <div style={{ height: 50 }} />

                </article>
            <div className= "application">
            <h1>Welcome to Eskwela</h1>
                <h4>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</h4>

            <dl className="accordion">
                {
                    accordionList.map((item, index) => (
                        <Items title={item.title} onClick={this.toggle(index + 1)} expand={this.state[`block${index+1}`]} label={item.text} />
                    ))
                }
            </dl>
            

        </div><div style={{ height: 110 }} />
        </div>
        );
    }
}
export default Application  ;