import React from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'

const ProductDescription = () => {
  return (
    <>
        <section className='ProductDetails'>

            <Container>

            {/* ProductTabs */}
            <div className="ProductTabs">

                <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
                >
                <Tab eventKey="Description" title="Description">
                    
                    <div className="TabsItem">

                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>

                    <ul>
                        <li>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</li>
                        <li>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</li>
                        <li>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.</li>
                    </ul>

                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>

                    </div>

                </Tab>

                {/* <Tab eventKey="Additional information" title="Additional information">
                    
                <div className="TabsItem">
                    
                    <div className="TabsItemList d_flex d_justify">
                    <h4>Weight</h4>
                    <h5>1 kg</h5>
                    </div>

                    <div className="TabsItemList d_flex d_justify">
                    <h4>Dimensions</h4>
                    <h5>224 × 65 × 564 cm</h5>
                    </div>

                    <div className="TabsItemList d_flex d_justify">
                    <h4>Brand</h4>
                    <h5>Evoylink</h5>
                    </div>

                </div>

                </Tab> */}

                </Tabs>

            </div>

            </Container>

        </section>

    </>
  )
}

export default ProductDescription