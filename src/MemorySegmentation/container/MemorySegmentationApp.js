import React, {Component} from 'react';

import {Row, Col} from 'elemental'

import MemorySegmentation from '../components/MemorySegmentation'
import DescriptorTable from '../components/DescriptorTable'
import ProcessTable from '../components/ProcessTable'



class MemorySegmentationApp extends Component {
  render() {
    return (
      <main>
        <Row>
          <Col sm="1/3">
            <DescriptorTable/>
          </Col>
          <Col sm="1/3">
            <ProcessTable/>
          </Col>
          <Col sm="1/3">
            <MemorySegmentation/>
          </Col>
        </Row>
      </main>
    )
  }
}

export default MemorySegmentationApp;
