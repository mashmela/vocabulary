import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  fontSize: "16px",
  minWidth: "500px",
  maxWidth: "1000px",
  width: "100vw",
  fontFamily: "Inter",
});

export const translate = style({
  display: "flex",
  gap: "20px",
  padding: "40px 0px",
  justifyContent: "space-between",
});

export const inputWords = style({
  border: "none",
  borderBottom: "1px solid black",
  fontSize: "24px",
  outline: "0 !important",
});

export const buttonAdd = style({
  border: "none",
  fontSize: "24px",
  width: "200px",
  height: "50px",
  color: "grey",
  borderRadius: "30px",
  cursor: "pointer",
  transition: "0.5s",
  ":hover": {
    color: "white",
    background: "black",
  },
});

export const vocabularyWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export const vocabulary = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const tegs = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const wrapperWords = style({
  width: "35%",
  display: "flex",
});

export const word = style({
  display: "flex",
  fontSize: "24px",
  padding: "4px 20px",
  background: "#F0F0F0",
  borderRadius: "30px",
  marginRight: "auto",
});

export const wrapperDelete = style({
  width: "200px",
});

export const imageDelete = style({
  marginLeft: "auto",
  width: "16px",
  height: "16px",
  opacity: "0.5",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  transition: "0.2s",
  ":hover": {
    opacity: "4",
  },
});
