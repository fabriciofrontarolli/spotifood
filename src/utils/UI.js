/**
 * When bound to a component and invoked on input changes, set the field value to the state of the component
 * @param {String} field The property name to be set in the state of the component
 */
function handleStateChange(field) {
  const _this = this;
  return function (evt) {
    _this.setState({ [field]: evt.target.value });
  };
}

export {
    handleStateChange
};
