if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: src/modules/font-test/index.js'); // eslint-disable-line no-console
}

import React, {Component} from 'react';

import style from './style';

class ModuleRoot extends Component {
    render() {
        return (
            <div className={`font-test ${style['module-style']}`}>
                <h3>This is a module to test font</h3>
                <div>
                    <h4>Test for Roboto family</h4>
                    <p className="thin">RobotoThin</p>
                    <p className="light">RobotoLight</p>
                    <p className="regular">RobotoRegular</p>
                    <p className="medium">RobotoMedium</p>
                    <p className="bold">RobotoBold</p>
                    <p className="black">RobotoBlack</p>
                </div>
                <div>
                    <h4>Test font awesome</h4>
                    <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
                    <i className="fa fa-area-chart"></i>
                </div>

            </div>
       );
    }
};

export default ModuleRoot;



