export default state => {
  return {
    color: state.color.textColor,
    currentIndex: state.typedSection.index,
  };
};
