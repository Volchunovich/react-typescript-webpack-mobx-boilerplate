const PrimaryStyled = `
  // Primary styles

  background: linear-gradient(to bottom,#9239d1 50%,#8239d1 50%);
  border-bottom: 8px solid #6b278e
`;

const LightStyled = `
  // Light styles

  background: linear-gradient(to bottom,#a4d4ff 50%,#91c6f5 50%);
  border-bottom: 8px solid #4e0a71;
`;

const DarkStyled = `
  // Dark styles

  background: linear-gradient(to bottom, #d1394e 50%, #cd2f46 50%);
  border-bottom: 8px solid #832154;
  
  &:hover {
    background: linear-gradient(to bottom,#5c40ab 50%,#4d3690 50%);
    border-bottom: 8px solid #290f94;
    opacity: .9;
    color: #ff0000;
    font-weight: 500;
    font-size: 100px;
    padding: 0 0 30px 0;
    height: 95px;
    line-height: 0;
  }
`;

const Styles = {
  PrimaryStyled,
  LightStyled,
  DarkStyled,
};

export default Styles;
