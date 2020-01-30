var App = function () {

}

App.prototype.run = function () {
    var selectors = document.querySelectorAll('.marker-selector__item');

    var findParentElHavingClass = function (el, cls) {
        if (!(el instanceof HTMLElement)) {
            return null;
        }

        var elCls = el.getAttribute('class');
        if (elCls === cls) {
            return el
        }

        return findParentElHavingClass(el.parentElement, cls);
    }

    var selectorClickHandler = function (event) {
        var el = findParentElHavingClass(event.target, 'marker-selector__item');

        if (el) {
            var marker = el.getAttribute('data-marker');

            if (marker) {
                var markerView = document.querySelector('.marker-viewer__marker');

                if (markerView) {
                    markerView.setAttribute('src', 'resources/marker/' + marker + '.png')
                }
            }
        }
    };

    for (var i = 0; i < selectors.length; i++) {
        selectors[i].addEventListener('click', selectorClickHandler);
    }
}