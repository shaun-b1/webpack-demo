import _ from 'lodash';

function component() {
    const element = document.createElement('dv');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element
}

document.body.appendChild(component());