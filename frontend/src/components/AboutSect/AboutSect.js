import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function AboutSect() {
  return (
    <MDBFooter bgColor='orange' className='text-center text-lg-start text-muted'>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                CSIR-CRRI Canteen
              </h6>
              <p>
                Canteen Management System
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Support</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Payment related
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Order related
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                CSIR-CRRI,mathura road,Delhi
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                  canteen@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 91 0000000000
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 91 0000000000
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}
