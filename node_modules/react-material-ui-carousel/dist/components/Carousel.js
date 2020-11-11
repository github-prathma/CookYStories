'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _core = require('@material-ui/core');

var _styles = require('@material-ui/core/styles');

var _autoBind = require('auto-bind');

var _autoBind2 = _interopRequireDefault(_autoBind);

var _FiberManualRecord = require('@material-ui/icons/FiberManualRecord');

var _FiberManualRecord2 = _interopRequireDefault(_FiberManualRecord);

var _NavigateBefore = require('@material-ui/icons/NavigateBefore');

var _NavigateBefore2 = _interopRequireDefault(_NavigateBefore);

var _NavigateNext = require('@material-ui/icons/NavigateNext');

var _NavigateNext2 = _interopRequireDefault(_NavigateNext);

var _reactSwipeable = require('react-swipeable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    root: {
        position: "relative",
        overflow: "hidden"
    },
    indicators: {
        width: "100%",
        marginTop: "10px",
        textAlign: "center"
    },
    indicator: {
        fontSize: "15px",
        cursor: "pointer",
        transition: "200ms",
        color: "#afafaf",
        '&:hover': {
            color: "#1f1f1f"
        },
        '&:active': {
            color: "#1f1f1f"
        }
    },
    active: {
        color: "#494949"
    },
    buttonWrapper: {
        position: "absolute",
        height: "100px",
        backgroundColor: "transparent",
        top: "calc(50% - 70px)",
        '&:hover': {
            '& $button': {
                backgroundColor: "black",
                filter: "brightness(120%)",
                opacity: 0.4
            }
        }
    },
    fullHeightHoverWrapper: {
        height: "calc(100% - 20px - 10px) !important",
        top: "0 !important"
    },
    button: {
        margin: "0 10px",
        position: "relative",
        backgroundColor: "#494949",
        top: "30px",
        color: "white",
        fontSize: "30px",
        transition: "200ms",
        cursor: "pointer",
        '&:hover': {
            opacity: "0.6 !important"
        }
    },
    fullHeightHoverButton: {
        top: "calc(50% - 20px) !important"
    },
    buttonVisible: {
        opacity: "0.6"
    },
    buttonHidden: {
        opacity: "0"
    },
    next: {
        right: 0
    },
    prev: {
        left: 0
    }
};

var sanitizeProps = function sanitizeProps(props) {
    var animation = props.animation !== undefined ? props.animation : "fade";

    return {
        children: props.children ? props.children : [],
        startAt: props.startAt !== undefined ? props.startAt : 0,
        strictIndexing: props.strictIndexing !== undefined ? props.strictIndexing : true,
        autoPlay: props.autoPlay !== undefined ? props.autoPlay : true,
        interval: props.interval !== undefined ? props.interval : 4000,
        indicators: props.indicators !== undefined ? props.indicators : true,
        navButtonsAlwaysInvisible: props.navButtonsAlwaysInvisible !== undefined ? props.navButtonsAlwaysInvisible : false,
        navButtonsAlwaysVisible: props.navButtonsAlwaysInvisible !== undefined ? props.navButtonsAlwaysVisible : false,
        animation: animation,
        timeout: props.timeout !== undefined ? props.timeout : animation === "fade" ? 500 : 200,
        fullHeightHover: props.fullHeightHover !== undefined ? props.fullHeightHover : true,
        indicatorContainerProps: props.indicatorContainerProps,
        indicatorProps: props.indicatorProps,
        activeIndicatorProps: props.activeIndicatorProps,
        onChange: props.onChange !== undefined ? props.onChange : function () {},
        // Leaving below functions unsanitizedProps for conditional callback purposes
        next: props.onChange,
        prev: props.onChange,
        className: props.className !== undefined ? props.className : ""
    };
};

var Carousel = function (_Component) {
    _inherits(Carousel, _Component);

    function Carousel(props) {
        _classCallCheck(this, Carousel);

        var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

        (0, _autoBind2.default)(_this);

        var _sanitizeProps = sanitizeProps(_this.props),
            children = _sanitizeProps.children,
            strictIndexing = _sanitizeProps.strictIndexing,
            startAt = _sanitizeProps.startAt;

        // if startAt is bigger than the children length, set it to be the last child (if strictIndexing)


        startAt = Array.isArray(children) ? strictIndexing && startAt > children.length - 1 ? children.length - 1 : startAt : 0;

        _this.state = {
            active: startAt,
            prevActive: startAt,
            displayed: startAt
        };

        _this.timer = null;
        return _this;
    }

    _createClass(Carousel, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.start();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.stop();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            prevProps = sanitizeProps(prevProps);

            var _sanitizeProps2 = sanitizeProps(this.props),
                autoPlay = _sanitizeProps2.autoPlay,
                interval = _sanitizeProps2.interval,
                children = _sanitizeProps2.children,
                startAt = _sanitizeProps2.startAt;

            if (autoPlay !== prevProps.autoPlay || interval !== prevProps.interval) {
                this.reset();
            }

            if (children.length !== prevProps.children.length) {
                this.pressIndicator(startAt);
            }
        }
    }, {
        key: 'stop',
        value: function stop() {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
        }
    }, {
        key: 'start',
        value: function start() {
            var _sanitizeProps3 = sanitizeProps(this.props),
                autoPlay = _sanitizeProps3.autoPlay,
                interval = _sanitizeProps3.interval;

            if (autoPlay) {
                this.timer = setInterval(this.next, interval);
            }
        }
    }, {
        key: 'reset',
        value: function reset() {
            var _sanitizeProps4 = sanitizeProps(this.props),
                autoPlay = _sanitizeProps4.autoPlay;

            this.stop();

            if (autoPlay) {
                this.start();
            }
        }
    }, {
        key: 'pressIndicator',
        value: function pressIndicator(index) {
            var _this2 = this;

            var _sanitizeProps5 = sanitizeProps(this.props),
                onChange = _sanitizeProps5.onChange,
                timeout = _sanitizeProps5.timeout;

            this.setState({
                active: index,
                prevActive: this.state.active,
                displayed: this.state.active
            }, this.reset);

            setTimeout(function () {
                _this2.setState({
                    displayed: index
                }, function () {
                    return onChange(index, _this2.state.active);
                });
            }, timeout);
        }
    }, {
        key: 'next',
        value: function next(event) {
            var _this3 = this;

            var _sanitizeProps6 = sanitizeProps(this.props),
                children = _sanitizeProps6.children,
                next = _sanitizeProps6.next,
                onChange = _sanitizeProps6.onChange,
                timeout = _sanitizeProps6.timeout;

            var prevActive = this.state.active;
            var nextActive = this.state.active + 1 > children.length - 1 ? 0 : this.state.active + 1;

            /**
             * Callback to be called after setting the state. Will be:
             * * () => {} | if !props.next && !props.onChange
             * * props.onChange | if !props.next && props.onChange
             * * props.next | if props.next
             */
            var userNext = next !== undefined ? next : onChange;

            this.setState({
                active: nextActive,
                prevActive: prevActive,
                displayed: prevActive
            }, this.reset);

            setTimeout(function () {
                _this3.setState({
                    displayed: nextActive
                }, function () {
                    return userNext(nextActive, prevActive);
                });
            }, timeout);

            if (event) event.stopPropagation();
        }
    }, {
        key: 'prev',
        value: function prev(event) {
            var _this4 = this;

            var _sanitizeProps7 = sanitizeProps(this.props),
                children = _sanitizeProps7.children,
                prev = _sanitizeProps7.prev,
                onChange = _sanitizeProps7.onChange,
                timeout = _sanitizeProps7.timeout;

            var prevActive = this.state.active;
            var nextActive = this.state.active - 1 < 0 ? children.length - 1 : this.state.active - 1;

            /**
             * Callback to be called after setting the state. Will be:
             * * () => {} | if !props.prev && !props.onChange
             * * props.onChange | if !props.prev && props.onChange
             * * props.prev | if props.prev
             */
            var userPrev = prev !== undefined ? prev : onChange;

            this.setState({
                active: nextActive,
                prevActive: prevActive,
                displayed: prevActive
            }, this.reset);

            setTimeout(function () {
                _this4.setState({
                    displayed: nextActive
                }, userPrev(nextActive, prevActive));
            }, timeout);

            if (event) event.stopPropagation();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var _sanitizeProps8 = sanitizeProps(this.props),
                children = _sanitizeProps8.children,
                indicators = _sanitizeProps8.indicators,
                navButtonsAlwaysInvisible = _sanitizeProps8.navButtonsAlwaysInvisible,
                navButtonsAlwaysVisible = _sanitizeProps8.navButtonsAlwaysVisible,
                animation = _sanitizeProps8.animation,
                timeout = _sanitizeProps8.timeout,
                fullHeightHover = _sanitizeProps8.fullHeightHover,
                indicatorContainerProps = _sanitizeProps8.indicatorContainerProps,
                indicatorProps = _sanitizeProps8.indicatorProps,
                activeIndicatorProps = _sanitizeProps8.activeIndicatorProps,
                className = _sanitizeProps8.className;

            var classes = this.props.classes;

            var buttonCssClassValue = classes.button + ' ' + (navButtonsAlwaysVisible ? classes.buttonVisible : classes.buttonHidden) + ' ' + (fullHeightHover ? classes.fullHeightHoverButton : "");
            var buttonWrapperCssClassValue = classes.buttonWrapper + ' ' + (fullHeightHover ? classes.fullHeightHoverWrapper : "");

            var compareActiveDisplayed = function compareActiveDisplayed() {
                if (_this5.state.active === 0 && _this5.state.prevActive === children.length - 1) {
                    return true;
                }

                if (_this5.state.active === children.length - 1 && _this5.state.prevActive === 0) {
                    return false;
                }

                if (_this5.state.active > _this5.state.prevActive) {
                    return true;
                }

                return false;
            };

            return _react2.default.createElement(
                'div',
                { className: classes.root + ' ' + (className ? className : ""), onMouseEnter: this.stop, onMouseOut: this.reset },
                Array.isArray(children) ? children.map(function (child, index) {
                    return _react2.default.createElement(CarouselItem, {
                        key: 'carousel-item' + index,
                        display: index === _this5.state.displayed ? true : false,
                        active: index === _this5.state.active ? true : false,
                        isNext: compareActiveDisplayed(),
                        child: child,
                        animation: animation,
                        timeout: timeout,
                        next: _this5.next,
                        prev: _this5.prev
                    });
                }) : _react2.default.createElement(CarouselItem, {
                    key: 'carousel-item0',
                    display: true,
                    active: true,
                    child: children,
                    animation: animation,
                    timeout: timeout
                    // next={this.next}
                    // prev={this.prev}
                }),
                !navButtonsAlwaysInvisible && _react2.default.createElement(
                    'div',
                    { className: buttonWrapperCssClassValue + ' ' + classes.next },
                    _react2.default.createElement(
                        _core.IconButton,
                        { className: buttonCssClassValue + ' ' + classes.next, onClick: this.next, 'aria-label': 'Next' },
                        _react2.default.createElement(_NavigateNext2.default, null)
                    )
                ),
                !navButtonsAlwaysInvisible && _react2.default.createElement(
                    'div',
                    { className: buttonWrapperCssClassValue + ' ' + classes.prev },
                    _react2.default.createElement(
                        _core.IconButton,
                        { className: buttonCssClassValue + '  ' + classes.prev, onClick: this.prev, 'aria-label': 'Previous' },
                        _react2.default.createElement(_NavigateBefore2.default, null)
                    )
                ),
                indicators ? _react2.default.createElement(Indicators, {
                    classes: classes,
                    length: children.length,
                    active: this.state.active,
                    press: this.pressIndicator,
                    indicatorContainerProps: indicatorContainerProps,
                    indicatorProps: indicatorProps,
                    activeIndicatorProps: activeIndicatorProps
                }) : null
            );
        }
    }]);

    return Carousel;
}(_react.Component);

function CarouselItem(props) {
    var swipeHandlers = (0, _reactSwipeable.useSwipeable)({
        onSwipedLeft: function onSwipedLeft() {
            return props.next();
        },
        onSwipedRight: function onSwipedRight() {
            return props.prev();
        }
    });

    return props.display ? _react2.default.createElement(
        'div',
        _extends({}, swipeHandlers, { className: 'CarouselItem' }),
        props.animation === "slide" ? _react2.default.createElement(
            _core.Slide,
            { direction: props.active ? props.isNext ? "left" : "right" : props.isNext ? "right" : "left", 'in': props.active, timeout: props.timeout },
            _react2.default.createElement(
                'div',
                null,
                props.child
            )
        ) : _react2.default.createElement(
            _core.Fade,
            { 'in': props.active, timeout: props.timeout },
            _react2.default.createElement(
                'div',
                null,
                props.child
            )
        )
    ) : null;
}

function Indicators(props) {
    var classes = props.classes;

    var indicators = [];

    var _loop = function _loop(i) {
        var style = props.indicatorProps !== undefined ? props.indicatorProps.style : undefined;
        var className = props.indicatorProps !== undefined ? props.indicatorProps.className : undefined;
        var activeStyle = props.activeIndicatorProps !== undefined ? props.activeIndicatorProps.style : undefined;
        var activeClassName = props.activeIndicatorProps !== undefined ? props.activeIndicatorProps.className : undefined;

        className = i === props.active ? classes.indicator + ' ' + classes.active + ' ' + activeClassName : classes.indicator + ' ' + className;

        var item = _react2.default.createElement(_FiberManualRecord2.default, {
            key: i,
            size: 'small',
            className: className,
            style: i === props.active ? activeStyle : style,
            onClick: function onClick() {
                props.press(i);
            }
        });

        indicators.push(item);
    };

    for (var i = 0; i < props.length; i++) {
        _loop(i);
    }

    var wrapperStyle = props.indicatorContainerProps !== undefined ? props.indicatorContainerProps.style : undefined;
    var wrapperClassName = props.indicatorContainerProps !== undefined ? props.indicatorContainerProps.className : "";

    return _react2.default.createElement(
        'div',
        { className: classes.indicators + ' ' + wrapperClassName, style: wrapperStyle },
        indicators
    );
}

exports.default = (0, _styles.withStyles)(styles)(Carousel);