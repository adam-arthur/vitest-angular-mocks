window.jasmine = true

import './angular'
import './angular-mocks'

angular.module('some.angular.module', [])
.factory('someService', () => {
    return {
        hey: 'hey',
    }
})