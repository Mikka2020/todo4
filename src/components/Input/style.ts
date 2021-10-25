import { CSSObject } from "@emotion/react";

const container: CSSObject = {
  width: '80%',
  position: 'absolute',
  bottom: '5%',
  border: 'solid 1px #fff',
  borderRadius: '5px',
  left:'10%',
  justifyContent:'space-between',
};

const inputBox: CSSObject = {
  // border:'solid 1px #fff',
  borderRadius:'5px',
  width:'90%',
  fontSize: '24px',
  lineHeight:'24px',
  marginRight: '0.3rem',
};

const addButton: CSSObject = {
  border:'solid 1px #fff',
  paddingBottom:'3px',
  borderRadius:'50%',
  width:'24px',
  height:'24px',
  textAlign:'center'
};

export { container, addButton, inputBox };